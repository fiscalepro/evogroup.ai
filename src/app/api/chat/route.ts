import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { createHash } from 'crypto';

// Lazy initialization of OpenClaw client (OpenAI-compatible API)
let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    const token = process.env.OPENCLAW_GATEWAY_TOKEN;
    if (!token) {
      throw new Error('OPENCLAW_GATEWAY_TOKEN is not configured');
    }
    client = new OpenAI({
      apiKey: token,
      baseURL: process.env.OPENCLAW_API_URL || 'https://platform2.evogroup.ai/v1',
      timeout: 60000,
      maxRetries: 2,
    });
  }
  return client;
}

// Allowed origins for CSRF protection (configurable via ALLOWED_ORIGINS env var)
const DEFAULT_ORIGINS = 'https://evogroup.ai,https://www.evogroup.ai';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || DEFAULT_ORIGINS)
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // In production, require valid origin
  if (process.env.NODE_ENV === 'production') {
    if (origin) {
      return ALLOWED_ORIGINS.some(allowed => origin === allowed);
    }
    if (referer) {
      return ALLOWED_ORIGINS.some(allowed => referer.startsWith(allowed));
    }
    return false; // No origin/referer in production = blocked
  }

  return true; // Allow all in development
}

// --- Cloudflare Turnstile verification ---
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Graceful fallback: skip if not configured (dev mode)

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip,
      }),
    });
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

// Global daily token budget protection
const globalUsage = { tokens: 0, date: '' };
const MAX_DAILY_TOKENS = 2_000_000; // 2M tokens per day max

function checkGlobalBudget(tokensUsed: number): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (globalUsage.date !== today) {
    globalUsage.tokens = 0;
    globalUsage.date = today;
  }
  globalUsage.tokens += tokensUsed;
  return globalUsage.tokens <= MAX_DAILY_TOKENS;
}

function isGlobalBudgetExceeded(): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (globalUsage.date !== today) return false;
  return globalUsage.tokens >= MAX_DAILY_TOKENS;
}

// Rate limiting per IP — stricter limits + periodic cleanup
const chatRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const CHAT_RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_CHAT_REQUESTS = 3; // 3 messages per minute

// Daily per-IP message counter
const dailyMessageMap = new Map<string, { count: number; date: string }>();
const MAX_DAILY_MESSAGES_PER_IP = 50;

// Cleanup old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  const today = new Date().toISOString().slice(0, 10);

  for (const [key, value] of chatRateLimitMap.entries()) {
    if (now - value.timestamp > CHAT_RATE_LIMIT_WINDOW * 2) {
      chatRateLimitMap.delete(key);
    }
  }

  for (const [key, value] of dailyMessageMap.entries()) {
    if (value.date !== today) {
      dailyMessageMap.delete(key);
    }
  }
}, 600_000);

function checkChatRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = chatRateLimitMap.get(ip);

  if (!record || now - record.timestamp > CHAT_RATE_LIMIT_WINDOW) {
    chatRateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_CHAT_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

function checkDailyLimit(ip: string): boolean {
  const today = new Date().toISOString().slice(0, 10);
  const record = dailyMessageMap.get(ip);

  if (!record || record.date !== today) {
    dailyMessageMap.set(ip, { count: 1, date: today });
    return true;
  }

  if (record.count >= MAX_DAILY_MESSAGES_PER_IP) {
    return false;
  }

  record.count++;
  return true;
}

// Input validation — trim length, strip control chars
function sanitizeInput(text: string): string {
  if (typeof text !== 'string') return '';
  return text
    .slice(0, 1000) // Max 1000 chars per message (reduced from 2000 to limit token usage)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Strip control characters
    .trim();
}

// Agent ID for the OpenClaw demo bot
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'demo_bot';

export async function POST(req: NextRequest) {
  try {
    // CSRF: check origin/referer
    if (!isAllowedOrigin(req)) {
      return NextResponse.json(
        { error: 'Forbidden', userMessage: 'Запрос отклонён.' },
        { status: 403 }
      );
    }

    // Get client IP
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    // Verify Turnstile token
    const body = await req.json();
    const { messages, turnstileToken } = body;

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!turnstileToken || typeof turnstileToken !== 'string') {
        return NextResponse.json(
          { error: 'Turnstile token required', userMessage: 'Проверка безопасности не пройдена. Обновите страницу.' },
          { status: 403 }
        );
      }
      const turnstileValid = await verifyTurnstile(turnstileToken, ip);
      if (!turnstileValid) {
        return NextResponse.json(
          { error: 'Turnstile verification failed', userMessage: 'Проверка безопасности не пройдена. Попробуйте снова.' },
          { status: 403 }
        );
      }
    }

    // Check global daily budget
    if (isGlobalBudgetExceeded()) {
      return NextResponse.json(
        {
          error: 'Service temporarily unavailable',
          userMessage: 'Сервис временно недоступен. Попробуйте завтра или напишите нам напрямую.'
        },
        { status: 503 }
      );
    }

    // Check per-minute rate limit
    if (!checkChatRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          userMessage: 'Слишком много сообщений. Подождите минуту и попробуйте снова.'
        },
        { status: 429 }
      );
    }

    // Check daily per-IP limit
    if (!checkDailyLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Daily limit exceeded',
          userMessage: 'Достигнут дневной лимит сообщений. Попробуйте завтра или напишите нам напрямую.'
        },
        { status: 429 }
      );
    }

    // Validate Content-Type
    const contentType = req.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Invalid Content-Type' },
        { status: 400 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Validate and sanitize messages — limit to 10 (was 20)
    if (messages.length > 10) {
      return NextResponse.json(
        { error: 'Too many messages in conversation' },
        { status: 400 }
      );
    }

    // Sanitize all message contents
    const sanitizedMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'user' || m.role === 'assistant' ? m.role : 'user',
      content: sanitizeInput(m.content || '')
    })).filter((m: { content: string }) => m.content.length > 0);

    // Generate anonymized user ID (hashed IP, not raw)
    const salt = process.env.OPENCLAW_GATEWAY_TOKEN || 'default-salt';
    const userId = createHash('sha256').update(`${ip}:${salt}`).digest('hex').slice(0, 16);

    // Call OpenClaw API (system prompt is configured in the agent's CLAUDE.md)
    const completion = await getClient().chat.completions.create({
      model: `openclaw:${OPENCLAW_AGENT_ID}`,
      messages: sanitizedMessages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      user: userId,
      stream: false,
    });

    const assistantMessage = completion.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from AI');
    }

    // Track token usage against daily budget
    const totalTokens = completion.usage?.total_tokens || 0;
    checkGlobalBudget(totalTokens);

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error: unknown) {
    console.error('Chat API Error:', error);

    // User-friendly error messages without leaking internals
    let userMessage = 'Упс, что-то пошло не так. Попробуйте еще раз через пару секунд.';

    if (error instanceof Error) {
      const httpError = error as Error & { status?: number; code?: string };

      if (httpError.status === 502 || httpError.status === 503) {
        userMessage = 'Сервер AI временно недоступен. Попробуйте через минуту или напишите нам напрямую.';
      } else if (httpError.status === 429) {
        userMessage = 'Слишком много запросов. Подождите несколько секунд и попробуйте снова.';
      } else if (httpError.code === 'ECONNABORTED' || httpError.code === 'ETIMEDOUT') {
        userMessage = 'Запрос занял слишком много времени. Попробуйте задать вопрос покороче.';
      }
    }

    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        userMessage,
      },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'EvoGroup AI Chat (OpenClaw)',
    version: '1.1.0'
  });
}

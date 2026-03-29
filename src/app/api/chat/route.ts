import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

// OpenClaw webhook endpoint
const OPENCLAW_WEBHOOK_URL = process.env.OPENCLAW_API_URL || 'https://platform2.evogroup.ai/plugins/webhook/chat';
const OPENCLAW_GATEWAY_TOKEN = process.env.OPENCLAW_GATEWAY_TOKEN || '';
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'demo_bot';

// Allowed origins for CSRF protection
const DEFAULT_ORIGINS = 'https://evogroup.ai,https://www.evogroup.ai';
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || DEFAULT_ORIGINS)
  .split(',')
  .map(o => o.trim())
  .filter(Boolean);

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  if (process.env.NODE_ENV === 'production') {
    if (origin) {
      return ALLOWED_ORIGINS.some(allowed => origin === allowed);
    }
    if (referer) {
      return ALLOWED_ORIGINS.some(allowed => referer.startsWith(allowed));
    }
    return false;
  }

  return true;
}

// --- Cloudflare Turnstile verification ---
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

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
const globalUsage = { count: 0, date: '' };
const MAX_DAILY_MESSAGES = 5000;

function checkGlobalBudget(): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (globalUsage.date !== today) {
    globalUsage.count = 0;
    globalUsage.date = today;
  }
  globalUsage.count++;
  return globalUsage.count <= MAX_DAILY_MESSAGES;
}

function isGlobalBudgetExceeded(): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (globalUsage.date !== today) return false;
  return globalUsage.count >= MAX_DAILY_MESSAGES;
}

// Rate limiting per IP
const chatRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const CHAT_RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_CHAT_REQUESTS = 3;

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

// Input validation
function sanitizeInput(text: string): string {
  if (typeof text !== 'string') return '';
  return text
    .slice(0, 1000)
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '')
    .trim();
}

// Session key storage per user (hashed IP -> session_key)
const sessionMap = new Map<string, string>();

export async function POST(req: NextRequest) {
  try {
    // CSRF check
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

    if (messages.length > 10) {
      return NextResponse.json(
        { error: 'Too many messages in conversation' },
        { status: 400 }
      );
    }

    // Get the last user message
    const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
    if (!lastUserMessage) {
      return NextResponse.json(
        { error: 'No user message found' },
        { status: 400 }
      );
    }

    const sanitizedMessage = sanitizeInput(lastUserMessage.content || '');
    if (!sanitizedMessage) {
      return NextResponse.json(
        { error: 'Empty message' },
        { status: 400 }
      );
    }

    // Generate user ID for session tracking
    const salt = OPENCLAW_GATEWAY_TOKEN || 'default-salt';
    const userId = createHash('sha256').update(`${ip}:${salt}`).digest('hex').slice(0, 16);

    // Build request body for OpenClaw webhook
    const webhookBody: Record<string, string> = {
      agent_id: OPENCLAW_AGENT_ID,
      message: sanitizedMessage,
    };

    // Reuse session key if available
    const existingSession = sessionMap.get(userId);
    if (existingSession) {
      webhookBody.session_key = existingSession;
    }

    // Call OpenClaw webhook
    const response = await fetch(OPENCLAW_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENCLAW_GATEWAY_TOKEN}`,
      },
      body: JSON.stringify(webhookBody),
      signal: AbortSignal.timeout(60000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error(`OpenClaw API Error: ${response.status} ${errorText}`);
      throw new Error(`OpenClaw API returned ${response.status}`);
    }

    const data = await response.json();

    const assistantMessage = data.response;
    if (!assistantMessage) {
      throw new Error('No response from AI');
    }

    // Store session key for conversation continuity
    if (data.session_key) {
      sessionMap.set(userId, data.session_key);
    }

    // Track usage
    checkGlobalBudget();

    return NextResponse.json({
      message: assistantMessage,
    });
  } catch (error: unknown) {
    console.error('Chat API Error:', error);

    let userMessage = 'Упс, что-то пошло не так. Попробуйте еще раз через пару секунд.';

    if (error instanceof Error) {
      if (error.message.includes('502') || error.message.includes('503')) {
        userMessage = 'Сервер AI временно недоступен. Попробуйте через минуту или напишите нам напрямую.';
      } else if (error.message.includes('429')) {
        userMessage = 'Слишком много запросов. Подождите несколько секунд и попробуйте снова.';
      } else if (error.name === 'TimeoutError' || error.message.includes('timeout')) {
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
    version: '1.2.0'
  });
}

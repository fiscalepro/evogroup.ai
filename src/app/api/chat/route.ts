import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

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

// Simple rate limiting per IP
const chatRateLimitMap = new Map<string, { count: number; timestamp: number }>();
const CHAT_RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_CHAT_REQUESTS = 10; // 10 messages per minute

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

// Input validation
function sanitizeInput(text: string): string {
  if (typeof text !== 'string') return '';
  // Remove potentially harmful characters but keep normal text
  return text
    .slice(0, 2000) // Max 2000 chars
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .trim();
}

// Agent ID for the OpenClaw demo bot
const OPENCLAW_AGENT_ID = process.env.OPENCLAW_AGENT_ID || 'demo_bot';

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';

    // Check rate limit
    if (!checkChatRateLimit(ip)) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded',
          userMessage: 'Слишком много сообщений. Подождите минуту и попробуйте снова.'
        },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Validate and sanitize messages
    if (messages.length > 20) {
      return NextResponse.json(
        { error: 'Too many messages in conversation' },
        { status: 400 }
      );
    }

    // Sanitize all message contents
    const sanitizedMessages = messages.map(m => ({
      role: m.role === 'user' || m.role === 'assistant' ? m.role : 'user',
      content: sanitizeInput(m.content || '')
    })).filter(m => m.content.length > 0);

    // Generate stable user ID for session persistence
    const userId = `web_${ip.replace(/[^a-zA-Z0-9]/g, '_')}`;

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

    return NextResponse.json({
      message: assistantMessage,
      usage: completion.usage,
    });
  } catch (error: unknown) {
    console.error('Chat API Error:', error);

    // Определяем тип ошибки для пользователя
    let userMessage = 'Упс, что-то пошло не так. Попробуйте еще раз через пару секунд.';
    let errorDetails = 'Unknown error';
    let errorStatus: number | undefined;

    if (error instanceof Error) {
      errorDetails = error.message;
      const httpError = error as Error & { status?: number; code?: string };

      if (httpError.status === 502 || httpError.status === 503) {
        userMessage = 'Сервер AI временно недоступен. Попробуйте через минуту или напишите нам напрямую.';
      } else if (httpError.status === 429) {
        userMessage = 'Слишком много запросов. Подождите несколько секунд и попробуйте снова.';
      } else if (httpError.code === 'ECONNABORTED' || httpError.code === 'ETIMEDOUT') {
        userMessage = 'Запрос занял слишком много времени. Попробуйте задать вопрос покороче.';
      }
      errorStatus = httpError.status;
    }

    return NextResponse.json(
      {
        error: 'Failed to process chat request',
        userMessage,
        details: errorDetails,
        status: errorStatus
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
    version: '1.0.0'
  });
}

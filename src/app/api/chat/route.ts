import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Lazy initialization of DeepSeek client
let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    if (!process.env.DEEPSEEK_API_KEY) {
      throw new Error('DEEPSEEK_API_KEY is not configured');
    }
    client = new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: 'https://api.deepseek.com',
      timeout: 30000,
      maxRetries: 3,
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

// System prompt for EvoGroup AI assistant
const SYSTEM_PROMPT = `Ты — AI-ассистент компании EvoGroup.ai. Отвечаешь клиентам в WhatsApp.

КОМПАНИЯ:
EvoGroup.ai создаёт AI чат-ботов для автоматизации бизнеса (WhatsApp, Telegram, Instagram).
Ниши: магазины, автосервисы, детейлинг, строительство, услуги.

ЦЕНЫ:
- Пробный месяц — бесплатно
- Внедрение — от 15,000 сом
- Подписка — от 8,000 сом/мес
Точная цена зависит от задач. Предложи бесплатную консультацию для расчёта.

СРОКИ: 3-14 дней в зависимости от сложности.

КЕЙСЫ:
- Avtoestet.kg (детейлинг): +50% записей
- Home-wise UZ (строительство): +60% лидов
- toot.kg (магазин): +70% продаж

КОНТАКТЫ:
- Instagram: @evogroup.ai
- Сайт: evogroup.ai
- Телефон: +996 552 343 333

ПРАВИЛА ОБЩЕНИЯ:

1. КРАТКОСТЬ. Отвечай 2-4 предложениями. Не пиши стены текста. Не перечисляй всё сразу — давай информацию порциями.

2. ЕСТЕСТВЕННОСТЬ. Пиши как живой человек в мессенджере, не как робот. Без формальных списков и нумерованных меню. Не копируй шаблоны дословно.

3. БЕЗ ЭМОДЗИ. Не используй эмодзи вообще. Пиши чистым текстом.

4. ОДИН ВОПРОС. Задавай только один вопрос за раз. Не засыпай клиента вопросами.

5. СЛУШАЙ КЛИЕНТА. Отвечай на то, что спросили. Не перенаправляй на меню. Не навязывай тему.

6. КВАЛИФИКАЦИЯ. Узнай тип бизнеса и что хотят автоматизировать — но через естественный разговор, не через анкету.

7. МЕНЕДЖЕР. Если клиент просит связать с менеджером — скажи что передашь запрос и менеджер свяжется. Попроси оставить имя и удобное время.

8. ВОЗРАЖЕНИЯ. Если сомневается — упомяни бесплатный пробный месяц. Не давай длинных списков гарантий.`;

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
    const { messages, userContext } = body;

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

    // Add user context to system prompt if provided
    let enhancedSystemPrompt = SYSTEM_PROMPT;
    if (userContext) {
      enhancedSystemPrompt += `\n\nКОНТЕКСТ ПОЛЬЗОВАТЕЛЯ:\n${JSON.stringify(userContext, null, 2)}`;
    }

    // Prepare messages for API
    const apiMessages = [
      { role: 'system', content: enhancedSystemPrompt },
      ...sanitizedMessages,
    ];

    // Call DeepSeek API
    const completion = await getClient().chat.completions.create({
      model: 'deepseek-chat',
      messages: apiMessages as OpenAI.Chat.Completions.ChatCompletionMessageParam[],
      temperature: 0.7, // Баланс между творчеством и точностью
      max_tokens: 500, // Короткие и по делу ответы
      top_p: 0.9,
      frequency_penalty: 0.2,
      presence_penalty: 0.2,
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
    service: 'EvoGroup AI Chat',
    version: '1.0.0'
  });
}

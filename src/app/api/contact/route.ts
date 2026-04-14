import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Rate limiting: хранилище для отслеживания запросов
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 минут
const MAX_REQUESTS = 5 // Максимум 5 запросов за 15 минут

// Zod схема для валидации входных данных
const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, 'Аты талап кылынат')
        .max(100, 'Аты 100 символдон ашпашы керек')
        .regex(/^[a-zA-Zа-яА-ЯёЁүүөөңңҢҢ\s\-']+$/, 'Атта уруксат берилбеген символдор бар'),
    email: z
        .string()
        .email('Туура эмес email дареги')
        .max(254, 'Email өтө узун'),
    company: z
        .string()
        .max(200, 'Компания аталышы 200 символдон ашпашы керек')
        .optional()
        .default(''),
    phone: z
        .string()
        .regex(/^[\d\+\-\s()]*$/, 'Туура эмес телефон форматы')
        .max(20, 'Телефон өтө узун')
        .optional()
        .default(''),
    description: z
        .string()
        .min(10, 'Сүрөттөмө кеминде 10 символ болушу керек')
        .max(5000, 'Сүрөттөмө 5000 символдон ашпашы керек'),
    newsletter: z.boolean().optional().default(false),
})

// Санитизация строки от потенциально опасных символов
function sanitizeString(str: string): string {
    return str
        .replace(/<[^>]*>/g, '') // Удаляем HTML теги
        .replace(/j\s*a\s*v\s*a\s*s\s*c\s*r\s*i\s*p\s*t\s*:/gi, '') // javascript: с любыми пробелами
        .replace(/on\w+\s*=/gi, '') // Удаляем event handlers
        .replace(/data\s*:/gi, '') // data: URI scheme
        .replace(/vbscript\s*:/gi, '') // vbscript: protocol
        .trim()
}

// Проверка rate limit
function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    // Очистка старых записей
    for (const [key, value] of rateLimitMap.entries()) {
        if (now - value.timestamp > RATE_LIMIT_WINDOW) {
            rateLimitMap.delete(key)
        }
    }

    if (!record) {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
        return true
    }

    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
        return true
    }

    if (record.count >= MAX_REQUESTS) {
        return false
    }

    record.count++
    return true
}

// Получение IP адреса клиента
// WARNING: x-forwarded-for can be spoofed by the client. In production,
// use the platform's trusted header instead (e.g., CF-Connecting-IP for Cloudflare).
function getClientIp(request: NextRequest): string {
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')

    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim()
    }

    if (realIp) {
        return realIp
    }

    return 'unknown'
}

export async function POST(request: NextRequest) {
    try {
        // Проверяем rate limit
        const clientIp = getClientIp(request)
        if (!checkRateLimit(clientIp)) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Өтө көп суроо. Сураныч, 15 мүнөттөн кийин кайталап көрүңүз.'
                },
                { status: 429 }
            )
        }

        // Проверяем Content-Type
        const contentType = request.headers.get('content-type')
        if (!contentType?.includes('application/json')) {
            return NextResponse.json(
                { success: false, error: 'Туура эмес Content-Type' },
                { status: 400 }
            )
        }

        // Парсим тело запроса
        let body
        try {
            body = await request.json()
        } catch {
            return NextResponse.json(
                { success: false, error: 'Туура эмес JSON форматы' },
                { status: 400 }
            )
        }

        // Валидация данных с Zod
        const validationResult = contactFormSchema.safeParse(body)

        if (!validationResult.success) {
            const errors = validationResult.error.errors.map(e => e.message)
            return NextResponse.json(
                { success: false, error: errors.join(', ') },
                { status: 400 }
            )
        }

        const data = validationResult.data

        // Санитизация всех строковых полей
        const sanitizedData = {
            name: sanitizeString(data.name),
            email: sanitizeString(data.email),
            company: sanitizeString(data.company),
            phone: sanitizeString(data.phone),
            description: sanitizeString(data.description),
            newsletter: data.newsletter,
        }

        // Проверяем наличие API ключа
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY
        if (!accessKey) {
            console.error('WEB3FORMS_ACCESS_KEY is not configured')
            return NextResponse.json(
                { success: false, error: 'Сервер туура конфигурацияланган эмес' },
                { status: 500 }
            )
        }

        // Отправляем на Web3Forms
        const payload = {
            access_key: accessKey,
            subject: 'Жаңы өтүнүч Evolution Group сайтынан',
            from_name: 'Evolution Group',
            ...sanitizedData,
        }

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload),
        })

        const result = await response.json()

        if (result.success) {
            return NextResponse.json(
                { success: true, message: 'Өтүнүч ийгиликтүү жөнөтүлдү' },
                { status: 200 }
            )
        } else {
            return NextResponse.json(
                { success: false, error: 'Форманы жөнөтүүдө ката кетти' },
                { status: 500 }
            )
        }

    } catch (error) {
        // Логируем ошибку без раскрытия деталей клиенту
        console.error('Contact form error:', error instanceof Error ? error.message : 'Unknown error')

        return NextResponse.json(
            { success: false, error: 'Ички сервер катасы' },
            { status: 500 }
        )
    }
}

// Запрещаем другие методы
export async function GET() {
    return NextResponse.json(
        { error: 'Метод уруксат берилген эмес' },
        { status: 405 }
    )
}

export async function PUT() {
    return NextResponse.json(
        { error: 'Метод уруксат берилген эмес' },
        { status: 405 }
    )
}

export async function DELETE() {
    return NextResponse.json(
        { error: 'Метод уруксат берилген эмес' },
        { status: 405 }
    )
}

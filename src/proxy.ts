import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple in-memory rate limiting (for production use Redis)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()

// Rate limit config
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100 // 100 requests per minute for general
const MAX_API_REQUESTS_PER_WINDOW = 20 // 20 API requests per minute

// Known bot user agents to block
const BLOCKED_BOTS = [
    'AhrefsBot',
    'MJ12bot',
    'SemrushBot',
    'DotBot',
    'BLEXBot',
    'Sogou',
    'YandexBot',
    'DataForSeoBot',
    'PetalBot',
]

// Check if request is from a blocked bot
function isBlockedBot(userAgent: string | null): boolean {
    if (!userAgent) return false
    return BLOCKED_BOTS.some(bot => userAgent.includes(bot))
}

// Get client IP
function getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')

    if (forwarded) {
        return forwarded.split(',')[0].trim()
    }
    if (realIP) {
        return realIP
    }
    return 'unknown'
}

// Rate limiting check
function checkRateLimit(ip: string, isApi: boolean): boolean {
    const now = Date.now()
    const key = `${ip}:${isApi ? 'api' : 'general'}`
    const limit = isApi ? MAX_API_REQUESTS_PER_WINDOW : MAX_REQUESTS_PER_WINDOW

    const record = rateLimitMap.get(key)

    if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(key, { count: 1, timestamp: now })
        return true
    }

    if (record.count >= limit) {
        return false
    }

    record.count++
    return true
}

// Clean up old rate limit records periodically
setInterval(() => {
    const now = Date.now()
    rateLimitMap.forEach((value, key) => {
        if (now - value.timestamp > RATE_LIMIT_WINDOW * 2) {
            rateLimitMap.delete(key)
        }
    })
}, 60000) // Clean every minute

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    const userAgent = request.headers.get('user-agent')
    const ip = getClientIP(request)

    // Block known bad bots
    if (isBlockedBot(userAgent)) {
        return new NextResponse('Forbidden', { status: 403 })
    }

    // Block requests without user agent (likely bots)
    if (!userAgent && pathname.startsWith('/api/')) {
        return new NextResponse('Forbidden', { status: 403 })
    }

    // Rate limiting for API routes
    if (pathname.startsWith('/api/')) {
        if (!checkRateLimit(ip, true)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            )
        }
    }

    // General rate limiting
    if (!checkRateLimit(ip, false)) {
        return new NextResponse('Too Many Requests', { status: 429 })
    }

    // Block suspicious paths (common attack vectors)
    const suspiciousPaths = [
        '/wp-admin',
        '/wp-login',
        '/wp-content',
        '/.env',
        '/config',
        '/admin',
        '/phpmyadmin',
        '/.git',
        '/xmlrpc.php',
        '/wp-json',
    ]

    if (suspiciousPaths.some(path => pathname.toLowerCase().startsWith(path))) {
        return new NextResponse('Not Found', { status: 404 })
    }

    // Block file extensions that shouldn't be accessed
    const blockedExtensions = ['.php', '.asp', '.aspx', '.jsp', '.cgi']
    if (blockedExtensions.some(ext => pathname.toLowerCase().endsWith(ext))) {
        return new NextResponse('Not Found', { status: 404 })
    }

    // Add security headers to response
    const response = NextResponse.next()

    // Prevent caching of sensitive pages
    if (pathname.startsWith('/api/')) {
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate')
        response.headers.set('Pragma', 'no-cache')
    }

    return response
}

// Configure which paths the middleware runs on
export const config = {
    matcher: [
        // Match all paths except static files
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|MP4)).*)',
    ],
}

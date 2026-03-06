import type { NextConfig } from 'next'

const securityHeaders = [
    // Защита от XSS атак
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    // Запрет iframe embedding (clickjacking protection)
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    // Запрет MIME sniffing
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    // Referrer policy
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin'
    },
    // DNS Prefetch Control
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    // Permissions policy
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    },
    // Content Security Policy
    {
        key: 'Content-Security-Policy',
        value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://api.web3forms.com https://challenges.cloudflare.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "font-src 'self' https://fonts.gstatic.com data:",
            "img-src 'self' data: blob: https:",
            "media-src 'self' blob:",
            "connect-src 'self' https://api.web3forms.com https://platform2.evogroup.ai https://wa.me https://challenges.cloudflare.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self' https://api.web3forms.com"
        ].join('; ')
    },
    // Strict Transport Security (HTTPS only)
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
    }
]

const nextConfig: NextConfig = {
    // Оптимизация компиляции и минификации
    swcMinify: true,

    // Оптимизация production build
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // Оптимизация изображений
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },

    // Экспериментальные функции для производительности
    experimental: {
        optimizePackageImports: ['@nextui-org/react', 'framer-motion', 'lucide-react'],
    },

    // Security headers
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ]
    },

    // Настройка webpack для оптимизации
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization = {
                ...config.optimization,
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        default: false,
                        vendors: false,
                        framework: {
                            name: 'framework',
                            chunks: 'all',
                            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        lib: {
                            test: /[\\/]node_modules[\\/]/,
                            name(module: { context: string }) {
                                const packageName = module.context.match(
                                    /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                                )?.[1]
                                return `lib.${packageName?.replace('@', '')}`
                            },
                            priority: 30,
                            minChunks: 1,
                            reuseExistingChunk: true,
                        },
                    },
                },
            }
        }
        return config
    },
}

export default nextConfig

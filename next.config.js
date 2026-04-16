/** @type {import('next').NextConfig} */
const nextConfig = {
    // Security
    poweredByHeader: false,

    // Compress responses
    compress: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 31536000, // 1 year cache
    },

    // Optimize production builds
    experimental: {
        optimizePackageImports: ['framer-motion', '@nextui-org/react', 'clsx'],
    },

    // Headers for caching & security
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                ],
            },
            {
                source: '/(.*)\\.(js|css|woff2|svg|png|jpg|webp|avif)',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
        ]
    },
}

module.exports = nextConfig

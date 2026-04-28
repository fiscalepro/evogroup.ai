import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import SplashScreen from '@/components/ui/SplashScreen'
import LazyChatBot from '@/components/LazyChatBot'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-inter',
})

const manrope = Manrope({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-manrope',
})

// Метаданные для каждого языка
const metadataByLocale = {
    ru: {
        title: 'Evolution Group - AI Solutions for Business',
        description: 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана',
        applicationName: 'Evolution Group',
        authors: [{ name: 'Evolution Group' }],
        keywords: ['AI', 'Artificial Intelligence', 'Evolution Group', 'Kyrgyzstan', 'IT Solutions'],
        openGraph: {
            title: 'Evolution Group - AI Solutions for Business',
            description: 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана',
            type: 'website',
            locale: 'ru_RU',
            siteName: 'Evolution Group',
            url: 'https://evogroup.ai'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Evolution Group - AI Solutions for Business',
            description: 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана',
            site: '@evolutiongroup',
            creator: '@evolutiongroup'
        },
        other: {
            'telegram:title': 'Evolution Group - AI Solutions for Business',
            'telegram:description': 'Искусственный интеллект для банков, нефтегазовых компаний и государственных организаций Кыргызстана'
        }
    },
    en: {
        title: 'Evolution Group - AI Solutions for Business',
        description: 'Artificial intelligence for banks, oil & gas companies and government organizations in Kyrgyzstan',
        applicationName: 'Evolution Group',
        authors: [{ name: 'Evolution Group' }],
        keywords: ['AI', 'Artificial Intelligence', 'Evolution Group', 'Kyrgyzstan', 'IT Solutions'],
        openGraph: {
            title: 'Evolution Group - AI Solutions for Business',
            description: 'Artificial intelligence for banks, oil & gas companies and government organizations in Kyrgyzstan',
            type: 'website',
            locale: 'en_US',
            siteName: 'Evolution Group',
            url: 'https://evogroup.ai'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Evolution Group - AI Solutions for Business',
            description: 'Artificial intelligence for banks, oil & gas companies and government organizations in Kyrgyzstan',
            site: '@evolutiongroup',
            creator: '@evolutiongroup'
        },
        other: {
            'telegram:title': 'Evolution Group - AI Solutions for Business',
            'telegram:description': 'Artificial intelligence for banks, oil & gas companies and government organizations in Kyrgyzstan'
        }
    },
    ky: {
        title: 'Evolution Group - Бизнес үчүн AI чечимдери',
        description: 'Кыргызстандын банктары, мунай-газ компаниялары жана мамлекеттик уюмдары үчүн жасалма акыл',
        applicationName: 'Evolution Group',
        authors: [{ name: 'Evolution Group' }],
        keywords: ['AI', 'Artificial Intelligence', 'Evolution Group', 'Кыргызстан', 'IT Solutions'],
        openGraph: {
            title: 'Evolution Group - Бизнес үчүн AI чечимдери',
            description: 'Кыргызстандын банктары, мунай-газ компаниялары жана мамлекеттик уюмдары үчүн жасалма акыл',
            type: 'website',
            locale: 'ky_KG',
            siteName: 'Evolution Group',
            url: 'https://evogroup.ai'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Evolution Group - Бизнес үчүн AI чечимдери',
            description: 'Кыргызстандын банктары, мунай-газ компаниялары жана мамлекеттик уюмдары үчүн жасалма акыл',
            site: '@evolutiongroup',
            creator: '@evolutiongroup'
        },
        other: {
            'telegram:title': 'Evolution Group - Бизнес үчүн AI чечимдери',
            'telegram:description': 'Кыргызстандын банктары, мунай-газ компаниялары жана мамлекеттик уюмдары үчүн жасалма акыл'
        }
    }
}

export const metadata: Metadata = {
    ...metadataByLocale.ru,
    metadataBase: new URL('https://evogroup.ai'),
    // hreflang — указывает поисковикам какие языковые версии сайта доступны (RU/EN/KY)
    // Улучшает SEO для мультиязычного сайта, Google показывает нужную версию в выдаче
    alternates: {
        canonical: 'https://evogroup.ai',
        languages: {
            'ru': 'https://evogroup.ai',
            'en': 'https://evogroup.ai',
            'ky': 'https://evogroup.ai',
        },
    },
    // Google Search Console verification — подтверждает владение сайтом для индексации
    // Значение берётся из env переменной NEXT_PUBLIC_GOOGLE_VERIFICATION
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ? {
        verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
    } : {}),
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" suppressHydrationWarning>
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/favicon.svg" />
            <meta name="theme-color" content="#FAFAFA" />
            <script dangerouslySetInnerHTML={{ __html: `
                (function(){
                    try {
                        var t = localStorage.getItem('theme');
                        if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark');
                        }
                    } catch(e) {}
                })();
            `}} />
        </head>
        <body suppressHydrationWarning className={`${inter.variable} ${manrope.variable} ${inter.className} antialiased bg-[#FAFAFA] dark:bg-[#0A0E1A] text-gray-900 dark:text-[#F0F0F5] transition-colors duration-300`}>
        <Providers>
            <SplashScreen />
            {children}
            <LazyChatBot />
        </Providers>
        </body>
        </html>
    )
}
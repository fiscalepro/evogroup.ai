import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import ChatBot from '@/components/ChatBot'

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-inter',
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
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru" className="dark">
        <head>
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/favicon.svg" />
            <meta name="theme-color" content="#0a0a0a" />
        </head>
        <body className={`${inter.className} antialiased dark bg-[#0A0E1A] text-[#F0F0F5]`}>
        <Providers>
            {children}
            <ChatBot />
        </Providers>
        </body>
        </html>
    )
}
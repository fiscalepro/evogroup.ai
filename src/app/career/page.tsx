'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { useTranslation } from '@/components/providers/I18nProvider'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

function getContent(locale: string) {
    const content = {
        ru: {
            badge: 'Скоро',
            title: 'Карьера в Evolution Group',
            subtitle: 'Страница с открытыми вакансиями готовится. Если хотите присоединиться к команде уже сейчас — напишите нам.',
            ctaButton: 'Написать нам',
        },
        en: {
            badge: 'Coming soon',
            title: 'Careers at Evolution Group',
            subtitle: 'Our open positions page is coming soon. If you want to join the team now, get in touch.',
            ctaButton: 'Get in touch',
        },
        ky: {
            badge: 'Жакында',
            title: 'Evolution Group командасында иштөө',
            subtitle: 'Ачык вакансиялардын барагы даярдалып жатат. Командага азыр кошулгуңуз келсе, бизге кат жазыңыз.',
            ctaButton: 'Байланышуу',
        },
    }
    return content[locale as keyof typeof content] || content.ru
}

export default function CareerPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground />
            <ModernHeader />

            <section className="relative pt-32 pb-32 min-h-[70vh] flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-3xl mx-auto px-6 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs text-gray-500 dark:text-white/55 uppercase tracking-widest font-medium">
                            {content.badge}
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-5">
                        {content.title}
                    </h1>
                    <p className="text-base lg:text-lg text-gray-600 dark:text-[#F0F0F5]/50 max-w-xl mx-auto leading-relaxed mb-8">
                        {content.subtitle}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-[#0A0E1A] px-6 py-3 rounded-xl text-sm font-semibold no-underline hover:bg-black dark:hover:bg-white transition-colors"
                    >
                        {content.ctaButton} <ArrowIcon />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}

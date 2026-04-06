'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@nextui-org/react'
import { useTranslation } from '@/components/providers/I18nProvider'

const WhatsAppHeroSection: React.FC = () => {
    const { locale } = useTranslation()
    const [currentWord, setCurrentWord] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord(prev => (prev + 1) % 3)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'WhatsApp Business Platform',
                title: 'Your EvoAI CRM',
                titleHighlight: ['under control.', 'is smart.', 'is fast.'],
                subtitle: 'See ALL your company\'s conversations. AI responds for you. Clients don\'t leave with managers.',
                ctaPrimary: 'Try 30 days free',
                ctaSecondary: 'Try demo',
                stats: [
                    { value: '99.5%', label: 'Uptime' },
                    { value: '≤2 sec', label: 'Response time' },
                    { value: '30 days', label: 'Free trial' },
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'WhatsApp Business Platform',
                title: 'Сиздин EvoAI CRM',
                titleHighlight: ['контролдо.', 'акылдуу.', 'тез.'],
                subtitle: 'Компаниянын БАРДЫК жазышмаларын көрүңүз. AI сиз үчүн жооп берет. Кардарлар менеджерлер менен кетпейт.',
                ctaPrimary: '30 күн акысыз сыноо',
                ctaSecondary: 'Демо сыноо',
                stats: [
                    { value: '99.5%', label: 'Иштөө убактысы' },
                    { value: '≤2 сек', label: 'Жооп убактысы' },
                    { value: '30 күн', label: 'Акысыз сыноо' },
                ]
            }
        } else {
            return {
                badge: 'WhatsApp Business Platform',
                title: 'Ваш EvoAI CRM',
                titleHighlight: ['под контролем.', 'умный.', 'быстрый.'],
                subtitle: 'Видите ВСЕ переписки компании. AI отвечает за вас. Клиенты не уходят с менеджерами.',
                ctaPrimary: 'Попробовать 30 дней бесплатно',
                ctaSecondary: 'Попробовать демо',
                stats: [
                    { value: '99.5%', label: 'Доступность' },
                    { value: '≤2 сек', label: 'Время отклика' },
                    { value: '30 дней', label: 'Бесплатно' },
                ]
            }
        }
    }

    const translations = getTranslations()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
                {/* Pre-title badge */}
                <div className="mb-8 animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-xl border border-green-500/20 text-sm font-medium text-green-600 dark:text-green-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        {translations.badge}
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
                    <span className="block text-gray-900 dark:text-white mb-2">
                        {translations.title}
                    </span>
                    <span className="block bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent animate-glow pb-2">
                        {translations.titleHighlight[currentWord]}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                    {translations.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-slide-up" style={{animationDelay: '0.4s'}}>
                    <Button
                        size="lg"
                        className="text-base font-semibold px-8 h-14 bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                        radius="full"
                        onPress={() => scrollToSection('whatsapp-contact')}
                    >
                        {translations.ctaPrimary}
                    </Button>
                    <Button
                        size="lg"
                        variant="bordered"
                        className="text-base font-semibold px-8 h-14 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                        radius="full"
                        as="a"
                        href="https://main.evogroup.ai/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {translations.ctaSecondary}
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
                    {translations.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-green-500/30 transition-all duration-500 hover:scale-105"
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-white/60 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-[100px] animate-glow" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] animate-glow" style={{animationDelay: '1.5s'}} />
        </section>
    )
}

export default WhatsAppHeroSection

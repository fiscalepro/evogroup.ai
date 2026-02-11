'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const ModernHero: React.FC = () => {
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
                preTitle: 'Enterprise AI Solutions',
                title: 'The future of business',
                titleHighlight: ['is intelligent.', 'is automated.', 'is here.'],
                subtitle: 'We create AI solutions that transform how leading companies in Kyrgyzstan work. From banks to government—we make the impossible possible.',
                ctaPrimary: 'Get Started',
                ctaSecondary: 'Watch Demo',
                stats: [
                    { value: '$10M+', label: 'Client Savings' },
                    { value: '99.9%', label: 'System Uptime' },
                    { value: '50+', label: 'Projects Delivered' },
                ]
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Корпоративдүү ИИ чечимдери',
                title: 'Бизнестин келечеги',
                titleHighlight: ['акылдуу.', 'автоматташкан.', 'келди.'],
                subtitle: 'Биз Кыргызстандын алдыңкы компанияларынын иш ыкмасын өзгөртүүчү ИИ чечимдерин түзөбүз. Банктардан мамлекетке чейин - мүмкүн эмес нерсени мүмкүн кылабыз.',
                ctaPrimary: 'Баштоо',
                ctaSecondary: 'Демо көрүү',
                stats: [
                    { value: '$10M+', label: 'Кардарлардын үнөмү' },
                    { value: '99.9%', label: 'Системанын иштеши' },
                    { value: '50+', label: 'Аткарылган долбоорлор' },
                ]
            }
        } else {
            return {
                preTitle: 'Корпоративные AI решения',
                title: 'Будущее бизнеса',
                titleHighlight: ['умное.', 'быстрое.', 'уже здесь.'],
                subtitle: 'Мы создаем AI-решения, которые трансформируют способ работы ведущих компаний Кыргызстана. От банков до государства — делаем невозможное возможным.',
                ctaPrimary: 'Начать проект',
                ctaSecondary: 'Смотреть демо',
                stats: [
                    { value: '$10M+', label: 'Экономия клиентов' },
                    { value: '99.9%', label: 'Время работы' },
                    { value: '50+', label: 'Реализованных проектов' },
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
                {/* Pre-title */}
                <div className="mb-8 animate-fade-in">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90">
                        {translations.preTitle}
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up">
                    <span className="block text-white mb-2">
                        {translations.title}
                    </span>
                    <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent animate-glow pb-2">
                        {translations.titleHighlight[currentWord]}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
                    {translations.subtitle}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
                    {translations.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                        >
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/60 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient orbs */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-[100px] animate-glow" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-glow" style={{animationDelay: '1.5s'}} />
        </section>
    )
}

export default ModernHero

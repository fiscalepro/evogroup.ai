'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Team from '@/components/sections/Team'
import TrustSignals from '@/components/sections/TrustSignals'
import Footer from '@/components/sections/Footer'

function TeamContent() {
    const { locale } = useTranslation()

    const getHeaderTranslations = () => {
        if (locale === 'en') {
            return {
                category: 'Team',
                title: 'AI Experts',
                subtitle: 'Professionals with machine learning experience'
            }
        } else if (locale === 'ky') {
            return {
                category: 'Команда',
                title: 'AI боюнча эксперттер',
                subtitle: 'Машиналык окутуу тажрыйбасы бар адистер'
            }
        } else {
            return {
                category: 'Команда',
                title: 'Эксперты в AI',
                subtitle: 'Профессионалы с опытом в машинном обучении'
            }
        }
    }

    const translations = getHeaderTranslations()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
            </div>

            <ModernHeader />

            {/* Page header with visual */}
            <div className="relative pt-32 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text */}
                        <div>
                            <p className="text-sm uppercase tracking-wider text-white/50 mb-3">{translations.category}</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {translations.title}
                            </h1>
                            <p className="text-lg text-white/60 max-w-xl">
                                {translations.subtitle}
                            </p>
                        </div>
                        {/* Right: Visual - Team icons */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full h-64">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex gap-4">
                                        {[...Array(3)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 backdrop-blur-sm animate-pulse flex items-center justify-center"
                                                style={{animationDelay: `${i * 0.2}s`}}
                                            >
                                                <div className="w-8 h-8 rounded-full bg-white/10" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Team />
            <TrustSignals />
            <Footer />
        </div>
    )
}

export default function TeamPage() {
    return (
        <I18nProvider initialLocale="ru">
            <TeamContent />
        </I18nProvider>
    )
}

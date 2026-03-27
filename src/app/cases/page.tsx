'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Solutions from '@/components/sections/Solutions'
import Footer from '@/components/sections/Footer'
import Image from 'next/image'

function CasesContent() {
    const { locale } = useTranslation()

    const getHeaderTranslations = () => {
        if (locale === 'en') {
            return {
                category: 'Portfolio',
                title: 'Our projects',
                subtitle: 'Real cases of AI solution implementation'
            }
        } else if (locale === 'ky') {
            return {
                category: 'Портфолио',
                title: 'Биздин долбоорлор',
                subtitle: 'AI чечимдерин ишке ашыруунун реалдуу учурлары'
            }
        } else {
            return {
                category: 'Портфолио',
                title: 'Наши проекты',
                subtitle: 'Реальные кейсы внедрения AI-решений'
            }
        }
    }

    const translations = getHeaderTranslations()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
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
                        {/* Right: Visual - AI Chatbot Icon */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full h-64">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Image
                                        src="/ai.svg"
                                        alt="AI Projects"
                                        width={200}
                                        height={200}
                                        className="opacity-30 animate-pulse"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Solutions />
            <Footer />
        </div>
    )
}

export default function CasesPage() {
    return (
        <I18nProvider initialLocale="ru">
            <CasesContent />
        </I18nProvider>
    )
}

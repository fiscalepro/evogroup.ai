'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import AIChatbotSection from '@/components/sections/AIChatbotSection'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'
import Footer from '@/components/sections/Footer'

function SolutionsContent() {
    const { locale } = useTranslation()

    const getHeaderTranslations = () => {
        if (locale === 'en') {
            return {
                category: 'Solutions',
                title: 'For your business',
                subtitle: 'AI systems tailored to your industry challenges'
            }
        } else if (locale === 'ky') {
            return {
                category: 'Чечимдер',
                title: 'Сиздин бизнес үчүн',
                subtitle: 'Тармагыңыздын маселелерине ылайыкташтырылган AI системалар'
            }
        } else {
            return {
                category: 'Решения',
                title: 'Для вашего бизнеса',
                subtitle: 'AI-системы под задачи вашей отрасли'
            }
        }
    }

    const translations = getHeaderTranslations()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-float" />
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
                        {/* Right: Visual */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full h-64">
                                {/* Decorative circles */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-32 h-32 border-4 border-blue-500/30 rounded-2xl rotate-12 animate-pulse" />
                                    <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-purple-500/30 rounded-2xl -rotate-12 animate-pulse" style={{animationDelay: '1s'}} />
                                    <div className="absolute -bottom-8 -right-8 w-20 h-20 border-4 border-cyan-500/30 rounded-2xl rotate-45 animate-pulse" style={{animationDelay: '2s'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AIChatbotSection />
            <CompetitiveAdvantages />
            <Footer />
        </div>
    )
}

export default function SolutionsPage() {
    return (
        <I18nProvider initialLocale="ru">
            <SolutionsContent />
        </I18nProvider>
    )
}

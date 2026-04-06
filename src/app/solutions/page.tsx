'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import AIChatbotSection from '@/components/sections/AIChatbotSection'
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'

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
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground />

            <ModernHeader />

            {/* Page header */}
            <div className="relative pt-32 pb-12">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-[#F0F0F5]/40 font-medium mb-4">{translations.category}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-4 tracking-tight">
                        {translations.title}
                    </h1>
                    <p className="text-base lg:text-lg text-gray-500 dark:text-[#F0F0F5]/50 max-w-lg mx-auto">
                        {translations.subtitle}
                    </p>
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

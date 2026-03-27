'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import TechnologyShowcase from '@/components/sections/TechnologyShowcase'
import Footer from '@/components/sections/Footer'

function TechnologyContent() {
    const { locale } = useTranslation()

    const getHeaderTranslations = () => {
        if (locale === 'en') {
            return {
                category: 'Technology',
                title: 'Modern AI stack',
                subtitle: 'Reliable and scalable solutions'
            }
        } else if (locale === 'ky') {
            return {
                category: 'Технологиялар',
                title: 'Заманбап AI стек',
                subtitle: 'Ишенимдүү жана масштабдалуучу чечимдер'
            }
        } else {
            return {
                category: 'Технологии',
                title: 'Современный AI стек',
                subtitle: 'Надежные и масштабируемые решения'
            }
        }
    }

    const translations = getHeaderTranslations()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
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
                        {/* Right: Visual - Tech grid */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full h-64">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-4">
                                    {[...Array(9)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg border border-purple-500/30 backdrop-blur-sm animate-pulse"
                                            style={{animationDelay: `${i * 0.1}s`}}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TechnologyShowcase />
            <Footer />
        </div>
    )
}

export default function TechnologyPage() {
    return (
        <I18nProvider initialLocale="ru">
            <TechnologyContent />
        </I18nProvider>
    )
}

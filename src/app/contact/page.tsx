'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

function ContactContent() {
    const { locale } = useTranslation()

    const getHeaderTranslations = () => {
        if (locale === 'en') {
            return {
                category: 'Contact',
                title: 'Get in touch',
                subtitle: 'Ready to start a project? Let\'s discuss'
            }
        } else if (locale === 'ky') {
            return {
                category: 'Байланыш',
                title: 'Биз менен байланышыңыз',
                subtitle: 'Долбоорду баштоого даярсызбы? Талкуулайлы'
            }
        } else {
            return {
                category: 'Контакты',
                title: 'Свяжитесь с нами',
                subtitle: 'Готовы начать проект? Обсудим детали'
            }
        }
    }

    const translations = getHeaderTranslations()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] animate-float" />
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
                        {/* Right: Visual - Message icon */}
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="relative w-full h-64">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-32 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm animate-pulse relative">
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500/50 rounded-full animate-ping" />
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />
            <Footer />
        </div>
    )
}

export default function ContactPage() {
    return (
        <I18nProvider initialLocale="ru">
            <ContactContent />
        </I18nProvider>
    )
}

'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@nextui-org/react'

const WhatsAppContactForm: React.FC = () => {
    const { locale } = useTranslation()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        company: '',
        managers: '1-2'
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Get Started',
                title: 'Start your free trial today',
                subtitle: '30 days free. No credit card required. Full functionality.',
                namePlaceholder: 'Your name',
                phonePlaceholder: 'Phone number',
                companyPlaceholder: 'Company name',
                managersLabel: 'Number of managers',
                managersOptions: ['1-2', '3-5', '6-10', '10+'],
                submit: 'Start free trial',
                submitting: 'Sending...',
                successTitle: 'Thank you!',
                successMessage: 'We will contact you within 24 hours to set up your account.',
                features: [
                    'Setup within 24 hours',
                    '30 days free trial',
                    'Full functionality',
                    'No credit card required'
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Баштоо',
                title: 'Бүгүн акысыз сынап баштаңыз',
                subtitle: '30 күн акысыз. Карта талап кылынбайт. Толук функционал.',
                namePlaceholder: 'Атыңыз',
                phonePlaceholder: 'Телефон номери',
                companyPlaceholder: 'Компаниянын аты',
                managersLabel: 'Менеджерлердин саны',
                managersOptions: ['1-2', '3-5', '6-10', '10+'],
                submit: 'Акысыз сынап баштоо',
                submitting: 'Жөнөтүлүүдө...',
                successTitle: 'Рахмат!',
                successMessage: 'Аккаунтуңузду орнотуу үчүн 24 сааттын ичинде сиз менен байланышабыз.',
                features: [
                    '24 сааттын ичинде орнотуу',
                    '30 күн акысыз сыноо',
                    'Толук функционал',
                    'Карта талап кылынбайт'
                ]
            }
        } else {
            return {
                badge: 'Начать',
                title: 'Начните бесплатный пробный период',
                subtitle: '30 дней бесплатно. Карта не требуется. Полный функционал.',
                namePlaceholder: 'Ваше имя',
                phonePlaceholder: 'Номер телефона',
                companyPlaceholder: 'Название компании',
                managersLabel: 'Количество менеджеров',
                managersOptions: ['1-2', '3-5', '6-10', '10+'],
                submit: 'Начать бесплатно',
                submitting: 'Отправка...',
                successTitle: 'Спасибо!',
                successMessage: 'Мы свяжемся с вами в течение 24 часов для настройки аккаунта.',
                features: [
                    'Настройка за 24 часа',
                    '30 дней бесплатно',
                    'Полный функционал',
                    'Карта не требуется'
                ]
            }
        }
    }

    const translations = getTranslations()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <section id="whatsapp-contact" className="py-12 sm:py-24 relative overflow-hidden">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 sm:p-12">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{translations.successTitle}</h3>
                        <p className="text-white/70">{translations.successMessage}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="whatsapp-contact" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-400 shadow-sm mb-6">
                            {translations.badge}
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                            {translations.title}
                        </h2>
                        <p className="text-lg text-white/70 mb-8">
                            {translations.subtitle}
                        </p>

                        <ul className="space-y-4">
                            {translations.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    required
                                    placeholder={translations.namePlaceholder}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    required
                                    placeholder={translations.phonePlaceholder}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    required
                                    placeholder={translations.companyPlaceholder}
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-white/60 mb-2">
                                    {translations.managersLabel}
                                </label>
                                <div className="grid grid-cols-4 gap-2">
                                    {translations.managersOptions.map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, managers: option })}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                formData.managers === option
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                                            }`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-base"
                                radius="lg"
                            >
                                {isSubmitting ? translations.submitting : translations.submit}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatsAppContactForm

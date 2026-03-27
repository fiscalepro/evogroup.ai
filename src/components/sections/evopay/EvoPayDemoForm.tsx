'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

interface FormData {
    name: string
    email: string
    phone: string
    company: string
    tables: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
    company?: string
    general?: string
}

const EvoPayDemoForm: React.FC = () => {
    const { locale } = useTranslation()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        tables: '1-10',
        message: ''
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const translations = {
        ru: {
            badge: 'Получить демо',
            title: 'Готовы увеличить выручку?',
            subtitle: 'Оставьте заявку, и мы покажем как EvoPay работает в вашем ресторане. Первый месяц — бесплатно.',
            features: ['Персональная демонстрация', 'Ответы на все ваши вопросы', 'Запуск за 3 дня', '30 дней бесплатного периода'],
            namePlaceholder: 'Ваше имя *',
            emailPlaceholder: 'Email *',
            phonePlaceholder: 'Номер телефона *',
            companyPlaceholder: 'Название ресторана/кафе *',
            tablesLabel: 'Количество столов',
            messagePlaceholder: 'Дополнительная информация (необязательно)',
            submit: 'Получить демо',
            submitting: 'Отправка...',
            privacy: 'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных',
            successTitle: 'Заявка отправлена!',
            successMessage: 'Мы получили вашу заявку и свяжемся с вами в течение 24 часов для демонстрации EvoPay.',
            successSteps: ['Изучим ваши требования', 'Подготовим демонстрацию', 'Покажем возможности системы', 'Ответим на все вопросы'],
            sendAnother: 'Отправить ещё одну заявку',
            errors: {
                nameRequired: 'Укажите ваше имя',
                nameInvalid: 'Имя содержит недопустимые символы',
                emailRequired: 'Укажите email',
                emailInvalid: 'Неверный формат email',
                phoneRequired: 'Укажите номер телефона',
                phoneInvalid: 'Неверный формат телефона',
                companyRequired: 'Укажите название заведения',
                tooManyRequests: 'Слишком много запросов. Попробуйте через 15 минут.',
                general: 'Не удалось отправить заявку. Попробуйте позже.'
            }
        },
        en: {
            badge: 'Get demo',
            title: 'Ready to increase revenue?',
            subtitle: 'Leave a request and we\'ll show how EvoPay works in your restaurant. First month — free.',
            features: ['Personal demonstration', 'Answers to all your questions', 'Launch in 3 days', '30 days free trial'],
            namePlaceholder: 'Your name *',
            emailPlaceholder: 'Email *',
            phonePlaceholder: 'Phone number *',
            companyPlaceholder: 'Restaurant/cafe name *',
            tablesLabel: 'Number of tables',
            messagePlaceholder: 'Additional information (optional)',
            submit: 'Get demo',
            submitting: 'Sending...',
            privacy: 'By clicking the button, you agree to personal data processing',
            successTitle: 'Request sent!',
            successMessage: 'We received your request and will contact you within 24 hours for an EvoPay demo.',
            successSteps: ['Review your requirements', 'Prepare demonstration', 'Show system features', 'Answer all questions'],
            sendAnother: 'Send another request',
            errors: {
                nameRequired: 'Please enter your name',
                nameInvalid: 'Name contains invalid characters',
                emailRequired: 'Please enter email',
                emailInvalid: 'Invalid email format',
                phoneRequired: 'Please enter phone number',
                phoneInvalid: 'Invalid phone format',
                companyRequired: 'Please enter establishment name',
                tooManyRequests: 'Too many requests. Please try again in 15 minutes.',
                general: 'Failed to send request. Please try again later.'
            }
        },
        ky: {
            badge: 'Демо алуу',
            title: 'Кирешени көбөйтүүгө даярсызбы?',
            subtitle: 'Өтүнүч калтырыңыз, биз EvoPay ресторанүңүздө кантип иштээрин көрсөтөбүз. Биринчи ай — акысыз.',
            features: ['Жеке демонстрация', 'Бардык суроолорго жооптор', '3 күндө ишке киргизүү', '30 күн акысыз сыноо'],
            namePlaceholder: 'Атыңыз *',
            emailPlaceholder: 'Email *',
            phonePlaceholder: 'Телефон номери *',
            companyPlaceholder: 'Ресторан/кафенин аталышы *',
            tablesLabel: 'Столдордун саны',
            messagePlaceholder: 'Кошумча маалымат (милдеттүү эмес)',
            submit: 'Демо алуу',
            submitting: 'Жөнөтүлүүдө...',
            privacy: 'Баскычты басуу менен, сиз жеке маалыматтарды иштетүүгө макулдугуңузду билдиресиз',
            successTitle: 'Өтүнүч жөнөтүлдү!',
            successMessage: 'Биз өтүнүчүңүздү алдык жана EvoPay демонстрациясы үчүн 24 сааттын ичинде сиз менен байланышабыз.',
            successSteps: ['Талаптарыңызды изилдейбиз', 'Демонстрация даярдайбыз', 'Системанын мүмкүнчүлүктөрүн көрсөтөбүз', 'Бардык суроолорго жооп беребиз'],
            sendAnother: 'Дагы бир өтүнүч жөнөтүү',
            errors: {
                nameRequired: 'Атыңызды киргизиңиз',
                nameInvalid: 'Атта уруксат берилбеген символдор бар',
                emailRequired: 'Email киргизиңиз',
                emailInvalid: 'Email форматы туура эмес',
                phoneRequired: 'Телефон номерин киргизиңиз',
                phoneInvalid: 'Телефон форматы туура эмес',
                companyRequired: 'Мекеменин аталышын киргизиңиз',
                tooManyRequests: 'Өтө көп суроо. 15 мүнөттөн кийин кайталап көрүңүз.',
                general: 'Өтүнүч жөнөтүлгөн жок. Кийинчерээк кайталап көрүңүз.'
            }
        }
    }

    const t = translations[locale] || translations.ru

    // Input sanitization
    const sanitizeInput = (input: string): string => {
        return input
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[<>\"\'`;(){}[\]]/g, '') // Remove potentially dangerous characters
            .trim()
    }

    // Phone validation
    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^[\d\+\-\s()]+$/
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 9
    }

    // Email validation
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = t.errors.nameRequired
        } else if (!/^[a-zA-Zа-яА-ЯёЁүүөөңңҢҢ\s\-']+$/.test(formData.name)) {
            newErrors.name = t.errors.nameInvalid
        }

        if (!formData.email.trim()) {
            newErrors.email = t.errors.emailRequired
        } else if (!validateEmail(formData.email)) {
            newErrors.email = t.errors.emailInvalid
        }

        if (!formData.phone.trim()) {
            newErrors.phone = t.errors.phoneRequired
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = t.errors.phoneInvalid
        }

        if (!formData.company.trim()) {
            newErrors.company = t.errors.companyRequired
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        const sanitizedValue = sanitizeInput(value)

        setFormData(prev => ({
            ...prev,
            [name]: sanitizedValue
        }))

        // Clear error on input
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    description: `[EvoPay Demo Request]\nКоличество столов: ${formData.tables}\n${formData.message || 'Без дополнительной информации'}`,
                    newsletter: false
                }),
            })

            if (response.status === 429) {
                setErrors({ general: t.errors.tooManyRequests })
                return
            }

            const result = await response.json()

            if (!response.ok) {
                setErrors({ general: result.error || t.errors.general })
                return
            }

            if (result.success) {
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    tables: '1-10',
                    message: ''
                })
            } else {
                setErrors({ general: result.error || t.errors.general })
            }
        } catch {
            setErrors({ general: t.errors.general })
        } finally {
            setIsSubmitting(false)
        }
    }

    const tablesOptions = ['1-10', '11-30', '31-50', '50+']

    // Success state
    if (isSubmitted) {
        return (
            <section id="evopay-demo" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
                <div className="max-w-2xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 sm:p-12"
                    >
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">{t.successTitle}</h3>
                        <p className="text-white/70 text-lg mb-8">
                            {t.successMessage}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {t.successSteps.map((step, index) => (
                                <div key={index} className="flex items-center gap-3 text-left text-white/80 p-4 bg-white/5 rounded-xl border border-white/10">
                                    <span className="flex-shrink-0 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-sm text-emerald-400 font-bold">
                                        {index + 1}
                                    </span>
                                    <span className="text-sm">{step}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-8 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full font-semibold transition-all"
                        >
                            {t.sendAnother}
                        </button>
                    </motion.div>
                </div>

                {/* Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />
            </section>
        )
    }

    // Main form
    return (
        <section id="evopay-demo" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#1a1a24] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left: Info */}
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-6"
                            >
                                {t.badge}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
                            >
                                {t.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-white/60 mb-8"
                            >
                                {t.subtitle}
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                {t.features.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-white/80">{item}</span>
                                    </li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                {/* General Error */}
                                {errors.general && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                        {errors.general}
                                    </div>
                                )}

                                {/* Name */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder={t.namePlaceholder}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        maxLength={100}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                                            errors.name ? 'border-red-500/50' : 'border-white/10'
                                        }`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t.emailPlaceholder}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        maxLength={254}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                                            errors.email ? 'border-red-500/50' : 'border-white/10'
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder={t.phonePlaceholder}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                                            errors.phone ? 'border-red-500/50' : 'border-white/10'
                                        }`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                                    )}
                                </div>

                                {/* Company */}
                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder={t.companyPlaceholder}
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        maxLength={200}
                                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
                                            errors.company ? 'border-red-500/50' : 'border-white/10'
                                        }`}
                                    />
                                    {errors.company && (
                                        <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                                    )}
                                </div>

                                {/* Tables */}
                                <div>
                                    <label className="block text-sm text-white/60 mb-2">
                                        {t.tablesLabel}
                                    </label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {tablesOptions.map((option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, tables: option })}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                                    formData.tables === option
                                                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black'
                                                        : 'bg-white/5 text-white/60 hover:bg-white/10'
                                                }`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message (optional) */}
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder={t.messagePlaceholder}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        maxLength={1000}
                                        rows={3}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl text-black font-bold text-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            {t.submitting}
                                        </span>
                                    ) : (
                                        t.submit
                                    )}
                                </button>

                                <p className="text-xs text-white/40 text-center">
                                    {t.privacy}
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default EvoPayDemoForm

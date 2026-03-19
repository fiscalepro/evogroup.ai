'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

interface FormData {
    name: string
    email: string
    phone: string
    company: string
    teamSize: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
    company?: string
    general?: string
}

const CCEContactForm: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Enterprise',
            title: 'Готовы усилить свою команду?',
            subtitle: 'Оставьте заявку — мы проведём демонстрацию и поможем настроить CCE под ваши процессы.',
            infoItems: [
                { title: 'Персональная демонстрация', description: 'Покажем все возможности CCE на примере вашей команды' },
                { title: 'Анализ процессов', description: 'Оценим текущие workflow и предложим оптимальную конфигурацию' },
                { title: 'Настройка под вас', description: 'Создадим Enterprise Config, политики и шаблоны для вашей компании' },
                { title: 'Сопровождение', description: 'Обеспечим поддержку на этапе внедрения и масштабирования' },
            ],
            form: {
                name: 'Имя',
                namePlaceholder: 'Ваше имя',
                email: 'Email',
                emailPlaceholder: 'email@company.com',
                phone: 'Телефон',
                phonePlaceholder: '+996 ...',
                company: 'Компания',
                companyPlaceholder: 'Название компании',
                teamSize: 'Размер команды',
                teamSizeOptions: ['5-10 разработчиков', '11-25 разработчиков', '26-50 разработчиков', '50+ разработчиков'],
                teamSizePlaceholder: 'Выберите размер',
                message: 'Сообщение',
                messagePlaceholder: 'Расскажите о вашей команде и задачах...',
                submit: 'Связаться с нами',
                submitting: 'Отправка...',
            },
            errors: {
                nameRequired: 'Укажите ваше имя',
                emailRequired: 'Укажите email',
                emailInvalid: 'Некорректный email',
                phoneInvalid: 'Некорректный номер телефона',
                companyRequired: 'Укажите компанию',
                tooManyRequests: 'Слишком много запросов. Попробуйте позже.',
                general: 'Произошла ошибка. Попробуйте ещё раз.',
            },
            success: {
                title: 'Заявка отправлена!',
                description: 'Мы свяжемся с вами в ближайшее время для обсуждения CCE Enterprise.',
                back: 'Отправить ещё',
            },
        },
        en: {
            badge: 'Enterprise',
            title: 'Ready to empower your team?',
            subtitle: 'Leave a request — we\'ll give a demo and help set up CCE for your processes.',
            infoItems: [
                { title: 'Personal demo', description: 'We\'ll show all CCE capabilities using your team as an example' },
                { title: 'Process analysis', description: 'We\'ll evaluate current workflows and suggest optimal configuration' },
                { title: 'Custom setup', description: 'We\'ll create Enterprise Config, policies, and templates for your company' },
                { title: 'Ongoing support', description: 'We\'ll provide support during rollout and scaling' },
            ],
            form: {
                name: 'Name',
                namePlaceholder: 'Your name',
                email: 'Email',
                emailPlaceholder: 'email@company.com',
                phone: 'Phone',
                phonePlaceholder: '+1 ...',
                company: 'Company',
                companyPlaceholder: 'Company name',
                teamSize: 'Team size',
                teamSizeOptions: ['5-10 developers', '11-25 developers', '26-50 developers', '50+ developers'],
                teamSizePlaceholder: 'Select size',
                message: 'Message',
                messagePlaceholder: 'Tell us about your team and goals...',
                submit: 'Contact Us',
                submitting: 'Sending...',
            },
            errors: {
                nameRequired: 'Please enter your name',
                emailRequired: 'Please enter email',
                emailInvalid: 'Invalid email',
                phoneInvalid: 'Invalid phone number',
                companyRequired: 'Please enter company name',
                tooManyRequests: 'Too many requests. Please try later.',
                general: 'An error occurred. Please try again.',
            },
            success: {
                title: 'Request sent!',
                description: 'We\'ll contact you soon to discuss CCE Enterprise.',
                back: 'Send another',
            },
        },
        ky: {
            badge: 'Enterprise',
            title: 'Командаңызды күчөтүүгө даярсызбы?',
            subtitle: 'Арыз калтырыңыз — биз демонстрация жүргүзөбүз жана CCE\'ни процесстериңизге ылайыкташтырабыз.',
            infoItems: [
                { title: 'Жеке демонстрация', description: 'CCE\'нин бардык мүмкүнчүлүктөрүн командаңыздын мисалында көрсөтөбүз' },
                { title: 'Процесстерди анализдөө', description: 'Учурдагы workflow\'ду баалап, оптималдуу конфигурацияны сунуштайбыз' },
                { title: 'Сиздер үчүн жөндөө', description: 'Компанияңыз үчүн Enterprise Config, саясаттар жана шаблондорду түзөбүз' },
                { title: 'Коштоп жүрүү', description: 'Ишке ашыруу жана масштабдоо этабында колдоо көрсөтөбүз' },
            ],
            form: {
                name: 'Аты',
                namePlaceholder: 'Сиздин атыңыз',
                email: 'Email',
                emailPlaceholder: 'email@company.com',
                phone: 'Телефон',
                phonePlaceholder: '+996 ...',
                company: 'Компания',
                companyPlaceholder: 'Компаниянын аталышы',
                teamSize: 'Команда өлчөмү',
                teamSizeOptions: ['5-10 иштеп чыгуучу', '11-25 иштеп чыгуучу', '26-50 иштеп чыгуучу', '50+ иштеп чыгуучу'],
                teamSizePlaceholder: 'Өлчөмдү тандаңыз',
                message: 'Билдирүү',
                messagePlaceholder: 'Командаңыз жана тапшырмаларыңыз жөнүндө айтып бериңиз...',
                submit: 'Биз менен байланышыңыз',
                submitting: 'Жөнөтүлүүдө...',
            },
            errors: {
                nameRequired: 'Атыңызды жазыңыз',
                emailRequired: 'Email жазыңыз',
                emailInvalid: 'Туура эмес email',
                phoneInvalid: 'Туура эмес телефон номери',
                companyRequired: 'Компаниянын аталышын жазыңыз',
                tooManyRequests: 'Өтө көп суроо-талаптар. Кийинчерээк аракет кылыңыз.',
                general: 'Ката кетти. Кайра аракет кылыңыз.',
            },
            success: {
                title: 'Арыз жөнөтүлдү!',
                description: 'CCE Enterprise боюнча талкуулоо үчүн жакын арада байланышабыз.',
                back: 'Дагы жөнөтүү',
            },
        }
    }

    const t = translations[locale] || translations.ru

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        teamSize: '',
        message: '',
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const sanitizeInput = (input: string): string => {
        return input
            .replace(/<[^>]*>/g, '')
            .replace(/[<>"'`;(){}[\]]/g, '')
            .trim()
    }

    const validateEmail = (email: string): boolean => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validatePhone = (phone: string): boolean => {
        if (!phone) return true // optional
        const phoneRegex = /^[\d+\-\s()]+$/
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 9
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) newErrors.name = t.errors.nameRequired
        if (!formData.email.trim()) newErrors.email = t.errors.emailRequired
        else if (!validateEmail(formData.email)) newErrors.email = t.errors.emailInvalid
        if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = t.errors.phoneInvalid
        if (!formData.company.trim()) newErrors.company = t.errors.companyRequired

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        const sanitizedValue = name === 'email' ? value.trim() : sanitizeInput(value)

        setFormData(prev => ({ ...prev, [name]: sanitizedValue }))

        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `[CCE Enterprise] ${formData.name}`,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    description: `Размер команды: ${formData.teamSize || 'Не указан'}\n\n${formData.message}`,
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
                setFormData({ name: '', email: '', phone: '', company: '', teamSize: '', message: '' })
            }
        } catch {
            setErrors({ general: t.errors.general })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <section id="cce-contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a]">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 rounded-3xl p-8 sm:p-12 text-center"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t.success.title}</h3>
                        <p className="text-white/60 text-lg mb-8">{t.success.description}</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="px-6 py-3 border border-violet-500/30 rounded-xl text-violet-300 font-medium hover:bg-violet-500/10 transition-colors"
                        >
                            {t.success.back}
                        </button>
                    </motion.div>
                </div>
            </section>
        )
    }

    return (
        <section id="cce-contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-violet-500/10 rounded-full text-xs font-bold text-violet-400 uppercase tracking-wider mb-6"
                >
                    {t.badge}
                </motion.span>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                    {t.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-lg text-white/60 max-w-2xl mb-16"
                >
                    {t.subtitle}
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Info items */}
                    <div className="space-y-6">
                        {t.infoItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="w-10 h-10 min-w-[40px] bg-gradient-to-br from-violet-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-sm">{index + 1}</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="bg-[#1a1a24] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
                    >
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-white/70 mb-2">{t.form.name}</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={t.form.namePlaceholder}
                                value={formData.name}
                                onChange={handleInputChange}
                                maxLength={100}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                                    errors.name ? 'border-red-500/50' : 'border-white/10'
                                }`}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-white/70 mb-2">{t.form.email}</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={t.form.emailPlaceholder}
                                value={formData.email}
                                onChange={handleInputChange}
                                maxLength={200}
                                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                                    errors.email ? 'border-red-500/50' : 'border-white/10'
                                }`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>

                        {/* Phone & Company row */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm text-white/70 mb-2">{t.form.phone}</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder={t.form.phonePlaceholder}
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    maxLength={20}
                                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                                        errors.phone ? 'border-red-500/50' : 'border-white/10'
                                    }`}
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm text-white/70 mb-2">{t.form.company}</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder={t.form.companyPlaceholder}
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    maxLength={100}
                                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all ${
                                        errors.company ? 'border-red-500/50' : 'border-white/10'
                                    }`}
                                />
                                {errors.company && <p className="mt-1 text-sm text-red-400">{errors.company}</p>}
                            </div>
                        </div>

                        {/* Team size */}
                        <div>
                            <label className="block text-sm text-white/70 mb-2">{t.form.teamSize}</label>
                            <select
                                name="teamSize"
                                value={formData.teamSize}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                            >
                                <option value="" className="bg-[#1a1a24]">{t.form.teamSizePlaceholder}</option>
                                {t.form.teamSizeOptions.map((option, i) => (
                                    <option key={i} value={option} className="bg-[#1a1a24]">{option}</option>
                                ))}
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-white/70 mb-2">{t.form.message}</label>
                            <textarea
                                name="message"
                                placeholder={t.form.messagePlaceholder}
                                value={formData.message}
                                onChange={handleInputChange}
                                maxLength={1000}
                                rows={4}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                            />
                        </div>

                        {/* General error */}
                        {errors.general && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                                <p className="text-sm text-red-400">{errors.general}</p>
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-amber-500 rounded-xl text-white font-bold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            {isSubmitting ? t.form.submitting : t.form.submit}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default CCEContactForm

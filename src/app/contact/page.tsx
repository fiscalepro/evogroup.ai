'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

// ─── Icons ────────────────────────────────────────────────────────────────────

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
)

const TelegramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 5L2 12.5l7 1M21 5l-5 15-4.5-5.5M21 5L9 13.5m0 0V19l3-3" />
    </svg>
)

const CheckIcon = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ─── Content ──────────────────────────────────────────────────────────────────

function getContent(locale: string) {
    const content = {
        en: {
            badge: 'Contact',
            heroTitle: 'Start your',
            heroTitleBr: 'project',
            heroSubtitle: 'Tell us about your challenge — our experts will propose the optimal AI solution for your business.',
            whatsNext: 'What happens next',
            nextSteps: [
                'An expert will review your task',
                'We will prepare a preliminary proposal',
                'We will contact you to discuss details',
                'We will give an accurate project estimate',
            ],
            form: {
                nameLabel: 'Name *',
                namePlaceholder: 'Your name',
                emailLabel: 'Email *',
                emailPlaceholder: 'your@email.com',
                companyLabel: 'Company',
                companyPlaceholder: 'Company name',
                phoneLabel: 'Phone',
                phonePlaceholder: '+996 XXX XXX XXX',
                descriptionLabel: 'Task description *',
                descriptionPlaceholder: 'Describe the business challenge you want to solve with AI. The more detail — the more accurate our estimate.',
                submitButton: 'Submit request',
                submitting: 'Submitting...',
                consent: 'By submitting this form, you agree to the processing of personal data',
            },
            validation: {
                nameRequired: 'Name is required',
                nameInvalid: 'Name contains invalid characters',
                emailRequired: 'Email is required',
                emailInvalid: 'Invalid email format',
                phoneInvalid: 'Invalid phone format',
                descriptionRequired: 'Description is required',
                descriptionMinLength: 'Minimum 10 characters',
            },
            errors: {
                rateLimit: 'Too many requests. Please try again in 15 minutes.',
                submitFailed: 'Failed to submit the form. Please try again later.',
                submitFailedShort: 'Failed to submit the form.',
            },
            success: {
                title: 'Request submitted!',
                subtitle: 'We will respond within 2 hours during business hours.',
                sendAnother: 'Submit another request',
            },
        },
        ru: {
            badge: 'Контакт',
            heroTitle: 'Начните свой',
            heroTitleBr: 'проект',
            heroSubtitle: 'Расскажите о вашей задаче — наши эксперты предложат оптимальное AI-решение для вашего бизнеса.',
            whatsNext: 'Что будет дальше',
            nextSteps: [
                'Эксперт изучит вашу задачу',
                'Подготовим предварительное предложение',
                'Свяжемся для обсуждения деталей',
                'Дадим точную оценку проекта',
            ],
            form: {
                nameLabel: 'Имя *',
                namePlaceholder: 'Ваше имя',
                emailLabel: 'Email *',
                emailPlaceholder: 'your@email.com',
                companyLabel: 'Компания',
                companyPlaceholder: 'Название компании',
                phoneLabel: 'Телефон',
                phonePlaceholder: '+996 XXX XXX XXX',
                descriptionLabel: 'Описание задачи *',
                descriptionPlaceholder: 'Опишите бизнес-задачу, которую хотите решить с помощью ИИ. Чем подробнее — тем точнее сможем оценить проект.',
                submitButton: 'Отправить заявку',
                submitting: 'Отправка...',
                consent: 'Отправляя форму, вы соглашаетесь с обработкой персональных данных',
            },
            validation: {
                nameRequired: 'Имя обязательно',
                nameInvalid: 'Имя содержит недопустимые символы',
                emailRequired: 'Email обязателен',
                emailInvalid: 'Неверный формат email',
                phoneInvalid: 'Неверный формат телефона',
                descriptionRequired: 'Описание обязательно',
                descriptionMinLength: 'Минимум 10 символов',
            },
            errors: {
                rateLimit: 'Слишком много запросов. Попробуйте через 15 минут.',
                submitFailed: 'Не удалось отправить форму. Попробуйте позже.',
                submitFailedShort: 'Не удалось отправить форму.',
            },
            success: {
                title: 'Заявка отправлена!',
                subtitle: 'Ответим в течение 2 часов в рабочее время.',
                sendAnother: 'Отправить ещё одну заявку',
            },
        },
        ky: {
            badge: 'Байланыш',
            heroTitle: 'Долбооруңузду',
            heroTitleBr: 'баштаңыз',
            heroSubtitle: 'Тапшырмаңыз жөнүндө айтып бериңиз — биздин эксперттер бизнесиңиз үчүн оптималдуу AI-чечимди сунушташат.',
            whatsNext: 'Андан кийин эмне болот',
            nextSteps: [
                'Эксперт тапшырмаңызды изилдейт',
                'Алдын ала сунуш даярдайбыз',
                'Деталдарды талкуулоо үчүн байланышабыз',
                'Долбоордун так баасын беребиз',
            ],
            form: {
                nameLabel: 'Аты *',
                namePlaceholder: 'Атыңыз',
                emailLabel: 'Email *',
                emailPlaceholder: 'your@email.com',
                companyLabel: 'Компания',
                companyPlaceholder: 'Компаниянын аты',
                phoneLabel: 'Телефон',
                phonePlaceholder: '+996 XXX XXX XXX',
                descriptionLabel: 'Тапшырманын сүрөттөмөсү *',
                descriptionPlaceholder: 'AI жардамы менен чечкиңиз келген бизнес-тапшырманы сүрөттөп бериңиз. Канчалык толук болсо — ошончолук так баалай алабыз.',
                submitButton: 'Өтүнүч жөнөтүү',
                submitting: 'Жөнөтүлүүдө...',
                consent: 'Форманы жөнөтүү менен, жеке маалыматтарды иштетүүгө макулдугуңузду билдиресиз',
            },
            validation: {
                nameRequired: 'Аты милдеттүү',
                nameInvalid: 'Атта жол берилбеген символдор бар',
                emailRequired: 'Email милдеттүү',
                emailInvalid: 'Email форматы туура эмес',
                phoneInvalid: 'Телефон форматы туура эмес',
                descriptionRequired: 'Сүрөттөмө милдеттүү',
                descriptionMinLength: 'Минимум 10 символ',
            },
            errors: {
                rateLimit: 'Өтө көп суроо-талаптар. 15 мүнөттөн кийин кайра аракет кылыңыз.',
                submitFailed: 'Форманы жөнөтүү мүмкүн болгон жок. Кийинчерээк кайра аракет кылыңыз.',
                submitFailedShort: 'Форманы жөнөтүү мүмкүн болгон жок.',
            },
            success: {
                title: 'Өтүнүч жөнөтүлдү!',
                subtitle: 'Жумуш убактысында 2 сааттын ичинде жооп беребиз.',
                sendAnother: 'Дагы бир өтүнүч жөнөтүү',
            },
        },
    }

    return content[locale as keyof typeof content] || content.en
}

// ─── Form ─────────────────────────────────────────────────────────────────────

interface FormData {
    name: string
    email: string
    company: string
    phone: string
    description: string
}

interface FormErrors {
    name?: string
    email?: string
    phone?: string
    description?: string
    general?: string
}

const contactItems = [
    { icon: <MailIcon />, label: 'info@evogroup.ai', href: 'mailto:info@evogroup.ai' },
    { icon: <TelegramIcon />, label: '@evogroup_ai', href: 'https://t.me/evogroup_ai' },
]

function ContactFormBlock({ content }: { content: ReturnType<typeof getContent> }) {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '', phone: '', description: '' })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validate = (): boolean => {
        const e: FormErrors = {}
        if (!formData.name.trim()) e.name = content.validation.nameRequired
        else if (!/^[a-zA-Zа-яА-ЯёЁүүөөңңҢҢ\s\-']+$/.test(formData.name)) e.name = content.validation.nameInvalid
        if (!formData.email.trim()) e.email = content.validation.emailRequired
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = content.validation.emailInvalid
        if (formData.phone && !/^[\d+\-\s()]*$/.test(formData.phone)) e.phone = content.validation.phoneInvalid
        if (!formData.description.trim()) e.description = content.validation.descriptionRequired
        else if (formData.description.trim().length < 10) e.description = content.validation.descriptionMinLength
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!validate()) return
        setIsSubmitting(true)
        setErrors({})
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            const result = await response.json()
            if (response.status === 429) { setErrors({ general: content.errors.rateLimit }); return }
            if (!response.ok) { setErrors({ general: result.error || content.errors.submitFailed }); return }
            if (result.success) {
                setIsSubmitted(true)
                setFormData({ name: '', email: '', company: '', phone: '', description: '' })
            } else {
                setErrors({ general: result.error || content.errors.submitFailedShort })
            }
        } catch {
            setErrors({ general: content.errors.submitFailed })
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputBase = 'w-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/25 outline-none focus:border-gray-400 dark:focus:border-white/20 focus:bg-gray-100 dark:focus:bg-white/[0.06] transition-all duration-200'
    const labelBase = 'block text-xs text-gray-900 dark:text-white/55 uppercase tracking-wider font-medium mb-1.5'

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 dark:bg-white/[0.025] border border-gray-200 dark:border-white/[0.07] rounded-2xl overflow-hidden"
            >
                <div className="h-[1.5px] bg-gradient-to-r from-emerald-500 to-transparent" />
                <div className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{content.success.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-white/50 mb-8">{content.success.subtitle}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
                        {content.nextSteps.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-xl px-4 py-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm text-gray-600 dark:text-white/60">{step}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm text-gray-500 dark:text-white/55 hover:text-gray-700 dark:hover:text-white/70 transition-colors"
                    >
                        {content.success.sendAnother}
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <div className="bg-gray-50 dark:bg-white/[0.025] border border-gray-200 dark:border-white/[0.07] rounded-2xl overflow-hidden">
            <div className="h-[1.5px] bg-gradient-to-r from-blue-500 to-transparent" />
            <div className="p-7 lg:p-9">
                {errors.general && (
                    <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
                        {errors.general}
                    </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className={labelBase}>{content.form.nameLabel}</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange}
                                placeholder={content.form.namePlaceholder} maxLength={100} required
                                className={`${inputBase} ${errors.name ? 'border-red-500/40' : ''}`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                            <label className={labelBase}>{content.form.emailLabel}</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange}
                                placeholder={content.form.emailPlaceholder} maxLength={254} required
                                className={`${inputBase} ${errors.email ? 'border-red-500/40' : ''}`}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className={labelBase}>{content.form.companyLabel}</label>
                            <input
                                type="text" name="company" value={formData.company} onChange={handleChange}
                                placeholder={content.form.companyPlaceholder} maxLength={200}
                                className={inputBase}
                            />
                        </div>
                        <div>
                            <label className={labelBase}>{content.form.phoneLabel}</label>
                            <input
                                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                placeholder={content.form.phonePlaceholder} maxLength={20}
                                className={`${inputBase} ${errors.phone ? 'border-red-500/40' : ''}`}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="mb-7">
                        <label className={labelBase}>{content.form.descriptionLabel}</label>
                        <textarea
                            name="description" value={formData.description} onChange={handleChange}
                            placeholder={content.form.descriptionPlaceholder}
                            rows={5} maxLength={5000} required
                            className={`${inputBase} resize-none ${errors.description ? 'border-red-500/40' : ''}`}
                        />
                        {errors.description && <p className="mt-1 text-xs text-red-400">{errors.description}</p>}
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="lg"
                        className="w-full"
                    >
                        {isSubmitting ? content.form.submitting : content.form.submitButton}
                    </Button>

                    <p className="mt-4 text-xs text-gray-500 dark:text-white/50 text-center">
                        {content.form.consent}
                    </p>
                </form>
            </div>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function ContactContent() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground accent="blue" />

            <ModernHeader />

            <section className="relative pt-32 pb-24 overflow-hidden">

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

                        {/* Left: info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-[#F0F0F5]/[0.08] bg-gray-100 dark:bg-[#F0F0F5]/[0.04] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-xs text-gray-500 dark:text-[#F0F0F5]/40 uppercase tracking-widest font-medium">{content.badge}</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight leading-[1.05] mb-4">
                                {content.heroTitle}<br />{content.heroTitleBr}
                            </h1>
                            <p className="text-base text-gray-600 dark:text-[#F0F0F5]/50 leading-relaxed mb-10 max-w-sm">
                                {content.heroSubtitle}
                            </p>

                            {/* Contact items */}
                            <div className="flex flex-col gap-3 mb-10">
                                {contactItems.map(c => (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-sm text-gray-700 dark:text-[#F0F0F5]/50 hover:text-gray-900 dark:hover:text-[#F0F0F5] transition-colors no-underline"
                                    >
                                        <span className="text-gray-700 dark:text-[#F0F0F5]/30">{c.icon}</span>
                                        {c.label}
                                    </a>
                                ))}
                            </div>

                            {/* What happens next */}
                            <div className="border border-gray-200 dark:border-[#F0F0F5]/[0.06] rounded-2xl overflow-hidden">
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-[#F0F0F5]/[0.06]">
                                    <p className="text-xs text-gray-500 dark:text-[#F0F0F5]/35 uppercase tracking-widest font-medium">{content.whatsNext}</p>
                                </div>
                                <div className="divide-y divide-gray-100 dark:divide-[#F0F0F5]/[0.04]">
                                    {content.nextSteps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 px-6 py-4">
                                            <span className="flex-shrink-0 text-xs font-bold text-gray-400 dark:text-[#F0F0F5]/15 tabular-nums w-5">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="text-sm text-gray-600 dark:text-[#F0F0F5]/45">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: form */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <ContactFormBlock content={content} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function ContactPage() {
    return (
        <ContactContent />
    )
}

'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

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

const nextSteps = [
    'Эксперт изучит вашу задачу',
    'Подготовим предварительное предложение',
    'Свяжемся для обсуждения деталей',
    'Дадим точную оценку проекта',
]

const contactItems = [
    { icon: <MailIcon />, label: 'hello@evogroup.ai', href: 'mailto:hello@evogroup.ai' },
    { icon: <TelegramIcon />, label: '@evogroup_ai', href: 'https://t.me/evogroup_ai' },
]

function ContactFormBlock() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', company: '', phone: '', description: '' })
    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const validate = (): boolean => {
        const e: FormErrors = {}
        if (!formData.name.trim()) e.name = 'Имя обязательно'
        else if (!/^[a-zA-Zа-яА-ЯёЁүүөөңңҢҢ\s\-']+$/.test(formData.name)) e.name = 'Имя содержит недопустимые символы'
        if (!formData.email.trim()) e.email = 'Email обязателен'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Неверный формат email'
        if (formData.phone && !/^[\d+\-\s()]*$/.test(formData.phone)) e.phone = 'Неверный формат телефона'
        if (!formData.description.trim()) e.description = 'Описание обязательно'
        else if (formData.description.trim().length < 10) e.description = 'Минимум 10 символов'
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
            if (response.status === 429) { setErrors({ general: 'Слишком много запросов. Попробуйте через 15 минут.' }); return }
            if (!response.ok) { setErrors({ general: result.error || 'Не удалось отправить форму. Попробуйте позже.' }); return }
            if (result.success) {
                setIsSubmitted(true)
                setFormData({ name: '', email: '', company: '', phone: '', description: '' })
            } else {
                setErrors({ general: result.error || 'Не удалось отправить форму.' })
            }
        } catch {
            setErrors({ general: 'Не удалось отправить форму. Попробуйте позже.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputBase = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/20 focus:bg-white/[0.06] transition-all duration-200'
    const labelBase = 'block text-xs text-white/55 uppercase tracking-wider font-medium mb-1.5'

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden"
            >
                <div className="h-[1.5px] bg-gradient-to-r from-emerald-500 to-transparent" />
                <div className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                    <p className="text-sm text-white/50 mb-8">Ответим в течение 2 часов в рабочее время.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
                        {nextSteps.map((step, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                                    <CheckIcon />
                                </span>
                                <span className="text-sm text-white/60">{step}</span>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-sm text-white/55 hover:text-white/70 transition-colors"
                    >
                        Отправить ещё одну заявку
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <div className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden">
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
                            <label className={labelBase}>Имя *</label>
                            <input
                                type="text" name="name" value={formData.name} onChange={handleChange}
                                placeholder="Ваше имя" maxLength={100} required
                                className={`${inputBase} ${errors.name ? 'border-red-500/40' : ''}`}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                        </div>
                        <div>
                            <label className={labelBase}>Email *</label>
                            <input
                                type="email" name="email" value={formData.email} onChange={handleChange}
                                placeholder="your@email.com" maxLength={254} required
                                className={`${inputBase} ${errors.email ? 'border-red-500/40' : ''}`}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className={labelBase}>Компания</label>
                            <input
                                type="text" name="company" value={formData.company} onChange={handleChange}
                                placeholder="Название компании" maxLength={200}
                                className={inputBase}
                            />
                        </div>
                        <div>
                            <label className={labelBase}>Телефон</label>
                            <input
                                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                placeholder="+996 XXX XXX XXX" maxLength={20}
                                className={`${inputBase} ${errors.phone ? 'border-red-500/40' : ''}`}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                        </div>
                    </div>

                    <div className="mb-7">
                        <label className={labelBase}>Описание задачи *</label>
                        <textarea
                            name="description" value={formData.description} onChange={handleChange}
                            placeholder="Опишите бизнес-задачу, которую хотите решить с помощью ИИ. Чем подробнее — тем точнее сможем оценить проект."
                            rows={5} maxLength={5000} required
                            className={`${inputBase} resize-none ${errors.description ? 'border-red-500/40' : ''}`}
                        />
                        {errors.description && <p className="mt-1 text-xs text-red-400">{errors.description}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black py-3.5 rounded-xl text-sm font-bold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </button>

                    <p className="mt-4 text-xs text-white/50 text-center">
                        Отправляя форму, вы соглашаетесь с обработкой персональных данных
                    </p>
                </form>
            </div>
        </div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function ContactContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[150px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

                        {/* Left: info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                                <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Контакты</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4">
                                Начните<br />свой проект
                            </h1>
                            <p className="text-base text-white/60 leading-relaxed mb-10 max-w-sm">
                                Расскажите о задаче — наши эксперты предложат оптимальное AI-решение с учётом специфики вашего бизнеса.
                            </p>

                            {/* Contact items */}
                            <div className="flex flex-col gap-3 mb-10">
                                {contactItems.map(c => (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        target={c.href.startsWith('http') ? '_blank' : undefined}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors no-underline"
                                    >
                                        <span className="text-white/50">{c.icon}</span>
                                        {c.label}
                                    </a>
                                ))}
                            </div>

                            {/* What happens next */}
                            <div className="border border-white/[0.07] rounded-2xl overflow-hidden">
                                <div className="px-6 py-4 border-b border-white/[0.07]">
                                    <p className="text-xs text-white/50 uppercase tracking-widest font-medium">Что будет дальше</p>
                                </div>
                                <div className="divide-y divide-white/[0.06]">
                                    {nextSteps.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4 px-6 py-4">
                                            <span className="flex-shrink-0 text-xs font-bold text-white/20 tabular-nums w-5">{String(i + 1).padStart(2, '0')}</span>
                                            <span className="text-sm text-white/55">{step}</span>
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
                            <ContactFormBlock />
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

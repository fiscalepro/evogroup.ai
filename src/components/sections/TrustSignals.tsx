'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

// Modern minimalist icons
const Icons = {
    bank: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    ),
    oil: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
    ),
    gov: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    ),
    telecom: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
    ),
    shield: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    api: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
        </svg>
    ),
    ai: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
    ),
}

// Animated counter component
function AnimatedNumber({ value, suffix = '' }: { value: number, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
    const display = useTransform(spring, (current) => Math.round(current))
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) {
            spring.set(value)
        }
    }, [isInView, spring, value])

    useEffect(() => {
        return display.on("change", (latest) => {
            setDisplayValue(latest)
        })
    }, [display])

    return <span ref={ref}>{displayValue}{suffix}</span>
}

const TrustSignals: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                title: 'Trusted by Industry Leaders',
                subtitle: 'We partner with the largest banks, industrial companies, and government organizations',
                keyClients: 'Our Key Partners',
                certificationsTitle: 'Certifications & Partnerships',
            }
        } else if (locale === 'ky') {
            return {
                title: 'Базардын лидерлери бизге ишенет',
                subtitle: 'Эң ири банктар, өнөр жай компаниялары жана мамлекеттик уюмдар менен иштейбиз',
                keyClients: 'Биздин негизги өнөктөштөр',
                certificationsTitle: 'Сертификаттар жана өнөктөштүк',
            }
        } else {
            return {
                title: 'Нам доверяют лидеры рынка',
                subtitle: 'Работаем с крупнейшими банками, промышленными компаниями и государственными организациями',
                keyClients: 'Наши ключевые партнёры',
                certificationsTitle: 'Сертификации и партнёрства',
            }
        }
    }

    const getCertifications = () => {
        if (locale === 'en') {
            return [
                { name: 'ISO 27001', icon: 'shield' as const, description: 'Information Security Management' },
                { name: 'API Partner', icon: 'api' as const, description: 'Official Government Partner' },
                { name: 'AI Certified', icon: 'ai' as const, description: 'Certified AI Solutions' },
            ]
        } else if (locale === 'ky') {
            return [
                { name: 'ISO 27001', icon: 'shield' as const, description: 'Маалымат коопсуздугун башкаруу' },
                { name: 'API өнөктөш', icon: 'api' as const, description: 'Расмий мамлекеттик өнөктөш' },
                { name: 'ИИ сертификат', icon: 'ai' as const, description: 'Сертификатталган ИИ чечимдер' },
            ]
        } else {
            return [
                { name: 'ISO 27001', icon: 'shield' as const, description: 'Управление информационной безопасностью' },
                { name: 'API Partner', icon: 'api' as const, description: 'Официальный партнёр госорганов' },
                { name: 'AI Certified', icon: 'ai' as const, description: 'Сертифицированные ИИ-решения' },
            ]
        }
    }

    const getStats = () => {
        if (locale === 'en') {
            return [
                { value: 10, suffix: '+', label: 'Years of Excellence', sublabel: 'In the market' },
                { value: 50, suffix: '+', label: 'Enterprise Clients', sublabel: 'Trust our solutions' },
                { value: 99.9, suffix: '%', label: 'System Uptime', sublabel: 'Guaranteed reliability' },
                { value: 24, suffix: '/7', label: 'Support', sublabel: 'Always available' },
            ]
        } else if (locale === 'ky') {
            return [
                { value: 10, suffix: '+', label: 'Жыл мыктылык', sublabel: 'Базарда' },
                { value: 50, suffix: '+', label: 'Ири кардарлар', sublabel: 'Бизге ишенет' },
                { value: 99.9, suffix: '%', label: 'Системанын иштеши', sublabel: 'Гарантияланган ишенимдүүлүк' },
                { value: 24, suffix: '/7', label: 'Колдоо', sublabel: 'Дайыма жеткиликтүү' },
            ]
        } else {
            return [
                { value: 10, suffix: '+', label: 'Лет превосходства', sublabel: 'На рынке' },
                { value: 50, suffix: '+', label: 'Крупных клиентов', sublabel: 'Доверяют нам' },
                { value: 99.9, suffix: '%', label: 'Надёжность систем', sublabel: 'Гарантированная стабильность' },
                { value: 24, suffix: '/7', label: 'Поддержка', sublabel: 'Всегда на связи' },
            ]
        }
    }

    const getClients = () => {
        if (locale === 'en') {
            return [
                { icon: 'bank' as const, name: 'Major Banks', description: 'Financial sector' },
                { icon: 'oil' as const, name: 'Oil & Gas', description: 'Industrial sector' },
                { icon: 'gov' as const, name: 'Government', description: 'Public sector' },
                { icon: 'telecom' as const, name: 'Telecom', description: 'Communications' },
            ]
        } else if (locale === 'ky') {
            return [
                { icon: 'bank' as const, name: 'Ири банктар', description: 'Финансы сектору' },
                { icon: 'oil' as const, name: 'Мунай-газ', description: 'Өнөр жай сектору' },
                { icon: 'gov' as const, name: 'Мамлекет', description: 'Мамлекеттик сектор' },
                { icon: 'telecom' as const, name: 'Телеком', description: 'Байланыш' },
            ]
        } else {
            return [
                { icon: 'bank' as const, name: 'Крупные банки', description: 'Финансовый сектор' },
                { icon: 'oil' as const, name: 'Нефть и газ', description: 'Промышленность' },
                { icon: 'gov' as const, name: 'Госорганы', description: 'Государственный сектор' },
                { icon: 'telecom' as const, name: 'Телеком', description: 'Связь и коммуникации' },
            ]
        }
    }

    const translations = getTranslations()
    const certifications = getCertifications()
    const stats = getStats()
    const clients = getClients()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
            }
        }
    }

    return (
        <section id="trust" className="relative py-32 lg:py-40 overflow-hidden bg-[#0a0a0a]">
            {/* Subtle gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header - Apple style large typography */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center mb-24 lg:mb-32"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-tight">
                        {translations.title}
                    </h2>
                    <p className="text-xl lg:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed">
                        {translations.subtitle}
                    </p>
                </motion.div>

                {/* Stats - Large numbers Apple style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-32"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="text-center group"
                        >
                            <div className="relative">
                                <div className="text-5xl sm:text-6xl lg:text-8xl font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tracking-tight">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                            </div>
                            <div className="mt-4 space-y-1">
                                <p className="text-lg lg:text-xl font-medium text-white/90">{stat.label}</p>
                                <p className="text-sm lg:text-base text-white/40">{stat.sublabel}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Clients - Minimal cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <p className="text-center text-sm text-white/30 uppercase tracking-[0.2em] mb-12">
                        {translations.keyClients}
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {clients.map((client, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 mb-6 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-full h-full bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 p-4">
                                            <div className="w-full h-full text-white/60 group-hover:text-white transition-colors duration-300">
                                                {Icons[client.icon]}
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-lg lg:text-xl font-medium text-white mb-2">{client.name}</h3>
                                    <p className="text-sm text-white/40">{client.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications - Horizontal scroll on mobile, grid on desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-center text-sm text-white/30 uppercase tracking-[0.2em] mb-12">
                        {translations.certificationsTitle}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="group flex-1 max-w-sm mx-auto md:mx-0"
                            >
                                <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl rounded-3xl p-6 lg:p-8 border border-white/[0.08] hover:border-white/15 transition-all duration-500 overflow-hidden">
                                    {/* Subtle gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-700" />

                                    <div className="relative flex items-center gap-5">
                                        <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300 p-3">
                                            <div className="w-full h-full text-white/70 group-hover:text-white transition-colors duration-300">
                                                {Icons[cert.icon]}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                                            <p className="text-sm text-white/40 leading-relaxed">{cert.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TrustSignals

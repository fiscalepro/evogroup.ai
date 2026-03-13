'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

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

function AnimatedNumber({ value, suffix = '', decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 })
    const display = useTransform(spring, (v) => parseFloat(v.toFixed(decimals)))
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView) spring.set(value)
    }, [isInView, spring, value])

    useEffect(() => {
        return display.on('change', (latest) => setDisplayValue(latest))
    }, [display])

    return (
        <span ref={ref}>
            {decimals > 0 ? displayValue.toFixed(decimals) : displayValue}
            {suffix}
        </span>
    )
}

const TrustSignals: React.FC = () => {
    const { tObj } = useTranslation()
    const content = tObj('trustSignals')

    const certColors = {
        blue: {
            border: 'border-l-blue-500/60',
            bg: 'bg-blue-500/10',
            text: 'text-blue-400',
        },
        emerald: {
            border: 'border-l-emerald-500/60',
            bg: 'bg-emerald-500/10',
            text: 'text-emerald-400',
        },
        purple: {
            border: 'border-l-purple-500/60',
            bg: 'bg-purple-500/10',
            text: 'text-purple-400',
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        },
    }

    return (
        <section id="trust" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-14 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">
                            {content.overline}
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight max-w-2xl">
                        {content.title}
                    </h2>
                    <p className="mt-4 text-base lg:text-lg text-white/60 max-w-xl leading-relaxed">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Stats — bordered grid with dividers */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.08] rounded-2xl overflow-hidden mb-10"
                >
                    {content.stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={[
                                'px-6 py-8 lg:px-8 lg:py-10 text-center',
                                i % 2 === 0 && i < content.stats.length - 2 ? 'border-r border-white/[0.08]' : '',
                                i < 2 ? 'border-b border-white/[0.08] lg:border-b-0' : '',
                                i === 1 || i === 3 ? 'lg:border-r-0' : '',
                                i === 0 || i === 2 ? 'lg:border-r border-white/[0.08]' : '',
                            ].join(' ')}
                        >
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tabular-nums">
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                            </div>
                            <p className="mt-2.5 text-sm font-medium text-white/80">{stat.label}</p>
                            <p className="mt-0.5 text-xs text-white/50">{stat.sublabel}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Industries + Certifications */}
                <div className="grid lg:grid-cols-[1fr_320px] gap-5 lg:gap-6">

                    {/* Industries */}
                    <div>
                        <p className="text-xs text-white/50 uppercase tracking-[0.18em] font-medium mb-4">
                            {content.industriesLabel}
                        </p>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                        >
                            {content.clients.map((client, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.01 }}
                                    className="group flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.055] hover:border-white/10 transition-all duration-300 cursor-default"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white/75 group-hover:bg-white/10 transition-all duration-300 p-2 mt-0.5">
                                        {Icons[client.icon]}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-semibold text-white/90 leading-tight">{client.name}</p>
                                        <p className="text-xs text-white/55 mt-0.5">{client.description}</p>
                                        <p className="text-xs font-medium text-blue-400/70 mt-1.5">{client.metric}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <p className="text-xs text-white/50 uppercase tracking-[0.18em] font-medium mb-4">
                            {content.certsLabel}
                        </p>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-3"
                        >
                            {content.certs.map((cert, i) => {
                                const colors = certColors[cert.color]
                                return (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className={[
                                            'flex items-center gap-3.5 p-4 rounded-xl',
                                            'bg-white/[0.03] border border-white/[0.06]',
                                            'border-l-2',
                                            colors.border,
                                        ].join(' ')}
                                    >
                                        <div className={['flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center p-2', colors.bg, colors.text].join(' ')}>
                                            {Icons[cert.icon]}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-white leading-tight">{cert.name}</p>
                                            <p className="text-xs text-white/55 mt-0.5 leading-snug">{cert.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustSignals

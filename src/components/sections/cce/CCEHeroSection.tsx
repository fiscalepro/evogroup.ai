'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCEHeroSection: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('cceHero')
    const [currentWord, setCurrentWord] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % t.words.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [t.words.length])

    const stats = [
        { value: t.stat1value, label: t.stat1label },
        { value: t.stat2value, label: t.stat2label },
        { value: t.stat3value, label: t.stat3label },
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center py-32 sm:py-40 px-4 sm:px-6 lg:px-10 overflow-hidden">
            {/* Background gradient orbs */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-500/15 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
            </div> */}

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-8"
                >
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-violet-300">{t.badge}</span>
                </motion.div>

                {/* Title with rotating words */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
                >
                    {t.titleStart}{' '}
                    <span className="inline-block relative">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWord}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent"
                            >
                                {t.words[currentWord]}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg sm:text-xl text-gray-500 dark:text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    {t.subtitle}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a
                        href="#cce-contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-amber-500 rounded-xl text-white font-bold text-lg transition-all hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-1"
                    >
                        {t.cta}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400 dark:text-white/50 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CCEHeroSection

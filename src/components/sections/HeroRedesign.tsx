'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

const HeroRedesign: React.FC = () => {
    const { tObj } = useTranslation()
    const translations = tObj('hero')

    const [wordIndex, setWordIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const words = translations.titleHighlight
        const current = words[wordIndex]
        const typingSpeed = isDeleting ? 60 : 100

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.substring(0, displayText.length + 1))
                if (displayText === current) {
                    setTimeout(() => setIsDeleting(true), 2200)
                }
            } else {
                setDisplayText(current.substring(0, displayText.length - 1))
                if (displayText === '') {
                    setIsDeleting(false)
                    setWordIndex(prev => (prev + 1) % words.length)
                }
            }
        }, typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, wordIndex, translations.titleHighlight])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Subtle gradient orb */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[800px] h-[600px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
                }}
            />
            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <a
                        href="https://main.evogroup.ai/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] text-sm text-gray-600 dark:text-[#F0F0F5]/70 hover:bg-gray-200 transition-colors"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        {translations.preTitle}
                    </a>
                </motion.div>

                {/* Headline with typing effect */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                    <span className="text-gray-900 dark:text-[#F0F0F5]">{translations.title}</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                        {displayText}
                        <span className="animate-pulse text-gray-400 dark:text-[#F0F0F5]/40">|</span>
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-[#F0F0F5]/55 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    {translations.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
                >
                    <Button href="/contact" variant="primary" size="xl" className="arrow-hover sm:px-8">
                        {translations.ctaPrimary}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <Button href="/solutions" variant="outline" size="xl" className="sm:px-8">
                        {translations.ctaSecondary}
                    </Button>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16"
                >
                    {translations.stats.map((stat: { value: string; label: string }, index: number) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 dark:text-[#F0F0F5]/40 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default HeroRedesign

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const dimensionGradients = [
    'linear-gradient(to right, #8b5cf6, #a78bfa)',
    'linear-gradient(to right, #8b5cf6, #fbbf24)',
    'linear-gradient(to right, #f59e0b, #fbbf24)',
    'linear-gradient(to right, #a78bfa, #f59e0b)',
    'linear-gradient(to right, #fbbf24, #8b5cf6)',
    'linear-gradient(to right, #8b5cf6, #f59e0b)',
]

const CCEDeveloperGrowth: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('cceDeveloperGrowth')

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-amber-500/10 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider mb-6"
                >
                    {t.badge}
                </motion.span>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    {t.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-lg text-gray-500 dark:text-white/60 max-w-2xl mb-16"
                >
                    {t.subtitle}
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Dimension tags + benefits */}
                    <div>
                        {/* Dimension tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            {t.dimensions.map((dim, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white dark:bg-[#1a1a24] border border-gray-200 dark:border-white/10 rounded-full text-sm text-gray-700 dark:text-white/80 font-medium"
                                >
                                    {dim.name}
                                </span>
                            ))}
                        </motion.div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {t.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-600 dark:text-white/70">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Developer profile card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-white dark:bg-[#1a1a24] border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8"
                    >
                        {/* Profile header */}
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-white/10">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div>
                                <h4 className="text-gray-900 dark:text-white font-bold">{t.profileName}</h4>
                                <p className="text-gray-400 dark:text-white/50 text-sm">{t.profileRole}</p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-xs text-gray-500 dark:text-white/55">{t.overallLabel}</p>
                                <p className="text-lg font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">{t.overallValue}</p>
                            </div>
                        </div>

                        {/* Dimension bars */}
                        <div className="space-y-4">
                            {t.dimensions.map((dim, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="text-gray-600 dark:text-white/70">{dim.name}</span>
                                        <span className="text-gray-400 dark:text-white/50">{dim.value}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${dim.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                                            className="h-full rounded-full"
                                            style={{ background: dimensionGradients[index] }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CCEDeveloperGrowth

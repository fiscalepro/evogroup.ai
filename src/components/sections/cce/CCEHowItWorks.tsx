'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCEHowItWorks: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('cceHowItWorks')

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-[-10%] w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-[-5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
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
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-16"
                >
                    {t.title}
                </motion.h2>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-violet-500 via-violet-500/50 to-amber-500 opacity-30" />

                    <div className="space-y-12">
                        {t.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 md:gap-8 items-start"
                            >
                                {/* Step number */}
                                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/20 relative z-10">
                                    <span className="text-white font-bold text-xl">{step.number}</span>
                                </div>

                                {/* Step content */}
                                <div className="flex-1 bg-white dark:bg-[#1a1a24] border border-gray-100 dark:border-white/5 rounded-2xl p-6 sm:p-8 transition-all hover:border-violet-500/20">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-500 dark:text-white/60 leading-relaxed mb-5">{step.description}</p>

                                    <div className="flex flex-wrap gap-3">
                                        {step.details.map((detail, dIndex) => (
                                            <span
                                                key={dIndex}
                                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs text-violet-300"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CCEHowItWorks

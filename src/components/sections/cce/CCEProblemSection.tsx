'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCEProblemSection: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('cceProblem')

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-rose-500/10 rounded-full text-xs font-bold text-rose-400 uppercase tracking-wider mb-6"
                >
                    {t.badge}
                </motion.span>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16"
                >
                    {t.title}
                </motion.h2>

                {/* Problem cards grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:border-rose-500/30 hover:-translate-y-1 group"
                        >
                            <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                            <p className="text-white/60 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CCEProblemSection

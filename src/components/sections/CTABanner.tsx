'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
}

const CTABanner: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('ctaBanner')
    const stats = t.stats as Array<{ value: string; label: string; detail: string }>

    return (
        <section className="relative py-20 lg:py-24">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-xs text-[#F0F0F5]/35 uppercase tracking-[0.2em] font-medium mb-12"
                >
                    {t.heading}
                </motion.p>

                {/* Stats grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[#F0F0F5]/[0.06]"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-[#F0F0F5]/[0.02] px-6 py-8 text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-bold text-[#F0F0F5] mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-[#F0F0F5]/60 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-[#F0F0F5]/30">
                                {stat.detail}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CTABanner

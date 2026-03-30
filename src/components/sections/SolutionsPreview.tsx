'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const cardMeta = [
    {
        href: '/solutions/whatsapp',
        gradient: 'from-gray-700 to-gray-900',
        iconBg: 'bg-gray-100 dark:bg-white/[0.06]',
        iconColor: 'text-gray-600 dark:text-[#F0F0F5]/60',
    },
    {
        href: '/solutions/evopay',
        gradient: 'from-gray-700 to-gray-900',
        iconBg: 'bg-gray-100 dark:bg-white/[0.06]',
        iconColor: 'text-gray-600 dark:text-[#F0F0F5]/60',
    },
    {
        href: '/solutions/evoclinic',
        gradient: 'from-gray-700 to-gray-900',
        iconBg: 'bg-gray-100 dark:bg-white/[0.06]',
        iconColor: 'text-gray-600 dark:text-[#F0F0F5]/60',
    },
    {
        href: '/solutions/edo',
        gradient: 'from-gray-700 to-gray-900',
        iconBg: 'bg-gray-100 dark:bg-white/[0.06]',
        iconColor: 'text-gray-600 dark:text-[#F0F0F5]/60',
    },
    {
        href: '/solutions/cce',
        gradient: 'from-gray-700 to-gray-900',
        iconBg: 'bg-gray-100 dark:bg-white/[0.06]',
        iconColor: 'text-gray-600 dark:text-[#F0F0F5]/60',
    },
]

const icons = [
    <svg key="crm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>,
    <svg key="pay" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>,
    <svg key="clinic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg key="edo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>,
    <svg key="cce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>,
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
}

const SolutionsPreview: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('solutionsPreview')
    const solutions = (t.solutions ?? []) as Array<{
        title: string
        description: string
        features: string[]
        metricValue: string
        metricLabel: string
    }>

    return (
        <section className="relative py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-4">
                        {t.title as string}
                    </h2>
                    <p className="text-base lg:text-lg text-gray-500 dark:text-[#F0F0F5]/50 max-w-xl mx-auto">
                        {t.subtitle as string}
                    </p>
                </motion.div>

                {/* Solutions grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-5"
                >
                    {solutions.map((solution, index) => {
                        const meta = cardMeta[index]
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`group relative flex flex-col p-4 sm:p-5 lg:p-7 rounded-2xl border border-transparent hover:border-gray-900 dark:hover:border-white/[0.12] hover:border-opacity-40 bg-white dark:bg-white/[0.02] shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-none transition-all duration-300 ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

                                {/* Icon + metric row */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-11 h-11 rounded-lg ${meta.iconBg} border border-gray-200 dark:border-white/[0.06] flex items-center justify-center ${meta.iconColor}`}>
                                        {icons[index]}
                                    </div>
                                    <div className="text-right">
                                        <div className={`text-lg font-bold bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}>
                                            {solution.metricValue}
                                        </div>
                                        <div className="text-xs text-gray-400 dark:text-[#F0F0F5]/40">{solution.metricLabel}</div>
                                    </div>
                                </div>

                                {/* Title & description */}
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-2">
                                    {solution.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-[#F0F0F5]/50 leading-relaxed mb-6 flex-grow">
                                    {solution.description}
                                </p>

                                {/* Features list */}
                                <ul className="space-y-2 mb-8">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-gray-500 dark:text-[#F0F0F5]/50">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-gray-500 dark:text-[#F0F0F5]/50">
                                                <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link
                                    href={meta.href}
                                    className="arrow-hover inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-gray-900 dark:text-[#F0F0F5]/65 border border-gray-900 dark:border-[#F0F0F5]/[0.08] hover:opacity-60 no-underline transition-all duration-200"
                                >
                                    {t.learnMore as string}
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Compare link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-10"
                >
                    <Link
                        href="/solutions"
                        className="arrow-hover text-sm text-gray-700 dark:text-[#F0F0F5]/70 no-underline transition-all duration-200 hover:opacity-60"
                    >
                        {t.compare as string}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="inline ml-1">
                            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default SolutionsPreview

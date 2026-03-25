'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const problemsMeta = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        solution: 'EvoAI CRM',
        href: '/solutions/whatsapp',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
        ),
        solution: 'EvoPay',
        href: '/solutions/evopay',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
        ),
        solution: 'CCE Platform',
        href: '/solutions/cce',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const ProblemStatement: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('problemStatement')

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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F0F5] tracking-tight mb-4">
                        {t.title}
                    </h2>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Problem cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid md:grid-cols-3 gap-5"
                >
                    {t.problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-7 rounded-2xl border border-[#F0F0F5]/[0.06] hover:border-[#F0F0F5]/[0.12] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-11 h-11 rounded-lg bg-red-500/[0.08] border border-red-400/[0.1] flex items-center justify-center text-red-400/80 mb-5">
                                {problemsMeta[index].icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-[#F0F0F5] mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-5">
                                {problem.description}
                            </p>

                            {/* Solution link */}
                            <Link
                                href={problemsMeta[index].href}
                                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400/80 hover:text-blue-400 no-underline transition-colors"
                            >
                                {t.solveWith.replace('{solution}', problemsMeta[index].solution)}
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProblemStatement

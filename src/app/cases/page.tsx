'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

interface CaseItem {
    tag: string
    product: string
    productHref: string
    company: string
    headline: string
    results: { value: string; label: string }[]
    quote: string
    quoteAuthor: string
}

const cases: CaseItem[] = [
    {
        tag: 'Beauty / Small Business',
        product: 'EvoAI CRM',
        productHref: '/solutions/whatsapp',
        company: 'Saikal Permanent Makeup',
        headline: 'Studio stopped losing clients from missed messages. AI chatbot closed the gap in the first week.',
        results: [
            { value: '<1 min', label: 'Response time' },
            { value: '24/7', label: 'Availability' },
            { value: '0', label: 'Missed inquiries' },
        ],
        quote: 'The chatbot handles everything — clients are happy, bookings went up significantly.',
        quoteAuthor: 'Saikal, studio owner',
    },
    {
        tag: 'Manufacturing / B2B',
        product: 'EvoAI CRM',
        productHref: '/solutions/whatsapp',
        company: 'BIAST.KG',
        headline: 'Full automation from incoming request to shipping. AI chatbot, CRM, and dashboard — all transparent.',
        results: [
            { value: '~0%', label: 'Lost requests' },
            { value: '-80%', label: 'Processing time' },
            { value: '100%', label: 'Transparency' },
        ],
        quote: 'Now I open the dashboard and see every order instantly. Before, I had to call each manager.',
        quoteAuthor: 'CEO, BIAST.KG',
    },
]

const stats = [
    { value: '50+', label: 'Clients', detail: 'Active deployments' },
    { value: '3', label: 'Industries', detail: 'Beauty, manufacturing, IT' },
    { value: '2 weeks', label: 'To results', detail: 'Average launch time' },
    { value: '250%', label: 'Average ROI', detail: 'Within 6-18 months' },
]

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function CasesPage() {
    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground />

            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F5] tracking-tight mb-4">
                        Real results
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        AI automation delivered end-to-end. Here&apos;s what clients get in practice — with numbers and names.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <div className="text-2xl font-bold text-[#F0F0F5] mb-0.5">{s.value}</div>
                                <div className="text-sm font-medium text-[#F0F0F5]/55 mb-0.5">{s.label}</div>
                                <div className="text-xs text-[#F0F0F5]/30">{s.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases */}
            <section className="pb-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6 pt-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-5 mb-12"
                    >
                        {cases.map((card, index) => (
                            <motion.article
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                className="group flex flex-col p-7 lg:p-8 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                {/* Tag + product */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className="text-xs font-medium text-[#F0F0F5]/35 uppercase tracking-wider">
                                        {card.tag}
                                    </span>
                                    <Link
                                        href={card.productHref}
                                        className="text-xs font-medium text-blue-400/60 hover:text-blue-400 no-underline transition-colors"
                                    >
                                        {card.product}
                                    </Link>
                                </div>

                                {/* Company */}
                                <h3 className="text-lg font-bold text-[#F0F0F5] mb-2">
                                    {card.company}
                                </h3>

                                {/* Headline */}
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-6 flex-grow">
                                    {card.headline}
                                </p>

                                {/* Metrics */}
                                <div className="flex gap-6 mb-6 pb-6 border-b border-[#F0F0F5]/[0.06]">
                                    {card.results.map((r, i) => (
                                        <div key={i}>
                                            <div className="text-xl font-bold text-[#F0F0F5] mb-0.5">{r.value}</div>
                                            <div className="text-xs text-[#F0F0F5]/30">{r.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <blockquote>
                                    <p className="text-sm text-[#F0F0F5]/50 leading-relaxed italic mb-2">
                                        &ldquo;{card.quote}&rdquo;
                                    </p>
                                    <cite className="text-xs font-medium text-[#F0F0F5]/30 not-italic">
                                        {card.quoteAuthor}
                                    </cite>
                                </blockquote>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                    >
                        <div>
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">Your business could be next</p>
                            <p className="text-sm text-[#F0F0F5]/40">Free pilot for 2 weeks — no commitment.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0A0E1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors"
                        >
                            Start free pilot <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

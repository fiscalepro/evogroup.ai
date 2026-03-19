'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const products = [
    {
        tag: 'Sales Automation',
        name: 'EvoAI CRM',
        tagline: 'Turn every conversation into a customer',
        description: 'AI chatbot for WhatsApp & Instagram that responds 24/7, books clients, and keeps full history in one CRM.',
        features: ['AI chatbot for WhatsApp & Instagram', 'Automatic client booking', 'CRM with full dialog history', 'Reminders & notifications', 'Sales funnel analytics'],
        price: 'from $200/mo',
        href: '/solutions/whatsapp',
        accent: 'blue',
    },
    {
        tag: 'Payment Infrastructure',
        name: 'EvoPay',
        tagline: 'Payments without loss or delay',
        description: 'Smart ordering & payment system for restaurants. QR code, digital menu, instant payments — no waiting.',
        features: ['QR code ordering', 'AI fraud detection', 'API integration in 1 day', 'Real-time reporting', 'Multi-currency support'],
        price: 'from 5,000 som/mo',
        href: '/solutions/evopay',
        accent: 'emerald',
    },
    {
        tag: 'Code Quality',
        name: 'CCE Platform',
        tagline: 'Every line of code under control',
        description: 'AI code review platform that catches bugs and vulnerabilities before deploy. Integrates with GitHub & GitLab in 5 minutes.',
        features: ['AI review on every PR', 'Vulnerability & bug detection', 'GitHub / GitLab integration', 'Team quality metrics', 'Swarm Intelligence'],
        price: 'from $500/mo',
        href: '/solutions/cce',
        accent: 'purple',
    },
]

const advantages = [
    { value: '2 weeks', label: 'To first result', detail: 'We launch a pilot and show impact within 2 weeks.' },
    { value: '99.9%', label: 'System uptime', detail: 'SLA-guaranteed availability with 24/7 monitoring.' },
    { value: '50+', label: 'Deployments', detail: 'Banks, oil & gas, government, and small business.' },
    { value: '250%', label: 'Average ROI', detail: 'Proven return on investment within 6-18 months.' },
]

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function SolutionsPage() {
    return (
        <div className="relative min-h-screen bg-[#0B0F1A]">
            <div
                className="fixed inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(30, 64, 175, 0.1), transparent)' }}
            />

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
                        AI solutions for your industry
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        Three products — sales automation, payment processing, and code quality control.
                    </p>
                </motion.div>
            </section>

            {/* Products grid */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-5">
                        {products.map((p, i) => (
                            <motion.div
                                key={p.name}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                className="group flex flex-col p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.12] transition-all duration-300"
                            >
                                <span className="text-xs font-medium text-[#F0F0F5]/35 uppercase tracking-wider mb-4">
                                    {p.tag}
                                </span>

                                <h3 className="text-xl font-bold text-[#F0F0F5] mb-1">{p.name}</h3>
                                <p className="text-sm font-medium text-blue-400/70 mb-3">{p.tagline}</p>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-5">{p.description}</p>

                                <ul className="space-y-2 mb-6 flex-grow">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-[#F0F0F5]/50">
                                            <span className="text-[#F0F0F5]/20"><CheckIcon /></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center justify-between pt-5 border-t border-[#F0F0F5]/[0.06]">
                                    <span className="text-sm text-[#F0F0F5]/35">{p.price}</span>
                                    <Link
                                        href={p.href}
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400/80 hover:text-blue-400 no-underline transition-colors"
                                    >
                                        Learn more <ArrowIcon />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">
                            Enterprise grade, fast start
                        </h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-md mx-auto">
                            Why companies in Kyrgyzstan choose Evolution Group
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {advantages.map((a, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <div className="text-2xl font-bold text-[#F0F0F5] mb-1">{a.value}</div>
                                <div className="text-sm font-medium text-[#F0F0F5]/60 mb-2">{a.label}</div>
                                <p className="text-xs text-[#F0F0F5]/35 leading-relaxed">{a.detail}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                    >
                        <div>
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">Not sure which one fits?</p>
                            <p className="text-sm text-[#F0F0F5]/40">Tell us about your challenge — we&apos;ll recommend the right product and demo it for free.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0B0F1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors"
                        >
                            Get consultation <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

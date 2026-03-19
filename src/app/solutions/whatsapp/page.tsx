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

const stats = [
    { value: '<1 min', label: 'Response time' },
    { value: '24/7', label: 'Availability' },
    { value: '+40%', label: 'Conversion boost' },
    { value: '0', label: 'Missed inquiries' },
]

const features = [
    {
        title: 'AI chatbot for WhatsApp & Instagram',
        desc: 'Answers common questions, consults on services and prices, books clients — fully automatic.',
        items: ['Understands free-form text', 'Custom sales scripts', 'Russian & Kyrgyz support'],
    },
    {
        title: 'CRM with full dialog history',
        desc: 'All conversations, client statuses, and booking history — in one dashboard. Nothing gets lost.',
        items: ['Client card with history', 'Tags & segmentation', 'Export & reports'],
    },
    {
        title: 'Automatic booking & reminders',
        desc: 'Bot schedules appointments, checks availability, and sends reminders — you just serve clients.',
        items: ['Calendar sync', '24h and 1h reminders', 'Reschedule via bot'],
    },
    {
        title: 'Sales funnel & analytics',
        desc: 'See where every potential client is in the pipeline. Track conversion and weak spots.',
        items: ['Visual funnel', 'Channel metrics', 'Period reports'],
    },
]

const steps = [
    { n: '1', title: 'Connect channels', desc: 'WhatsApp Business API and Instagram — integrated in 1 day, no technical skills required.' },
    { n: '2', title: 'Set up the bot', desc: 'We build scripts, questions, and responses tailored to your business. Tested before launch.' },
    { n: '3', title: 'Go live', desc: 'First automatic responses within 48 hours. You start saving time from day one.' },
    { n: '4', title: 'Optimize', desc: 'We analyze dialogs, improve scripts, and scale to new channels as needed.' },
]

const pricing = [
    {
        name: 'Basic',
        price: '$200',
        period: '/mo',
        description: '1 channel (WhatsApp or Instagram), up to 1,000 dialogs/month',
        features: ['AI chatbot', 'CRM system', 'Client booking', 'Reminders', 'Basic analytics'],
        highlighted: false,
    },
    {
        name: 'Business',
        price: '$400',
        period: '/mo',
        description: 'All channels, unlimited dialogs, priority support',
        features: ['Everything in Basic', 'WhatsApp + Instagram', 'Unlimited dialogs', 'Advanced analytics', 'Dedicated manager'],
        highlighted: true,
    },
]

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function WhatsAppCRMPage() {
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
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-5xl mx-auto px-6"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.06] text-xs text-blue-400 uppercase tracking-widest font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        EvoAI CRM
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F5] tracking-tight leading-tight mb-5 max-w-2xl">
                        Turn every conversation into a customer
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-xl leading-relaxed mb-10">
                        AI chatbot for WhatsApp and Instagram that responds 24/7, books clients, and keeps full history in one CRM. Zero missed messages.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0B0F1A] px-7 py-3.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors">
                            Get free demo <ArrowIcon />
                        </Link>
                        <a href="#how-it-works" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#F0F0F5]/60 border border-[#F0F0F5]/[0.08] hover:bg-[#F0F0F5]/[0.04] hover:text-[#F0F0F5] no-underline transition-all">
                            How it works
                        </a>
                    </div>
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
                                <div className="text-sm text-[#F0F0F5]/40">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">Everything you need for sales automation</h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-md mx-auto">From first message to repeat customer — fully automated</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {features.map((f, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-[#F0F0F5] mb-2">{f.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-5">{f.desc}</p>
                                <ul className="space-y-2">
                                    {f.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-[#F0F0F5]/50">
                                            <span className="text-[#F0F0F5]/20"><CheckIcon /></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">From request to first customer in 48 hours</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {steps.map((s, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <span className="text-xs font-bold text-[#F0F0F5]/20 mb-3 block">Step {s.n}</span>
                                <h3 className="text-base font-bold text-[#F0F0F5] mb-2">{s.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/40 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">Simple, transparent pricing</h2>
                        <p className="text-base text-[#F0F0F5]/45">Free demo included. No commitment.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {pricing.map((plan, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className={`flex flex-col p-7 rounded-2xl border transition-all duration-300 ${
                                    plan.highlighted
                                        ? 'border-blue-500/20 bg-blue-500/[0.04]'
                                        : 'border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]'
                                }`}
                            >
                                {plan.highlighted && <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-3">Recommended</span>}
                                {!plan.highlighted && <span className="text-xs font-medium text-[#F0F0F5]/35 uppercase tracking-wider mb-3">{plan.name}</span>}

                                <div className="text-3xl font-bold text-[#F0F0F5] mb-1">
                                    {plan.price}<span className="text-base font-normal text-[#F0F0F5]/40">{plan.period}</span>
                                </div>
                                <p className="text-sm text-[#F0F0F5]/40 mb-6">{plan.description}</p>

                                <ul className="space-y-2.5 mb-7 flex-grow">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-[#F0F0F5]/55">
                                            <span className="text-blue-400/50"><CheckIcon /></span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/contact"
                                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold no-underline transition-all duration-200 ${
                                        plan.highlighted
                                            ? 'bg-[#F0F0F5] text-[#0B0F1A] hover:bg-white'
                                            : 'border border-[#F0F0F5]/[0.08] text-[#F0F0F5]/65 hover:bg-[#F0F0F5]/[0.04] hover:text-[#F0F0F5]'
                                    }`}
                                >
                                    Get started <ArrowIcon />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
                        <div>
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">Ready to try EvoAI CRM?</p>
                            <p className="text-sm text-[#F0F0F5]/40">Free demo — we&apos;ll launch and show results in 2 weeks.</p>
                        </div>
                        <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0B0F1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors">
                            Get free demo <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

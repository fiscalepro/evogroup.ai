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
    { value: '<5 min', label: 'PR review time' },
    { value: '95%', label: 'Accuracy' },
    { value: '117+', label: 'MCP tools' },
    { value: '6', label: 'Growth dimensions' },
]

const features = [
    {
        title: 'AI code review on every PR',
        desc: 'Automatic analysis of pull requests against your team standards. AI checks code before the lead sees it.',
        items: ['Pattern detection', 'Style consistency', 'Performance suggestions'],
    },
    {
        title: 'Vulnerability & bug detection',
        desc: 'Catches security issues, potential bugs, and anti-patterns before they reach production.',
        items: ['OWASP Top 10 scanning', 'Dependency audit', 'Secret leak prevention'],
    },
    {
        title: 'Swarm Intelligence',
        desc: 'One developer\'s effective pattern automatically spreads to the whole team. Collective knowledge grows daily.',
        items: ['Auto-discovery of patterns', 'Smart recommendations', 'Effectiveness metrics'],
    },
    {
        title: 'Developer growth tracking',
        desc: 'Six dimensions of professional growth. Automatic metrics, personalized recommendations, management reports.',
        items: ['Productivity & quality scores', 'AI mastery tracking', 'Team leaderboards'],
    },
]

const steps = [
    { n: '1', title: 'Connect', desc: 'We create an Enterprise Config tailored to your standards. Set up Dashboard and security policies.' },
    { n: '2', title: 'Launch', desc: 'Each developer runs one command — and immediately works to unified standards with full toolkit.' },
    { n: '3', title: 'Grow', desc: 'Swarm Intelligence collects patterns, Dashboard shows metrics. The team gets smarter every day.' },
]

const pricing = [
    {
        name: 'Starter',
        price: '$500',
        period: '/mo',
        description: 'Up to 5 developers, basic features',
        features: ['AI code review', 'GitHub integration', 'Basic metrics', 'Email support', 'Standard patterns'],
        highlighted: false,
    },
    {
        name: 'Team',
        price: '$900',
        period: '/mo',
        description: 'Up to 15 developers, full platform',
        features: ['Everything in Starter', 'Swarm Intelligence', 'Developer growth', 'GitLab + GitHub', 'Priority support'],
        highlighted: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Unlimited developers, self-hosted option',
        features: ['Everything in Team', 'Self-hosted deploy', 'Custom SLA', 'Compliance reports', 'Dedicated manager'],
        highlighted: false,
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

export default function CCEPage() {
    return (
        <div className="relative min-h-screen bg-[#0B0F1A]">
            <div className="fixed inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139, 92, 246, 0.07), transparent)' }} />

            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-5xl mx-auto px-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/[0.06] text-xs text-purple-400 uppercase tracking-widest font-medium mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                        CCE Platform
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F5] tracking-tight leading-tight mb-5 max-w-3xl">
                        One AI assistant is good. A team of AI assistants is unstoppable.
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-xl leading-relaxed mb-10">
                        CCE transforms AI coding from a solo tool into coordinated team intelligence. One developer&apos;s pattern becomes the whole team&apos;s knowledge.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0B0F1A] px-7 py-3.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors">
                            Contact us <ArrowIcon />
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
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">AI-powered code quality at scale</h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-md mx-auto">From code review to team growth — everything automated</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {features.map((f, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300">
                                <h3 className="text-lg font-bold text-[#F0F0F5] mb-2">{f.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-5">{f.desc}</p>
                                <ul className="space-y-2">
                                    {f.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-[#F0F0F5]/50">
                                            <span className="text-[#F0F0F5]/20"><CheckIcon /></span>{item}
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">3 steps to a smarter team</h2>
                    </motion.div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        {steps.map((s, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
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
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">Plans for every team size</h2>
                        <p className="text-base text-[#F0F0F5]/45">Start small, scale as your team grows.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-5">
                        {pricing.map((plan, i) => (
                            <motion.div key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className={`flex flex-col p-7 rounded-2xl border ${plan.highlighted ? 'border-purple-500/20 bg-purple-500/[0.04]' : 'border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]'}`}>
                                <span className={`text-xs font-medium uppercase tracking-wider mb-3 ${plan.highlighted ? 'text-purple-400' : 'text-[#F0F0F5]/35'}`}>
                                    {plan.highlighted ? 'Recommended' : plan.name}
                                </span>
                                <div className="text-3xl font-bold text-[#F0F0F5] mb-1">{plan.price}<span className="text-base font-normal text-[#F0F0F5]/40">{plan.period}</span></div>
                                <p className="text-sm text-[#F0F0F5]/40 mb-6">{plan.description}</p>
                                <ul className="space-y-2.5 mb-7 flex-grow">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-[#F0F0F5]/55">
                                            <span className="text-purple-400/50"><CheckIcon /></span>{f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold no-underline transition-all ${plan.highlighted ? 'bg-[#F0F0F5] text-[#0B0F1A] hover:bg-white' : 'border border-[#F0F0F5]/[0.08] text-[#F0F0F5]/65 hover:bg-[#F0F0F5]/[0.04] hover:text-[#F0F0F5]'}`}>
                                    {plan.price === 'Custom' ? 'Contact sales' : 'Get started'} <ArrowIcon />
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
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">Ready to level up your team?</p>
                            <p className="text-sm text-[#F0F0F5]/40">Set up CCE in one command — see results in the first week.</p>
                        </div>
                        <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0B0F1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors">
                            Get started <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

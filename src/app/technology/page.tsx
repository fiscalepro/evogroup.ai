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

const techCategories = [
    {
        label: 'AI / ML',
        desc: 'Models and frameworks for building intelligent systems',
        items: [
            { name: 'OpenAI GPT-4', sub: 'Large Language Models' },
            { name: 'TensorFlow', sub: 'ML Framework' },
            { name: 'PyTorch', sub: 'Deep Learning' },
            { name: 'LangChain', sub: 'LLM Orchestration' },
            { name: 'Hugging Face', sub: 'Model Hub' },
            { name: 'scikit-learn', sub: 'Classical ML' },
        ],
    },
    {
        label: 'Infrastructure',
        desc: 'Cloud platform for scalable deployment',
        items: [
            { name: 'Kubernetes', sub: 'Container Orchestration' },
            { name: 'AWS / GCP', sub: 'Cloud Platforms' },
            { name: 'Docker', sub: 'Containerization' },
            { name: 'PostgreSQL', sub: 'Relational Database' },
            { name: 'Redis', sub: 'In-Memory Cache' },
            { name: 'Kafka', sub: 'Event Streaming' },
        ],
    },
    {
        label: 'Security',
        desc: 'Enterprise-grade data protection and access control',
        items: [
            { name: 'ISO 27001', sub: 'Information Security' },
            { name: 'GDPR', sub: 'Data Protection' },
            { name: 'OAuth 2.0', sub: 'Authorization' },
            { name: 'mTLS', sub: 'Mutual TLS' },
            { name: 'Vault', sub: 'Secrets Management' },
            { name: 'SIEM', sub: 'Security Monitoring' },
        ],
    },
]

const capabilities = [
    { title: 'Multi-agent AI systems', desc: 'Multiple AI agents work in tandem: one collects data, another analyzes, a third makes decisions.' },
    { title: 'RAG & vector databases', desc: 'Models work with corporate knowledge via Retrieval-Augmented Generation without retraining.' },
    { title: 'Real-time data processing', desc: 'Kafka + stream processing for real-time systems with latency under 100ms.' },
    { title: 'On-premise & hybrid deploy', desc: 'Deploy on client servers for maximum security and data control.' },
]

const steps = [
    { title: 'Research', desc: 'Study business processes, identify bottlenecks, formulate technical requirements with the client team.' },
    { title: 'Prototype', desc: 'Build MVP in 2 weeks. Real data, real business process — no guesswork.' },
    { title: 'Development', desc: 'Production code with tests, CI/CD, and monitoring. Short iterations, weekly progress demos.' },
    { title: 'Deploy', desc: 'Roll out to client infrastructure or our cloud cluster. Zero-downtime, automatic rollback on failure.' },
    { title: 'Monitoring', desc: 'Dashboards, alerts, 99.9% SLA. Proactive response before issues affect business.' },
    { title: 'Optimization', desc: 'Analyze data, improve models, and scale the system as load grows.' },
]

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function TechnologyPage() {
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
                        Modern AI stack
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        Battle-tested tools and custom solutions to make your AI systems reliable at any scale.
                    </p>
                </motion.div>
            </section>

            {/* Tech categories */}
            <section className="pb-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6 pt-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">Three layers of reliable AI architecture</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {techCategories.map((cat, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <span className="text-xs font-medium text-[#F0F0F5]/35 uppercase tracking-wider mb-4 block">{cat.label}</span>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed mb-6">{cat.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item, j) => (
                                        <div key={j} className="px-3 py-1.5 rounded-lg border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
                                            <span className="text-xs font-medium text-[#F0F0F5]/60">{item.name}</span>
                                            <span className="text-[10px] text-[#F0F0F5]/25 ml-1">{item.sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">What we build</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <h3 className="text-base font-bold text-[#F0F0F5] mb-2">{c.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">How we build AI systems</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <span className="text-xs font-bold text-[#F0F0F5]/20 mb-3 block">Step {i + 1}</span>
                                <h3 className="text-base font-bold text-[#F0F0F5] mb-2">{s.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/40 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
                        <div>
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">Want to discuss project architecture?</p>
                            <p className="text-sm text-[#F0F0F5]/40">Tell us your challenge — we&apos;ll recommend the optimal tech stack.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0A0E1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors"
                        >
                            Discuss project <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

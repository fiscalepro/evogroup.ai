'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const techCategories = [
    {
        id: 'ai',
        label: 'AI / ML',
        color: 'blue' as const,
        desc: 'Модели и фреймворки для построения интеллектуальных систем',
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
        id: 'infra',
        label: 'Инфраструктура',
        color: 'purple' as const,
        desc: 'Облачная платформа для масштабируемого деплоя',
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
        id: 'security',
        label: 'Безопасность',
        color: 'emerald' as const,
        desc: 'Корпоративные стандарты защиты данных и доступа',
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

const palette = {
    blue: {
        badge: 'bg-blue-500/[0.07] border-blue-500/20 text-blue-400',
        line: 'from-blue-500',
        hover: 'hover:border-blue-500/20',
        chipBg: 'bg-blue-500/[0.06] border-blue-500/15 text-blue-300',
    },
    purple: {
        badge: 'bg-purple-500/[0.07] border-purple-500/20 text-purple-400',
        line: 'from-purple-500',
        hover: 'hover:border-purple-500/20',
        chipBg: 'bg-purple-500/[0.06] border-purple-500/15 text-purple-300',
    },
    emerald: {
        badge: 'bg-emerald-500/[0.07] border-emerald-500/20 text-emerald-400',
        line: 'from-emerald-500',
        hover: 'hover:border-emerald-500/20',
        chipBg: 'bg-emerald-500/[0.06] border-emerald-500/15 text-emerald-300',
    },
}

const capabilities = [
    { title: 'Мультиагентные AI-системы', desc: 'Несколько AI-агентов работают в связке: один собирает данные, другой анализирует, третий принимает решения.' },
    { title: 'RAG и векторные базы данных', desc: 'Модели работают с корпоративными знаниями через Retrieval-Augmented Generation без переобучения.' },
    { title: 'Потоковая обработка данных', desc: 'Kafka + stream-процессинг для систем реального времени с задержкой менее 100 мс.' },
    { title: 'On-premise и гибридный деплой', desc: 'Разворачиваем на серверах клиента для максимальной безопасности и контроля данных.' },
]

const principles = [
    { n: '01', title: 'Исследование', desc: 'Изучаем бизнес-процессы, выявляем узкие места и формулируем техническое задание вместе с командой клиента.' },
    { n: '02', title: 'Прототип', desc: 'Строим MVP за 2 недели. Реальные данные, реальный бизнес-процесс — без лишних предположений.' },
    { n: '03', title: 'Разработка', desc: 'Пишем продакшн-код с тестами, CI/CD и мониторингом. Итерируем коротко, показываем прогресс еженедельно.' },
    { n: '04', title: 'Деплой', desc: 'Выкатываем на инфраструктуру клиента или наш облачный кластер. Zero-downtime, автоматический откат при сбое.' },
    { n: '05', title: 'Мониторинг', desc: 'Дашборды, алерты, SLA 99.9%. Проактивно реагируем до того, как проблема затронет бизнес.' },
    { n: '06', title: 'Оптимизация', desc: 'Анализируем данные, улучшаем модели и масштабируем систему по мере роста нагрузки.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function TechnologyContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-500/[0.05] rounded-full blur-[140px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Технологии</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4 max-w-2xl">
                        Передовой<br />AI стек
                    </h1>
                    <p className="text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                        Используем battle-tested инструменты и собственные разработки, чтобы ваши AI-системы работали надёжно в любом масштабе.
                    </p>
                </motion.div>
            </section>

            {/* Tech categories */}
            <section className="pb-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Стек</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
                            Три уровня надёжной<br />AI-архитектуры
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {techCategories.map((cat, i) => {
                            const g = palette[cat.color]
                            return (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-40px' }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className={`bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden transition-colors duration-300 ${g.hover}`}
                                >
                                    <div className={`h-[1.5px] bg-gradient-to-r ${g.line} to-transparent`} />
                                    <div className="p-7">
                                        <span className={`inline-flex text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 mb-5 ${g.badge}`}>
                                            {cat.label}
                                        </span>
                                        <p className="text-sm text-white/55 leading-relaxed mb-6">{cat.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {cat.items.map((item, j) => (
                                                <div
                                                    key={j}
                                                    className={`flex flex-col px-3 py-2 rounded-lg border ${g.chipBg}`}
                                                >
                                                    <span className="text-[13px] font-semibold leading-tight">{item.name}</span>
                                                    <span className="text-[11px] opacity-60 leading-tight">{item.sub}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Экспертиза</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Что умеем строить
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-7 hover:border-white/[0.12] transition-colors duration-300"
                            >
                                <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Методология</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Как мы строим<br />AI-системы
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.12] transition-colors duration-300"
                            >
                                <span className="block text-4xl font-black text-white/[0.06] mb-4 tabular-nums leading-none">{p.n}</span>
                                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.07] rounded-2xl px-7 py-6 bg-white/[0.02]"
                    >
                        <div>
                            <p className="text-base font-semibold text-white mb-1">Хотите обсудить архитектуру проекта?</p>
                            <p className="text-sm text-white/55">Расскажите задачу — предложим оптимальный технологический стек.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Обсудить проект
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function TechnologyPage() {
    return (
        <TechnologyContent />
    )
}

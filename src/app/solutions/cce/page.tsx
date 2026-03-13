'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

// ─── Icons ────────────────────────────────────────────────────────────────────

const CheckIcon = () => (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
    { value: '<5 мин', label: 'Ревью PR', sub: 'Автоматический анализ за минуты' },
    { value: '95%', label: 'Точность', sub: 'Выявление реальных проблем' },
    { value: 'GitHub', label: '+ GitLab', sub: 'Нативная интеграция за 5 минут' },
    { value: '0', label: 'Уязвимостей', sub: 'Пропущенных до деплоя' },
]

const features = [
    {
        title: 'AI-ревью каждого пул-реквеста',
        desc: 'ИИ проверяет каждый PR автоматически: находит баги, нарушения стиля, потенциальные ошибки логики и предлагает исправления прямо в комментариях.',
        items: ['Ревью на любом языке программирования', 'Комментарии с объяснением и примером фикса', 'Настройка под ваш стиль кода'],
    },
    {
        title: 'Поиск уязвимостей до деплоя',
        desc: 'Сканирует код на OWASP Top 10, SQL-инъекции, XSS, утечки токенов и секретов. Блокирует слияние PR с критическими уязвимостями.',
        items: ['OWASP Top 10 и CVE-базы', 'Детектирование секретов и токенов', 'Блокировка критических PR'],
    },
    {
        title: 'Метрики качества команды',
        desc: 'Отслеживаете технический долг, покрытие тестами, сложность кода и скорость ревью по каждому разработчику и спринту.',
        items: ['Индивидуальные и командные метрики', 'Технический долг и тренды', 'Отчёты по спринтам'],
    },
    {
        title: 'Интеграция за 5 минут',
        desc: 'GitHub App или GitLab webhook — устанавливается без доступа к серверам. Работает с любым стеком: от монолита на PHP до микросервисов на Go.',
        items: ['GitHub App + GitLab webhook', 'Поддержка монорепозиториев', 'Slack и Jira нотификации'],
    },
]

const steps = [
    { n: '01', title: 'Установка', desc: 'Устанавливаете GitHub App или добавляете GitLab webhook. Занимает 5 минут, не требует изменений в коде.' },
    { n: '02', title: 'Настройка правил', desc: 'Выбираете язык, стиль кода, уровни критичности и какие проверки включить. Всё через удобный UI.' },
    { n: '03', title: 'Первый PR', desc: 'Открываете пул-реквест — ИИ автоматически добавляет комментарии с анализом и предложениями.' },
    { n: '04', title: 'Рост качества', desc: 'Команда видит метрики в дашборде. Технический долг снижается, скорость ревью растёт.' },
]

const problems = [
    {
        before: 'Ревью занимает 2–4 часа на каждый PR',
        after: 'AI проверяет за 5 минут, человек тратит время на архитектуру',
    },
    {
        before: 'Уязвимости попадают в продакшн',
        after: 'Критические проблемы блокируются до слияния',
    },
    {
        before: 'Нет видимости качества по команде',
        after: 'Метрики по каждому разработчику и спринту в реальном времени',
    },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function CCEContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[160px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-emerald-400 uppercase tracking-widest font-medium">CCE Platform</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
                            Каждая строка кода<br />под контролем
                        </h1>
                        <p className="text-base lg:text-lg text-white/50 max-w-xl leading-relaxed mb-10">
                            Платформа AI-ревью кода, которая находит ошибки и уязвимости до деплоя. Интегрируется с GitHub и GitLab за 5 минут. Освобождает команду от рутинных проверок.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                            >
                                Подключить CCE
                                <ArrowIcon />
                            </Link>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white/60 border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:text-white no-underline transition-all"
                            >
                                Как это работает
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Stats bar */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden"
                    >
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className={[
                                    'px-6 py-7 lg:px-8 border-white/[0.07]',
                                    i < 3 ? 'lg:border-r' : '',
                                    i < 2 ? 'border-b border-r lg:border-b-0' : '',
                                    i === 2 ? 'border-r lg:border-r-0' : '',
                                ].join(' ')}
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1 tabular-nums">{s.value}</div>
                                <div className="text-sm font-semibold text-white/70 mb-1">{s.label}</div>
                                <p className="text-xs text-white/50 leading-relaxed">{s.sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Before / After */}
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
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Проблема</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
                            Ревью кода отнимает<br />время и пропускает баги
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        {problems.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.07] rounded-2xl overflow-hidden"
                            >
                                <div className="flex items-center gap-4 px-6 py-5 border-b border-white/[0.07] md:border-b-0 md:border-r">
                                    <span className="flex-shrink-0 text-red-400 text-base leading-none">✕</span>
                                    <p className="text-sm text-white/60">{p.before}</p>
                                </div>
                                <div className="flex items-center gap-4 px-6 py-5 bg-emerald-500/[0.03]">
                                    <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                                        <CheckIcon />
                                    </span>
                                    <p className="text-sm text-white/70 font-medium">{p.after}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
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
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Возможности</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight max-w-lg">
                            Всё для качества кода<br />без лишних усилий
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-emerald-500/25 transition-colors duration-300"
                            >
                                <div className="h-[1.5px] bg-gradient-to-r from-emerald-500 to-transparent" />
                                <div className="p-7">
                                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed mb-5">{f.desc}</p>
                                    <ul className="space-y-2.5">
                                        {f.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                                                    <CheckIcon />
                                                </span>
                                                <span className="text-[13px] text-white/60">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="py-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Запуск</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Настройка за 5 минут,<br />результат с первого PR
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {steps.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-emerald-500/20 transition-colors duration-300"
                            >
                                <span className="block text-4xl font-black text-white/[0.06] mb-4 tabular-nums leading-none">{s.n}</span>
                                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Тарифы</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Прозрачная цена<br />для команды любого размера
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
                        {[
                            {
                                name: 'Старт',
                                price: '$500',
                                sub: 'до 5 разработчиков',
                                items: ['GitHub интеграция', 'AI-ревью PR', 'Базовые метрики', 'Email-поддержка'],
                                accent: false,
                            },
                            {
                                name: 'Команда',
                                price: '$900',
                                sub: 'до 20 разработчиков',
                                items: ['GitHub + GitLab', 'AI-ревью + уязвимости', 'Расширенная аналитика', 'Slack / Jira интеграция'],
                                accent: true,
                            },
                            {
                                name: 'Enterprise',
                                price: 'По запросу',
                                sub: 'без ограничений',
                                items: ['Все возможности', 'On-premise деплой', 'SLA и выделенная поддержка', 'Кастомные правила'],
                                accent: false,
                            },
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`rounded-2xl overflow-hidden ${plan.accent ? 'bg-emerald-500/[0.05] border border-emerald-500/20' : 'bg-white/[0.025] border border-white/[0.07]'}`}
                            >
                                <div className={`h-[1.5px] ${plan.accent ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-emerald-500 to-transparent'}`} />
                                <div className="p-7">
                                    <div className={`text-xs uppercase tracking-widest font-medium mb-3 ${plan.accent ? 'text-emerald-400' : 'text-white/50'}`}>{plan.name}</div>
                                    <div className="text-4xl font-bold text-white mb-1">{plan.price}<span className="text-sm font-normal text-white/55"> / мес</span></div>
                                    <p className="text-sm text-white/55 mb-6">{plan.sub}</p>
                                    <ul className="space-y-2.5">
                                        {plan.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-emerald-500/10 text-emerald-400">
                                                    <CheckIcon />
                                                </span>
                                                <span className="text-[13px] text-white/60">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
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
                            <p className="text-base font-semibold text-white mb-1">Готовы улучшить качество кода?</p>
                            <p className="text-sm text-white/55">Подключите CCE Platform — первый результат увидите с первого же PR.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Подключить CCE
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function CCEPage() {
    return (
        <CCEContent />
    )
}

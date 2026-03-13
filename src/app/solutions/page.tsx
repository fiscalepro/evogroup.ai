'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

// ─── Icons ───────────────────────────────────────────────────────────────────

const ChatIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
)

const PayIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
)

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
)

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

const products = [
	{
		id: 'evoai-crm',
		accentLine: 'from-blue-500',
		accentText: 'text-blue-400',
		accentBg: 'bg-blue-500/10',
		accentBorder: 'border-blue-500/20',
		accentHover: 'hover:border-blue-500/35',
		accentTag: 'bg-blue-500/[0.07] border-blue-500/20 text-blue-400',
		icon: <ChatIcon />,
		tag: 'Автоматизация продаж',
		name: 'EvoAI CRM',
		tagline: 'Превратите каждый диалог в клиента',
		description:
			'AI-чатбот для WhatsApp и Instagram, который отвечает 24/7, записывает клиентов и ведёт всю историю в одной CRM.',
		features: [
			'AI-чатбот в WhatsApp и Instagram',
			'Автоматическая запись клиентов',
			'CRM с историей каждого диалога',
			'Напоминания и уведомления',
			'Аналитика и воронка продаж',
		],
		price: 'от $200 / мес',
		href: '/solutions/whatsapp',
	},
	{
		id: 'evopay',
		accentLine: 'from-purple-500',
		accentText: 'text-purple-400',
		accentBg: 'bg-purple-500/10',
		accentBorder: 'border-purple-500/20',
		accentHover: 'hover:border-purple-500/35',
		accentTag: 'bg-purple-500/[0.07] border-purple-500/20 text-purple-400',
		icon: <PayIcon />,
		tag: 'Платёжная инфраструктура',
		name: 'EvoPay',
		tagline: 'Платежи без потерь и задержек',
		description:
			'Платёжный процессинг с AI-защитой от мошенничества. Принимайте оплату онлайн и отслеживайте транзакции в реальном времени.',
		features: [
			'Онлайн-приём платежей',
			'AI-антифрод система',
			'API интеграция за 1 день',
			'Отчёты в реальном времени',
			'Мультивалютность',
		],
		price: '1.5% с транзакции',
		href: '/solutions/evopay',
	},
	{
		id: 'cce',
		accentLine: 'from-emerald-500',
		accentText: 'text-emerald-400',
		accentBg: 'bg-emerald-500/10',
		accentBorder: 'border-emerald-500/20',
		accentHover: 'hover:border-emerald-500/35',
		accentTag: 'bg-emerald-500/[0.07] border-emerald-500/20 text-emerald-400',
		icon: <CodeIcon />,
		tag: 'Качество кода',
		name: 'CCE Platform',
		tagline: 'Каждая строка кода под контролем',
		description:
			'Платформа AI-ревью кода, которая находит ошибки и уязвимости до деплоя. Интегрируется с GitHub и GitLab за 5 минут.',
		features: [
			'AI-ревью каждого пул-реквеста',
			'Поиск уязвимостей и ошибок',
			'Интеграция GitHub / GitLab',
			'Метрики качества команды',
			'Отчёты и тренды',
		],
		price: 'от $500 / мес',
		href: '/solutions/cce',
	},
]

const advantages = [
    { stat: '2 нед', label: 'До первого результата', desc: 'Запускаем пилот и показываем эффект уже через 2 недели после старта.' },
    { stat: '99.9%', label: 'Время работы', desc: 'SLA-гарантия доступности с проактивным мониторингом 24/7.' },
    { stat: '50+', label: 'Внедрений', desc: 'Банки, нефтегаз, госорганы и малый бизнес — знаем каждую отрасль.' },
    { stat: '250%', label: 'Средний ROI', desc: 'Доказанная окупаемость инвестиций за 6–18 месяцев.' },
]

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ p, index }: { p: typeof products[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden transition-colors duration-300 ${p.accentHover}`}
        >
            <div className={`h-[1.5px] bg-gradient-to-r ${p.accentLine} to-transparent`} />

            <div className="flex flex-col flex-1 p-7">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                    <span className={`inline-flex text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 ${p.accentTag}`}>
                        {p.tag}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 p-2 ${p.accentBg} ${p.accentText}`}>
                        {p.icon}
                    </div>
                </div>

                {/* Name + tagline + description */}
                <h3 className="text-2xl font-bold text-white leading-tight mb-1">{p.name}</h3>
                <p className={`text-sm font-medium mb-3 ${p.accentText}`}>{p.tagline}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{p.description}</p>

                {/* Features list */}
                <ul className="space-y-2.5 mb-7">
                    {p.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                            <span className={`flex-shrink-0 mt-[2px] w-4 h-4 rounded-full flex items-center justify-center ${p.accentBg} ${p.accentText}`}>
                                <CheckIcon />
                            </span>
                            <span className="text-[13px] text-white/60 leading-snug">{f}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex-1" />

                {/* Footer */}
                <div className="flex items-center justify-between pt-5 border-t border-white/[0.07]">
                    <span className="text-sm text-white/50">{p.price}</span>
                    <Link
                        href={p.href}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold no-underline transition-opacity hover:opacity-75 ${p.accentText}`}
                    >
                        Получить демо
                        <ArrowIcon />
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function SolutionsContent() {
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
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Решения</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4 max-w-2xl">
                        AI под вашу<br />отрасль
                    </h1>
                    <p className="text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                        Три продукта — автоматизация продаж, платёжный процессинг и контроль качества кода.
                    </p>
                </motion.div>
            </section>

            {/* Products grid */}
            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {products.map((p, i) => (
                            <ProductCard key={p.id} p={p} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why us */}
            <section className="relative py-24 border-t border-white/[0.06] overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Почему Evolution Group</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
                            Корпоративный уровень,<br />быстрый старт
                        </h2>
                    </motion.div>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden mb-10"
                    >
                        {advantages.map((a, i) => (
                            <div
                                key={i}
                                className={[
                                    'px-6 py-8 lg:px-8',
                                    i < 3 ? 'lg:border-r border-white/[0.07]' : '',
                                    i < 2 ? 'border-b border-white/[0.07] lg:border-b-0 border-r border-white/[0.07]' : '',
                                    i === 2 ? 'border-r border-white/[0.07] lg:border-r-0' : '',
                                ].join(' ')}
                            >
                                <div className="text-4xl font-bold text-white mb-1.5 tabular-nums">{a.stat}</div>
                                <div className="text-sm font-semibold text-white/65 mb-2">{a.label}</div>
                                <p className="text-xs text-white/50 leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.07] rounded-2xl px-7 py-6 bg-white/[0.02]"
                    >
                        <div>
                            <p className="text-base font-semibold text-white mb-1">Не уверены, что подойдёт?</p>
                            <p className="text-sm text-white/55">Расскажите о задаче — подберём продукт и покажем демо бесплатно.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Получить консультацию
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function SolutionsPage() {
    return (
        <SolutionsContent />
    )
}

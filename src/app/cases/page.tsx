'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import { CaseCard } from '@/components/sections/CaseCard'

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const cases = [
    {
        number: '01',
        color: 'green' as const,
        tag: 'Бьюти · Малый бизнес',
        company: 'Сайкал Перманентный макияж',
        headline: 'Как студия перестала терять клиентов из-за пропущенных сообщений',
        teaser: 'Мастер не успевала отвечать в Instagram и WhatsApp между процедурами — клиенты уходили к конкурентам. AI-чатбот закрыл проблему за первую неделю.',
        results: [
            { value: '<1 мин', label: 'Время ответа' },
            { value: '24/7', label: 'Без выходных' },
            { value: '+↑', label: 'Записей' },
            { value: '0', label: 'Отвлечений' },
        ],
        quote: '«Раньше я сама отвечала на каждое сообщение. Теперь чатбот всё делает за меня — клиенты довольны, записей стало намного больше.»',
        quoteAuthor: '— Сайкал, владелец студии',
        instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
        product: 'EvoAI CRM',
        productHref: '/solutions/whatsapp',
    },
    {
        number: '02',
        color: 'blue' as const,
        tag: 'Производство · B2B',
        company: 'БИАСТ.КГ',
        headline: 'Полная автоматизация: от входящей заявки до отгрузки',
        teaser: 'Производитель сэндвич-панелей терял заявки и тратил часы на ручное оформление каждого заказа. Внедрили AI-чатбот, CRM и дашборд — всё стало прозрачным.',
        results: [
            { value: '~0%', label: 'Потерянных заявок' },
            { value: '−80%', label: 'Времени на обработку' },
            { value: '100%', label: 'Прозрачность' },
            { value: '3–5 дн', label: 'Онбординг' },
        ],
        quote: '«Теперь я в любой момент открываю дашборд и вижу, что происходит с каждым заказом. Раньше нужно было звонить каждому менеджеру.»',
        quoteAuthor: '— Руководитель БИАСТ.КГ',
        instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
        product: 'EvoAI CRM',
        productHref: '/solutions/whatsapp',
    },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function CasesContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-emerald-500/[0.04] rounded-full blur-[140px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Кейсы клиентов</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-4 max-w-2xl">
                        Реальные<br />результаты
                    </h1>
                    <p className="text-base lg:text-lg text-white/60 max-w-lg leading-relaxed">
                        Внедряем AI-автоматизацию под ключ. Вот что получают клиенты на практике — с цифрами и именами.
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 lg:grid-cols-4 border border-white/[0.07] rounded-2xl overflow-hidden"
                    >
                        {[
                            { value: '50+', label: 'Клиентов', sub: 'Активных внедрений' },
                            { value: '3', label: 'Отрасли', sub: 'Бьюти, производство, IT' },
                            { value: '2 нед', label: 'До результата', sub: 'Среднее время запуска' },
                            { value: '250%', label: 'Средний ROI', sub: 'За 6–18 месяцев' },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className={[
                                    'px-6 py-7 lg:px-8 border-white/[0.07]',
                                    i < 3 ? 'lg:border-r' : '',
                                    i < 2 ? 'border-b border-r lg:border-b-0' : '',
                                    i === 2 ? 'border-r lg:border-r-0' : '',
                                ].join(' ')}
                            >
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-1 tabular-nums">{s.value}</div>
                                <div className="text-sm font-semibold text-white/70 mb-1">{s.label}</div>
                                <p className="text-xs text-white/50">{s.sub}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Cases */}
            <section className="pb-24 border-t border-white/[0.06]">
                <div className="max-w-5xl mx-auto px-6 pt-20">
                    <div className="flex flex-col gap-6 mb-12">
                        {cases.map((c, i) => (
                            <CaseCard key={c.number} card={c} index={i} />
                        ))}
                    </div>

                    {/* CTA strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.07] rounded-2xl px-7 py-6 bg-white/[0.02]"
                    >
                        <div>
                            <p className="text-base font-semibold text-white mb-1">Ваш бизнес — следующий кейс?</p>
                            <p className="text-sm text-white/55">Разберём ситуацию и запустим пилот бесплатно на 2 недели.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Начать бесплатный пилот
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function CasesPage() {
    return (
        <CasesContent />
    )
}

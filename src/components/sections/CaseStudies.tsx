'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CaseCard } from './CaseCard'
import Link from 'next/link'

interface ResultItem {
    value: string
    label: string
}

export interface CaseCard {
    number: string
    color: 'green' | 'blue'
    tag: string
    company: string
    headline: string
    teaser: string
    results: ResultItem[]
    quoteAuthor: string
    instagram: {
        handle: string
        url: string
    }
}

const cases: CaseCard[] = [
    {
        number: '01',
        color: 'green',
        tag: 'Бьюти · Малый бизнес',
        company: 'Сайкал Перманентный макияж',
        headline: 'Как студия перестала терять клиентов из-за пропущенных сообщений',
        teaser: 'Мастер не успевала отвечать в Instagram и WhatsApp между процедурами — клиенты уходили к конкурентам. AI-чатбот закрыл проблему за первую неделю.',
        results: [
            { value: '<1 мин', label: 'Время ответа' },
            { value: '24/7', label: 'Без выходных' },
            { value: '+↑', label: 'Записей' },
            { value: '0', label: 'Отвлечений мастера' },
        ],
        quoteAuthor: '— Сайкал, владелец студии',
        instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
    },
    {
        number: '02',
        color: 'blue',
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
        quoteAuthor: '— Руководитель БИАСТ.КГ',
        instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
    },
]


const CaseStudies: React.FC = () => {
    return (
        <section id="cases" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Subtle background blobs */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Кейсы клиентов</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                        Реальные результаты
                    </h2>
                    <p className="text-base text-white/55 max-w-md leading-relaxed">
                        Внедряем AI-автоматизацию под ключ. Вот что получают клиенты на практике.
                    </p>
                </motion.div>

                {/* Case cards — stacked full-width */}
                <div className="flex flex-col gap-5 mb-10">
                    {cases.map((card, index) => (
                        <CaseCard key={index} card={card} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.07] rounded-2xl px-7 py-6 bg-white/[0.02]"
                >
                    <div>
                        <p className="text-base font-semibold text-white mb-1">Ваш бизнес — следующий кейс?</p>
                        <p className="text-sm text-white/55 leading-relaxed">
                            Разберём ситуацию и запустим пилот бесплатно на 2 недели.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="flex-shrink-0 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                    >
                        Начать бесплатный пилот →
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default CaseStudies

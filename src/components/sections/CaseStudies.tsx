'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CaseCard } from './CaseCard'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

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

function getCaseData(locale: string): { cases: CaseCard[]; overline: string; title: string; subtitle: string; ctaTitle: string; ctaSub: string; ctaBtn: string } {
    if (locale === 'en') {
        return {
            overline: 'Client cases',
            title: 'Real results',
            subtitle: 'We deploy AI automation end-to-end. Here\'s what clients get in practice.',
            ctaTitle: 'Your business — the next case?',
            ctaSub: 'Let\'s analyze the situation and launch a free 2-week pilot.',
            ctaBtn: 'Start free pilot →',
            cases: [
                {
                    number: '01',
                    color: 'green',
                    tag: 'Beauty · Small Business',
                    company: 'Saikal Permanent Makeup',
                    headline: 'How the studio stopped losing clients from missed messages',
                    teaser: 'The artist couldn\'t respond on Instagram and WhatsApp between sessions — clients were leaving for competitors. AI chatbot closed the gap in the first week.',
                    results: [
                        { value: '<1 min', label: 'Response time' },
                        { value: '24/7', label: 'No days off' },
                        { value: '+↑', label: 'Bookings' },
                        { value: '0', label: 'Artist distractions' },
                    ],
                    quoteAuthor: '— Saikal, studio owner',
                    instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
                },
                {
                    number: '02',
                    color: 'blue',
                    tag: 'Manufacturing · B2B',
                    company: 'BIAST.KG',
                    headline: 'Full automation: from incoming request to shipping',
                    teaser: 'Sandwich panel manufacturer was losing requests and spending hours on manual order processing. We deployed AI chatbot, CRM, and dashboard — everything became transparent.',
                    results: [
                        { value: '~0%', label: 'Lost requests' },
                        { value: '−80%', label: 'Processing time' },
                        { value: '100%', label: 'Transparency' },
                        { value: '3–5 d', label: 'Onboarding' },
                    ],
                    quoteAuthor: '— CEO, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
            ],
        }
    }
    if (locale === 'ky') {
        return {
            overline: 'Кардарлардын кейстери',
            title: 'Чыныгы натыйжалар',
            subtitle: 'AI-автоматташтырууну ачкыч менен ишке ашырабыз. Кардарлар практикада эмне алышат.',
            ctaTitle: 'Сиздин бизнес — кийинки кейс?',
            ctaSub: 'Кырдаалды талдап, 2 жумалык бекер пилотту ишке киргизебиз.',
            ctaBtn: 'Бекер пилотту баштоо →',
            cases: [
                {
                    number: '01',
                    color: 'green',
                    tag: 'Сулуулук · Чакан бизнес',
                    company: 'Сайкал Перманенттик макияж',
                    headline: 'Студия кардарларды жоготууну кантип токтотту',
                    teaser: 'Мастер процедуралардын ортосунда Instagram жана WhatsApp\'та жооп берүүгө үлгүрбөй жатты — кардарлар атаандаштарга кетип жатышты. AI-чатбот маселени биринчи жумада чечти.',
                    results: [
                        { value: '<1 мүн', label: 'Жооп убактысы' },
                        { value: '24/7', label: 'Дем алышсыз' },
                        { value: '+↑', label: 'Жазуулар' },
                        { value: '0', label: 'Мастердин алаксуусу' },
                    ],
                    quoteAuthor: '— Сайкал, студия ээси',
                    instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
                },
                {
                    number: '02',
                    color: 'blue',
                    tag: 'Өндүрүш · B2B',
                    company: 'БИАСТ.КГ',
                    headline: 'Толук автоматташтыруу: кириш арыздан жөнөтүүгө чейин',
                    teaser: 'Сэндвич-панель өндүрүүчүсү арыздарды жоготуп, ар бир заказды кол менен иштетүүгө саат коротуп жатты. AI-чатбот, CRM жана дашборд ишке киргизилди — баары ачык болду.',
                    results: [
                        { value: '~0%', label: 'Жоголгон арыздар' },
                        { value: '−80%', label: 'Иштетүү убактысы' },
                        { value: '100%', label: 'Ачыктык' },
                        { value: '3–5 күн', label: 'Онбординг' },
                    ],
                    quoteAuthor: '— Жетекчи, БИАСТ.КГ',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
            ],
        }
    }
    // ru (default)
    return {
        overline: 'Кейсы клиентов',
        title: 'Реальные результаты',
        subtitle: 'Внедряем AI-автоматизацию под ключ. Вот что получают клиенты на практике.',
        ctaTitle: 'Ваш бизнес — следующий кейс?',
        ctaSub: 'Разберём ситуацию и запустим пилот бесплатно на 2 недели.',
        ctaBtn: 'Начать бесплатный пилот →',
        cases: [
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
        ],
    }
}

const CaseStudies: React.FC = () => {
    const { locale } = useTranslation()
    const content = getCaseData(locale)

    return (
        <section id="cases" className="relative py-24 lg:py-32 overflow-hidden">
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
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">{content.overline}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                        {content.title}
                    </h2>
                    <p className="text-base text-white/55 max-w-md leading-relaxed">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Case cards */}
                <div className="flex flex-col gap-5 mb-10">
                    {content.cases.map((card, index) => (
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
                        <p className="text-base font-semibold text-white mb-1">{content.ctaTitle}</p>
                        <p className="text-sm text-white/55 leading-relaxed">{content.ctaSub}</p>
                    </div>
                    <Link
                        href="/contact"
                        className="flex-shrink-0 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                    >
                        {content.ctaBtn}
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default CaseStudies

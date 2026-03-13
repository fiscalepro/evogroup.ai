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
    { value: '1.5%', label: 'Комиссия', sub: 'За успешную транзакцию' },
    { value: '<100мс', label: 'Обработка', sub: 'Скорость проведения платежа' },
    { value: '99.99%', label: 'Аптайм', sub: 'Гарантия по SLA' },
    { value: '50+', label: 'Интеграций', sub: 'Банки, системы и API' },
]

const features = [
    {
        title: 'Приём онлайн-платежей',
        desc: 'Подключите оплату картой, через интернет-банкинг или мобильные кошельки за один день. Поддержка всех популярных методов в Кыргызстане.',
        items: ['Visa, Mastercard, МИР', 'Элкарт и мобильные кошельки', 'Рекуррентные платежи'],
    },
    {
        title: 'AI-антифрод система',
        desc: 'Искусственный интеллект анализирует каждую транзакцию в реальном времени и блокирует подозрительные операции до списания средств.',
        items: ['Скоринг транзакций в реальном времени', 'Поведенческий анализ', 'Автоблокировка мошеннических попыток'],
    },
    {
        title: 'API-интеграция за 1 день',
        desc: 'REST API с подробной документацией, SDK для популярных языков и готовые плагины для 1С, WooCommerce, Bitrix24.',
        items: ['REST API + Webhooks', 'SDK для Python, JS, PHP', 'Готовые плагины для CMS'],
    },
    {
        title: 'Аналитика и отчёты',
        desc: 'Дашборд в реальном времени: выручка, конверсия, возвраты, доли платёжных методов. Экспорт в Excel и 1С одним кликом.',
        items: ['Онлайн-дашборд 24/7', 'Детализация по каждой транзакции', 'Экспорт в Excel и 1С'],
    },
]

const steps = [
    { n: '01', title: 'Регистрация', desc: 'Заполните заявку онлайн. Проверяем документы и активируем аккаунт в течение 1 рабочего дня.' },
    { n: '02', title: 'Интеграция', desc: 'Подключаете наш API к вашему сайту или приложению. Документация и помощь техподдержки включены.' },
    { n: '03', title: 'Тестирование', desc: 'Тестовая среда для проверки всех сценариев оплаты без реальных транзакций.' },
    { n: '04', title: 'Запуск', desc: 'Переходите в production и начинаете принимать платежи. Первые деньги — в тот же день.' },
]

const useCases = [
    {
        tag: 'E-commerce',
        title: 'Интернет-магазины',
        desc: 'Подключите оплату к любому сайту. Поддерживаем все популярные CMS и конструкторы: Tilda, WordPress, Bitrix.',
    },
    {
        tag: 'SaaS / Подписки',
        title: 'Подписочные сервисы',
        desc: 'Автоматические рекуррентные списания. Клиент платит один раз — дальше всё происходит само.',
    },
    {
        tag: 'Услуги',
        title: 'Студии и клиники',
        desc: 'Оплата онлайн при записи, предоплата и депозит. Снижает процент неявок на 40%.',
    },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function EvoPayContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/[0.06] rounded-full blur-[160px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/[0.07] mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                            <span className="text-xs text-purple-400 uppercase tracking-widest font-medium">EvoPay</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
                            Платежи без потерь<br />и задержек
                        </h1>
                        <p className="text-base lg:text-lg text-white/50 max-w-xl leading-relaxed mb-10">
                            Платёжный процессинг с AI-защитой от мошенничества. Принимайте оплату онлайн, отслеживайте транзакции в реальном времени и интегрируйтесь с любой системой за 1 день.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                            >
                                Подключить EvoPay
                                <ArrowIcon />
                            </Link>
                            <a
                                href="#how-it-works"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white/60 border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:text-white no-underline transition-all"
                            >
                                Документация API
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
                                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-1 tabular-nums">{s.value}</div>
                                <div className="text-sm font-semibold text-white/70 mb-1">{s.label}</div>
                                <p className="text-xs text-white/50 leading-relaxed">{s.sub}</p>
                            </div>
                        ))}
                    </motion.div>
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
                            Всё для надёжного<br />приёма платежей
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
                                className="flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-purple-500/25 transition-colors duration-300"
                            >
                                <div className="h-[1.5px] bg-gradient-to-r from-purple-500 to-transparent" />
                                <div className="p-7">
                                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed mb-5">{f.desc}</p>
                                    <ul className="space-y-2.5">
                                        {f.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-400">
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
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Подключение</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            От заявки до первого<br />платежа за 1 день
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
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-purple-500/20 transition-colors duration-300"
                            >
                                <span className="block text-4xl font-black text-white/[0.06] mb-4 tabular-nums leading-none">{s.n}</span>
                                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use cases */}
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
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Применение</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Подходит для любого<br />бизнеса в Кыргызстане
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {useCases.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-purple-500/20 transition-colors duration-300"
                            >
                                <div className="h-[1.5px] bg-gradient-to-r from-purple-500 to-transparent" />
                                <div className="p-7">
                                    <span className="inline-flex text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 bg-purple-500/[0.07] border-purple-500/20 text-purple-400 mb-4">
                                        {c.tag}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
                                </div>
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
                            Платите только за<br />успешные транзакции
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
                        {[
                            { name: 'Старт', fee: '2.0%', limit: 'до $10 000 / мес', items: ['Visa, Mastercard', 'Стандартный антифрод', 'Базовая аналитика', 'Email-поддержка'] },
                            { name: 'Бизнес', fee: '1.5%', limit: 'до $100 000 / мес', items: ['Все методы оплаты', 'AI-антифрод', 'Расширенная аналитика', 'Приоритетная поддержка'], accent: true },
                            { name: 'Enterprise', fee: 'от 1.0%', limit: 'без ограничений', items: ['Индивидуальные условия', 'Выделенный менеджер', 'SLA 99.99%', 'Custom интеграции'] },
                        ].map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`rounded-2xl overflow-hidden ${plan.accent ? 'bg-purple-500/[0.06] border border-purple-500/20' : 'bg-white/[0.025] border border-white/[0.07]'}`}
                            >
                                <div className={`h-[1.5px] ${plan.accent ? 'bg-gradient-to-r from-purple-400 to-purple-600' : 'bg-gradient-to-r from-purple-500 to-transparent'}`} />
                                <div className="p-7">
                                    <div className={`text-xs uppercase tracking-widest font-medium mb-3 ${plan.accent ? 'text-purple-400' : 'text-white/50'}`}>{plan.name}</div>
                                    <div className="text-4xl font-bold text-white mb-1">{plan.fee}<span className="text-sm font-normal text-white/55"> / транзакция</span></div>
                                    <p className="text-sm text-white/55 mb-6">{plan.limit}</p>
                                    <ul className="space-y-2.5">
                                        {plan.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-purple-500/10 text-purple-400">
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
                            <p className="text-base font-semibold text-white mb-1">Готовы подключить EvoPay?</p>
                            <p className="text-sm text-white/55">Оставьте заявку — подключим и настроим в течение 1 рабочего дня.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Подключить сейчас
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function EvoPayPage() {
    return (
        <EvoPayContent />
    )
}

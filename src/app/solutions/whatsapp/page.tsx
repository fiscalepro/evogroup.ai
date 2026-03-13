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
    { value: '<1 мин', label: 'Время ответа', sub: 'Мгновенная реакция на сообщения' },
    { value: '24/7', label: 'Без выходных', sub: 'Бот работает круглосуточно' },
    { value: '+40%', label: 'Конверсий', sub: 'Средний рост у клиентов' },
    { value: '0', label: 'Пропущенных', sub: 'Ни одна заявка не потеряна' },
]

const features = [
    {
        title: 'AI-чатбот для WhatsApp и Instagram',
        desc: 'Отвечает на типовые вопросы, консультирует по услугам и ценам, записывает клиентов — полностью в автоматическом режиме.',
        items: ['Понимает свободный текст', 'Настройка под ваш скрипт продаж', 'Поддержка русского и кыргызского'],
    },
    {
        title: 'CRM с историей каждого диалога',
        desc: 'Все переписки, статусы клиентов и история записей — в одном дашборде. Ничего не теряется, всё под рукой.',
        items: ['Карточка клиента с историей', 'Теги и сегментация', 'Экспорт и отчёты'],
    },
    {
        title: 'Автоматическая запись и напоминания',
        desc: 'Бот сам назначает время, проверяет расписание и отправляет напоминания клиентам — вы только принимаете клиентов.',
        items: ['Синхронизация расписания', 'Напоминание за 24 ч и 1 ч', 'Перенос и отмена через бота'],
    },
    {
        title: 'Воронка продаж и аналитика',
        desc: 'Видите, на каком этапе находится каждый потенциальный клиент. Отслеживаете конверсию и слабые места.',
        items: ['Визуальная воронка', 'Метрики по каналам', 'Отчёт по периодам'],
    },
]

const steps = [
    { n: '01', title: 'Подключаем каналы', desc: 'WhatsApp Business API и Instagram — интеграция за 1 день без технических знаний с вашей стороны.' },
    { n: '02', title: 'Настраиваем бота', desc: 'Вместе прописываем сценарии, вопросы и ответы под ваш бизнес. Тестируем до запуска.' },
    { n: '03', title: 'Запускаем', desc: 'Первые автоматические ответы — уже через 48 часов. Вы начинаете экономить время с первого дня.' },
    { n: '04', title: 'Оптимизируем', desc: 'Анализируем диалоги, улучшаем скрипты, масштабируем на новые каналы по необходимости.' },
]

const cases = [
    { company: 'Студия перманентного макияжа', result: 'Записей стало вдвое больше', desc: 'Мастер перестала отвлекаться на переписки. Бот отвечает клиентам в любое время, записывает и напоминает.' },
    { company: 'Производитель сэндвич-панелей', result: '−80% времени на обработку заявок', desc: 'Входящие заявки с сайта и Instagram автоматически попадают в CRM. Менеджер видит всё в дашборде.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

function WhatsAppCRMContent() {
    return (
        <div className="relative min-h-screen bg-black">
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[160px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="relative z-10 max-w-7xl mx-auto px-6"
                >
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.07] mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-xs text-blue-400 uppercase tracking-widest font-medium">EvoAI CRM</span>
                        </div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-5">
                            Превратите каждый<br />диалог в клиента
                        </h1>
                        <p className="text-base lg:text-lg text-white/50 max-w-xl leading-relaxed mb-10">
                            AI-чатбот для WhatsApp и Instagram, который отвечает 24/7, записывает клиентов и ведёт всю историю в одной CRM. Без пропущенных сообщений.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                            >
                                Получить демо бесплатно
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
                                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1 tabular-nums">{s.value}</div>
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
                            Всё что нужно для<br />автоматизации продаж
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
                                className="flex flex-col bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-blue-500/25 transition-colors duration-300"
                            >
                                <div className="h-[1.5px] bg-gradient-to-r from-blue-500 to-transparent" />
                                <div className="p-7">
                                    <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed mb-5">{f.desc}</p>
                                    <ul className="space-y-2.5">
                                        {f.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2.5">
                                                <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-400">
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
                            От заявки до первого<br />клиента за 48 часов
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
                                className="relative bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:border-blue-500/20 transition-colors duration-300"
                            >
                                <span className="block text-4xl font-black text-white/[0.06] mb-4 tabular-nums leading-none">{s.n}</span>
                                <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases */}
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
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Реальные кейсы</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Уже работает в бизнесах<br />по всему Кыргызстану
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        {cases.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-blue-500/20 transition-colors duration-300"
                            >
                                <div className="h-[1.5px] bg-gradient-to-r from-blue-500 to-transparent" />
                                <div className="p-7">
                                    <span className="inline-flex text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 bg-blue-500/[0.07] border-blue-500/20 text-blue-400 mb-4">
                                        {c.company}
                                    </span>
                                    <div className="text-2xl font-bold text-white mb-3">{c.result}</div>
                                    <p className="text-sm text-white/60 leading-relaxed">{c.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        href="/cases"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 no-underline hover:opacity-75 transition-opacity"
                    >
                        Все кейсы клиентов
                        <ArrowIcon />
                    </Link>
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
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">Стоимость</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                            Прозрачная цена,<br />быстрый старт
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden"
                        >
                            <div className="h-[1.5px] bg-gradient-to-r from-blue-500 to-transparent" />
                            <div className="p-7">
                                <div className="text-xs text-white/50 uppercase tracking-widest font-medium mb-3">Базовый</div>
                                <div className="text-4xl font-bold text-white mb-1">$200<span className="text-lg font-normal text-white/55"> / мес</span></div>
                                <p className="text-sm text-white/55 mb-6">1 канал (WhatsApp или Instagram), до 1000 диалогов в месяц</p>
                                <ul className="space-y-2.5">
                                    {['AI-чатбот', 'CRM-система', 'Запись клиентов', 'Напоминания', 'Базовая аналитика'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-400">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-[13px] text-white/60">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-blue-500/[0.06] border border-blue-500/20 rounded-2xl overflow-hidden"
                        >
                            <div className="h-[1.5px] bg-gradient-to-r from-blue-400 to-blue-600" />
                            <div className="p-7">
                                <div className="text-xs text-blue-400 uppercase tracking-widest font-medium mb-3">Бизнес</div>
                                <div className="text-4xl font-bold text-white mb-1">$400<span className="text-lg font-normal text-white/55"> / мес</span></div>
                                <p className="text-sm text-white/55 mb-6">Все каналы, безлимит диалогов, приоритетная поддержка</p>
                                <ul className="space-y-2.5">
                                    {['Всё из Базового', 'WhatsApp + Instagram', 'Безлимит диалогов', 'Расширенная аналитика', 'Персональный менеджер'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-blue-500/10 text-blue-400">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-[13px] text-white/60">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
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
                            <p className="text-base font-semibold text-white mb-1">Готовы попробовать EvoAI CRM?</p>
                            <p className="text-sm text-white/55">Бесплатное демо — запустим и покажем результат за 2 недели.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                        >
                            Получить бесплатное демо
                            <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default function WhatsAppCRMPage() {
    return (
        <WhatsAppCRMContent />
    )
}

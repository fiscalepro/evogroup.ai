'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const benefitIcons = [
    // Trending up
    <svg key="up" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
    // Zap / fast
    <svg key="zap" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    // Wallet / savings
    <svg key="wallet" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20" /><circle cx="17" cy="15" r="1" /></svg>,
    // Check circle / zero errors
    <svg key="check" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    // Bar chart / analytics
    <svg key="chart" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
]

const BenefitsSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Преимущества',
            title: 'Почему рестораны выбирают EvoPay',
            subtitle: 'Реальные результаты, которые влияют на прибыль',
            benefits: [
                { title: 'Рост среднего чека', description: 'Красивые фото блюд, рекомендации и апсейлы увеличивают заказ. Гость видит весь ассортимент.', statValue: '+30%', statLabel: 'к среднему чеку' },
                { title: 'Быстрое обслуживание', description: 'Заказ сразу на кухне. Нет очередей, нет ожидания. Оборачиваемость столов растёт.', statValue: '2x', statLabel: 'быстрее обслуживание' },
                { title: 'Экономия на персонале', description: 'Меньше официантов в зале. Они фокусируются на сервисе, а не на приёме заказов.', statValue: '-40%', statLabel: 'расходы на персонал' },
                { title: 'Ноль ошибок', description: 'Гость сам вводит заказ — нет искажений. Меньше конфликтов и возвратов.', statValue: '0', statLabel: 'ошибок в заказах' },
                { title: 'Аналитика и данные', description: 'Понимайте, что заказывают, в какое время, какие блюда популярны. Принимайте решения на данных.', statValue: '24/7', statLabel: 'статистика онлайн' }
            ]
        },
        en: {
            badge: 'Benefits',
            title: 'Why restaurants choose EvoPay',
            subtitle: 'Real results that impact your profit',
            benefits: [
                { title: 'Average check growth', description: 'Beautiful dish photos, recommendations and upsells increase orders. Guest sees full menu.', statValue: '+30%', statLabel: 'average check' },
                { title: 'Fast service', description: 'Order goes straight to kitchen. No queues, no waiting. Table turnover increases.', statValue: '2x', statLabel: 'faster service' },
                { title: 'Staff savings', description: 'Fewer waiters in the hall. They focus on service, not taking orders.', statValue: '-40%', statLabel: 'staff costs' },
                { title: 'Zero errors', description: 'Guest enters order themselves — no distortions. Fewer conflicts and returns.', statValue: '0', statLabel: 'order errors' },
                { title: 'Analytics & data', description: 'Understand what they order, when, which dishes are popular. Make data-driven decisions.', statValue: '24/7', statLabel: 'online statistics' }
            ]
        },
        ky: {
            badge: 'Артыкчылыктар',
            title: 'Эмне үчүн рестораңдар EvoPay тандашат',
            subtitle: 'Пайдага таасир эткен реалдуу натыйжалар',
            benefits: [
                { title: 'Орточо чектин өсүшү', description: 'Тамактардын кооз сүрөттөрү, сунуштар жана апсейлдер заказды көбөйтөт. Конок толук ассортиментти көрөт.', statValue: '+30%', statLabel: 'орточо чек' },
                { title: 'Тез тейлөө', description: 'Заказ дароо ашканага кетет. Кезек жок, күтүү жок. Столдордун айланымы өсөт.', statValue: '2x', statLabel: 'тезирээк тейлөө' },
                { title: 'Персоналга үнөмдөө', description: 'Залда азыраак официанттар. Алар заказ кабыл алууга эмес, сервиске көңүл бурушат.', statValue: '-40%', statLabel: 'персоналга чыгымдар' },
                { title: 'Нөл каталар', description: 'Конок заказды өзү киргизет — бурмалоо жок. Конфликттер жана кайтарымдар азыраак.', statValue: '0', statLabel: 'заказ каталары' },
                { title: 'Аналитика жана маалыматтар', description: 'Эмне заказ беришкенин, качан, кайсы тамактар популярдуу экенин түшүнүңүз. Маалыматтарга негизделген чечимдерди кабыл алыңыз.', statValue: '24/7', statLabel: 'онлайн статистика' }
            ]
        }
    }

    const t = translations[locale] || translations.ru
    return (
        <section id="benefits" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-6"
                    >
                        {t.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-500 dark:text-white/60 max-w-xl mx-auto"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-white dark:bg-[#1a1a24] border border-gray-100 dark:border-white/5 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:border-cyan-500/30 group overflow-hidden"
                        >
                            {/* Top Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Icon */}
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-cyan-600 dark:text-cyan-400">
                                {benefitIcons[index]}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 dark:text-white/60 leading-relaxed mb-6">
                                {benefit.description}
                            </p>

                            {/* Stat */}
                            <div className="pt-5 border-t border-gray-200 dark:border-white/10 flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                                    {benefit.statValue}
                                </span>
                                <span className="text-sm text-gray-400 dark:text-white/50">
                                    {benefit.statLabel}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const stepIcons = [
    // QR / scan
    <svg key="scan" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="3" height="3" /><line x1="21" y1="14" x2="21" y2="14.01" /><line x1="21" y1="21" x2="21" y2="21.01" /><line x1="14" y1="21" x2="14" y2="21.01" /></svg>,
    // Menu / list
    <svg key="menu" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>,
    // Cooking / utensils
    <svg key="cook" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 010 8h-1" /><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
    // Credit card / payment
    <svg key="card" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
]

const HowItWorksSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Как это работает',
            title: '4 простых шага',
            subtitle: 'От сканирования до оплаты — меньше минуты',
            steps: [
                { number: 1, title: 'Сканирует', description: 'Гость сканирует QR-код на столе с помощью камеры телефона' },
                { number: 2, title: 'Выбирает', description: 'Открывается цифровое меню с фото, описанием и ценами. Добавляет блюда в корзину' },
                { number: 3, title: 'Получает', description: 'Заказ автоматически уходит на кухню. Гость наслаждается едой' },
                { number: 4, title: 'Оплачивает', description: 'Оплата картой, Apple Pay, Google Pay. Мгновенно и безопасно' }
            ]
        },
        en: {
            badge: 'How it works',
            title: '4 simple steps',
            subtitle: 'From scanning to payment — less than a minute',
            steps: [
                { number: 1, title: 'Scans', description: 'Guest scans QR code on the table with phone camera' },
                { number: 2, title: 'Chooses', description: 'Digital menu opens with photos, descriptions and prices. Adds dishes to cart' },
                { number: 3, title: 'Receives', description: 'Order automatically goes to kitchen. Guest enjoys the food' },
                { number: 4, title: 'Pays', description: 'Payment by card, Apple Pay, Google Pay. Instant and secure' }
            ]
        },
        ky: {
            badge: 'Кантип иштейт',
            title: '4 жөнөкөй кадам',
            subtitle: 'Сканерлөөдөн төлөмгө чейин — бир мүнөттөн аз',
            steps: [
                { number: 1, title: 'Сканерлейт', description: 'Конок телефондун камерасы менен үстөлдөгү QR-кодду сканерлейт' },
                { number: 2, title: 'Тандайт', description: 'Сүрөттөр, сүрөттөмөлөр жана баалар менен санариптик меню ачылат. Себетке тамактарды кошот' },
                { number: 3, title: 'Алат', description: 'Заказ автоматтык түрдө ашканага кетет. Конок тамактан ырахат алат' },
                { number: 4, title: 'Төлөйт', description: 'Карта, Apple Pay, Google Pay менен төлөм. Заматта жана коопсуз' }
            ]
        }
    }

    const t = translations[locale] || translations.ru
    return (
        <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
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

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-30 hidden lg:block" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center relative"
                            >
                                {/* Step Number */}
                                <div className="relative z-10 w-20 h-20 mx-auto mb-6 bg-white dark:bg-[#1a1a24] border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                    <span className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="mb-4 text-cyan-600 dark:text-cyan-400">
                                    {stepIcons[index]}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-500 dark:text-white/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorksSection

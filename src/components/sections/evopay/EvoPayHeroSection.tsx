'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const EvoPayHeroSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Новое решение для ресторанов',
            titleStart: 'Гости заказывают и оплачивают',
            titleHighlight: 'сами',
            subtitle: 'EvoPay — умная система заказа и оплаты. Клиент сканирует QR-код на столе, выбирает блюда, оплачивает — без ожидания официанта.',
            cta: 'Получить демо',
            howItWorks: 'Как это работает',
            stat1Value: '30%',
            stat1Label: 'Рост среднего чека',
            stat2Value: '2x',
            stat2Label: 'Быстрее обслуживание',
            stat3Value: '3 дня',
            stat3Label: 'На запуск системы',
            table: 'Столик №5',
            dish1: 'Том Ям с креветками',
            dish2: 'Поке с лососем',
            dish3: 'Раф кофе',
            items: '3 позиции',
            pay: 'Оплатить →',
            qrCode: 'QR-код',
            scan: 'Сканируй',
            payment: 'Оплата',
            success: 'Успешно!'
        },
        en: {
            badge: 'New solution for restaurants',
            titleStart: 'Guests order and pay',
            titleHighlight: 'themselves',
            subtitle: 'EvoPay — smart ordering and payment system. Customer scans QR code on the table, selects dishes, pays — no waiting for a waiter.',
            cta: 'Get demo',
            howItWorks: 'How it works',
            stat1Value: '30%',
            stat1Label: 'Average check growth',
            stat2Value: '2x',
            stat2Label: 'Faster service',
            stat3Value: '3 days',
            stat3Label: 'To launch',
            table: 'Table #5',
            dish1: 'Tom Yum with shrimp',
            dish2: 'Poke with salmon',
            dish3: 'Raf coffee',
            items: '3 items',
            pay: 'Pay →',
            qrCode: 'QR code',
            scan: 'Scan',
            payment: 'Payment',
            success: 'Success!'
        },
        ky: {
            badge: 'Рестораңдар үчүн жаңы чечим',
            titleStart: 'Конокторго заказ беришет жана төлөшөт',
            titleHighlight: 'өздөрү',
            subtitle: 'EvoPay — акылдуу заказ жана төлөм системасы. Кардар үстөлдөгү QR-кодду сканерлейт, тамактарды тандайт, төлөйт — официантты күтпөстөн.',
            cta: 'Демо алуу',
            howItWorks: 'Кантип иштейт',
            stat1Value: '30%',
            stat1Label: 'Орточо чектин өсүшү',
            stat2Value: '2x',
            stat2Label: 'Тезирээк тейлөө',
            stat3Value: '3 күн',
            stat3Label: 'Ишке киргизүү',
            table: 'Стол №5',
            dish1: 'Том Ям креветка менен',
            dish2: 'Поке лосось менен',
            dish3: 'Раф кофе',
            items: '3 позиция',
            pay: 'Төлөө →',
            qrCode: 'QR-код',
            scan: 'Сканерле',
            payment: 'Төлөм',
            success: 'Ийгиликтүү!'
        }
    }

    const t = translations[locale] || translations.ru
    const scrollToDemo = () => {
        const element = document.getElementById('evopay-demo')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToHowItWorks = () => {
        const element = document.getElementById('how-it-works')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-emerald-500/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 text-sm font-semibold text-cyan-400 mb-6"
                        >
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            {t.badge}
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                        >
                            {t.titleStart}{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                {t.titleHighlight}
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed"
                        >
                            {t.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={scrollToDemo}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl text-black font-bold text-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1"
                            >
                                {t.cta}
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                            <button
                                onClick={scrollToHowItWorks}
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/10 rounded-xl text-white font-semibold text-lg transition-all hover:bg-cyan-500/10 hover:border-cyan-500/30"
                            >
                                {t.howItWorks}
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/10"
                        >
                            <div>
                                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    {t.stat1Value}
                                </div>
                                <div className="text-sm text-white/50 mt-1">{t.stat1Label}</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    {t.stat2Value}
                                </div>
                                <div className="text-sm text-white/50 mt-1">{t.stat2Label}</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    {t.stat3Value}
                                </div>
                                <div className="text-sm text-white/50 mt-1">{t.stat3Label}</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative flex justify-center items-center"
                    >
                        {/* Phone */}
                        <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-[#1a1a24] rounded-[40px] border-[3px] border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-float">
                            {/* Notch */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black rounded-full z-10" />

                            {/* Screen */}
                            <div className="absolute inset-0 pt-14 px-4 pb-4 bg-gradient-to-b from-[#1a1a24] to-[#0f0f15]">
                                {/* App Header */}
                                <div className="text-center mb-4">
                                    <div className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                        EvoPay
                                    </div>
                                    <div className="text-xs text-white/40 mt-1">{t.table}</div>
                                </div>

                                {/* Menu Items */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-400 to-red-500" />
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-white">{t.dish1}</div>
                                            <div className="text-xs font-bold text-emerald-400">890 сом</div>
                                        </div>
                                        <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-black font-bold text-lg">+</div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500" />
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-white">{t.dish2}</div>
                                            <div className="text-xs font-bold text-emerald-400">720 сом</div>
                                        </div>
                                        <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-black font-bold text-lg">+</div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500" />
                                        <div className="flex-1">
                                            <div className="text-sm font-semibold text-white">{t.dish3}</div>
                                            <div className="text-xs font-bold text-emerald-400">280 сом</div>
                                        </div>
                                        <div className="w-7 h-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center text-black font-bold text-lg">+</div>
                                    </div>
                                </div>

                                {/* Cart Button */}
                                <div className="absolute bottom-6 left-4 right-4">
                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl">
                                        <div>
                                            <div className="text-xs text-black/70">{t.items}</div>
                                            <div className="text-base font-bold text-black">1 890 сом</div>
                                        </div>
                                        <div className="text-sm font-bold text-black">{t.pay}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute top-[10%] -right-4 sm:right-0 lg:-right-8 bg-[#1a1a24] border border-white/10 rounded-xl p-4 shadow-xl hidden sm:block"
                            style={{ animation: 'float 5s ease-in-out infinite' }}
                        >
                            <div className="w-9 h-9 bg-cyan-500/15 rounded-lg flex items-center justify-center text-lg mb-2">
                                📱
                            </div>
                            <div className="text-xs text-white/50">{t.qrCode}</div>
                            <div className="text-sm font-bold text-white">{t.scan}</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="absolute bottom-[20%] -left-8 sm:left-0 lg:-left-12 bg-[#1a1a24] border border-white/10 rounded-xl p-4 shadow-xl hidden sm:block"
                            style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '-2s' }}
                        >
                            <div className="w-9 h-9 bg-emerald-500/15 rounded-lg flex items-center justify-center text-lg mb-2">
                                ✓
                            </div>
                            <div className="text-xs text-white/50">{t.payment}</div>
                            <div className="text-sm font-bold text-white">{t.success}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default EvoPayHeroSection

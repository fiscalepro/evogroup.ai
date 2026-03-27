'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

interface PricingPlan {
    name: string
    price: string
    yearlyPrice?: string
    description: string
    features: { name: string; included: boolean }[]
    recommended?: boolean
}

const EvoPayPricingSection: React.FC = () => {
    const { locale } = useTranslation()
    const [isYearly, setIsYearly] = useState(false)

    const translations = {
        ru: {
            badge: 'Тарифы',
            title: 'Стоимость программы',
            subtitle: 'Первый месяц — бесплатно. Выберите тариф под ваш бизнес.',
            monthly: 'Ежемесячно',
            yearly: 'Ежегодно',
            save: 'Экономия 20%',
            popular: 'Популярный',
            currency: 'сом',
            perMonth: '/месяц',
            perYear: '/год',
            tryFree: 'Попробовать бесплатно',
            contactUs: 'Связаться с нами',
            customPrice: 'По запросу',
            footer: 'Нужно больше столов или особые условия? Оставьте заявку — подберём индивидуальное решение.',
            plans: [
                { name: 'Старт', price: '5,000', yearlyPrice: '48,000', description: 'Для небольших кафе', features: [
                    { name: 'До 10 столов', included: true }, { name: 'Цифровое меню', included: true }, { name: 'QR-коды', included: true }, { name: 'Онлайн-оплата', included: true }, { name: 'Базовая аналитика', included: true }, { name: 'Email поддержка', included: true }, { name: 'Печать на кухню', included: false }, { name: 'Push-уведомления', included: false }, { name: 'Интеграция с POS', included: false }, { name: 'Выделенный менеджер', included: false }
                ]},
                { name: 'Бизнес', price: '12,000', yearlyPrice: '115,200', description: 'Для ресторанов', recommended: true, features: [
                    { name: 'До 30 столов', included: true }, { name: 'Цифровое меню', included: true }, { name: 'QR-коды', included: true }, { name: 'Онлайн-оплата', included: true }, { name: 'Расширенная аналитика', included: true }, { name: 'Чат + Email поддержка', included: true }, { name: 'Печать на кухню', included: true }, { name: 'Push-уведомления', included: true }, { name: 'Интеграция с POS', included: false }, { name: 'Выделенный менеджер', included: false }
                ]},
                { name: 'Профессионал', price: '25,000', yearlyPrice: '240,000', description: 'Для сетей ресторанов', features: [
                    { name: 'До 100 столов', included: true }, { name: 'Цифровое меню', included: true }, { name: 'QR-коды', included: true }, { name: 'Онлайн-оплата', included: true }, { name: 'Полная аналитика + API', included: true }, { name: 'Приоритетная поддержка', included: true }, { name: 'Печать на кухню', included: true }, { name: 'Push-уведомления', included: true }, { name: 'Интеграция с POS', included: true }, { name: 'Выделенный менеджер', included: false }
                ]},
                { name: 'Корпоративный', price: 'custom', description: 'Для крупных сетей', features: [
                    { name: 'Неограниченно столов', included: true }, { name: 'Цифровое меню', included: true }, { name: 'QR-коды', included: true }, { name: 'Онлайн-оплата', included: true }, { name: 'Полная аналитика + API', included: true }, { name: 'Приоритетная поддержка 24/7', included: true }, { name: 'Печать на кухню', included: true }, { name: 'Push-уведомления', included: true }, { name: 'Интеграция с POS', included: true }, { name: 'Выделенный менеджер', included: true }
                ]}
            ]
        },
        en: {
            badge: 'Pricing',
            title: 'Program cost',
            subtitle: 'First month — free. Choose a plan for your business.',
            monthly: 'Monthly',
            yearly: 'Yearly',
            save: 'Save 20%',
            popular: 'Popular',
            currency: 'som',
            perMonth: '/month',
            perYear: '/year',
            tryFree: 'Try for free',
            contactUs: 'Contact us',
            customPrice: 'On request',
            footer: 'Need more tables or special conditions? Leave a request — we\'ll find an individual solution.',
            plans: [
                { name: 'Start', price: '5,000', yearlyPrice: '48,000', description: 'For small cafes', features: [
                    { name: 'Up to 10 tables', included: true }, { name: 'Digital menu', included: true }, { name: 'QR codes', included: true }, { name: 'Online payment', included: true }, { name: 'Basic analytics', included: true }, { name: 'Email support', included: true }, { name: 'Kitchen printing', included: false }, { name: 'Push notifications', included: false }, { name: 'POS integration', included: false }, { name: 'Dedicated manager', included: false }
                ]},
                { name: 'Business', price: '12,000', yearlyPrice: '115,200', description: 'For restaurants', recommended: true, features: [
                    { name: 'Up to 30 tables', included: true }, { name: 'Digital menu', included: true }, { name: 'QR codes', included: true }, { name: 'Online payment', included: true }, { name: 'Advanced analytics', included: true }, { name: 'Chat + Email support', included: true }, { name: 'Kitchen printing', included: true }, { name: 'Push notifications', included: true }, { name: 'POS integration', included: false }, { name: 'Dedicated manager', included: false }
                ]},
                { name: 'Professional', price: '25,000', yearlyPrice: '240,000', description: 'For restaurant chains', features: [
                    { name: 'Up to 100 tables', included: true }, { name: 'Digital menu', included: true }, { name: 'QR codes', included: true }, { name: 'Online payment', included: true }, { name: 'Full analytics + API', included: true }, { name: 'Priority support', included: true }, { name: 'Kitchen printing', included: true }, { name: 'Push notifications', included: true }, { name: 'POS integration', included: true }, { name: 'Dedicated manager', included: false }
                ]},
                { name: 'Enterprise', price: 'custom', description: 'For large chains', features: [
                    { name: 'Unlimited tables', included: true }, { name: 'Digital menu', included: true }, { name: 'QR codes', included: true }, { name: 'Online payment', included: true }, { name: 'Full analytics + API', included: true }, { name: 'Priority 24/7 support', included: true }, { name: 'Kitchen printing', included: true }, { name: 'Push notifications', included: true }, { name: 'POS integration', included: true }, { name: 'Dedicated manager', included: true }
                ]}
            ]
        },
        ky: {
            badge: 'Тарифтер',
            title: 'Программанын баасы',
            subtitle: 'Биринчи ай — акысыз. Бизнесиңизге ылайыктуу тарифти тандаңыз.',
            monthly: 'Ай сайын',
            yearly: 'Жыл сайын',
            save: '20% үнөмдөө',
            popular: 'Популярдуу',
            currency: 'сом',
            perMonth: '/ай',
            perYear: '/жыл',
            tryFree: 'Акысыз сынап көрүү',
            contactUs: 'Байланышуу',
            customPrice: 'Суроо боюнча',
            footer: 'Көбүрөөк стол же өзгөчө шарттар керекпи? Өтүнүч калтырыңыз — жеке чечим табабыз.',
            plans: [
                { name: 'Старт', price: '5,000', yearlyPrice: '48,000', description: 'Кичине кафелер үчүн', features: [
                    { name: '10 столго чейин', included: true }, { name: 'Санариптик меню', included: true }, { name: 'QR-коддор', included: true }, { name: 'Онлайн төлөм', included: true }, { name: 'Негизги аналитика', included: true }, { name: 'Email колдоо', included: true }, { name: 'Ашканага басып чыгаруу', included: false }, { name: 'Push-билдирүүлөр', included: false }, { name: 'POS интеграция', included: false }, { name: 'Жеке менеджер', included: false }
                ]},
                { name: 'Бизнес', price: '12,000', yearlyPrice: '115,200', description: 'Рестораңдар үчүн', recommended: true, features: [
                    { name: '30 столго чейин', included: true }, { name: 'Санариптик меню', included: true }, { name: 'QR-коддор', included: true }, { name: 'Онлайн төлөм', included: true }, { name: 'Кеңейтилген аналитика', included: true }, { name: 'Чат + Email колдоо', included: true }, { name: 'Ашканага басып чыгаруу', included: true }, { name: 'Push-билдирүүлөр', included: true }, { name: 'POS интеграция', included: false }, { name: 'Жеке менеджер', included: false }
                ]},
                { name: 'Профессионал', price: '25,000', yearlyPrice: '240,000', description: 'Ресторан тармактары үчүн', features: [
                    { name: '100 столго чейин', included: true }, { name: 'Санариптик меню', included: true }, { name: 'QR-коддор', included: true }, { name: 'Онлайн төлөм', included: true }, { name: 'Толук аналитика + API', included: true }, { name: 'Приоритеттүү колдоо', included: true }, { name: 'Ашканага басып чыгаруу', included: true }, { name: 'Push-билдирүүлөр', included: true }, { name: 'POS интеграция', included: true }, { name: 'Жеке менеджер', included: false }
                ]},
                { name: 'Корпоративдик', price: 'custom', description: 'Чоң тармактар үчүн', features: [
                    { name: 'Чексиз столдор', included: true }, { name: 'Санариптик меню', included: true }, { name: 'QR-коддор', included: true }, { name: 'Онлайн төлөм', included: true }, { name: 'Толук аналитика + API', included: true }, { name: 'Приоритеттүү 24/7 колдоо', included: true }, { name: 'Ашканага басып чыгаруу', included: true }, { name: 'Push-билдирүүлөр', included: true }, { name: 'POS интеграция', included: true }, { name: 'Жеке менеджер', included: true }
                ]}
            ]
        }
    }

    const t = translations[locale] || translations.ru

    const scrollToDemo = () => {
        const element = document.getElementById('evopay-demo')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const formatPrice = (plan: PricingPlan) => {
        if (plan.price === 'custom') {
            return t.customPrice
        }
        if (isYearly && plan.yearlyPrice) {
            return plan.yearlyPrice
        }
        return plan.price
    }

    return (
        <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-6"
                    >
                        {t.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6"
                    >
                        {t.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/60 max-w-xl mx-auto"
                    >
                        {t.subtitle}
                    </motion.p>

                    {/* Billing Toggle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mt-8"
                    >
                        <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-white' : 'text-white/50'}`}>
                            {t.monthly}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-cyan-600' : 'bg-white/20'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${isYearly ? 'left-8' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-white' : 'text-white/50'}`}>
                            {t.yearly}
                        </span>
                        {isYearly && (
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full font-semibold">
                                {t.save}
                            </span>
                        )}
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                                plan.recommended
                                    ? 'bg-gradient-to-b from-cyan-500/20 to-cyan-500/5 border-cyan-500/50'
                                    : 'bg-[#1a1a24] border-white/10 hover:border-white/20'
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full">
                                        {t.popular}
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    {plan.price !== 'custom' ? (
                                        <>
                                            <span className="text-4xl font-bold text-white">
                                                {formatPrice(plan as PricingPlan)}
                                            </span>
                                            <span className="text-white/60 text-sm">{t.currency}</span>
                                            <span className="text-white/60 text-sm">
                                                {isYearly ? t.perYear : t.perMonth}
                                            </span>
                                        </>
                                    ) : (
                                        <span className="text-2xl font-bold text-white">{t.customPrice}</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white/30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-white/80' : 'text-white/40'}`}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={scrollToDemo}
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                                    plan.recommended
                                        ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:shadow-lg hover:shadow-cyan-500/30'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}
                            >
                                {plan.price === 'custom' ? t.contactUs : t.tryFree}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center text-sm text-white/50"
                >
                    <p>
                        {t.footer}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default EvoPayPricingSection

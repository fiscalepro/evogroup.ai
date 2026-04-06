'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const featureIcons = [
    // Clipboard / digital menu
    <svg key="menu" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></svg>,
    // Credit card / payment
    <svg key="card" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    // Printer / kitchen
    <svg key="printer" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" /></svg>,
    // Smartphone / QR
    <svg key="qr" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    // Bell / push
    <svg key="bell" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>,
    // Bar chart / analytics
    <svg key="chart" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    // Link / integrations
    <svg key="link" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>,
]

const FeaturesSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Возможности',
            title: 'Всё что нужно для ресторана',
            subtitle: 'Полноценная система управления заказами и оплатой',
            features: [
                { title: 'Цифровое меню', description: 'Красивый каталог с фото, описанием, модификаторами. Легко обновлять цены и позиции.' },
                { title: 'Онлайн-оплата', description: 'Visa, Mastercard, Apple Pay, Google Pay, Элкарт. Деньги сразу на ваш счёт.' },
                { title: 'Печать на кухню', description: 'Заказ автоматически печатается на кухне и в баре. Интеграция с вашим принтером.' },
                { title: 'QR-коды для столов', description: 'Стильные стикеры с QR-кодами для каждого столика. Мгновенное открытие меню.' },
                { title: 'Push-уведомления', description: 'Уведомляйте гостей о готовности заказа, акциях и специальных предложениях.' },
                { title: 'Панель аналитики', description: 'Выручка, популярные блюда, часы пик, средний чек — вся статистика в реальном времени.' },
                { title: 'Интеграции', description: 'Подключение к вашей POS-системе, 1С, R-Keeper и другим решениям.' }
            ]
        },
        en: {
            badge: 'Features',
            title: 'Everything a restaurant needs',
            subtitle: 'Complete order and payment management system',
            features: [
                { title: 'Digital menu', description: 'Beautiful catalog with photos, descriptions, modifiers. Easy to update prices and items.' },
                { title: 'Online payment', description: 'Visa, Mastercard, Apple Pay, Google Pay, Elcart. Money goes directly to your account.' },
                { title: 'Kitchen printing', description: 'Order automatically prints in kitchen and bar. Integration with your printer.' },
                { title: 'QR codes for tables', description: 'Stylish stickers with QR codes for each table. Instant menu opening.' },
                { title: 'Push notifications', description: 'Notify guests about order readiness, promotions and special offers.' },
                { title: 'Analytics dashboard', description: 'Revenue, popular dishes, peak hours, average check — all stats in real time.' },
                { title: 'Integrations', description: 'Connect to your POS system, 1C, R-Keeper and other solutions.' }
            ]
        },
        ky: {
            badge: 'Мүмкүнчүлүктөр',
            title: 'Ресторанга керек болгондун баары',
            subtitle: 'Заказдарды жана төлөмдөрдү башкаруунун толук системасы',
            features: [
                { title: 'Санариптик меню', description: 'Сүрөттөр, сүрөттөмөлөр, модификаторлор менен кооз каталог. Баа жана позицияларды оңой жаңыртуу.' },
                { title: 'Онлайн төлөм', description: 'Visa, Mastercard, Apple Pay, Google Pay, Элкарт. Акча дароо эсебиңизге түшөт.' },
                { title: 'Ашканага басып чыгаруу', description: 'Заказ автоматтык түрдө ашканада жана барда басылат. Принтериңиз менен интеграция.' },
                { title: 'Столдор үчүн QR-коддор', description: 'Ар бир стол үчүн QR-коддору бар стилдүү стикерлер. Менюну заматта ачуу.' },
                { title: 'Push-билдирүүлөр', description: 'Конокторго заказдын даярдыгы, акциялар жана атайын сунуштар жөнүндө кабарлаңыз.' },
                { title: 'Аналитика панели', description: 'Киреше, популярдуу тамактар, эң жүктөлгөн сааттар, орточо чек — бардык статистика реал убакытта.' },
                { title: 'Интеграциялар', description: 'POS-системаңызга, 1С, R-Keeper жана башка чечимдерге туташуу.' }
            ]
        }
    }

    const t = translations[locale] || translations.ru
    return (
        <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-6"
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

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                    {t.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex gap-5 p-6 bg-white dark:bg-[#1a1a24] border border-gray-100 dark:border-white/5 rounded-2xl transition-all hover:border-cyan-500/30 hover:translate-x-1 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 min-w-[48px] bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform text-emerald-600 dark:text-emerald-400">
                                {featureIcons[index]}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-white/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection

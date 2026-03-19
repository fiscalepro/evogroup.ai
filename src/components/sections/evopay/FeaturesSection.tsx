'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const FeaturesSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Возможности',
            title: 'Всё что нужно для ресторана',
            subtitle: 'Полноценная система управления заказами и оплатой',
            features: [
                { icon: '📋', title: 'Цифровое меню', description: 'Красивый каталог с фото, описанием, модификаторами. Легко обновлять цены и позиции.' },
                { icon: '💳', title: 'Онлайн-оплата', description: 'Visa, Mastercard, Apple Pay, Google Pay, Элкарт. Деньги сразу на ваш счёт.' },
                { icon: '🖨️', title: 'Печать на кухню', description: 'Заказ автоматически печатается на кухне и в баре. Интеграция с вашим принтером.' },
                { icon: '📱', title: 'QR-коды для столов', description: 'Стильные стикеры с QR-кодами для каждого столика. Мгновенное открытие меню.' },
                { icon: '🔔', title: 'Push-уведомления', description: 'Уведомляйте гостей о готовности заказа, акциях и специальных предложениях.' },
                { icon: '📊', title: 'Панель аналитики', description: 'Выручка, популярные блюда, часы пик, средний чек — вся статистика в реальном времени.' },
                { icon: '🔗', title: 'Интеграции', description: 'Подключение к вашей POS-системе, 1С, R-Keeper и другим решениям.' }
            ]
        },
        en: {
            badge: 'Features',
            title: 'Everything a restaurant needs',
            subtitle: 'Complete order and payment management system',
            features: [
                { icon: '📋', title: 'Digital menu', description: 'Beautiful catalog with photos, descriptions, modifiers. Easy to update prices and items.' },
                { icon: '💳', title: 'Online payment', description: 'Visa, Mastercard, Apple Pay, Google Pay, Elcart. Money goes directly to your account.' },
                { icon: '🖨️', title: 'Kitchen printing', description: 'Order automatically prints in kitchen and bar. Integration with your printer.' },
                { icon: '📱', title: 'QR codes for tables', description: 'Stylish stickers with QR codes for each table. Instant menu opening.' },
                { icon: '🔔', title: 'Push notifications', description: 'Notify guests about order readiness, promotions and special offers.' },
                { icon: '📊', title: 'Analytics dashboard', description: 'Revenue, popular dishes, peak hours, average check — all stats in real time.' },
                { icon: '🔗', title: 'Integrations', description: 'Connect to your POS system, 1C, R-Keeper and other solutions.' }
            ]
        },
        ky: {
            badge: 'Мүмкүнчүлүктөр',
            title: 'Ресторанга керек болгондун баары',
            subtitle: 'Заказдарды жана төлөмдөрдү башкаруунун толук системасы',
            features: [
                { icon: '📋', title: 'Санариптик меню', description: 'Сүрөттөр, сүрөттөмөлөр, модификаторлор менен кооз каталог. Баа жана позицияларды оңой жаңыртуу.' },
                { icon: '💳', title: 'Онлайн төлөм', description: 'Visa, Mastercard, Apple Pay, Google Pay, Элкарт. Акча дароо эсебиңизге түшөт.' },
                { icon: '🖨️', title: 'Ашканага басып чыгаруу', description: 'Заказ автоматтык түрдө ашканада жана барда басылат. Принтериңиз менен интеграция.' },
                { icon: '📱', title: 'Столдор үчүн QR-коддор', description: 'Ар бир стол үчүн QR-коддору бар стилдүү стикерлер. Менюну заматта ачуу.' },
                { icon: '🔔', title: 'Push-билдирүүлөр', description: 'Конокторго заказдын даярдыгы, акциялар жана атайын сунуштар жөнүндө кабарлаңыз.' },
                { icon: '📊', title: 'Аналитика панели', description: 'Киреше, популярдуу тамактар, эң жүктөлгөн сааттар, орточо чек — бардык статистика реал убакытта.' },
                { icon: '🔗', title: 'Интеграциялар', description: 'POS-системаңызга, 1С, R-Keeper жана башка чечимдерге туташуу.' }
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
                        className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full text-xs font-bold text-emerald-400 uppercase tracking-wider mb-6"
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
                            className="flex gap-5 p-6 bg-[#1a1a24] border border-white/5 rounded-2xl transition-all hover:border-cyan-500/30 hover:translate-x-1 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 min-w-[48px] bg-emerald-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed">
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

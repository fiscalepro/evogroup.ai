'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const ProblemSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Проблема',
            title: 'Знакомые ситуации?',
            subtitle: 'Каждый день рестораны теряют деньги и клиентов из-за устаревших процессов',
            problems: [
                { icon: '⏳', title: 'Долгое ожидание официанта', description: 'Гости ждут по 10-15 минут, чтобы сделать заказ или получить счёт. Раздражение растёт — чаевые падают.' },
                { icon: '📉', title: 'Низкий средний чек', description: 'Официант не всегда предлагает дополнительные позиции. Гости не видят весь ассортимент и заказывают меньше.' },
                { icon: '😤', title: 'Ошибки в заказах', description: 'Официант неправильно услышал, забыл передать на кухню, перепутал столики. Конфликты и возвраты.' },
                { icon: '💸', title: 'Высокие расходы на персонал', description: 'Нужно больше официантов в час-пик, обучение новичков, текучка кадров — всё это съедает прибыль.' }
            ]
        },
        en: {
            badge: 'Problem',
            title: 'Familiar situations?',
            subtitle: 'Every day restaurants lose money and customers due to outdated processes',
            problems: [
                { icon: '⏳', title: 'Long wait for waiter', description: 'Guests wait 10-15 minutes to order or get the bill. Frustration grows — tips drop.' },
                { icon: '📉', title: 'Low average check', description: 'Waiter doesn\'t always offer additional items. Guests don\'t see the full menu and order less.' },
                { icon: '😤', title: 'Order errors', description: 'Waiter misheard, forgot to send to kitchen, mixed up tables. Conflicts and returns.' },
                { icon: '💸', title: 'High staff costs', description: 'Need more waiters during rush hours, training newcomers, staff turnover — all eating into profits.' }
            ]
        },
        ky: {
            badge: 'Көйгөй',
            title: 'Тааныш кырдаалдарбы?',
            subtitle: 'Күн сайын рестораңдар эскирген процесстерден улам акча жана кардарларды жоготушат',
            problems: [
                { icon: '⏳', title: 'Официантты узак күтүү', description: 'Конокторго заказ берүү же эсеп алуу үчүн 10-15 мүнөт күтүшөт. Нааразылык өсөт — чайпул түшөт.' },
                { icon: '📉', title: 'Төмөн орточо чек', description: 'Официант дайыма кошумча позицияларды сунуштабайт. Конокторго толук ассортиментти көрбөйт жана азыраак заказ беришет.' },
                { icon: '😤', title: 'Заказдардагы каталар', description: 'Официант туура укпады, ашканага өткөрүүнү унутту, столдорду чаташтырды. Конфликттер жана кайтарымдар.' },
                { icon: '💸', title: 'Персоналга жогорку чыгымдар', description: 'Жүктөлгөн саатта көбүрөөк официанттар керек, жаңыларды үйрөтүү, кадрлардын агымы — баары пайданы жейт.' }
            ]
        }
    }

    const t = translations[locale] || translations.ru
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-red-500/10 rounded-full text-xs font-bold text-red-400 uppercase tracking-wider mb-6"
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

                {/* Problem Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:border-red-500/30 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-red-500/15 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProblemSection

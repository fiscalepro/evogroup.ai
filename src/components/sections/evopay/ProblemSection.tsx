'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const problemIcons = [
    // Clock / waiting
    <svg key="clock" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    // Trending down
    <svg key="down" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>,
    // Alert triangle / errors
    <svg key="alert" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L12.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
    // Dollar sign / costs
    <svg key="dollar" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>,
]

const ProblemSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Проблема',
            title: 'Знакомые ситуации?',
            subtitle: 'Каждый день рестораны теряют деньги и клиентов из-за устаревших процессов',
            problems: [
                { title: 'Долгое ожидание официанта', description: 'Гости ждут по 10-15 минут, чтобы сделать заказ или получить счёт. Раздражение растёт — чаевые падают.' },
                { title: 'Низкий средний чек', description: 'Официант не всегда предлагает дополнительные позиции. Гости не видят весь ассортимент и заказывают меньше.' },
                { title: 'Ошибки в заказах', description: 'Официант неправильно услышал, забыл передать на кухню, перепутал столики. Конфликты и возвраты.' },
                { title: 'Высокие расходы на персонал', description: 'Нужно больше официантов в час-пик, обучение новичков, текучка кадров — всё это съедает прибыль.' }
            ]
        },
        en: {
            badge: 'Problem',
            title: 'Familiar situations?',
            subtitle: 'Every day restaurants lose money and customers due to outdated processes',
            problems: [
                { title: 'Long wait for waiter', description: 'Guests wait 10-15 minutes to order or get the bill. Frustration grows — tips drop.' },
                { title: 'Low average check', description: 'Waiter doesn\'t always offer additional items. Guests don\'t see the full menu and order less.' },
                { title: 'Order errors', description: 'Waiter misheard, forgot to send to kitchen, mixed up tables. Conflicts and returns.' },
                { title: 'High staff costs', description: 'Need more waiters during rush hours, training newcomers, staff turnover — all eating into profits.' }
            ]
        },
        ky: {
            badge: 'Көйгөй',
            title: 'Тааныш кырдаалдарбы?',
            subtitle: 'Күн сайын рестораңдар эскирген процесстерден улам акча жана кардарларды жоготушат',
            problems: [
                { title: 'Официантты узак күтүү', description: 'Конокторго заказ берүү же эсеп алуу үчүн 10-15 мүнөт күтүшөт. Нааразылык өсөт — чайпул түшөт.' },
                { title: 'Төмөн орточо чек', description: 'Официант дайыма кошумча позицияларды сунуштабайт. Конокторго толук ассортиментти көрбөйт жана азыраак заказ беришет.' },
                { title: 'Заказдардагы каталар', description: 'Официант туура укпады, ашканага өткөрүүнү унутту, столдорду чаташтырды. Конфликттер жана кайтарымдар.' },
                { title: 'Персоналга жогорку чыгымдар', description: 'Жүктөлгөн саатта көбүрөөк официанттар керек, жаңыларды үйрөтүү, кадрлардын агымы — баары пайданы жейт.' }
            ]
        }
    }

    const t = translations[locale] || translations.ru
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-red-500/10 rounded-full text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-6"
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

                {/* Problem Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-[#1a1a24] border border-gray-100 dark:border-white/5 rounded-2xl p-8 transition-all hover:border-red-500/30 hover:-translate-y-1 group"
                        >
                            <div className="w-12 h-12 bg-red-500/15 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform text-red-600 dark:text-red-400">
                                {problemIcons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-gray-500 dark:text-white/60 leading-relaxed">
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

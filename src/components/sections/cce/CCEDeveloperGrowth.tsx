'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCEDeveloperGrowth: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Developer Growth',
            title: 'Рост каждого разработчика — измерим',
            subtitle: 'Шесть измерений профессионального роста. Автоматический сбор метрик, персональные рекомендации, отчёты для руководства.',
            dimensions: [
                { name: 'Продуктивность', value: 87, color: 'from-violet-500 to-violet-400' },
                { name: 'Качество кода', value: 92, color: 'from-violet-500 to-amber-400' },
                { name: 'AI-мастерство', value: 78, color: 'from-amber-500 to-amber-400' },
                { name: 'Командная работа', value: 85, color: 'from-violet-400 to-amber-500' },
                { name: 'Инновации', value: 71, color: 'from-amber-400 to-violet-500' },
                { name: 'Техническая глубина', value: 83, color: 'from-violet-500 to-amber-500' },
            ],
            benefits: [
                'Автоматический сбор метрик — без ручного ввода',
                'Персональные рекомендации роста для каждого',
                'Отчёты для руководства — видимость прогресса',
                'Адаптивные цели — система учится вместе с командой',
            ],
            profileTitle: 'Профиль разработчика',
            profileName: 'Алексей К.',
            profileRole: 'Senior Developer',
            overallLabel: 'Общий уровень',
            overallValue: '82/100',
        },
        en: {
            badge: 'Developer Growth',
            title: 'Measure every developer\'s growth',
            subtitle: 'Six dimensions of professional growth. Automatic metrics collection, personalized recommendations, management reports.',
            dimensions: [
                { name: 'Productivity', value: 87, color: 'from-violet-500 to-violet-400' },
                { name: 'Code Quality', value: 92, color: 'from-violet-500 to-amber-400' },
                { name: 'AI Mastery', value: 78, color: 'from-amber-500 to-amber-400' },
                { name: 'Teamwork', value: 85, color: 'from-violet-400 to-amber-500' },
                { name: 'Innovation', value: 71, color: 'from-amber-400 to-violet-500' },
                { name: 'Technical Depth', value: 83, color: 'from-violet-500 to-amber-500' },
            ],
            benefits: [
                'Automatic metrics collection — no manual input',
                'Personalized growth recommendations for everyone',
                'Management reports — progress visibility',
                'Adaptive goals — the system learns with the team',
            ],
            profileTitle: 'Developer Profile',
            profileName: 'Alex K.',
            profileRole: 'Senior Developer',
            overallLabel: 'Overall Level',
            overallValue: '82/100',
        },
        ky: {
            badge: 'Developer Growth',
            title: 'Ар бир иштеп чыгуучунун өсүшүн өлчөңүз',
            subtitle: 'Кесиптик өсүүнүн алты өлчөмү. Метрикаларды автоматтык түрдө чогултуу, жеке сунуштар, жетекчилик үчүн отчёттор.',
            dimensions: [
                { name: 'Өндүрүмдүүлүк', value: 87, color: 'from-violet-500 to-violet-400' },
                { name: 'Код сапаты', value: 92, color: 'from-violet-500 to-amber-400' },
                { name: 'AI чеберчилиги', value: 78, color: 'from-amber-500 to-amber-400' },
                { name: 'Командалык иш', value: 85, color: 'from-violet-400 to-amber-500' },
                { name: 'Инновациялар', value: 71, color: 'from-amber-400 to-violet-500' },
                { name: 'Техникалык тереңдик', value: 83, color: 'from-violet-500 to-amber-500' },
            ],
            benefits: [
                'Метрикаларды автоматтык чогултуу — кол менен киргизүү жок',
                'Ар бир адам үчүн жеке өсүү сунуштары',
                'Жетекчилик үчүн отчёттор — прогрессти көрүү',
                'Адаптивдүү максаттар — система команда менен бирге үйрөнөт',
            ],
            profileTitle: 'Иштеп чыгуучунун профили',
            profileName: 'Алексей К.',
            profileRole: 'Senior Developer',
            overallLabel: 'Жалпы деңгээл',
            overallValue: '82/100',
        }
    }

    const t = translations[locale] || translations.ru

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-amber-500/10 rounded-full text-xs font-bold text-amber-400 uppercase tracking-wider mb-6"
                >
                    {t.badge}
                </motion.span>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                    {t.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                    className="text-lg text-white/60 max-w-2xl mb-16"
                >
                    {t.subtitle}
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Dimension tags + benefits */}
                    <div>
                        {/* Dimension tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            {t.dimensions.map((dim, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-full text-sm text-white/80 font-medium"
                                >
                                    {dim.name}
                                </span>
                            ))}
                        </motion.div>

                        {/* Benefits */}
                        <div className="space-y-4">
                            {t.benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white/70">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Developer profile card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="bg-[#1a1a24] border border-white/10 rounded-2xl p-6 sm:p-8"
                    >
                        {/* Profile header */}
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">A</span>
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{t.profileName}</h4>
                                <p className="text-white/50 text-sm">{t.profileRole}</p>
                            </div>
                            <div className="ml-auto text-right">
                                <p className="text-xs text-white/40">{t.overallLabel}</p>
                                <p className="text-lg font-bold bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">{t.overallValue}</p>
                            </div>
                        </div>

                        {/* Dimension bars */}
                        <div className="space-y-4">
                            {t.dimensions.map((dim, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="text-white/70">{dim.name}</span>
                                        <span className="text-white/50">{dim.value}%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${dim.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                                            className={`h-full bg-gradient-to-r ${dim.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CCEDeveloperGrowth

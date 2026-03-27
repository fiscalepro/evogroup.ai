'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCESwarmIntelligence: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Swarm Intelligence',
            title: 'Паттерн одного — знание всех',
            subtitle: 'CCE автоматически обнаруживает эффективные паттерны работы и распространяет их на всю команду. Коллективный интеллект растёт с каждым днём.',
            features: [
                {
                    title: 'Автообнаружение паттернов',
                    description: 'Система анализирует, как каждый разработчик использует Claude Code, и выявляет эффективные практики.',
                },
                {
                    title: 'Умные рекомендации',
                    description: 'Каждый получает персональные рекомендации на основе лучших практик команды.',
                },
                {
                    title: 'Усиление и затухание',
                    description: 'Популярные паттерны усиливаются, неэффективные — автоматически затухают. Эволюция знаний.',
                },
                {
                    title: 'Метрики эффективности',
                    description: 'Измеряйте влияние каждого паттерна на продуктивность команды в реальном времени.',
                },
            ],
            hubLabel: 'CCE Hub',
            nodes: ['Dev 1', 'Dev 2', 'Dev 3', 'Dev 4', 'Dev 5'],
        },
        en: {
            badge: 'Swarm Intelligence',
            title: 'One pattern — everyone\'s knowledge',
            subtitle: 'CCE automatically discovers effective work patterns and spreads them across the entire team. Collective intelligence grows every day.',
            features: [
                {
                    title: 'Auto-discovery of patterns',
                    description: 'The system analyzes how each developer uses Claude Code and identifies effective practices.',
                },
                {
                    title: 'Smart recommendations',
                    description: 'Everyone gets personalized recommendations based on team best practices.',
                },
                {
                    title: 'Reinforcement and decay',
                    description: 'Popular patterns are reinforced, ineffective ones automatically decay. Knowledge evolution.',
                },
                {
                    title: 'Effectiveness metrics',
                    description: 'Measure the impact of each pattern on team productivity in real time.',
                },
            ],
            hubLabel: 'CCE Hub',
            nodes: ['Dev 1', 'Dev 2', 'Dev 3', 'Dev 4', 'Dev 5'],
        },
        ky: {
            badge: 'Swarm Intelligence',
            title: 'Бирөөнүн паттерни — бардыгынын билими',
            subtitle: 'CCE натыйжалуу иш паттерндерин автоматтык түрдө аныктайт жана бүт командага жайылтат.',
            features: [
                {
                    title: 'Паттерндерди авто-аныктоо',
                    description: 'Система ар бир иштеп чыгуучу Claude Code\'ду кандай колдонуп жатканын анализдейт.',
                },
                {
                    title: 'Акылдуу сунуштар',
                    description: 'Ар ким команданын мыкты практикаларынын негизинде жеке сунуштарды алат.',
                },
                {
                    title: 'Күчөтүү жана сөнүү',
                    description: 'Популярдуу паттерндер күчөтүлөт, натыйжасыздар автоматтык түрдө сөнөт.',
                },
                {
                    title: 'Натыйжалуулук метрикалары',
                    description: 'Ар бир паттерндин команда өндүрүмдүүлүгүнө тийгизген таасирин реалдуу убакытта өлчөңүз.',
                },
            ],
            hubLabel: 'CCE Hub',
            nodes: ['Dev 1', 'Dev 2', 'Dev 3', 'Dev 4', 'Dev 5'],
        }
    }

    const t = translations[locale] || translations.ru

    const featureIcons = [
        <svg key="search" className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>,
        <svg key="light" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>,
        <svg key="refresh" className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>,
        <svg key="chart" className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>,
    ]

    // Node positions for the neural network visualization (desktop)
    const nodePositions = [
        { x: 20, y: 15 },
        { x: 80, y: 10 },
        { x: 85, y: 55 },
        { x: 75, y: 90 },
        { x: 15, y: 80 },
    ]

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-violet-500/10 rounded-full text-xs font-bold text-violet-400 uppercase tracking-wider mb-6"
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

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Features */}
                    <div className="space-y-6">
                        {t.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 p-5 bg-[#1a1a24] border border-white/5 rounded-2xl transition-all hover:border-violet-500/30 hover:translate-x-1 group"
                            >
                                <div className="w-12 h-12 min-w-[48px] bg-violet-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {featureIcons[index]}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Neural network visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative"
                    >
                        {/* Desktop visualization */}
                        <div className="hidden sm:block relative w-full aspect-square max-w-md mx-auto">
                            {/* Central hub */}
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, type: 'spring' }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 z-10"
                            >
                                <span className="text-white font-bold text-xs">{t.hubLabel}</span>
                            </motion.div>

                            {/* Pulse ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-violet-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />

                            {/* Developer nodes */}
                            {nodePositions.map((pos, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                                    className="absolute w-12 h-12 bg-[#1a1a24] border border-violet-500/30 rounded-full flex items-center justify-center"
                                    style={{
                                        left: `${pos.x}%`,
                                        top: `${pos.y}%`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <span className="text-[10px] text-white/70 font-medium">{t.nodes[i]}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile simplified visualization */}
                        <div className="sm:hidden flex flex-col items-center gap-3 py-8">
                            {/* Hub */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="w-16 h-16 bg-gradient-to-br from-violet-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30"
                            >
                                <span className="text-white font-bold text-[10px]">{t.hubLabel}</span>
                            </motion.div>

                            {/* Nodes row */}
                            <div className="flex gap-3 flex-wrap justify-center">
                                {t.nodes.map((node, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="w-11 h-11 bg-[#1a1a24] border border-violet-500/30 rounded-full flex items-center justify-center"
                                    >
                                        <span className="text-[9px] text-white/70 font-medium">{node}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CCESwarmIntelligence

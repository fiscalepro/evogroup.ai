'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const platforms = [
    { name: 'Claude Code', company: 'Anthropic', color: 'from-orange-400 to-amber-500' },
    { name: 'OpenAI Codex', company: 'OpenAI', color: 'from-emerald-400 to-green-500' },
    { name: 'Gemini CLI', company: 'Google', color: 'from-blue-400 to-cyan-500' },
    { name: 'OpenCode', company: 'Open Source', color: 'from-violet-400 to-purple-500' },
    { name: 'Qwen Code', company: 'Alibaba', color: 'from-sky-400 to-blue-500' },
    { name: 'OpenClaw', company: 'Plugins & Agents', color: 'from-rose-400 to-pink-500' },
]

const CCEPlatformOverview: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Платформа',
            title: 'Три столпа CCE',
            pillars: [
                {
                    title: 'Мультиплатформенность',
                    description: 'CCE работает с любой AI CLI системой. Не привязывайтесь к одному провайдеру — управляйте всеми AI-агентами из единого центра.',
                    gradient: 'from-violet-500 to-violet-600',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-violet-500/10',
                    features: [
                        'Поддержка всех популярных AI CLI',
                        'Централизованное подключение агентов',
                        'Разработка OpenClaw плагинов',
                        'Единые стандарты для любого AI',
                    ],
                    showPlatforms: true,
                },
                {
                    title: 'CCE Dashboard',
                    description: '117+ инструментов управления, аналитика использования AI, автоматизация рутинных задач, мониторинг команды в реальном времени.',
                    gradient: 'from-amber-500 to-amber-600',
                    borderHover: 'hover:border-amber-500/30',
                    iconBg: 'bg-amber-500/10',
                    features: [
                        '117+ MCP инструментов',
                        'Аналитика и метрики команды',
                        'Автоматизация workflow',
                        'Управление шаблонами и агентами',
                    ],
                    showPlatforms: false,
                },
                {
                    title: 'Enterprise Config',
                    description: 'AI сам скачивает, анализирует и настраивает всё что нужно. Git-based конфигурация, версионируемая и отслеживаемая.',
                    gradient: 'from-violet-500 to-amber-500',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-gradient-to-br from-violet-500/10 to-amber-500/10',
                    features: [
                        'Автоматическая настройка без CLI',
                        'Git-based версионирование',
                        'Шаблоны по ролям и проектам',
                        'Централизованные политики',
                    ],
                    showPlatforms: false,
                },
            ],
            statusline: {
                title: 'Командная строка состояния',
                description: 'Уникальная 3-строчная строка состояния прямо в терминале. Третья линия — эксклюзив CCE: алерты от админа, версии, swarm pulse команды в реальном времени.',
                features: [
                    '21 виджет: модель, контекст, git, токены, стоимость',
                    'Линия 3 — CCE: алерты, обновления, swarm pulse',
                    'Цветные виджеты и powerline-режим',
                    'Централизованные уведомления для всей команды',
                ],
                terminalHint: '> claude "реализуй новую фичу..."',
            },
        },
        en: {
            badge: 'Platform',
            title: 'Three pillars of CCE',
            pillars: [
                {
                    title: 'Multi-platform',
                    description: 'CCE works with any AI CLI system. Don\'t be locked into one provider — manage all AI agents from a single hub.',
                    gradient: 'from-violet-500 to-violet-600',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-violet-500/10',
                    features: [
                        'Support for all popular AI CLIs',
                        'Centralized agent management',
                        'OpenClaw plugin development',
                        'Unified standards for any AI',
                    ],
                    showPlatforms: true,
                },
                {
                    title: 'CCE Dashboard',
                    description: '117+ management tools, AI usage analytics, routine task automation, real-time team monitoring.',
                    gradient: 'from-amber-500 to-amber-600',
                    borderHover: 'hover:border-amber-500/30',
                    iconBg: 'bg-amber-500/10',
                    features: [
                        '117+ MCP tools',
                        'Team analytics and metrics',
                        'Workflow automation',
                        'Template and agent management',
                    ],
                    showPlatforms: false,
                },
                {
                    title: 'Enterprise Config',
                    description: 'AI downloads, analyzes, and configures everything on its own. Git-based configuration, versioned and trackable.',
                    gradient: 'from-violet-500 to-amber-500',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-gradient-to-br from-violet-500/10 to-amber-500/10',
                    features: [
                        'Automatic setup without CLI',
                        'Git-based versioning',
                        'Role and project templates',
                        'Centralized policies',
                    ],
                    showPlatforms: false,
                },
            ],
            statusline: {
                title: 'Team Status Line',
                description: 'A unique 3-line status bar right in your terminal. Line 3 is CCE-exclusive: admin alerts, versions, and real-time swarm pulse of your team.',
                features: [
                    '21 widgets: model, context, git, tokens, cost',
                    'Line 3 — CCE: alerts, updates, swarm pulse',
                    'Colored widgets and powerline mode',
                    'Centralized notifications for the whole team',
                ],
                terminalHint: '> claude "implement new feature..."',
            },
        },
        ky: {
            badge: 'Платформа',
            title: 'CCE\'нин үч тиреги',
            pillars: [
                {
                    title: 'Мультиплатформа',
                    description: 'CCE каалаган AI CLI системасы менен иштейт. Бир провайдерге байланбаңыз — бардык AI-агенттерди бир борбордон башкарыңыз.',
                    gradient: 'from-violet-500 to-violet-600',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-violet-500/10',
                    features: [
                        'Бардык популярдуу AI CLI колдоо',
                        'Борбордоштурулган агент башкаруу',
                        'OpenClaw плагин иштеп чыгуу',
                        'Каалаган AI үчүн бирдиктүү стандарттар',
                    ],
                    showPlatforms: true,
                },
                {
                    title: 'CCE Dashboard',
                    description: '117+ башкаруу куралдары, AI колдонуу аналитикасы, тапшырмаларды автоматташтыруу.',
                    gradient: 'from-amber-500 to-amber-600',
                    borderHover: 'hover:border-amber-500/30',
                    iconBg: 'bg-amber-500/10',
                    features: [
                        '117+ MCP куралдар',
                        'Команда аналитикасы',
                        'Workflow автоматташтыруу',
                        'Шаблон жана агент башкаруу',
                    ],
                    showPlatforms: false,
                },
                {
                    title: 'Enterprise Config',
                    description: 'AI өзү жүктөп алат, анализдейт жана бардыгын жөндөйт. Git-based конфигурация, версияланган жана көзөмөлдөнгөн.',
                    gradient: 'from-violet-500 to-amber-500',
                    borderHover: 'hover:border-violet-500/30',
                    iconBg: 'bg-gradient-to-br from-violet-500/10 to-amber-500/10',
                    features: [
                        'CLI\'сиз автоматтык жөндөө',
                        'Git-based версиялоо',
                        'Ролдор боюнча шаблондор',
                        'Борбордоштурулган саясаттар',
                    ],
                    showPlatforms: false,
                },
            ],
            statusline: {
                title: 'Команда статус сызыгы',
                description: 'Терминалда 3 саптуу уникалдуу статус тилкеси. 3-сап — CCE эксклюзиви: админ алерттери, версиялар, команданын swarm pulse реалдуу убакытта.',
                features: [
                    '21 виджет: модель, контекст, git, токендер, наркы',
                    '3-сап — CCE: алерттер, жаңылоолор, swarm pulse',
                    'Түстүү виджеттер жана powerline режими',
                    'Бүт команда үчүн борбордоштурулган билдирмелер',
                ],
                terminalHint: '> claude "жаңы функцияны ишке ашыр..."',
            },
        }
    }

    const t = translations[locale] || translations.ru

    const pillarIcons = [
        // Multi-platform / globe icon
        <svg key="globe" className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>,
        // Dashboard icon
        <svg key="dashboard" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>,
        // Config/gear icon
        <svg key="config" className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
    ]

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-black relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
            </div>

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
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16"
                >
                    {t.title}
                </motion.h2>

                {/* Pillars grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {t.pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all ${pillar.borderHover} hover:-translate-y-2 group relative overflow-hidden`}
                        >
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {pillarIcons[index]}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed mb-6">{pillar.description}</p>

                            {/* Platform tags (only for first pillar) */}
                            {pillar.showPlatforms && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {platforms.map((platform, pIndex) => (
                                        <span
                                            key={pIndex}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium transition-all hover:border-white/25 hover:bg-white/10"
                                        >
                                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color}`} />
                                            <span className="text-white/80">{platform.name}</span>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Features list */}
                            <ul className="space-y-3">
                                {pillar.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-white/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Status Line Feature Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 bg-[#1a1a24] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: description */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1 mb-4">
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-violet-300">ccstatusline</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t.statusline.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-5">{t.statusline.description}</p>
                            <div className="space-y-3">
                                {t.statusline.features.map((feat: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-white/70">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Terminal mock with 3 status lines */}
                        <div className="bg-black/60 border border-white/10 rounded-xl overflow-hidden">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-white/40 font-mono">terminal</span>
                            </div>

                            {/* Terminal content area */}
                            <div className="px-4 py-3 min-h-[80px]">
                                <p className="text-xs text-white/30 font-mono">{t.statusline.terminalHint}</p>
                            </div>

                            {/* Status Line 1 */}
                            <div className="px-4 py-1.5 bg-[#0a0a14] border-t border-white/5 font-mono text-xs flex items-center gap-2 flex-wrap">
                                <span className="text-cyan-400">Model: Opus 4.6</span>
                                <span className="text-white/20">|</span>
                                <span className="text-yellow-400">Ctx(u): 86.2%</span>
                                <span className="text-white/20">|</span>
                                <span className="text-magenta-400 text-fuchsia-400">{'\u2387'}main(+4,-0)</span>
                                <span className="text-white/20">|</span>
                                <span className="text-blue-400">cwd: .../evogroup</span>
                            </div>

                            {/* Status Line 2 */}
                            <div className="px-4 py-1.5 bg-[#0a0a14] border-t border-white/5 font-mono text-xs flex items-center gap-2 flex-wrap">
                                <span className="text-white/40">In: 145</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/40">Out: 56.7k</span>
                                <span className="text-white/20">|</span>
                                <span className="text-green-400">Cached: 11.0M</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/40">Block: 3hr 33m</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/40">Session: 32m</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/40">v2.1.49</span>
                            </div>

                            {/* Status Line 3 — CCE Enterprise */}
                            <div className="px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-amber-500/10 border-t border-violet-500/20 font-mono text-xs flex items-center gap-2">
                                <span className="text-white/90">{'\u26A0'} CCE 2.0.27 {'\u2192'} 2.0.28 /cce update</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CCEPlatformOverview

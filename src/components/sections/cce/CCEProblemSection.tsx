'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCEProblemSection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Знакомые проблемы?',
            title: 'AI без координации = хаос',
            problems: [
                {
                    icon: '🔧',
                    title: 'Каждый настраивает сам',
                    description: '10 разработчиков — 10 разных конфигураций Claude Code. Нет единых стандартов, каждый изобретает свой workflow.',
                },
                {
                    icon: '🔄',
                    title: 'Знания не передаются',
                    description: 'Один разработчик нашёл идеальный паттерн — остальные об этом не знают. Постоянное переизобретение велосипеда.',
                },
                {
                    icon: '📊',
                    title: 'Нет видимости и метрик',
                    description: 'Руководство не видит, как команда использует AI. Слепая зона — невозможно оптимизировать то, что не измеряешь.',
                },
                {
                    icon: '🔒',
                    title: 'Безопасность под вопросом',
                    description: 'Секреты в промптах, неконтролируемые MCP серверы, отсутствие аудита. Enterprise-риски без enterprise-контроля.',
                },
            ],
        },
        en: {
            badge: 'Sound familiar?',
            title: 'AI without coordination = chaos',
            problems: [
                {
                    icon: '🔧',
                    title: 'Everyone configures their own',
                    description: '10 developers — 10 different Claude Code configurations. No unified standards, everyone invents their own workflow.',
                },
                {
                    icon: '🔄',
                    title: 'Knowledge doesn\'t transfer',
                    description: 'One developer found the perfect pattern — the rest don\'t know. Constant reinvention of the wheel.',
                },
                {
                    icon: '📊',
                    title: 'No visibility or metrics',
                    description: 'Management can\'t see how the team uses AI. A blind spot — you can\'t optimize what you don\'t measure.',
                },
                {
                    icon: '🔒',
                    title: 'Security in question',
                    description: 'Secrets in prompts, uncontrolled MCP servers, no audit trail. Enterprise risks without enterprise controls.',
                },
            ],
        },
        ky: {
            badge: 'Тааныш маселелер?',
            title: 'Координациясыз AI = баш аламандык',
            problems: [
                {
                    icon: '🔧',
                    title: 'Ар ким өзү жөндөйт',
                    description: '10 иштеп чыгуучу — 10 түрдүү Claude Code конфигурациясы. Бирдиктүү стандарттар жок.',
                },
                {
                    icon: '🔄',
                    title: 'Билим берилбейт',
                    description: 'Бир иштеп чыгуучу идеалдуу паттерн тапты — калгандары билбейт. Дөңгөлөктү кайра ойлоп табуу.',
                },
                {
                    icon: '📊',
                    title: 'Көрүнүштүүлүк жок',
                    description: 'Жетекчилик команда AI кандай колдонуп жатканын көрбөйт. Сокур чекит — өлчөбөгөндү оптималдаштыруу мүмкүн эмес.',
                },
                {
                    icon: '🔒',
                    title: 'Коопсуздук суроо астында',
                    description: 'Промпттарда сырлар, көзөмөлсүз MCP серверлер, аудит жок. Enterprise тобокелдиктер контролсуз.',
                },
            ],
        }
    }

    const t = translations[locale] || translations.ru

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 bg-[#12121a] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-rose-500/10 rounded-full text-xs font-bold text-rose-400 uppercase tracking-wider mb-6"
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

                {/* Problem cards grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {t.problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:border-rose-500/30 hover:-translate-y-1 group"
                        >
                            <div className="w-14 h-14 bg-rose-500/10 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                            <p className="text-white/60 leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CCEProblemSection

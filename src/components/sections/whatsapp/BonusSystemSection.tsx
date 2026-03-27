'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const BonusSystemSection: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Motivation System',
                title: 'Transparent bonus system',
                subtitle: 'Motivate your team with fair and clear reward rules',
                features: [
                    {
                        icon: 'speed',
                        title: '×1.5 bonus for fast response',
                        description: 'Response within 1 minute — 50% bonus multiplier',
                        highlight: '×1.5'
                    },
                    {
                        icon: 'money',
                        title: 'Sales commission',
                        description: 'Configurable percentage from each closed deal',
                        highlight: '%'
                    },
                    {
                        icon: 'rating',
                        title: 'Transparent rating',
                        description: 'Everyone sees their position and metrics in real-time',
                        highlight: 'TOP'
                    },
                    {
                        icon: 'reward',
                        title: 'Automatic rewards',
                        description: 'System automatically calculates and accrues bonuses',
                        highlight: 'AUTO'
                    }
                ],
                leaderboardTitle: 'Leaderboard',
                thisWeek: 'This week',
                managers: [
                    { name: 'Aisha K.', score: 2450, deals: 12, avgResponse: '45s' },
                    { name: 'Timur B.', score: 2180, deals: 10, avgResponse: '52s' },
                    { name: 'Elena V.', score: 1920, deals: 8, avgResponse: '1m 15s' },
                    { name: 'Marat S.', score: 1650, deals: 7, avgResponse: '1m 30s' }
                ],
                scoreLabel: 'points',
                dealsLabel: 'deals',
                responseLabel: 'avg response'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Мотивация системасы',
                title: 'Ачык бонус системасы',
                subtitle: 'Командаңызды адилеттүү жана түшүнүктүү сыйлык эрежелери менен мотивациялаңыз',
                features: [
                    {
                        icon: 'speed',
                        title: 'Тез жооп үчүн ×1.5 бонус',
                        description: '1 мүнөттүн ичинде жооп — 50% бонус көбөйтмө',
                        highlight: '×1.5'
                    },
                    {
                        icon: 'money',
                        title: 'Сатуу комиссиясы',
                        description: 'Ар бир жабылган сделкадан настройкалуу пайыз',
                        highlight: '%'
                    },
                    {
                        icon: 'rating',
                        title: 'Ачык рейтинг',
                        description: 'Бардыгы өз позициясын жана метрикаларын реалдуу убакытта көрөт',
                        highlight: 'TOP'
                    },
                    {
                        icon: 'reward',
                        title: 'Автоматтык сыйлыктар',
                        description: 'Система автоматтык түрдө бонустарды эсептейт жана топтойт',
                        highlight: 'AUTO'
                    }
                ],
                leaderboardTitle: 'Лидерборд',
                thisWeek: 'Бул жума',
                managers: [
                    { name: 'Айша К.', score: 2450, deals: 12, avgResponse: '45с' },
                    { name: 'Тимур Б.', score: 2180, deals: 10, avgResponse: '52с' },
                    { name: 'Елена В.', score: 1920, deals: 8, avgResponse: '1м 15с' },
                    { name: 'Марат С.', score: 1650, deals: 7, avgResponse: '1м 30с' }
                ],
                scoreLabel: 'упай',
                dealsLabel: 'сделка',
                responseLabel: 'орточо жооп'
            }
        } else {
            return {
                badge: 'Система мотивации',
                title: 'Прозрачная система бонусов',
                subtitle: 'Мотивируйте команду понятными и справедливыми правилами вознаграждения',
                features: [
                    {
                        icon: 'speed',
                        title: '×1.5 бонус за быстрый ответ',
                        description: 'Ответ в течение 1 минуты — 50% к бонусу',
                        highlight: '×1.5'
                    },
                    {
                        icon: 'money',
                        title: 'Комиссия с продаж',
                        description: 'Настраиваемый процент от каждой закрытой сделки',
                        highlight: '%'
                    },
                    {
                        icon: 'rating',
                        title: 'Прозрачный рейтинг',
                        description: 'Каждый видит свою позицию и метрики в реальном времени',
                        highlight: 'TOP'
                    },
                    {
                        icon: 'reward',
                        title: 'Автоматические награды',
                        description: 'Система сама считает и начисляет бонусы',
                        highlight: 'AUTO'
                    }
                ],
                leaderboardTitle: 'Лидерборд',
                thisWeek: 'Эта неделя',
                managers: [
                    { name: 'Айша К.', score: 2450, deals: 12, avgResponse: '45с' },
                    { name: 'Тимур Б.', score: 2180, deals: 10, avgResponse: '52с' },
                    { name: 'Елена В.', score: 1920, deals: 8, avgResponse: '1м 15с' },
                    { name: 'Марат С.', score: 1650, deals: 7, avgResponse: '1м 30с' }
                ],
                scoreLabel: 'очков',
                dealsLabel: 'сделок',
                responseLabel: 'ср. ответ'
            }
        }
    }

    const translations = getTranslations()

    const getIcon = (icon: string) => {
        switch (icon) {
            case 'speed':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                )
            case 'money':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )
            case 'rating':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            case 'reward':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                )
            default:
                return null
        }
    }

    const getMedalColor = (index: number) => {
        switch (index) {
            case 0: return 'from-yellow-400 to-amber-500'
            case 1: return 'from-gray-300 to-gray-400'
            case 2: return 'from-amber-600 to-orange-700'
            default: return 'from-white/20 to-white/10'
        }
    }

    const getMedalEmoji = (index: number) => {
        switch (index) {
            case 0: return '🥇'
            case 1: return '🥈'
            case 2: return '🥉'
            default: return `#${index + 1}`
        }
    }

    return (
        <section id="bonus" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-4 py-2 text-sm text-amber-400 shadow-sm mb-4 sm:mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left: Features */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {translations.features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-3 right-3 text-2xl font-bold text-amber-500/20 group-hover:text-amber-500/30 transition-colors">
                                    {feature.highlight}
                                </div>
                                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 text-amber-400">
                                    {getIcon(feature.icon)}
                                </div>
                                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-white/60 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Leaderboard Demo */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-amber-600/20 to-yellow-600/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-medium">{translations.leaderboardTitle}</div>
                                    <div className="text-amber-400 text-xs">{translations.thisWeek}</div>
                                </div>
                            </div>
                        </div>

                        {/* Managers List */}
                        <div className="p-4 space-y-3">
                            {translations.managers.map((manager, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                                        index === 0 ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-white/5'
                                    }`}
                                >
                                    {/* Medal/Position */}
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getMedalColor(index)} flex items-center justify-center text-white font-bold text-sm`}>
                                        {index < 3 ? getMedalEmoji(index) : index + 1}
                                    </div>

                                    {/* Manager Info */}
                                    <div className="flex-1">
                                        <div className="text-white font-medium">{manager.name}</div>
                                        <div className="flex items-center gap-3 text-xs text-white/60">
                                            <span>{manager.deals} {translations.dealsLabel}</span>
                                            <span>•</span>
                                            <span>{translations.responseLabel}: {manager.avgResponse}</span>
                                        </div>
                                    </div>

                                    {/* Score */}
                                    <div className="text-right">
                                        <div className={`font-bold ${index === 0 ? 'text-amber-400' : 'text-white'}`}>
                                            {manager.score.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-white/40">{translations.scoreLabel}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BonusSystemSection

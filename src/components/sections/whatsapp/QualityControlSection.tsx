'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const QualityControlSection: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Quality Control',
                title: 'Automatic dialog analysis',
                subtitle: 'AI analyzes every conversation and alerts you to problems',
                features: [
                    {
                        icon: 'score',
                        title: 'Quality score 1-10',
                        description: 'Every dialog gets an automatic rating'
                    },
                    {
                        icon: 'flag',
                        title: 'Red flags',
                        description: 'Rudeness, slow response, missed sales'
                    },
                    {
                        icon: 'telegram',
                        title: 'Instant alerts',
                        description: 'Notifications in Telegram for critical issues'
                    },
                    {
                        icon: 'report',
                        title: 'Daily reports',
                        description: 'Summary of all conversations and recommendations'
                    }
                ],
                redFlags: [
                    { type: 'Rudeness', severity: 'critical', color: 'red' },
                    { type: 'Slow response', severity: 'high', color: 'orange' },
                    { type: 'Missed sale', severity: 'high', color: 'orange' },
                    { type: 'Wrong info', severity: 'medium', color: 'yellow' },
                    { type: 'No greeting', severity: 'low', color: 'blue' }
                ],
                scoreLabel: 'Dialog Quality',
                flagsLabel: 'Red Flags Detected'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Сапат көзөмөлү',
                title: 'Диалогдорду автоматтык анализдөө',
                subtitle: 'AI ар бир жазышманы анализдейт жана көйгөйлөр жөнүндө эскертет',
                features: [
                    {
                        icon: 'score',
                        title: 'Сапат баасы 1-10',
                        description: 'Ар бир диалог автоматтык баа алат'
                    },
                    {
                        icon: 'flag',
                        title: 'Кызыл желекчелер',
                        description: 'Одурайуу, жай жооп, өткөрүп жиберилген сатуулар'
                    },
                    {
                        icon: 'telegram',
                        title: 'Тез эскертүүлөр',
                        description: 'Критикалык көйгөйлөр үчүн Telegramда билдирмелер'
                    },
                    {
                        icon: 'report',
                        title: 'Күнүмдүк отчеттор',
                        description: 'Бардык жазышмалардын жыйынтыгы жана сунуштамалар'
                    }
                ],
                redFlags: [
                    { type: 'Одурайуу', severity: 'критикалык', color: 'red' },
                    { type: 'Жай жооп', severity: 'жогорку', color: 'orange' },
                    { type: 'Өткөрүп жиберилген сатуу', severity: 'жогорку', color: 'orange' },
                    { type: 'Туура эмес маалымат', severity: 'орточо', color: 'yellow' },
                    { type: 'Саламдашуу жок', severity: 'төмөн', color: 'blue' }
                ],
                scoreLabel: 'Диалог сапаты',
                flagsLabel: 'Табылган кызыл желекчелер'
            }
        } else {
            return {
                badge: 'Контроль качества',
                title: 'Автоматический анализ диалогов',
                subtitle: 'AI анализирует каждую переписку и предупреждает о проблемах',
                features: [
                    {
                        icon: 'score',
                        title: 'Оценка качества 1-10',
                        description: 'Каждый диалог получает автоматическую оценку'
                    },
                    {
                        icon: 'flag',
                        title: 'Красные флаги',
                        description: 'Грубость, медленный ответ, упущенные продажи'
                    },
                    {
                        icon: 'telegram',
                        title: 'Мгновенные алерты',
                        description: 'Уведомления в Telegram о критических проблемах'
                    },
                    {
                        icon: 'report',
                        title: 'Ежедневные отчёты',
                        description: 'Сводка по всем переписками и рекомендации'
                    }
                ],
                redFlags: [
                    { type: 'Грубость', severity: 'критический', color: 'red' },
                    { type: 'Медленный ответ', severity: 'высокий', color: 'orange' },
                    { type: 'Упущенная продажа', severity: 'высокий', color: 'orange' },
                    { type: 'Неверная информация', severity: 'средний', color: 'yellow' },
                    { type: 'Нет приветствия', severity: 'низкий', color: 'blue' }
                ],
                scoreLabel: 'Качество диалога',
                flagsLabel: 'Обнаруженные красные флаги'
            }
        }
    }

    const translations = getTranslations()

    const getIcon = (icon: string) => {
        switch (icon) {
            case 'score':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                )
            case 'flag':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                )
            case 'telegram':
                return (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                )
            case 'report':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                )
            default:
                return null
        }
    }

    const getColorClass = (color: string) => {
        switch (color) {
            case 'red': return 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30'
            case 'orange': return 'bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/30'
            case 'yellow': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
            case 'blue': return 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30'
            default: return 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-white/60 border-gray-300 dark:border-white/20'
        }
    }

    return (
        <section id="quality-control" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 text-sm text-orange-600 dark:text-orange-400 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left: Features */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {translations.features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-5 bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                                    {getIcon(feature.icon)}
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-white/60 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Demo Dashboard */}
                    <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6">
                        {/* Score */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-gray-500 dark:text-white/60 text-sm">{translations.scoreLabel}</span>
                                <span className="text-2xl font-bold text-green-600 dark:text-green-400">8.5/10</span>
                            </div>
                            <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: '85%' }} />
                            </div>
                        </div>

                        {/* Red Flags */}
                        <div>
                            <span className="text-gray-500 dark:text-white/60 text-sm block mb-3">{translations.flagsLabel}</span>
                            <div className="space-y-2">
                                {translations.redFlags.map((flag, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center justify-between px-3 py-2 rounded-lg border ${getColorClass(flag.color)}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                            </svg>
                                            <span className="text-sm font-medium">{flag.type}</span>
                                        </div>
                                        <span className="text-xs opacity-80">{flag.severity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualityControlSection

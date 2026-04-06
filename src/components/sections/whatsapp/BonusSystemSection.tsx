'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const BonusSystemSection: React.FC = () => {
    const { tObj } = useTranslation()
    const translations = tObj('whatsappBonus')

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
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-full px-4 py-2 text-sm text-amber-600 dark:text-amber-400 shadow-sm mb-4 sm:mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
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
                                className="p-5 bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-3 right-3 text-2xl font-bold text-amber-500/20 group-hover:text-amber-500/30 transition-colors">
                                    {feature.highlight}
                                </div>
                                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                                    {getIcon(feature.icon)}
                                </div>
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-500 dark:text-white/60 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right: Leaderboard Demo */}
                    <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-gray-200 dark:border-white/10 flex items-center justify-between bg-gradient-to-r from-amber-600/20 to-yellow-600/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-gray-900 dark:text-white font-medium">{translations.leaderboardTitle}</div>
                                    <div className="text-amber-600 dark:text-amber-400 text-xs">{translations.thisWeek}</div>
                                </div>
                            </div>
                        </div>

                        {/* Managers List */}
                        <div className="p-4 space-y-3">
                            {translations.managers.map((manager, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                                        index === 0 ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-gray-50 dark:bg-white/5'
                                    }`}
                                >
                                    {/* Medal/Position */}
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${getMedalColor(index)} flex items-center justify-center text-white font-bold text-sm`}>
                                        {index < 3 ? getMedalEmoji(index) : index + 1}
                                    </div>

                                    {/* Manager Info */}
                                    <div className="flex-1">
                                        <div className="text-gray-900 dark:text-white font-medium">{manager.name}</div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-white/60">
                                            <span>{manager.deals} {translations.dealsLabel}</span>
                                            <span>•</span>
                                            <span>{translations.responseLabel}: {manager.avgResponse}</span>
                                        </div>
                                    </div>

                                    {/* Score */}
                                    <div className="text-right">
                                        <div className={`font-bold ${index === 0 ? 'text-amber-400' : 'text-gray-900 dark:text-white'}`}>
                                            {manager.score.toLocaleString()}
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-white/55">{translations.scoreLabel}</div>
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

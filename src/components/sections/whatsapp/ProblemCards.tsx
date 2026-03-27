'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

interface Problem {
    icon: React.ReactNode
    title: string
    description: string
}

const ProblemCards: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Sound Familiar?',
                title: 'Problems we solve',
                subtitle: 'These issues cost you money and clients every day',
                problems: [
                    {
                        title: 'Manager quit — clients gone',
                        description: 'When a manager leaves, all their WhatsApp history and client relationships go with them.'
                    },
                    {
                        title: 'No visibility into conversations',
                        description: 'You have no idea what your managers are writing to clients. Could be losing sales or damaging reputation.'
                    },
                    {
                        title: 'WhatsApp Web chaos',
                        description: '50+ chats, constant notifications, missed messages. Impossible to keep track of everything.'
                    },
                    {
                        title: 'Slow response times',
                        description: 'Clients wait hours for a response. By then, they\'ve already gone to a competitor.'
                    },
                    {
                        title: 'No performance metrics',
                        description: 'Who\'s selling? Who\'s slacking? How fast do they respond? You don\'t know.'
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Тааныштыгы барбы?',
                title: 'Биз чечкен көйгөйлөр',
                subtitle: 'Бул маселелер күн сайын акча жана кардарларды жоготууга алып келет',
                problems: [
                    {
                        title: 'Менеджер кетти — кардарлар жоголду',
                        description: 'Менеджер кеткенде, алардын бардык WhatsApp тарыхы жана кардар мамилелери алар менен кетет.'
                    },
                    {
                        title: 'Жазышмаларды көрө албайсыз',
                        description: 'Менеджерлериңиз кардарларга эмне жазып жатканын билбейсиз. Сатууларды жоготуп же репутацияга зыян келтирип жаткан болушу мүмкүн.'
                    },
                    {
                        title: 'WhatsApp Web хаосу',
                        description: '50+ чат, дайыма билдирмелер, өткөрүп жиберилген билдирүүлөр. Бардыгын көзөмөлдөө мүмкүн эмес.'
                    },
                    {
                        title: 'Жай жооп берүү',
                        description: 'Кардарлар жооп үчүн сааттап күтүшөт. Ошол убакка чейин алар атаандашка барып калышкан.'
                    },
                    {
                        title: 'Натыйжалуулук метрикасы жок',
                        description: 'Ким сатып жатат? Ким жалкоолонуп жатат? Канчалык тез жооп берет? Билбейсиз.'
                    }
                ]
            }
        } else {
            return {
                badge: 'Знакомо?',
                title: 'Проблемы, которые мы решаем',
                subtitle: 'Эти проблемы стоят вам денег и клиентов каждый день',
                problems: [
                    {
                        title: 'Менеджер уволился — клиенты ушли',
                        description: 'Когда менеджер уходит, вся история WhatsApp и клиентские связи уходят вместе с ним.'
                    },
                    {
                        title: 'Не видите переписки',
                        description: 'Вы не знаете, что ваши менеджеры пишут клиентам. Возможно, теряете продажи или портите репутацию.'
                    },
                    {
                        title: 'WhatsApp Web — хаос',
                        description: '50+ чатов, постоянные уведомления, пропущенные сообщения. Невозможно за всем уследить.'
                    },
                    {
                        title: 'Медленные ответы',
                        description: 'Клиенты ждут ответа часами. К этому времени они уже ушли к конкуренту.'
                    },
                    {
                        title: 'Нет статистики',
                        description: 'Кто продаёт? Кто сливает? Как быстро отвечают? Вы не знаете.'
                    }
                ]
            }
        }
    }

    const translations = getTranslations()

    const icons = [
        // User leaving
        <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>,
        // Eye off
        <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>,
        // Chaos/mess
        <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>,
        // Clock/slow
        <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>,
        // Chart/no data
        <svg key="5" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
    ]

    return (
        <section id="problems" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-4 py-2 text-sm text-red-400 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                {/* Problem Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translations.problems.map((problem, index) => (
                        <div
                            key={index}
                            className={`group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/30 transition-all duration-300 hover:scale-105 ${
                                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                            }`}
                        >
                            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 text-red-400 group-hover:bg-red-500/20 transition-colors">
                                {icons[index]}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {problem.title}
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Arrow to solution */}
                <div className="flex justify-center mt-12">
                    <div className="flex flex-col items-center text-white/40">
                        <span className="text-sm mb-2">
                            {locale === 'en' ? 'We have a solution' : locale === 'ky' ? 'Бизде чечим бар' : 'У нас есть решение'}
                        </span>
                        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemCards

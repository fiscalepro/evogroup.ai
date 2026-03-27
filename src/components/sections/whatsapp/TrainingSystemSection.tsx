'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const TrainingSystemSection: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Training System',
                title: 'Manager training system',
                subtitle: 'Turn newbies into professionals with our training platform',
                features: [
                    {
                        icon: 'library',
                        title: '200+ real examples',
                        description: 'Library of successful dialogs from your industry'
                    },
                    {
                        icon: 'test',
                        title: 'Tests and exams',
                        description: 'Knowledge verification at every stage'
                    },
                    {
                        icon: 'certificate',
                        title: 'Certification',
                        description: 'Certificates for employees upon completion'
                    },
                    {
                        icon: 'gamification',
                        title: 'Gamification',
                        description: 'Leaderboards, achievements, and rewards'
                    }
                ],
                stats: [
                    { value: '200+', label: 'Dialog examples' },
                    { value: '50+', label: 'Test questions' },
                    { value: '3x', label: 'Faster onboarding' }
                ],
                moduleTitle: 'Training Modules',
                modules: [
                    { name: 'Greeting basics', progress: 100, lessons: 8 },
                    { name: 'Product knowledge', progress: 75, lessons: 12 },
                    { name: 'Objection handling', progress: 40, lessons: 10 },
                    { name: 'Closing sales', progress: 0, lessons: 6 }
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Окутуу системасы',
                title: 'Менеджерлерди окутуу системасы',
                subtitle: 'Жаңы кызматкерлерди биздин окутуу платформасы менен профессионалдарга айлантыңыз',
                features: [
                    {
                        icon: 'library',
                        title: '200+ реалдуу мисал',
                        description: 'Сиздин тармактагы ийгиликтүү диалогдордун китепканасы'
                    },
                    {
                        icon: 'test',
                        title: 'Тесттер жана экзамендер',
                        description: 'Ар бир этапта билимди текшерүү'
                    },
                    {
                        icon: 'certificate',
                        title: 'Сертификаттоо',
                        description: 'Аяктагандан кийин кызматкерлерге сертификаттар'
                    },
                    {
                        icon: 'gamification',
                        title: 'Геймификация',
                        description: 'Лидерборддор, жетишкендиктер жана сыйлыктар'
                    }
                ],
                stats: [
                    { value: '200+', label: 'Диалог мисалдары' },
                    { value: '50+', label: 'Тест суроолору' },
                    { value: '3x', label: 'Тезирээк адаптация' }
                ],
                moduleTitle: 'Окутуу модулдары',
                modules: [
                    { name: 'Саламдашуу негиздери', progress: 100, lessons: 8 },
                    { name: 'Продукт билими', progress: 75, lessons: 12 },
                    { name: 'Каршылыктарды иштетүү', progress: 40, lessons: 10 },
                    { name: 'Сатууларды жабуу', progress: 0, lessons: 6 }
                ]
            }
        } else {
            return {
                badge: 'Система обучения',
                title: 'Система обучения менеджеров',
                subtitle: 'Превратите новичков в профессионалов с нашей платформой обучения',
                features: [
                    {
                        icon: 'library',
                        title: '200+ реальных примеров',
                        description: 'Библиотека успешных диалогов из вашей отрасли'
                    },
                    {
                        icon: 'test',
                        title: 'Тесты и экзамены',
                        description: 'Проверка знаний на каждом этапе'
                    },
                    {
                        icon: 'certificate',
                        title: 'Сертификация',
                        description: 'Сертификаты для сотрудников по завершении'
                    },
                    {
                        icon: 'gamification',
                        title: 'Геймификация',
                        description: 'Лидерборды, достижения и награды'
                    }
                ],
                stats: [
                    { value: '200+', label: 'Примеров диалогов' },
                    { value: '50+', label: 'Тестовых вопросов' },
                    { value: '3x', label: 'Быстрее адаптация' }
                ],
                moduleTitle: 'Модули обучения',
                modules: [
                    { name: 'Основы приветствия', progress: 100, lessons: 8 },
                    { name: 'Знание продукта', progress: 75, lessons: 12 },
                    { name: 'Работа с возражениями', progress: 40, lessons: 10 },
                    { name: 'Закрытие продаж', progress: 0, lessons: 6 }
                ]
            }
        }
    }

    const translations = getTranslations()

    const getIcon = (icon: string) => {
        switch (icon) {
            case 'library':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                )
            case 'test':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                )
            case 'certificate':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                )
            case 'gamification':
                return (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                )
            default:
                return null
        }
    }

    return (
        <section id="training" className="py-12 sm:py-24 bg-slate-900/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-4 py-2 text-sm text-cyan-400 shadow-sm mb-4 sm:mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
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
                    <div className="space-y-4">
                        {translations.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 text-cyan-400">
                                    {getIcon(feature.icon)}
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                    <p className="text-white/60 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            {translations.stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                                    <div className="text-white/60 text-xs">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Demo Learning Platform */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3 bg-gradient-to-r from-cyan-600/20 to-teal-600/20">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-white font-medium">{translations.moduleTitle}</div>
                                <div className="text-cyan-400 text-xs">4 {locale === 'en' ? 'modules' : locale === 'ky' ? 'модул' : 'модуля'}</div>
                            </div>
                        </div>

                        {/* Modules List */}
                        <div className="p-4 space-y-3">
                            {translations.modules.map((module, index) => (
                                <div key={index} className="p-3 bg-white/5 rounded-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-sm font-medium">{module.name}</span>
                                        <span className="text-white/60 text-xs">{module.lessons} {locale === 'en' ? 'lessons' : locale === 'ky' ? 'сабак' : 'уроков'}</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${
                                                module.progress === 100
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                                                    : module.progress > 0
                                                    ? 'bg-gradient-to-r from-cyan-500 to-teal-400'
                                                    : 'bg-white/20'
                                            }`}
                                            style={{ width: `${module.progress}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className={`text-xs ${module.progress === 100 ? 'text-green-400' : 'text-white/40'}`}>
                                            {module.progress === 100
                                                ? (locale === 'en' ? 'Completed' : locale === 'ky' ? 'Аяктаган' : 'Завершено')
                                                : module.progress > 0
                                                ? (locale === 'en' ? 'In progress' : locale === 'ky' ? 'Процесстен' : 'В процессе')
                                                : (locale === 'en' ? 'Not started' : locale === 'ky' ? 'Башталган жок' : 'Не начато')
                                            }
                                        </span>
                                        <span className="text-white/60 text-xs">{module.progress}%</span>
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

export default TrainingSystemSection

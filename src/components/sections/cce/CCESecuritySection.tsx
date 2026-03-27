'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const CCESecuritySection: React.FC = () => {
    const { locale } = useTranslation()

    const translations = {
        ru: {
            badge: 'Enterprise Security',
            title: 'Безопасность без компромиссов',
            features: [
                {
                    title: 'Политики безопасности',
                    description: 'Централизованные правила доступа. Определите, что можно и нельзя — политики применятся ко всей команде автоматически.',
                },
                {
                    title: 'Аудит и мониторинг',
                    description: 'Полная история действий каждого разработчика. Кто, что и когда сделал с AI — всё в логе.',
                },
                {
                    title: 'Секреты под контролем',
                    description: 'Pre-commit hooks предотвращают утечку секретов. Автоматическое сканирование промптов и ответов AI.',
                },
                {
                    title: 'Code Review AI',
                    description: 'Автоматический review по стандартам компании. AI проверяет код до того, как его увидит тимлид.',
                },
                {
                    title: 'Compliance Ready',
                    description: 'Генерация отчётов для аудиторов. Готовые шаблоны для SOC2, ISO 27001, GDPR.',
                },
                {
                    title: 'Self-hosted опция',
                    description: 'Данные остаются в вашем периметре. Полный контроль над инфраструктурой и конфиденциальностью.',
                },
            ],
        },
        en: {
            badge: 'Enterprise Security',
            title: 'Security without compromise',
            features: [
                {
                    title: 'Security Policies',
                    description: 'Centralized access rules. Define what\'s allowed and what isn\'t — policies apply to the entire team automatically.',
                },
                {
                    title: 'Audit & Monitoring',
                    description: 'Complete action history for every developer. Who did what and when with AI — everything is logged.',
                },
                {
                    title: 'Secrets Under Control',
                    description: 'Pre-commit hooks prevent secret leaks. Automatic scanning of prompts and AI responses.',
                },
                {
                    title: 'AI Code Review',
                    description: 'Automatic review by company standards. AI checks code before the team lead sees it.',
                },
                {
                    title: 'Compliance Ready',
                    description: 'Report generation for auditors. Ready-made templates for SOC2, ISO 27001, GDPR.',
                },
                {
                    title: 'Self-hosted Option',
                    description: 'Data stays within your perimeter. Full control over infrastructure and confidentiality.',
                },
            ],
        },
        ky: {
            badge: 'Enterprise Security',
            title: 'Компромисссиз коопсуздук',
            features: [
                {
                    title: 'Коопсуздук саясаттары',
                    description: 'Борбордоштурулган кирүү эрежелери. Эмнеге уруксат жана тыюу — саясаттар бүт командага автоматтык колдонулат.',
                },
                {
                    title: 'Аудит жана мониторинг',
                    description: 'Ар бир иштеп чыгуучунун толук аракеттер тарыхы. Ким, эмне жана качан AI менен жасады.',
                },
                {
                    title: 'Сырлар контролдо',
                    description: 'Pre-commit hooks сырлардын агып кетишин алдын алат. Промпттарды жана AI жоопторун автоматтык сканерлөө.',
                },
                {
                    title: 'AI Code Review',
                    description: 'Компания стандарттары боюнча автоматтык review. AI кодду тимлид көрөрдөн мурун текшерет.',
                },
                {
                    title: 'Compliance Ready',
                    description: 'Аудиторлор үчүн отчёттор. SOC2, ISO 27001, GDPR үчүн даяр шаблондор.',
                },
                {
                    title: 'Self-hosted опция',
                    description: 'Маалыматтар сиздин периметрде калат. Инфраструктура жана купуялуулук боюнча толук контрол.',
                },
            ],
        }
    }

    const t = translations[locale] || translations.ru

    const featureIcons = [
        // Shield
        <svg key="shield" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>,
        // Eye
        <svg key="eye" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>,
        // Lock
        <svg key="lock" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>,
        // Code
        <svg key="code" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>,
        // Document
        <svg key="document" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>,
        // Server
        <svg key="server" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>,
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
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16"
                >
                    {t.title}
                </motion.h2>

                {/* Security features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all hover:border-violet-500/30 hover:scale-[1.03] group"
                        >
                            <div className="w-14 h-14 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-6 group-hover:scale-110 transition-transform">
                                {featureIcons[index]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CCESecuritySection

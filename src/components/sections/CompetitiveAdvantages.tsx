'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { useTranslation } from '@/components/providers/I18nProvider'

const CompetitiveAdvantages: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                preTitle: 'Why Us',
                title: 'Built for enterprise',
                subtitle: 'We deliver solutions that work at scale',
                cta: 'Start Your Project',
                advantages: [
                    {
                        title: '15+ Years',
                        subtitle: 'AI Expertise',
                        description: 'Deep knowledge in machine learning and enterprise implementations'
                    },
                    {
                        title: '24/7',
                        subtitle: 'Expert Support',
                        description: 'Round-the-clock technical support with dedicated engineering team'
                    },
                    {
                        title: '99.9%',
                        subtitle: 'System Uptime',
                        description: 'Enterprise-grade reliability with proactive monitoring'
                    },
                    {
                        title: '250%',
                        subtitle: 'Average ROI',
                        description: 'Proven return on investment with 6-18 months payback period'
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Эмне үчүн биз',
                title: 'Корпоративдүү деңгээл',
                subtitle: 'Масштабда иштеген чечимдерди берөбүз',
                cta: 'Долбоорду баштоо',
                advantages: [
                    {
                        title: '15+ жыл',
                        subtitle: 'ИИ экспертиза',
                        description: 'Машина үйрөнүү жана корпоративдүү ишке ашыруу боюнча терең билим'
                    },
                    {
                        title: '24/7',
                        subtitle: 'Адис колдоо',
                        description: 'Түнү күндүз техникалык колдоо менен кезектеги инженердик команда'
                    },
                    {
                        title: '99.9%',
                        subtitle: 'Системанын иштеши',
                        description: 'Проактивдүү мониторинг менен корпоративдик ишенимдүүлүк'
                    },
                    {
                        title: '250%',
                        subtitle: 'Орточо ROI',
                        description: 'Далилденген кайтарым 6-18 ай кайтарым мезгили менен'
                    }
                ]
            }
        } else {
            return {
                preTitle: 'Почему мы',
                title: 'Корпоративный уровень',
                subtitle: 'Создаем решения, которые работают в масштабе',
                cta: 'Начать проект',
                advantages: [
                    {
                        title: '15+ лет',
                        subtitle: 'Экспертиза в AI',
                        description: 'Глубокие знания в машинном обучении и корпоративных внедрениях'
                    },
                    {
                        title: '24/7',
                        subtitle: 'Поддержка экспертов',
                        description: 'Круглосуточная техподдержка с выделенной командой инженеров'
                    },
                    {
                        title: '99.9%',
                        subtitle: 'Время работы',
                        description: 'Корпоративная надежность с проактивным мониторингом'
                    },
                    {
                        title: '250%',
                        subtitle: 'Средний ROI',
                        description: 'Доказанная окупаемость с периодом возврата 6-18 месяцев'
                    }
                ]
            }
        }
    }

    const translations = getTranslations()

    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            {/* Section header */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 mb-14 text-center">
                <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#F0F0F5]/[0.04] border border-gray-200 dark:border-[#F0F0F5]/[0.08] text-sm font-medium text-gray-500 dark:text-[#F0F0F5]/60">
                    {translations.preTitle}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-4 tracking-tight">
                    {translations.title}
                </h2>
                <p className="text-base lg:text-lg text-gray-400 dark:text-[#F0F0F5]/50 max-w-xl mx-auto">
                    {translations.subtitle}
                </p>
            </div>

            {/* Advantages grid */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 mb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {translations.advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="group p-6 rounded-2xl bg-gray-50 dark:bg-[#F0F0F5]/[0.02] border border-gray-200 dark:border-[#F0F0F5]/[0.06] hover:bg-gray-100 dark:hover:bg-[#F0F0F5]/[0.04] hover:border-gray-300 dark:hover:border-[#F0F0F5]/[0.12] transition-all duration-300 text-center"
                        >
                            <div className="text-3xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-1">
                                {advantage.title}
                            </div>
                            <div className="text-sm font-semibold text-gray-500 dark:text-[#F0F0F5]/60 mb-3">
                                {advantage.subtitle}
                            </div>
                            <p className="text-xs text-gray-400 dark:text-[#F0F0F5]/35 leading-relaxed">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <div className="flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-[#F0F0F5] mb-3">
                        {locale === 'en' ? 'Ready to transform your business?' : locale === 'ky' ? 'Бизнесиңизди өзгөртүүгө даярсызбы?' : 'Готовы трансформировать бизнес?'}
                    </h3>
                    <p className="text-gray-400 dark:text-[#F0F0F5]/45 mb-8 max-w-lg text-sm sm:text-base">
                        {locale === 'en' ? 'Get a free consultation and see how AI can help your company' : locale === 'ky' ? 'Акысыз консультация алыңыз жана ИИ компаниягыңызга кандай жардам бере аларын көрүңүз' : 'Получите бесплатную консультацию и узнайте, как AI может помочь вашей компании'}
                    </p>
                    <Button href="/contact" variant="primary" size="lg">
                        {translations.cta}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CompetitiveAdvantages

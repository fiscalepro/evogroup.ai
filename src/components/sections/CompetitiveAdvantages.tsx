'use client'

import React from 'react'
import { Card, CardBody, Button } from '@nextui-org/react'
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
        <section className="relative py-32 overflow-hidden">
            {/* Section header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90">
                    {translations.preTitle}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {translations.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                    {translations.subtitle}
                </p>
            </div>

            {/* Advantages grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {translations.advantages.map((advantage, index) => (
                        <Card
                            key={index}
                            className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
                        >
                            <CardBody className="p-8 text-center">
                                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                                    {advantage.title}
                                </div>
                                <div className="text-lg font-semibold text-white mb-4">
                                    {advantage.subtitle}
                                </div>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    {advantage.description}
                                </p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <Card className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-xl border-white/20">
                    <CardBody className="p-12 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            {locale === 'en' ? 'Ready to transform your business?' : locale === 'ky' ? 'Бизнесиңизди өзгөртүүгө даярсызбы?' : 'Готовы трансформировать бизнес?'}
                        </h3>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            {locale === 'en' ? 'Get a free consultation and see how AI can help your company' : locale === 'ky' ? 'Акысыз консультация алыңыз жана ИИ компаниягыңызга кандай жардам бере аларын көрүңүз' : 'Получите бесплатную консультацию и узнайте, как AI может помочь вашей компании'}
                        </p>
                        <Button
                            size="lg"
                            color="primary"
                            className="text-base font-semibold px-8 h-14 bg-blue-600 hover:bg-blue-700"
                            radius="full"
                        >
                            {translations.cta}
                        </Button>
                    </CardBody>
                </Card>
            </div>

            {/* Background */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        </section>
    )
}

export default CompetitiveAdvantages

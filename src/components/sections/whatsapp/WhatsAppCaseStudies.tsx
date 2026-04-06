'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const WhatsAppCaseStudies: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Case Studies',
                title: 'Our clients\' results',
                subtitle: 'Real companies, real results',
                cases: [
                    {
                        company: 'BIAST',
                        industry: 'Construction Materials',
                        logo: 'B',
                        color: 'from-blue-500 to-indigo-600',
                        result: '+45%',
                        resultLabel: 'conversion',
                        description: 'Wholesale construction materials supplier. Connected WhatsApp CRM and saw a 45% increase in order conversion.',
                        stats: [
                            { value: '45%', label: 'Conversion increase' },
                            { value: '2x', label: 'Faster responses' },
                            { value: '0', label: 'Lost clients' }
                        ],
                        quote: 'Before, managers would leave and take clients with them. Now all history is ours.'
                    },
                    {
                        company: 'TravelKG',
                        industry: 'Tourism',
                        logo: 'T',
                        color: 'from-emerald-500 to-teal-600',
                        result: '50%',
                        resultLabel: 'AI handled',
                        description: 'Travel agency with tours to Issyk-Kul and Son-Kul. AI bot handles half of all inquiries automatically.',
                        stats: [
                            { value: '50%', label: 'Requests via AI' },
                            { value: '24/7', label: 'Availability' },
                            { value: '3x', label: 'More bookings' }
                        ],
                        quote: 'Now tourists get answers at 3 AM, when they\'re choosing where to travel.'
                    },
                    {
                        company: 'FloraExpress',
                        industry: 'Flower Delivery',
                        logo: 'F',
                        color: 'from-pink-500 to-rose-600',
                        result: '0',
                        resultLabel: 'lost orders',
                        description: 'Flower delivery in Bishkek. Zero missed orders since connecting the system.',
                        stats: [
                            { value: '0', label: 'Lost orders' },
                            { value: '98%', label: 'Customer satisfaction' },
                            { value: '< 30s', label: 'Response time' }
                        ],
                        quote: 'Every order counts for us. Now we don\'t miss a single message, even during rush holidays.'
                    }
                ],
                readMore: 'Read full case study'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Кейстер',
                title: 'Кардарларыбыздын натыйжалары',
                subtitle: 'Чыныгы компаниялар, чыныгы натыйжалар',
                cases: [
                    {
                        company: 'BIAST',
                        industry: 'Курулуш материалдары',
                        logo: 'B',
                        color: 'from-blue-500 to-indigo-600',
                        result: '+45%',
                        resultLabel: 'конверсия',
                        description: 'Курулуш материалдарын дүң саткан камсыздоочу. WhatsApp CRM туташтыргандан кийин буйрутма конверсиясы 45% өстү.',
                        stats: [
                            { value: '45%', label: 'Конверсия өсүшү' },
                            { value: '2x', label: 'Тезирээк жооптор' },
                            { value: '0', label: 'Жоголгон кардарлар' }
                        ],
                        quote: 'Мурда менеджерлер кетип, кардарларды алып кетишчү. Азыр бардык тарых биздики.'
                    },
                    {
                        company: 'TravelKG',
                        industry: 'Туризм',
                        logo: 'T',
                        color: 'from-emerald-500 to-teal-600',
                        result: '50%',
                        resultLabel: 'AI иштетти',
                        description: 'Ысык-Көл жана Соң-Көлгө турлары бар саякат агенттиги. AI бот сурамдардын жарымын автоматтык түрдө иштетет.',
                        stats: [
                            { value: '50%', label: 'AI аркылуу сурамдар' },
                            { value: '24/7', label: 'Жеткиликтүүлүк' },
                            { value: '3x', label: 'Көбүрөөк брондоо' }
                        ],
                        quote: 'Азыр туристтер түнкү саат 3тө жооп алышат, кайда саякаттоону тандап жатканда.'
                    },
                    {
                        company: 'FloraExpress',
                        industry: 'Гүл жеткирүү',
                        logo: 'F',
                        color: 'from-pink-500 to-rose-600',
                        result: '0',
                        resultLabel: 'жоголгон буйрутма',
                        description: 'Бишкекте гүл жеткирүү. Системаны туташтыргандан бери бир да буйрутма өткөрүп жиберилген жок.',
                        stats: [
                            { value: '0', label: 'Жоголгон буйрутмалар' },
                            { value: '98%', label: 'Кардар канааттануусу' },
                            { value: '< 30с', label: 'Жооп убактысы' }
                        ],
                        quote: 'Биз үчүн ар бир буйрутма маанилүү. Азыр майрамдык шашылыш учурда да бир билдирүүнү да өткөрүп жибербейбиз.'
                    }
                ],
                readMore: 'Толук кейсти окуу'
            }
        } else {
            return {
                badge: 'Кейсы',
                title: 'Результаты наших клиентов',
                subtitle: 'Реальные компании, реальные результаты',
                cases: [
                    {
                        company: 'BIAST',
                        industry: 'Стройматериалы',
                        logo: 'B',
                        color: 'from-blue-500 to-indigo-600',
                        result: '+45%',
                        resultLabel: 'конверсия',
                        description: 'Оптовый поставщик стройматериалов. Подключили WhatsApp CRM и увидели рост конверсии заказов на 45%.',
                        stats: [
                            { value: '45%', label: 'Рост конверсии' },
                            { value: '2x', label: 'Быстрее ответы' },
                            { value: '0', label: 'Потерянных клиентов' }
                        ],
                        quote: 'Раньше менеджеры уходили и уводили клиентов. Теперь вся история — наша.'
                    },
                    {
                        company: 'TravelKG',
                        industry: 'Туризм',
                        logo: 'T',
                        color: 'from-emerald-500 to-teal-600',
                        result: '50%',
                        resultLabel: 'AI обработал',
                        description: 'Турагентство с турами на Иссык-Куль и Сон-Куль. AI-бот обрабатывает половину запросов автоматически.',
                        stats: [
                            { value: '50%', label: 'Запросов через AI' },
                            { value: '24/7', label: 'Доступность' },
                            { value: '3x', label: 'Больше броней' }
                        ],
                        quote: 'Теперь туристы получают ответы в 3 ночи, когда выбирают куда поехать.'
                    },
                    {
                        company: 'FloraExpress',
                        industry: 'Доставка цветов',
                        logo: 'F',
                        color: 'from-pink-500 to-rose-600',
                        result: '0',
                        resultLabel: 'потерянных заказов',
                        description: 'Доставка цветов по Бишкеку. Ноль пропущенных заказов с момента подключения.',
                        stats: [
                            { value: '0', label: 'Потерянных заказов' },
                            { value: '98%', label: 'Удовлетворённость' },
                            { value: '< 30с', label: 'Время ответа' }
                        ],
                        quote: 'Для нас каждый заказ на счету. Теперь не пропускаем ни одного сообщения даже в праздничный аврал.'
                    }
                ],
                readMore: 'Читать полный кейс'
            }
        }
    }

    const translations = getTranslations()

    return (
        <section id="cases" className="py-12 sm:py-24 bg-gray-50 dark:bg-slate-900/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-600 dark:text-green-400 shadow-sm mb-4 sm:mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

                {/* Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translations.cases.map((caseStudy, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
                        >
                            {/* Header */}
                            <div className={`bg-gradient-to-r ${caseStudy.color} p-4`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                            {caseStudy.logo}
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">{caseStudy.company}</div>
                                            <div className="text-white/80 text-sm">{caseStudy.industry}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-3xl font-bold text-white">{caseStudy.result}</div>
                                        <div className="text-white/80 text-xs">{caseStudy.resultLabel}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-gray-600 dark:text-white/70 text-sm mb-4 leading-relaxed">
                                    {caseStudy.description}
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    {caseStudy.stats.map((stat, statIndex) => (
                                        <div key={statIndex} className="text-center p-2 bg-gray-50 dark:bg-white/5 rounded-lg">
                                            <div className="text-lg font-bold text-green-600 dark:text-green-400">{stat.value}</div>
                                            <div className="text-gray-400 dark:text-white/50 text-xs">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quote */}
                                <div className="border-l-2 border-green-500/30 pl-3">
                                    <p className="text-gray-500 dark:text-white/60 text-sm italic">
                                        &ldquo;{caseStudy.quote}&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhatsAppCaseStudies

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import { useTranslation } from '@/components/providers/I18nProvider'

const Solutions: React.FC = () => {
    const { locale } = useTranslation()
    const [selectedSolution, setSelectedSolution] = useState<string | null>(null)

    const handleSolutionClick = (solutionId: string) => {
        console.log('Solution clicked:', solutionId)
        setSelectedSolution(solutionId)
    }

    const handleModalClose = () => {
        console.log('Modal closing')
        setSelectedSolution(null)
    }

    React.useEffect(() => {
        console.log('Selected solution changed:', selectedSolution)
    }, [selectedSolution])

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                preTitle: 'Industries',
                title: 'Solutions for every business',
                subtitle: 'We create AI systems tailored to the unique challenges of your industry',
                banking: {
                    title: 'Banking',
                    description: 'Intelligent credit scoring, fraud detection, and personalized financial services',
                    fullDescription: 'Our company specializes in technological solutions for banks and the corporate sector. We create products in the areas of tax services, inventory management, smart contracts, and HR automation. Our developments accelerate business processes, reduce risks, and ensure transparency of operations.'
                },
                government: {
                    title: 'TelecomAI Connect',
                    description: 'Multi-agent AI systems for telecom customer service',
                    fullDescription: 'We create multi-agent AI systems for telecom operator customer service. Our solutions automate support, accelerate request processing, and provide personalized service in large subscriber networks. AI agents distribute workload, prevent errors, and improve the quality of customer interactions.'
                },
                energy: {
                    title: 'Oil & Gas',
                    description: 'Predictive maintenance, production optimization, and safety monitoring',
                    fullDescription: 'We develop solutions that enhance the efficiency of production and management processes in the oil and gas industry. We create systems for production and logistics control, inventory optimization, equipment monitoring, and digitalization of key operations. Our technologies help reduce costs, improve data accuracy, and maintain stable infrastructure performance.'
                },
                logistics: {
                    title: 'Manufacturing & Logistics',
                    description: 'AI solutions for production optimization, CNC automation, and warehouse management',
                    fullDescription: 'We develop AI-powered systems for manufacturing and logistics optimization. Our solutions include: Claude Code integration for CNC machine programming (FANUC G-code analysis, trajectory optimization, safety validation), warehouse management systems for inventory tracking, predictive maintenance for production equipment, and logistics process automation. We help factories and plants reduce costs, improve production efficiency, minimize errors, and ensure operational safety through intelligent automation.'
                }
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Тармактар',
                title: 'Ар бир бизнес үчүн чечимдер',
                subtitle: 'Тармагыңыздын уникалдуу маселелерине ылайыкташтырылган ИИ системаларын түзөбүз',
                banking: {
                    title: 'Банктык',
                    description: 'Акылдуу кредиттик баалоо, алдамчылыкты аныктоо жана жекелештирилген финансылык кызматтар',
                    fullDescription: 'Биздин компания банктар жана корпоративдик сектор үчүн технологиялык чечимдерге адистешет. Биз салык кызматтары, товарды эсепке алуу, смарт-келишимдер жана HR-автоматташтыруу чөйрөсүндө продуктуларды түзөбүз. Биздин иштелмелер бизнес-процесстерди тездетет, тобокелдиктерди азайтат жана операциялардын ачыктыгын камсыздайт.'
                },
                government: {
                    title: 'TelecomAI Connect',
                    description: 'Телеком операторлору үчүн көп агенттүү ИИ системалар',
                    fullDescription: 'Биз телеком операторлорунун кардарларды тейлөө үчүн көп агенттүү ИИ системаларын түзөбүз. Биздин чечимдер колдоону автоматташтырат, кайрылууларды тез иштетет жана чоң абоненттик тармактарда жекелештирилген тейлөөнү камсыздайт. ИИ агенттери жүктөмдү бөлүштүрөт, каталарды алдын алат жана кардарлар менен өз ара аракеттенүүнүн сапатын жогорулатат.'
                },
                energy: {
                    title: 'Мунай жана газ',
                    description: 'Алдын ала тейлөө, өндүрүштү оптималдаштыруу жана коопсуздукту көзөмөлдөө',
                    fullDescription: 'Биз мунай-газ тармагындагы өндүрүштүк жана башкаруу процесстеринин эффективдүүлүгүн жогорулаткан чечимдерди иштеп чыгабыз. Биз өндүрүш жана логистиканы көзөмөлдөө, товарды эсепке алууну оптималдаштыруу, жабдууларды мониторинг жана негизги операцияларды санариптештирүү системаларын түзөбүз. Биздин технологиялар чыгымдарды кыскартууга, маалыматтардын тактыгын жогорулатууга жана инфраструктуранын туруктуу иштешине жардам берет.'
                },
                logistics: {
                    title: 'Өндүрүш жана логистика',
                    description: 'Өндүрүштү оптималдаштыруу, ЧПУ автоматташтыруу жана камаларды башкаруу үчүн AI чечимдери',
                    fullDescription: 'Биз өндүрүштү жана логистиканы оптималдаштыруу үчүн AI системаларын иштеп чыгабыз. Биздин чечимдер камтыйт: ЧПУ станоктарын программалоо үчүн Claude Code интеграциясы (FANUC G-code анализи, траекторияларды оптималдаштыруу, коопсуздукту текшерүү), товарларды көзөмөлдөө үчүн камаларды башкаруу системалары, өндүрүштүк жабдууларды предиктивдүү тейлөө жана логистикалык процесстерди автоматташтыруу. Биз заводдорго жана ишканаларга чыгымдарды кыскартууга, өндүрүштүн эффективдүүлүгүн жогорулатууга, каталарды азайтууга жана акылдуу автоматташтыруу аркылуу операциялардын коопсуздугун камсыздоого жардам беребиз.'
                }
            }
        } else {
            return {
                preTitle: 'Отрасли',
                title: 'Решения для каждого бизнеса',
                subtitle: 'Создаем AI-системы под уникальные задачи вашей отрасли',
                banking: {
                    title: 'Банкинг',
                    description: 'Интеллектуальный скоринг, детекция мошенничества и персонализированные финансовые услуги',
                    fullDescription: 'Наша компания специализируется на технологических решениях для банков и корпоративного сектора. Мы создаём продукты в области налоговых сервисов, товароучёта, смарт-контрактов и HR-автоматизации. Наши разработки ускоряют бизнес-процессы, снижают риски и обеспечивают прозрачность операций.'
                },
                government: {
                    title: 'TelecomAI Connect',
                    description: 'Мультиагентные ИИ-системы для клиентского сервиса телеком-операторов',
                    fullDescription: 'Мы создаём мультиагентные ИИ-системы для клиентского сервиса телеком-операторов. Наши решения автоматизируют поддержку, ускоряют обработку обращений и обеспечивают персонализированное обслуживание в крупных абонентских сетях. ИИ-агенты распределяют нагрузку, предотвращают ошибки и повышают качество взаимодействия с клиентами.'
                },
                energy: {
                    title: 'Нефть и газ',
                    description: 'Предиктивное обслуживание, оптимизация добычи и мониторинг безопасности',
                    fullDescription: 'Мы разрабатываем решения, повышающие эффективность производственных и управленческих процессов в нефтегазовой отрасли. Создаём системы для контроля добычи и логистики, оптимизации товароучёта, мониторинга оборудования и цифровизации ключевых операций. Наши технологии помогают снижать издержки, повышать точность данных и поддерживать стабильную работу инфраструктуры.'
                },
                logistics: {
                    title: 'Производство и логистика',
                    description: 'AI-решения для оптимизации производства, автоматизации ЧПУ и управления складами',
                    fullDescription: 'Мы разрабатываем AI-системы для оптимизации производства и логистики. Наши решения включают: интеграцию Claude Code для программирования ЧПУ-станков (анализ FANUC G-code, оптимизация траекторий, валидация безопасности), системы управления складами для отслеживания товаров, предиктивное обслуживание производственного оборудования и автоматизацию логистических процессов. Мы помогаем заводам и предприятиям снижать издержки, повышать эффективность производства, минимизировать ошибки и обеспечивать безопасность операций через интеллектуальную автоматизацию.'
                }
            }
        }
    }

    const translations = getTranslations()

    const solutions = [
        {
            id: 'banking',
            title: translations.banking.title,
            description: translations.banking.description,
            iconSvg: '/bank.svg',
            gradient: 'from-blue-500/20 to-cyan-500/20',
            hoverGradient: 'group-hover:from-blue-500/30 group-hover:to-cyan-500/30'
        },
        {
            id: 'government',
            title: translations.government.title,
            description: translations.government.description,
            iconSvg: '/bank_2.svg',
            gradient: 'from-purple-500/20 to-pink-500/20',
            hoverGradient: 'group-hover:from-purple-500/30 group-hover:to-pink-500/30'
        },
        {
            id: 'energy',
            title: translations.energy.title,
            description: translations.energy.description,
            iconSvg: '/neft-gas.svg',
            gradient: 'from-green-500/20 to-emerald-500/20',
            hoverGradient: 'group-hover:from-green-500/30 group-hover:to-emerald-500/30'
        },
        {
            id: 'logistics',
            title: translations.logistics.title,
            description: translations.logistics.description,
            iconSvg: '/logistics.svg',
            gradient: 'from-orange-500/20 to-amber-500/20',
            hoverGradient: 'group-hover:from-orange-500/30 group-hover:to-amber-500/30'
        }
    ]

    return (
        <section id="solutions" className="relative py-32 overflow-hidden">
            {/* Section header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90 animate-fade-in">
                    {translations.preTitle}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                    {translations.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
                    {translations.subtitle}
                </p>
            </div>

            {/* Solutions grid */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <Card
                            key={solution.id}
                            isPressable
                            onPress={() => handleSolutionClick(solution.id)}
                            onClick={() => handleSolutionClick(solution.id)}
                            className="group bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-slide-up cursor-pointer"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <CardBody className="p-8">
                                {/* Icon */}
                                <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} ${solution.hoverGradient} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Image
                                        src={solution.iconSvg}
                                        alt={solution.title}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                                    {solution.description}
                                </p>

                                {/* Hover indicator */}
                                <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-medium">Learn more</span>
                                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Modal */}
            <Modal
                isOpen={selectedSolution !== null}
                onClose={handleModalClose}
                size="2xl"
                backdrop="blur"
                classNames={{
                    backdrop: "bg-black/80 backdrop-blur-md",
                    base: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10",
                    header: "border-b border-white/10",
                    body: "py-6",
                    closeButton: "hover:bg-white/10 active:bg-white/20"
                }}
            >
                <ModalContent>
                    {() => {
                        const solution = solutions.find(s => s.id === selectedSolution)
                        if (!solution) return null

                        const fullDescription = selectedSolution === 'banking'
                            ? translations.banking.fullDescription
                            : selectedSolution === 'government'
                            ? translations.government.fullDescription
                            : selectedSolution === 'energy'
                            ? translations.energy.fullDescription
                            : translations.logistics.fullDescription

                        const getIconGradientClass = () => {
                            if (selectedSolution === 'banking') return 'from-blue-500/20 to-cyan-500/20'
                            if (selectedSolution === 'government') return 'from-purple-500/20 to-pink-500/20'
                            if (selectedSolution === 'energy') return 'from-green-500/20 to-emerald-500/20'
                            return 'from-orange-500/20 to-amber-500/20'
                        }

                        return (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getIconGradientClass()} flex items-center justify-center`}>
                                            <Image
                                                src={solution.iconSvg}
                                                alt={solution.title}
                                                width={32}
                                                height={32}
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-white/80 leading-relaxed text-base">
                                        {fullDescription}
                                    </p>
                                </ModalBody>
                            </>
                        )
                    }}
                </ModalContent>
            </Modal>
        </section>
    )
}

export default Solutions

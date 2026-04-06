'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { useTranslation } from '@/components/providers/I18nProvider'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

/* ──────────── ICONS ──────────── */

const moduleIcons = [
    // ESF (Electronic Invoices)
    <svg key="esf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>,
    // ETTN (Electronic Waybills)
    <svg key="ettn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>,
    // Tax Reporting
    <svg key="tax" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4 7V4a2 2 0 012-2h8.5L20 7.5V20a2 2 0 01-2 2H6a2 2 0 01-2-2v-3" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M3 15h6M6 12v6" />
    </svg>,
    // Analytics & Dashboards
    <svg key="analytics" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>,
]

const moduleAccents: Array<'blue' | 'indigo'> = ['blue', 'indigo', 'blue', 'indigo']

/* ──────────── TRANSLATIONS ──────────── */

function getContent(locale: string) {
    const content = {
        en: {
            heroBadge: 'Electronic Document Management',
            heroTitle1: 'Universal',
            heroTitleHighlight: 'Cabinet',
            heroTitle2: '',
            heroDescription: 'Web platform for electronic invoices (ESF), waybills (ETTN), tax declarations, and business analytics — integrated with Salyk.kg, OEP, and billing services.',
            requestDemo: 'Request demo',
            learnMore: 'Learn more',
            heroStats: [
                { v: '16', l: 'Microservices' },
                { v: '10+', l: 'ETTN operation types' },
                { v: '3', l: 'Languages' },
                { v: '84+', l: 'API endpoints' },
            ],
            problemsBadge: 'Sound Familiar?',
            problemsTitle: 'Problems we solve',
            problemsSubtitle: 'These issues cost your business time and money every day',
            problems: [
                { before: 'Paper invoices and waybills', after: 'All ESF/ETTN digital, instant search' },
                { before: 'Tax declaration errors', after: 'Auto-generation of STI-161 and STI-091 in XML' },
                { before: 'No inventory tracking', after: 'Full product history: receipt, transfer, write-off, export' },
                { before: 'Fragmented tools', after: 'Single platform instead of 3-4 separate programs' },
                { before: 'No business overview', after: 'Dashboards with sales charts, document totals, period dynamics' },
            ],
            modulesBadge: 'Core Modules',
            modulesTitle: 'Everything your business needs',
            modulesDescription: '4 core modules covering the full cycle of electronic document management, tax reporting, and analytics.',
            modules: [
                { title: 'ESF (Electronic Invoices)', description: 'Create, send, track realization/acquisition/correction invoices, foreign counterparties, currency operations.' },
                { title: 'ETTN (Electronic Waybills)', description: '10+ operation types: wholesale, export, write-off, marketplace, tax-free, internal transfers.' },
                { title: 'Tax Reporting', description: 'STI-161 quarterly, STI-091 simplified, auto-generation, XML preview, direct Salyk.kg submission.' },
                { title: 'Analytics & Dashboards', description: 'ESF/ETTN totals, period comparison, interactive charts, filtering by any parameter.' },
            ],
            advantagesTitle: 'Key advantages',
            advantagesSubtitle: 'Why businesses in Kyrgyzstan choose Universal Cabinet',
            advantages: [
                { title: 'All-in-one', description: 'ESF, ETTN, taxes, analytics in one platform' },
                { title: 'Direct Salyk.kg integration', description: 'Send declarations without visiting tax office' },
                { title: 'Time savings', description: 'Auto-generation, auto-fill from directories' },
                { title: 'Reduced penalty risks', description: 'Automated calculations, legal compliance' },
                { title: 'Browser-based', description: 'No installation, works on any device' },
                { title: 'Multilingual', description: 'Russian, Kyrgyz, English interface' },
                { title: 'Marketplace integration', description: 'Operations with trading platforms' },
                { title: 'Security', description: 'JWT auth, OEP login (SMS/Email), enterprise-grade' },
            ],
            integrationsTitle: 'Integrations',
            integrationsSubtitle: 'Seamlessly connected with key government and business systems',
            integrations: [
                { name: 'Salyk.kg (GNS)', description: 'Tax authority integration' },
                { name: 'OEP', description: 'Authentication service' },
                { name: 'Billing system', description: 'Payment processing' },
                { name: 'Marketplaces', description: 'Trading platforms' },
            ],
            ctaTitle: 'Ready to digitize your document workflow?',
            ctaSubtitle: 'Contact us for a demo and connection to Universal Cabinet.',
            ctaButton: 'Contact for demo',
        },
        ru: {
            heroBadge: 'Электронный документооборот',
            heroTitle1: 'Универсальный',
            heroTitleHighlight: 'Кабинет',
            heroTitle2: '',
            heroDescription: 'Веб-платформа для электронных счетов-фактур (ЭСФ), товарно-транспортных накладных (ЭТТН), налоговых деклараций и бизнес-аналитики — интеграция с Salyk.kg, ОЭП и биллинговыми сервисами.',
            requestDemo: 'Запросить демо',
            learnMore: 'Подробнее',
            heroStats: [
                { v: '16', l: 'Микросервисов' },
                { v: '10+', l: 'Типов операций ЭТТН' },
                { v: '3', l: 'Языка' },
                { v: '84+', l: 'API эндпоинтов' },
            ],
            problemsBadge: 'Знакомо?',
            problemsTitle: 'Проблемы, которые мы решаем',
            problemsSubtitle: 'Эти проблемы ежедневно стоят вашему бизнесу времени и денег',
            problems: [
                { before: 'Бумажные счета-фактуры и накладные', after: 'Все ЭСФ/ЭТТН в цифре, мгновенный поиск' },
                { before: 'Ошибки в налоговых декларациях', after: 'Автогенерация СТИ-161 и СТИ-091 в XML' },
                { before: 'Нет учёта товародвижения', after: 'Полная история товара: поступление, перемещение, списание, экспорт' },
                { before: 'Разрозненные инструменты', after: 'Единая платформа вместо 3-4 отдельных программ' },
                { before: 'Нет обзора бизнеса', after: 'Дашборды с графиками продаж, итоги документов, динамика по периодам' },
            ],
            modulesBadge: 'Основные модули',
            modulesTitle: 'Всё, что нужно вашему бизнесу',
            modulesDescription: '4 ключевых модуля, покрывающих полный цикл электронного документооборота, налоговой отчётности и аналитики.',
            modules: [
                { title: 'ЭСФ (Электронные счета-фактуры)', description: 'Создание, отправка, отслеживание реализационных/приобретённых/корректировочных счетов-фактур, иностранные контрагенты, валютные операции.' },
                { title: 'ЭТТН (Электронные накладные)', description: '10+ типов операций: оптовая продажа, экспорт, списание, маркетплейс, tax-free, внутренние перемещения.' },
                { title: 'Налоговая отчётность', description: 'СТИ-161 квартальная, СТИ-091 упрощённая, автогенерация, предпросмотр XML, прямая отправка на Salyk.kg.' },
                { title: 'Аналитика и дашборды', description: 'Итоги ЭСФ/ЭТТН, сравнение по периодам, интерактивные графики, фильтрация по любому параметру.' },
            ],
            advantagesTitle: 'Ключевые преимущества',
            advantagesSubtitle: 'Почему бизнес в Кыргызстане выбирает Универсальный Кабинет',
            advantages: [
                { title: 'Всё в одном', description: 'ЭСФ, ЭТТН, налоги, аналитика на одной платформе' },
                { title: 'Прямая интеграция с Salyk.kg', description: 'Отправка деклараций без визита в налоговую' },
                { title: 'Экономия времени', description: 'Автогенерация, автозаполнение из справочников' },
                { title: 'Снижение рисков штрафов', description: 'Автоматические расчёты, соответствие законодательству' },
                { title: 'Работает в браузере', description: 'Без установки, с любого устройства' },
                { title: 'Мультиязычность', description: 'Русский, кыргызский, английский интерфейс' },
                { title: 'Интеграция с маркетплейсами', description: 'Операции с торговыми площадками' },
                { title: 'Безопасность', description: 'JWT-авторизация, вход через ОЭП (SMS/Email), корпоративный уровень' },
            ],
            integrationsTitle: 'Интеграции',
            integrationsSubtitle: 'Бесшовное подключение к ключевым государственным и бизнес-системам',
            integrations: [
                { name: 'Salyk.kg (ГНС)', description: 'Интеграция с налоговым органом' },
                { name: 'ОЭП', description: 'Сервис аутентификации' },
                { name: 'Биллинговая система', description: 'Обработка платежей' },
                { name: 'Маркетплейсы', description: 'Торговые площадки' },
            ],
            ctaTitle: 'Готовы оцифровать документооборот?',
            ctaSubtitle: 'Свяжитесь с нами для демо и подключения к Универсальный Кабинет.',
            ctaButton: 'Связаться для демо',
        },
        ky: {
            heroBadge: 'Электрондук документ жүгүртүү',
            heroTitle1: 'Универсалдуу',
            heroTitleHighlight: 'Кабинет',
            heroTitle2: '',
            heroDescription: 'Электрондук эсеп-фактуралар (ЭСФ), жүк каттары (ЭТТН), салык декларациялары жана бизнес-аналитика үчүн веб-платформа — Salyk.kg, ОЭП жана биллинг кызматтары менен интеграция.',
            requestDemo: 'Демо сурануу',
            learnMore: 'Толугураак',
            heroStats: [
                { v: '16', l: 'Микросервистер' },
                { v: '10+', l: 'ЭТТН операция түрлөрү' },
                { v: '3', l: 'Тилдер' },
                { v: '84+', l: 'API эндпоинттер' },
            ],
            problemsBadge: 'Тааныш угулабы?',
            problemsTitle: 'Биз чечкен көйгөйлөр',
            problemsSubtitle: 'Бул көйгөйлөр күн сайын бизнесиңизге убакыт жана акча турат',
            problems: [
                { before: 'Кагаз эсеп-фактуралар жана жүк каттары', after: 'Бардык ЭСФ/ЭТТН санарипте, заматта издөө' },
                { before: 'Салык декларацияларындагы каталар', after: 'СТИ-161 жана СТИ-091 XML форматында автогенерация' },
                { before: 'Товар кыймылын эсепке алуу жок', after: 'Товардын толук тарыхы: кабыл алуу, которуу, эсептен чыгаруу, экспорт' },
                { before: 'Чачыранды куралдар', after: '3-4 өзүнчө программанын ордуна бирдиктүү платформа' },
                { before: 'Бизнеске сереп жок', after: 'Сатуу графиктери, документ жыйынтыктары, мезгил динамикасы бар дашборддор' },
            ],
            modulesBadge: 'Негизги модулдар',
            modulesTitle: 'Бизнесиңизге керектүүнүн баары',
            modulesDescription: '4 негизги модул — электрондук документ жүгүртүүнүн, салык отчёттуулугунун жана аналитиканын толук циклин камтыйт.',
            modules: [
                { title: 'ЭСФ (Электрондук эсеп-фактуралар)', description: 'Реализациялоо/сатып алуу/оңдоо эсеп-фактураларын түзүү, жөнөтүү, көзөмөлдөө, чет өлкөлүк контрагенттер, валюталык операциялар.' },
                { title: 'ЭТТН (Электрондук жүк каттары)', description: '10+ операция түрлөрү: дүң сатуу, экспорт, эсептен чыгаруу, маркетплейс, tax-free, ички которуулар.' },
                { title: 'Салык отчёттуулугу', description: 'СТИ-161 квартальдык, СТИ-091 жөнөкөйлөштүрүлгөн, автогенерация, XML алдын ала көрүү, Salyk.kg-ге түз жөнөтүү.' },
                { title: 'Аналитика жана дашборддор', description: 'ЭСФ/ЭТТН жыйынтыктары, мезгилдер боюнча салыштыруу, интерактивдүү графиктер, каалаган параметр боюнча чыпкалоо.' },
            ],
            advantagesTitle: 'Негизги артыкчылыктар',
            advantagesSubtitle: 'Эмне үчүн Кыргызстандагы бизнес Универсалдуу Кабинетти тандайт',
            advantages: [
                { title: 'Баары бирде', description: 'ЭСФ, ЭТТН, салыктар, аналитика бир платформада' },
                { title: 'Salyk.kg менен түз интеграция', description: 'Салык кызматына барбай декларация жөнөтүү' },
                { title: 'Убакыт үнөмдөө', description: 'Автогенерация, маалымдамалардан автотолтуруу' },
                { title: 'Айыптык тобокелдиктерди азайтуу', description: 'Автоматтык эсептөөлөр, мыйзамдарга шайкештик' },
                { title: 'Браузерде иштейт', description: 'Орнотуусуз, каалаган түзмөктөн' },
                { title: 'Көп тилдүүлүк', description: 'Орусча, кыргызча, англисче интерфейс' },
                { title: 'Маркетплейстер менен интеграция', description: 'Соода аянтчалары менен операциялар' },
                { title: 'Коопсуздук', description: 'JWT-авторизация, ОЭП аркылуу кирүү (SMS/Email), корпоративтик деңгээл' },
            ],
            integrationsTitle: 'Интеграциялар',
            integrationsSubtitle: 'Негизги мамлекеттик жана бизнес системалар менен үзгүлтүксүз байланыш',
            integrations: [
                { name: 'Salyk.kg (ГНС)', description: 'Салык органы менен интеграция' },
                { name: 'ОЭП', description: 'Аутентификация кызматы' },
                { name: 'Биллинг системасы', description: 'Төлөмдөрдү иштетүү' },
                { name: 'Маркетплейстер', description: 'Соода аянтчалары' },
            ],
            ctaTitle: 'Документ жүгүртүүнү санариптештирүүгө даярсызбы?',
            ctaSubtitle: 'Универсалдуу Кабинетке демо жана туташуу үчүн биз менен байланышыңыз.',
            ctaButton: 'Демо үчүн байланышуу',
        },
    }

    return content[locale as keyof typeof content] || content.en
}

/* ──────────── STYLE CONSTANTS ──────────── */

const accentClasses = {
    blue: {
        iconBg: 'bg-blue-500/[0.08]',
        iconText: 'text-blue-400',
        border: 'hover:border-blue-400/20',
        gradient: 'from-blue-400 to-sky-400',
    },
    indigo: {
        iconBg: 'bg-indigo-500/[0.08]',
        iconText: 'text-indigo-400',
        border: 'hover:border-indigo-400/20',
        gradient: 'from-indigo-400 to-violet-400',
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

const integrationIcons = [
    // Government / Salyk
    <svg key="gov" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" /></svg>,
    // Lock / auth
    <svg key="lock" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
    // Credit card / billing
    <svg key="card" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
    // Shopping cart / marketplace
    <svg key="cart" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600 dark:text-violet-400"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>,
]

/* ──────────── PAGE ──────────── */

export default function SmartUchetPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    const scrollToContact = () => {
        const el = document.getElementById('smartuchet-contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground accent="purple" />
            <ModernHeader />

            {/* ── Hero ── */}
            <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-blue-500/12 via-transparent to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-13 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-500/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-semibold text-blue-400 mb-6"
                        >
                            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
                            {content.heroBadge}
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
                        >
                            {content.heroTitle1}{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                {content.heroTitleHighlight}
                            </span>{' '}
                            {content.heroTitle2}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg sm:text-xl text-gray-500 dark:text-white/65 mb-8 leading-relaxed max-w-2xl mx-auto"
                        >
                            {content.heroDescription}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white font-bold text-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
                            >
                                {content.requestDemo}
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                            <Link
                                href="#smartuchet-modules"
                                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white font-semibold text-lg transition-all hover:bg-blue-500/10 hover:border-blue-500/30 no-underline"
                            >
                                {content.learnMore}
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-gray-200 dark:border-white/10 justify-center"
                        >
                            {content.heroStats.map((s, i) => (
                                <div key={i}>
                                    <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                        {s.v}
                                    </div>
                                    <div className="text-sm text-gray-400 dark:text-white/50 mt-1">{s.l}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Problems ── */}
            <section className="py-24 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-xs text-gray-500 dark:text-white/55 uppercase tracking-widest font-medium">{content.problemsBadge}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">{content.problemsTitle}</h2>
                        <p className="text-base text-gray-400 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                            {content.problemsSubtitle}
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {content.problems.map((p, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02]"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-red-400/60" />
                                        <span className="text-sm font-semibold text-gray-600 dark:text-white/70 line-through decoration-red-400/40">{p.before}</span>
                                    </div>
                                </div>
                                <svg className="hidden sm:block w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                                        <span className="text-sm font-semibold text-blue-400">{p.after}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Modules ── */}
            <section id="smartuchet-modules" className="py-24 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                            <span className="text-xs text-gray-500 dark:text-white/55 uppercase tracking-widest font-medium">{content.modulesBadge}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">{content.modulesTitle}</h2>
                        <p className="text-base text-gray-400 dark:text-white/50 max-w-xl mx-auto leading-relaxed">
                            {content.modulesDescription}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {content.modules.map((m, i) => {
                            const a = accentClasses[moduleAccents[i]]
                            return (
                                <motion.div
                                    key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className={`group p-7 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.04] ${a.border} transition-all duration-300`}
                                >
                                    <div className={`w-11 h-11 rounded-lg ${a.iconBg} border border-gray-200 dark:border-white/[0.06] flex items-center justify-center ${a.iconText} mb-5 group-hover:scale-105 transition-transform duration-300`}>
                                        {moduleIcons[i]}
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{m.title}</h3>
                                    <p className="text-sm text-gray-400 dark:text-white/45 leading-relaxed">{m.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Advantages ── */}
            <section className="py-24 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">{content.advantagesTitle}</h2>
                        <p className="text-base text-gray-400 dark:text-white/50 max-w-lg mx-auto leading-relaxed">
                            {content.advantagesSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {content.advantages.map((adv, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 rounded-xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] hover:bg-gray-100 dark:hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className={`w-8 h-8 rounded-lg ${i % 2 === 0 ? 'bg-blue-500/[0.08]' : 'bg-indigo-500/[0.08]'} flex items-center justify-center mb-3`}>
                                    <span className={`text-sm font-bold ${i % 2 === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{adv.title}</h3>
                                <p className="text-xs text-gray-400 dark:text-white/40 leading-relaxed">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Integrations ── */}
            <section className="py-24 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">{content.integrationsTitle}</h2>
                        <p className="text-base text-gray-400 dark:text-white/50 max-w-lg mx-auto leading-relaxed">
                            {content.integrationsSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {content.integrations.map((intg, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-200 dark:border-white/[0.07] bg-gray-50 dark:bg-white/[0.02] text-center"
                            >
                                <div className="mb-4 flex justify-center">{integrationIcons[i]}</div>
                                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{intg.name}</h3>
                                <p className="text-xs text-gray-400 dark:text-white/40 leading-relaxed">{intg.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section id="smartuchet-contact" className="py-16 border-t border-gray-100 dark:border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02]"
                    >
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-[#F0F0F5] mb-0.5">{content.ctaTitle}</p>
                            <p className="text-sm text-gray-400 dark:text-[#F0F0F5]/40">{content.ctaSubtitle}</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0A0E1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors"
                        >
                            {content.ctaButton} <ArrowIcon />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

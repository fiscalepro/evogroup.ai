'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CaseCard } from './CaseCard'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

interface ResultItem {
    value: string
    label: string
}

export interface CaseCard {
    number: string
    color: 'green' | 'blue'
    tag: string
    company: string
    headline: string
    teaser: string
    results: ResultItem[]
    quoteAuthor: string
    instagram: {
        handle: string
        url: string
    }
}

function getCaseData(locale: string): { cases: CaseCard[]; overline: string; title: string; subtitle: string; ctaTitle: string; ctaSub: string; ctaBtn: string } {
    if (locale === 'en') {
        return {
            overline: 'Client cases',
            title: 'Real results',
            subtitle: 'We build full-cycle digital platforms. Here\'s what clients get in production.',
            ctaTitle: 'Your business — the next case?',
            ctaSub: 'Let\'s analyze the situation and launch a free 2-week pilot.',
            ctaBtn: 'Start free pilot →',
            cases: [
                {
                    number: '01',
                    color: 'green',
                    tag: 'Banking · Fintech',
                    company: 'Bakai Bank — SmartUchet',
                    headline: 'Full ecosystem of government e-services for small business banking',
                    teaser: 'Bakai Bank needed to offer ESF, ETTN, tax reports, HR, ERP and IP registration inside their mobile app. We built 16 microservices on Spring Cloud with Tunduk X-Road integration and OECP digital signing.',
                    results: [
                        { value: '16', label: 'Microservices' },
                        { value: '84+', label: 'API endpoints (HR alone)' },
                        { value: '4', label: 'Languages supported' },
                        { value: '289+', label: 'PRs merged' },
                    ],
                    quoteAuthor: '— Bakai Bank engineering team',
                    instagram: { handle: '@baikibank', url: 'https://instagram.com/bakaibank' },
                },
                {
                    number: '02',
                    color: 'blue',
                    tag: 'Oil & Gas · Enterprise',
                    company: 'Bishkek Petroleum',
                    headline: '10 oil depots, 152 tanks, 70+ gas stations — all in one platform',
                    teaser: 'The largest fuel network in Kyrgyzstan had no unified digital system. We built depot management with AI analytics, technical support with mobile apps, and 1C integration — 600+ PRs shipped.',
                    results: [
                        { value: '152', label: 'Tanks monitored' },
                        { value: '10', label: 'User roles' },
                        { value: '600+', label: 'PRs shipped' },
                        { value: 'AI', label: 'Analytics & corrections' },
                    ],
                    quoteAuthor: '— Bishkek Petroleum team',
                    instagram: { handle: '@bpetroleum', url: 'https://bpetroleum.kg' },
                },
                {
                    number: '03',
                    color: 'green',
                    tag: 'HoReCa · Automation',
                    company: 'PAUL × EvoRest',
                    headline: 'Full restaurant automation: QR menu, online payments, and real-time analytics',
                    teaser: 'PAUL restaurant in Bishkek was losing time on manual orders, cashier queues during rush hours, and had zero analytics. We deployed EvoRest — QR menu with online payments (Visa, BakaiBank, OptimaPay), automatic order routing to kitchen screens, a loyalty system, and a real-time management dashboard.',
                    results: [
                        { value: '−40%', label: 'Service time' },
                        { value: '+18%', label: 'Average check' },
                        { value: '×1', label: 'Unified dashboard' },
                        { value: '24/7', label: 'Analytics access' },
                    ],
                    quoteAuthor: '— PAUL Bishkek',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        }
    }
    if (locale === 'ky') {
        return {
            overline: 'Кардарлардын кейстери',
            title: 'Чыныгы натыйжалар',
            subtitle: 'Толук санариптик платформаларды курабыз. Кардарлардын продакшнунда эмне иштеп жатат.',
            ctaTitle: 'Сиздин бизнес — кийинки кейс?',
            ctaSub: 'Кырдаалды талдап, 2 жумалык бекер пилотту ишке киргизебиз.',
            ctaBtn: 'Бекер пилотту баштоо →',
            cases: [
                {
                    number: '01',
                    color: 'green',
                    tag: 'Банктар · Финтех',
                    company: 'Бакай Банк — SmartUchet',
                    headline: 'Чакан бизнес үчүн мамлекеттик электрондук кызматтардын толук экосистемасы',
                    teaser: 'Бакай Банкка кардарларга ЭСФ, ЭТТН, салык отчёттору, HR, ERP жана ИП каттоону мобилдик тиркемеден берүү керек болду. Биз Tunduk X-Road интеграциясы менен 16 микросервис курдук.',
                    results: [
                        { value: '16', label: 'Микросервис' },
                        { value: '84+', label: 'API endpoints (HR гана)' },
                        { value: '4', label: 'Интерфейс тили' },
                        { value: '289+', label: 'PR бириктирилди' },
                    ],
                    quoteAuthor: '— Бакай Банк иштеп чыгуу командасы',
                    instagram: { handle: '@bakaibank', url: 'https://instagram.com/bakaibank' },
                },
                {
                    number: '02',
                    color: 'blue',
                    tag: 'Мунай жана газ · Ишкана',
                    company: 'Бишкек Петролеум',
                    headline: '10 мунай базасы, 152 резервуар, 70+ АЗС — бир платформада',
                    teaser: 'Кыргызстандын эң чоң күйүүчү май тармагында бирдиктүү санариптик система жок эле. Мунай базаларын AI-аналитика менен башкаруу, мобилдик техподдержка жана 1С интеграциясын курдук.',
                    results: [
                        { value: '152', label: 'Резервуар контролдо' },
                        { value: '10', label: 'Колдонуучу ролу' },
                        { value: '600+', label: 'PR жөнөтүлдү' },
                        { value: 'AI', label: 'Аналитика жана оңдоолор' },
                    ],
                    quoteAuthor: '— Бишкек Петролеум командасы',
                    instagram: { handle: '@bpetroleum', url: 'https://bpetroleum.kg' },
                },
                {
                    number: '03',
                    color: 'green',
                    tag: 'Тамак-аш · Автоматташтыруу',
                    company: 'PAUL × EvoRest',
                    headline: 'Ресторанды толук автоматташтыруу: QR-меню, онлайн төлөм жана реал убакыттагы аналитика',
                    teaser: 'Бишкектеги PAUL ресторандын заказдарды кол менен кабыл алууга убакыт жоготуп, кассада кезектер, аналитика жок болгон. EvoRest орноттук — онлайн төлөм менен QR-меню (Visa, BakaiBank, OptimaPay), заказдарды ашканага автоматтык жөнөтүү, лоялдуулук системасы жана реал убакыттагы башкаруу дашборду.',
                    results: [
                        { value: '−40%', label: 'Тейлөө убактысы' },
                        { value: '+18%', label: 'Орточо чек' },
                        { value: '×1', label: 'Бирдиктүү дашборд' },
                        { value: '24/7', label: 'Аналитикага кирүү' },
                    ],
                    quoteAuthor: '— PAUL Бишкек',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        }
    }
    // ru (default)
    return {
        overline: 'Кейсы клиентов',
        title: 'Реальные результаты',
        subtitle: 'Строим полноценные цифровые платформы. Вот что работает в продакшне у клиентов.',
        ctaTitle: 'Ваш бизнес — следующий кейс?',
        ctaSub: 'Разберём ситуацию и запустим пилот бесплатно на 2 недели.',
        ctaBtn: 'Начать бесплатный пилот →',
        cases: [
            {
                number: '01',
                color: 'green',
                tag: 'Банки · Финтех',
                company: 'Бакай Банк — SmartUchet',
                headline: 'Полная экосистема госуслуг для малого бизнеса в банковском приложении',
                teaser: 'Бакай Банку нужно было дать клиентам ЭСФ, ЭТТН, налоговые отчёты, HR, ERP и регистрацию ИП прямо в мобильном приложении. Мы построили 16 микросервисов на Spring Cloud с интеграцией через Tunduk X-Road и ОЭЦП подписанием.',
                results: [
                    { value: '16', label: 'Микросервисов' },
                    { value: '84+', label: 'API endpoints (только HR)' },
                    { value: '4', label: 'Языка интерфейса' },
                    { value: '289+', label: 'PRs в HR-модуле' },
                ],
                quoteAuthor: '— Команда разработки Бакай Банка',
                instagram: { handle: '@bakaibank', url: 'https://instagram.com/bakaibank' },
            },
            {
                number: '02',
                color: 'blue',
                tag: 'Нефтегаз · Энтерпрайз',
                company: 'Бишкек Петролеум',
                headline: '10 нефтебаз, 152 резервуара, 70+ АЗС — всё в одной платформе',
                teaser: 'Крупнейшая топливная сеть Кыргызстана не имела единой цифровой системы. Мы создали управление нефтебазами с AI-аналитикой, техподдержку с мобильными приложениями и интеграцию с 1С — 600+ PR отгружено.',
                results: [
                    { value: '152', label: 'Резервуара под контролем' },
                    { value: '10', label: 'Ролей пользователей' },
                    { value: '600+', label: 'PR отгружено' },
                    { value: 'AI', label: 'Аналитика и корректировки' },
                ],
                quoteAuthor: '— Команда Бишкек Петролеум',
                instagram: { handle: '@bpetroleum', url: 'https://bpetroleum.kg' },
            },
            {
                number: '03',
                color: 'green',
                tag: 'Общепит · Автоматизация',
                company: 'PAUL × EvoRest',
                headline: 'Полная автоматизация ресторана: QR-меню, онлайн-оплата и аналитика в реальном времени',
                teaser: 'Ресторан PAUL в Бишкеке терял время на ручном приёме заказов, очереди на кассе в часы пик, нулевая аналитика. Внедрили EvoRest — QR-меню с онлайн-оплатой (Visa, BakaiBank, OptimaPay), автопередача заказов на кухню, система лояльности и дашборд управляющего в реальном времени.',
                results: [
                    { value: '−40%', label: 'Время обслуживания' },
                    { value: '+18%', label: 'Средний чек' },
                    { value: '×1', label: 'Единый дашборд' },
                    { value: '24/7', label: 'Доступ к аналитике' },
                ],
                quoteAuthor: '— PAUL Бишкек',
                instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
            },
        ],
    }
}

const CaseStudies: React.FC = () => {
    const { locale } = useTranslation()
    const content = getCaseData(locale)

    return (
        <section id="cases" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs text-white/55 uppercase tracking-widest font-medium">{content.overline}</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                        {content.title}
                    </h2>
                    <p className="text-base text-white/55 max-w-md leading-relaxed">
                        {content.subtitle}
                    </p>
                </motion.div>

                {/* Case cards */}
                <div className="flex flex-col gap-5 mb-10">
                    {content.cases.map((card, index) => (
                        <CaseCard key={index} card={card} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-white/[0.07] rounded-2xl px-7 py-6 bg-white/[0.02]"
                >
                    <div>
                        <p className="text-base font-semibold text-white mb-1">{content.ctaTitle}</p>
                        <p className="text-sm text-white/55 leading-relaxed">{content.ctaSub}</p>
                    </div>
                    <Link
                        href="/contact"
                        className="flex-shrink-0 bg-white text-black px-6 py-3 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                    >
                        {content.ctaBtn}
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default CaseStudies

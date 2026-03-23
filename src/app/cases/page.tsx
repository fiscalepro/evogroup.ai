'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { CaseCard } from '@/components/sections/CaseCard'
import Solutions from '@/components/sections/Solutions'
import { useTranslation } from '@/components/providers/I18nProvider'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

interface CaseCardData {
    number: string
    color: 'green' | 'blue'
    tag: string
    company: string
    headline: string
    teaser: string
    results: { value: string; label: string }[]
    quoteAuthor: string
    instagram: { handle: string; url: string }
}

function getContent(locale: string) {
    const content = {
        en: {
            heroTitle: 'Real results',
            heroSubtitle: 'AI automation delivered end-to-end. Here\u2019s what clients get in practice \u2014 with numbers and names.',
            stats: [
                { value: '50+', label: 'Clients', detail: 'Active deployments' },
                { value: '5', label: 'Industries', detail: 'Beauty, retail, manufacturing, education' },
                { value: '2 weeks', label: 'To results', detail: 'Average launch time' },
                { value: '250%', label: 'Average ROI', detail: 'Within 6-18 months' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: 'Beauty \u00b7 Small Business',
                    company: 'Saikal Permanent Makeup',
                    headline: 'Studio stopped losing clients from missed messages',
                    teaser: 'The artist couldn\u2019t respond on Instagram and WhatsApp between sessions \u2014 clients were leaving for competitors. AI chatbot closed the gap in the first week.',
                    results: [
                        { value: '<1 min', label: 'Response time' },
                        { value: '24/7', label: 'Availability' },
                        { value: '+\u2191', label: 'Bookings' },
                        { value: '0', label: 'Missed inquiries' },
                    ],
                    quoteAuthor: '\u2014 Saikal, studio owner',
                    instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: 'Manufacturing \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: 'Full automation: from incoming request to shipping',
                    teaser: 'Sandwich panel manufacturer was losing requests and spending hours on manual order processing. We deployed AI chatbot, CRM, and dashboard \u2014 everything became transparent.',
                    results: [
                        { value: '~0%', label: 'Lost requests' },
                        { value: '\u221280%', label: 'Processing time' },
                        { value: '100%', label: 'Transparency' },
                        { value: '3\u20135 d', label: 'Onboarding' },
                    ],
                    quoteAuthor: '\u2014 CEO, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: 'Retail · E-commerce',
                    company: 'Phone Store',
                    headline: 'AI chatbot replaced 2 managers and boosted sales by 35%',
                    teaser: 'A phone store was losing customers on Instagram and WhatsApp — slow responses, missed messages after hours. We deployed an AI chatbot that knows the full catalog, recommends phones, and takes orders 24/7.',
                    results: [
                        { value: '+35%', label: 'Sales conversion' },
                        { value: '5 sec', label: 'Response time' },
                        { value: '+40%', label: 'After-hours sales' },
                        { value: '$800+', label: 'Monthly savings' },
                    ],
                    quoteAuthor: '— Store owner',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: 'Distribution · HR Tech',
                    company: 'Distributor Training Platform',
                    headline: 'AI training platform cut onboarding from 2 weeks to 3 days',
                    teaser: 'A distributor spent weeks training sales reps manually — supervisors were tied up, quality varied. We built an AI platform with role-based courses, 24/7 AI tutor, automatic exams, and instant reports.',
                    results: [
                        { value: '3 days', label: 'Onboarding time' },
                        { value: '78%', label: 'Avg exam score' },
                        { value: '24/7', label: 'AI tutor' },
                        { value: '0', label: 'Supervisor hours' },
                    ],
                    quoteAuthor: '— HR Director',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
        ru: {
            heroTitle: 'Реальные результаты',
            heroSubtitle: 'AI-автоматизация под ключ. Вот что получают клиенты на практике \u2014 с цифрами и именами.',
            stats: [
                { value: '50+', label: 'Клиентов', detail: 'Активных внедрений' },
                { value: '5', label: 'Отраслей', detail: 'Красота, ритейл, производство, обучение' },
                { value: '2 недели', label: 'До результата', detail: 'Среднее время запуска' },
                { value: '250%', label: 'Средний ROI', detail: 'В течение 6\u201318 месяцев' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: 'Красота \u00b7 Малый бизнес',
                    company: 'Saikal Permanent Makeup',
                    headline: 'Студия перестала терять клиентов из-за пропущенных сообщений',
                    teaser: 'Мастер не успевала отвечать в Instagram и WhatsApp между сеансами \u2014 клиенты уходили к конкурентам. AI-чатбот закрыл этот пробел в первую же неделю.',
                    results: [
                        { value: '<1 мин', label: 'Время ответа' },
                        { value: '24/7', label: 'Доступность' },
                        { value: '+\u2191', label: 'Записи' },
                        { value: '0', label: 'Пропущенных обращений' },
                    ],
                    quoteAuthor: '\u2014 Сайкал, владелица студии',
                    instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: 'Производство \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: 'Полная автоматизация: от входящей заявки до отгрузки',
                    teaser: 'Производитель сэндвич-панелей терял заявки и тратил часы на ручную обработку заказов. Мы внедрили AI-чатбот, CRM и дашборд \u2014 всё стало прозрачным.',
                    results: [
                        { value: '~0%', label: 'Потерянных заявок' },
                        { value: '\u221280%', label: 'Время обработки' },
                        { value: '100%', label: 'Прозрачность' },
                        { value: '3\u20135 дн', label: 'Адаптация' },
                    ],
                    quoteAuthor: '\u2014 Директор, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: 'Ритейл · E-commerce',
                    company: 'Магазин телефонов',
                    headline: 'AI-чатбот заменил 2 менеджеров и поднял продажи на 35%',
                    teaser: 'Магазин сотовых телефонов терял клиентов в Instagram и WhatsApp — медленные ответы, пропущенные запросы в нерабочее время. Внедрили AI-чатбота, который знает весь каталог, подбирает телефоны и принимает заказы 24/7.',
                    results: [
                        { value: '+35%', label: 'Конверсия в продажи' },
                        { value: '5 сек', label: 'Время ответа' },
                        { value: '+40%', label: 'Продажи в нерабочее время' },
                        { value: '$800+', label: 'Экономия в месяц' },
                    ],
                    quoteAuthor: '— Владелец магазина',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: 'Дистрибуция · HR Tech',
                    company: 'Платформа обучения дистрибьютора',
                    headline: 'ИИ-платформа обучения сократила онбординг с 2 недель до 3 дней',
                    teaser: 'Дистрибьютор тратил недели на ручное обучение торговых представителей — супервайзеры были заняты, качество было нестабильным. Мы создали ИИ-платформу с курсами по должностям, ИИ-тренером 24/7, автоматическими экзаменами и мгновенными отчётами.',
                    results: [
                        { value: '3 дня', label: 'Время онбординга' },
                        { value: '78%', label: 'Средний балл экзамена' },
                        { value: '24/7', label: 'ИИ-тренер' },
                        { value: '0', label: 'Часов супервайзера' },
                    ],
                    quoteAuthor: '— HR-директор',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
        ky: {
            heroTitle: 'Чыныгы натыйжалар',
            heroSubtitle: 'AI-автоматташтыруу толугу менен. Кардарлар практикада эмне алышат \u2014 сандар жана аттар менен.',
            stats: [
                { value: '50+', label: 'Кардарлар', detail: 'Активдүү ишке ашыруулар' },
                { value: '5', label: 'Тармактар', detail: 'Сулуулук, ритейл, өндүрүш, окутуу' },
                { value: '2 жума', label: 'Натыйжага чейин', detail: 'Орточо ишке кири\u04af\u04af м\u04e9\u04e9н\u04e9т\u04af' },
                { value: '250%', label: 'Орточо ROI', detail: '6\u201318 айдын ичинде' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: 'С\u04af\u043b\u04e9\u04e9л\u04af\u043a \u00b7 Чакан бизнес',
                    company: 'Saikal Permanent Makeup',
                    headline: 'Студия жооп бербей калган билд\u0438р\u04af\u04afl\u04e9р\u0434\u04e9н кардарларды жоготууну токтотту',
                    teaser: 'Мастер сеанстардын ортосунда Instagram жана WhatsApp\u0442а жооп бере алган жок \u2014 кардарлар атаандаштарга кетишкен. AI-чатбот биринчи жумада эле бул к\u04e9йг\u04e9йд\u04af чечти.',
                    results: [
                        { value: '<1 м\u04af\u043d', label: 'Жооп убактысы' },
                        { value: '24/7', label: 'Жеткиликт\u04af\u04afl\u04af\u043a' },
                        { value: '+\u2191', label: 'Жазылуулар' },
                        { value: '0', label: '\u04e8тк\u04e9р\u04af\u043b\u0433\u04e9\u043d кайрылуулар' },
                    ],
                    quoteAuthor: '\u2014 Сайкал, студия ээси',
                    instagram: { handle: '@saikal_begimbaeva.pm', url: 'https://instagram.com/saikal_begimbaeva.pm' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: '\u04e8нд\u04af\u0440\u04af\u0448 \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: 'Толук автоматташтыруу: кирген \u04e9т\u04af\u043d\u04af\u0447т\u04e9\u043d жеткир\u04af\u04afг\u04e9 чейин',
                    teaser: 'Сэндвич-панель \u04e9нд\u04af\u0440\u04af\u04af\u0447\u04af \u04e9т\u04af\u043d\u04af\u0447т\u04e9\u0440\u0434\u04af жоготуп, заказдарды кол менен иштет\u04af\u04afг\u04e9 саатташ убакыт коротуп жаткан. Биз AI-чатбот, CRM жана дашборд орноттук \u2014 баары ачык-айкын болду.',
                    results: [
                        { value: '~0%', label: 'Жоголгон \u04e9т\u04af\u043d\u04af\u0447т\u04e9\u0440' },
                        { value: '\u221280%', label: 'Иштет\u04af\u04af убактысы' },
                        { value: '100%', label: 'Ачык-айкындык' },
                        { value: '3\u20135 к\u04af\u043d', label: 'Адаптация' },
                    ],
                    quoteAuthor: '\u2014 Директор, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: 'Ритейл · E-commerce',
                    company: 'Телефон дүкөнү',
                    headline: 'AI-чатбот 2 менеджерди алмаштырып, сатууну 35% көтөрдү',
                    teaser: 'Уюлдук телефон дүкөнү Instagram жана WhatsApp\'та кардарларды жоготуп жаткан — жай жооптор, жумуш убактысынан тышкары өткөрүлгөн суроо-талаптар. Каталогду толук билген, телефон сунуштаган жана заказ кабыл алган AI-чатбот орноттук.',
                    results: [
                        { value: '+35%', label: 'Сатуу конверсиясы' },
                        { value: '5 сек', label: 'Жооп убактысы' },
                        { value: '+40%', label: 'Жумуштан тышкары сатуу' },
                        { value: '$800+', label: 'Айлык үнөмдөө' },
                    ],
                    quoteAuthor: '— Дүкөн ээси',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: 'Дистрибуция · HR Tech',
                    company: 'Дистрибьютор окутуу платформасы',
                    headline: 'ЖИ окутуу платформасы онбордингди 2 жумадан 3 күнгө кыскартты',
                    teaser: 'Дистрибьютор соода өкүлдөрүн кол менен окутууга жумаларды коротуп жаткан — супервайзерлер бош эмес, сапат туруксуз болгон. Кызматтар боюнча курстар, 24/7 ЖИ-тренер, автоматтык экзамендер жана тез отчёттор менен ЖИ-платформа түздүк.',
                    results: [
                        { value: '3 күн', label: 'Онбординг убактысы' },
                        { value: '78%', label: 'Орточо экзамен упай' },
                        { value: '24/7', label: 'ЖИ-тренер' },
                        { value: '0', label: 'Супервайзер сааты' },
                    ],
                    quoteAuthor: '— HR-директор',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
    }

    return content[locale as keyof typeof content] || content.en
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function CasesPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground />

            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0F0F5] tracking-tight mb-4">
                        {content.heroTitle}
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        {content.heroSubtitle}
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {content.stats.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <div className="text-2xl font-bold text-[#F0F0F5] mb-0.5">{s.value}</div>
                                <div className="text-sm font-medium text-[#F0F0F5]/55 mb-0.5">{s.label}</div>
                                <div className="text-xs text-[#F0F0F5]/30">{s.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases */}
            <section className="pb-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6 pt-20">
                    <div className="flex flex-col gap-5 mb-12">
                        {content.cases.map((card, index) => (
                            <CaseCard key={index} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Solutions />

            <Footer />
        </div>
    )
}

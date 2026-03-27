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

const valueIcons = [
    (
        <svg key="ai" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
            <path d="M10 21h4" />
            <path d="M9 9h6" />
            <path d="M12 6v6" />
        </svg>
    ),
    (
        <svg key="gov" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-4h6v4" />
            <path d="M9 10h1" />
            <path d="M14 10h1" />
            <path d="M9 14h1" />
            <path d="M14 14h1" />
        </svg>
    ),
    (
        <svg key="delivery" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    ),
    (
        <svg key="security" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
        </svg>
    ),
]

function getContent(locale: string) {
    const content = {
        en: {
            heroTitle: 'About Evolution Group',
            heroSubtitle: 'AI-powered IT company from Kyrgyzstan building enterprise solutions for banks, telecom, oil & gas, and government organizations.',
            stats: [
                { value: '50+', label: 'Projects delivered', detail: 'Across 4 industries' },
                { value: '25+', label: 'Team members', detail: 'Engineers, designers, AI researchers' },
                { value: '99.9%', label: 'Uptime SLA', detail: 'Production systems' },
                { value: '$10M+', label: 'Saved for clients', detail: 'Operational cost reduction' },
            ],
            missionBadge: 'Our mission',
            missionTitle: 'Accelerate business through intelligent automation',
            missionDescription: 'We create AI systems tailored to the unique challenges of each industry. Our developments accelerate business processes, reduce risks, and ensure transparency of operations — from credit scoring in banks to predictive maintenance in oil fields.',
            values: [
                {
                    title: 'AI-first approach',
                    description: 'Artificial intelligence is at the core of every solution we build — from initial analysis to final deployment.',
                },
                {
                    title: 'Government integration expertise',
                    description: 'Unique experience working with state APIs, tax services, and regulatory systems in the Kyrgyz Republic.',
                },
                {
                    title: 'End-to-end delivery',
                    description: 'From research and prototyping to production deployment and ongoing monitoring — we own the full lifecycle.',
                },
                {
                    title: 'Enterprise-grade security',
                    description: 'ISO 27001 practices, OAuth 2.0, mTLS, secrets management — your data stays protected at every layer.',
                },
            ],
            industriesTitle: 'Industries we serve',
            industriesSubtitle: 'Enterprise solutions adapted for the regulations and workflows of each sector.',
            industries: [
                { name: 'Banking & Fintech' },
                { name: 'Oil & Gas' },
                { name: 'Telecom' },
                { name: 'Manufacturing & Logistics' },
                { name: 'Government' },
                { name: 'Small Business' },
            ],
            techTitle: 'Tech stack',
            techSubtitle: 'Battle-tested tools and custom solutions for reliable AI systems at any scale.',
            techStack: [
                { category: 'AI / ML', tools: ['OpenAI GPT-4', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'scikit-learn'] },
                { category: 'Infrastructure', tools: ['Kubernetes', 'AWS / GCP', 'Docker', 'PostgreSQL', 'Redis', 'Kafka'] },
                { category: 'Frontend', tools: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', 'Three.js'] },
                { category: 'Security', tools: ['ISO 27001', 'GDPR', 'OAuth 2.0', 'mTLS', 'Vault', 'SIEM'] },
            ],
            journeyTitle: 'Our journey',
            milestones: [
                { year: '2022', event: 'Company founded in Bishkek, Kyrgyzstan' },
                { year: '2023', event: 'First banking integrations and government API projects' },
                { year: '2024', event: 'Expanded to oil & gas and telecom industries' },
                { year: '2025', event: 'Multi-agent AI systems, 50+ projects milestone' },
            ],
            featuresTitle: 'Platform features',
            featuresSubtitle: 'What we deliver with every project.',
            features: [
                'Glassmorphism modern UI',
                'Multi-language (RU / EN / KY)',
                'Fully responsive design',
                'Framer Motion animations',
                'Docker & CI/CD ready',
                'Security headers & HTTPS',
                'Static pre-rendering',
                'Optimized bundle (< 200KB)',
                'On-premise & hybrid deploy',
            ],
            ctaTitle: 'Ready to work together?',
            ctaSubtitle: 'Tell us your challenge — we\'ll find the right solution.',
            ctaButton: 'Get in touch',
        },
        ru: {
            heroTitle: 'Об Evolution Group',
            heroSubtitle: 'ИТ-компания с фокусом на ИИ из Кыргызстана, создающая корпоративные решения для банков, телекома, нефтегазовой отрасли и государственных организаций.',
            stats: [
                { value: '50+', label: 'Реализованных проектов', detail: 'В 4 отраслях' },
                { value: '25+', label: 'Членов команды', detail: 'Инженеры, дизайнеры, исследователи ИИ' },
                { value: '99.9%', label: 'SLA по доступности', detail: 'Продуктивные системы' },
                { value: '$10M+', label: 'Сэкономлено клиентам', detail: 'Сокращение операционных расходов' },
            ],
            missionBadge: 'Наша миссия',
            missionTitle: 'Ускоряем бизнес через интеллектуальную автоматизацию',
            missionDescription: 'Мы создаём системы искусственного интеллекта, адаптированные к уникальным задачам каждой отрасли. Наши разработки ускоряют бизнес-процессы, снижают риски и обеспечивают прозрачность операций — от кредитного скоринга в банках до предиктивного обслуживания на нефтяных месторождениях.',
            values: [
                {
                    title: 'ИИ в основе всего',
                    description: 'Искусственный интеллект лежит в основе каждого решения, которое мы создаём — от первичного анализа до финального развёртывания.',
                },
                {
                    title: 'Экспертиза в государственных интеграциях',
                    description: 'Уникальный опыт работы с государственными API, налоговыми сервисами и регуляторными системами Кыргызской Республики.',
                },
                {
                    title: 'Полный цикл разработки',
                    description: 'От исследований и прототипирования до развёртывания в продуктиве и постоянного мониторинга — мы отвечаем за весь жизненный цикл.',
                },
                {
                    title: 'Безопасность корпоративного уровня',
                    description: 'Практики ISO 27001, OAuth 2.0, mTLS, управление секретами — ваши данные защищены на каждом уровне.',
                },
            ],
            industriesTitle: 'Отрасли',
            industriesSubtitle: 'Корпоративные решения, адаптированные к регуляторным требованиям и бизнес-процессам каждого сектора.',
            industries: [
                { name: 'Банки и финтех' },
                { name: 'Нефть и газ' },
                { name: 'Телеком' },
                { name: 'Производство и логистика' },
                { name: 'Государственный сектор' },
                { name: 'Малый бизнес' },
            ],
            techTitle: 'Технологический стек',
            techSubtitle: 'Проверенные инструменты и собственные решения для надёжных ИИ-систем любого масштаба.',
            techStack: [
                { category: 'ИИ / МО', tools: ['OpenAI GPT-4', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'scikit-learn'] },
                { category: 'Инфраструктура', tools: ['Kubernetes', 'AWS / GCP', 'Docker', 'PostgreSQL', 'Redis', 'Kafka'] },
                { category: 'Фронтенд', tools: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', 'Three.js'] },
                { category: 'Безопасность', tools: ['ISO 27001', 'GDPR', 'OAuth 2.0', 'mTLS', 'Vault', 'SIEM'] },
            ],
            journeyTitle: 'Наш путь',
            milestones: [
                { year: '2022', event: 'Основание компании в Бишкеке, Кыргызстан' },
                { year: '2023', event: 'Первые банковские интеграции и проекты с государственными API' },
                { year: '2024', event: 'Выход в нефтегазовую и телеком-отрасли' },
                { year: '2025', event: 'Мультиагентные ИИ-системы, рубеж в 50+ проектов' },
            ],
            featuresTitle: 'Возможности платформы',
            featuresSubtitle: 'Что мы обеспечиваем в каждом проекте.',
            features: [
                'Современный UI с эффектом стекла',
                'Мультиязычность (RU / EN / KY)',
                'Полностью адаптивный дизайн',
                'Анимации Framer Motion',
                'Docker и CI/CD из коробки',
                'Заголовки безопасности и HTTPS',
                'Статическая пре-рендеринг',
                'Оптимизированная сборка (< 200 КБ)',
                'On-premise и гибридное развёртывание',
            ],
            ctaTitle: 'Готовы к сотрудничеству?',
            ctaSubtitle: 'Расскажите о вашей задаче — мы найдём подходящее решение.',
            ctaButton: 'Связаться с нами',
        },
        ky: {
            heroTitle: 'Evolution Group жөнүндө',
            heroSubtitle: 'Кыргызстандагы ЖИ негизиндеги IT-компания — банктар, телеком, мунай-газ жана мамлекеттик уюмдар үчүн корпоративдик чечимдер түзөт.',
            stats: [
                { value: '50+', label: 'Аяктаган долбоорлор', detail: '4 тармакта' },
                { value: '25+', label: 'Команда мүчөлөрү', detail: 'Инженерлер, дизайнерлер, ЖИ изилдөөчүлөрү' },
                { value: '99.9%', label: 'SLA жеткиликтүүлүк', detail: 'Продуктивдик системалар' },
                { value: '$10M+', label: 'Кардарларга үнөмдөө', detail: 'Операциялык чыгымдарды кыскартуу' },
            ],
            missionBadge: 'Биздин миссия',
            missionTitle: 'Акылдуу автоматташтыруу аркылуу бизнести тездетүү',
            missionDescription: 'Биз ар бир тармактын уникалдуу маселелерине ылайыкталган жасалма интеллект системаларын түзөбүз. Биздин иштеп чыгууларыбыз бизнес-процесстерди тездетет, тобокелдиктерди азайтат жана операциялардын ачыктыгын камсыз кылат — банктардагы кредиттик скорингден мунай кендериндеги алдын ала тейлөөгө чейин.',
            values: [
                {
                    title: 'ЖИ — негизги мамиле',
                    description: 'Жасалма интеллект биз түзгөн ар бир чечимдин өзөгүндө — баштапкы анализден акыркы жайгаштырууга чейин.',
                },
                {
                    title: 'Мамлекеттик интеграция тажрыйбасы',
                    description: 'Кыргыз Республикасынын мамлекеттик API, салык кызматтары жана жөнгө салуу системалары менен иштөөнүн уникалдуу тажрыйбасы.',
                },
                {
                    title: 'Толук цикл иштеп чыгуу',
                    description: 'Изилдөө жана прототиптөөдөн баштап продуктивдик жайгаштырууга жана туруктуу мониторингге чейин — биз толук жашоо циклине жооп беребиз.',
                },
                {
                    title: 'Корпоративдик деңгээлдеги коопсуздук',
                    description: 'ISO 27001 практикалары, OAuth 2.0, mTLS, сырларды башкаруу — сиздин маалыматтарыңыз ар бир катмарда корголгон.',
                },
            ],
            industriesTitle: 'Тармактар',
            industriesSubtitle: 'Ар бир сектордун жөнгө салуу талаптарына жана бизнес-процесстерине ылайыкталган корпоративдик чечимдер.',
            industries: [
                { name: 'Банктар жана финтех' },
                { name: 'Мунай жана газ' },
                { name: 'Телеком' },
                { name: 'Өндүрүш жана логистика' },
                { name: 'Мамлекеттик сектор' },
                { name: 'Чакан бизнес' },
            ],
            techTitle: 'Технологиялык стек',
            techSubtitle: 'Ар кандай масштабдагы ишенимдүү ЖИ-системалар үчүн текшерилген куралдар жана өздүк чечимдер.',
            techStack: [
                { category: 'ЖИ / МҮ', tools: ['OpenAI GPT-4', 'TensorFlow', 'PyTorch', 'LangChain', 'Hugging Face', 'scikit-learn'] },
                { category: 'Инфраструктура', tools: ['Kubernetes', 'AWS / GCP', 'Docker', 'PostgreSQL', 'Redis', 'Kafka'] },
                { category: 'Фронтенд', tools: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React', 'Three.js'] },
                { category: 'Коопсуздук', tools: ['ISO 27001', 'GDPR', 'OAuth 2.0', 'mTLS', 'Vault', 'SIEM'] },
            ],
            journeyTitle: 'Биздин жол',
            milestones: [
                { year: '2022', event: 'Бишкекте, Кыргызстанда компания негизделди' },
                { year: '2023', event: 'Биринчи банктык интеграциялар жана мамлекеттик API долбоорлору' },
                { year: '2024', event: 'Мунай-газ жана телеком тармактарына кеңейүү' },
                { year: '2025', event: 'Мульти-агенттик ЖИ системалары, 50+ долбоор белгиси' },
            ],
            featuresTitle: 'Платформанын мүмкүнчүлүктөрү',
            featuresSubtitle: 'Ар бир долбоордо биз камсыз кылган нерселер.',
            features: [
                'Айнек эффекти менен заманбап UI',
                'Көп тилдүүлүк (RU / EN / KY)',
                'Толук адаптивдүү дизайн',
                'Framer Motion анимациялары',
                'Docker жана CI/CD даяр',
                'Коопсуздук баштары жана HTTPS',
                'Статикалык алдын ала рендеринг',
                'Оптималдаштырылган жыйнак (< 200 КБ)',
                'On-premise жана гибриддик жайгаштыруу',
            ],
            ctaTitle: 'Кызматташууга даярсызбы?',
            ctaSubtitle: 'Маселеңизди айтыңыз — биз туура чечимди табабыз.',
            ctaButton: 'Байланышуу',
        },
    }

    return content[locale as keyof typeof content] || content.en
}

const industryStyles = [
    { accent: 'text-cyan-400', dotColor: 'bg-cyan-400' },
    { accent: 'text-amber-400', dotColor: 'bg-amber-400' },
    { accent: 'text-violet-400', dotColor: 'bg-violet-400' },
    { accent: 'text-emerald-400', dotColor: 'bg-emerald-400' },
    { accent: 'text-blue-400', dotColor: 'bg-blue-400' },
    { accent: 'text-pink-400', dotColor: 'bg-pink-400' },
]

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function AboutPage() {
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
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-xl mx-auto leading-relaxed">
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

            {/* Mission */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">{content.missionBadge}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                            {content.missionTitle}
                        </h2>
                        <p className="text-base text-white/50 leading-relaxed max-w-2xl">
                            {content.missionDescription}
                        </p>
                    </motion.div>

                    {/* Values */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {content.values.map((v, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] hover:bg-[#F0F0F5]/[0.04] hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.04] flex items-center justify-center mb-4 text-white/60">
                                    {valueIcons[i]}
                                </div>
                                <h3 className="text-base font-bold text-[#F0F0F5] mb-2">{v.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/45 leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">{content.industriesTitle}</h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-lg leading-relaxed">
                            {content.industriesSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content.industries.map((ind, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex items-center gap-3 p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <span className={`w-2 h-2 rounded-full ${industryStyles[i].dotColor} flex-shrink-0`} />
                                <span className={`text-sm font-medium ${industryStyles[i].accent}`}>{ind.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">{content.techTitle}</h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-lg leading-relaxed">
                            {content.techSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {content.techStack.map((cat, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-7 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <span className="text-xs font-medium text-[#F0F0F5]/35 uppercase tracking-wider mb-4 block">{cat.category}</span>
                                <div className="flex flex-wrap gap-2">
                                    {cat.tools.map((tool, j) => (
                                        <span key={j} className="px-3 py-1.5 rounded-lg border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02] text-xs font-medium text-[#F0F0F5]/60">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">{content.journeyTitle}</h2>
                    </motion.div>

                    <div className="flex flex-col gap-4">
                        {content.milestones.map((m, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex items-start gap-5 p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <span className="text-2xl font-bold text-[#F0F0F5]/15 flex-shrink-0 font-mono">{m.year}</span>
                                <p className="text-sm text-[#F0F0F5]/55 leading-relaxed pt-1">{m.event}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deployment & Features */}
            <section className="py-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F0F5] tracking-tight mb-3">{content.featuresTitle}</h2>
                        <p className="text-base text-[#F0F0F5]/45 max-w-lg leading-relaxed">
                            {content.featuresSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content.features.map((feature, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex items-center gap-3 p-4 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400/60 flex-shrink-0">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-sm text-[#F0F0F5]/55">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                    >
                        <div>
                            <p className="text-sm font-semibold text-[#F0F0F5] mb-0.5">{content.ctaTitle}</p>
                            <p className="text-sm text-[#F0F0F5]/40">{content.ctaSubtitle}</p>
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

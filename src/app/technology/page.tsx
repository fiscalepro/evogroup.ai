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

const getContent = (locale: string) => {
    if (locale === 'en') {
        return {
            heroTitle: 'Modern AI stack',
            heroDesc: 'Battle-tested tools and custom solutions to make your AI systems reliable at any scale.',
            techTitle: 'Three layers of reliable AI architecture',
            capabilitiesTitle: 'What we build',
            methodologyTitle: 'How we build AI systems',
            stepLabel: 'Step',
            ctaTitle: 'Want to discuss project architecture?',
            ctaDesc: 'Tell us your challenge — we\'ll recommend the optimal tech stack.',
            ctaButton: 'Discuss project',
            techCategories: [
                {
                    label: 'AI / ML',
                    desc: 'Models and frameworks for building intelligent systems',
                    items: [
                        { name: 'OpenAI GPT-4', sub: 'Large Language Models' },
                        { name: 'TensorFlow', sub: 'ML Framework' },
                        { name: 'PyTorch', sub: 'Deep Learning' },
                        { name: 'LangChain', sub: 'LLM Orchestration' },
                        { name: 'Hugging Face', sub: 'Model Hub' },
                        { name: 'scikit-learn', sub: 'Classical ML' },
                    ],
                },
                {
                    label: 'Infrastructure',
                    desc: 'Cloud platform for scalable deployment',
                    items: [
                        { name: 'Kubernetes', sub: 'Container Orchestration' },
                        { name: 'AWS / GCP', sub: 'Cloud Platforms' },
                        { name: 'Docker', sub: 'Containerization' },
                        { name: 'PostgreSQL', sub: 'Relational Database' },
                        { name: 'Redis', sub: 'In-Memory Cache' },
                        { name: 'Kafka', sub: 'Event Streaming' },
                    ],
                },
                {
                    label: 'Security',
                    desc: 'Enterprise-grade data protection and access control',
                    items: [
                        { name: 'ISO 27001', sub: 'Information Security' },
                        { name: 'GDPR', sub: 'Data Protection' },
                        { name: 'OAuth 2.0', sub: 'Authorization' },
                        { name: 'mTLS', sub: 'Mutual TLS' },
                        { name: 'Vault', sub: 'Secrets Management' },
                        { name: 'SIEM', sub: 'Security Monitoring' },
                    ],
                },
            ],
            capabilities: [
                { title: 'Multi-agent AI systems', desc: 'Multiple AI agents work in tandem: one collects data, another analyzes, a third makes decisions.' },
                { title: 'RAG & vector databases', desc: 'Models work with corporate knowledge via Retrieval-Augmented Generation without retraining.' },
                { title: 'Real-time data processing', desc: 'Kafka + stream processing for real-time systems with latency under 100ms.' },
                { title: 'On-premise & hybrid deploy', desc: 'Deploy on client servers for maximum security and data control.' },
            ],
            steps: [
                { title: 'Research', desc: 'Study business processes, identify bottlenecks, formulate technical requirements with the client team.' },
                { title: 'Prototype', desc: 'Build MVP in 2 weeks. Real data, real business process — no guesswork.' },
                { title: 'Development', desc: 'Production code with tests, CI/CD, and monitoring. Short iterations, weekly progress demos.' },
                { title: 'Deploy', desc: 'Roll out to client infrastructure or our cloud cluster. Zero-downtime, automatic rollback on failure.' },
                { title: 'Monitoring', desc: 'Dashboards, alerts, 99.9% SLA. Proactive response before issues affect business.' },
                { title: 'Optimization', desc: 'Analyze data, improve models, and scale the system as load grows.' },
            ],
        }
    }

    if (locale === 'ky') {
        return {
            heroTitle: 'Заманбап AI стек',
            heroDesc: 'Сынактан өткөн куралдар жана жеке чечимдер — AI тутумдарыңыз каалаган масштабда ишенимдүү болушу үчүн.',
            techTitle: 'Ишенимдүү AI архитектурасынын үч катмары',
            capabilitiesTitle: 'Биз эмне курабыз',
            methodologyTitle: 'AI тутумдарды кантип курабыз',
            stepLabel: 'Кадам',
            ctaTitle: 'Долбоордун архитектурасын талкуулайбызбы?',
            ctaDesc: 'Көйгөйүңүздү айтыңыз — биз оптималдуу технологиялык стекти сунуштайбыз.',
            ctaButton: 'Долбоорду талкуулоо',
            techCategories: [
                {
                    label: 'AI / ML',
                    desc: 'Акылдуу тутумдарды куруу үчүн моделдер жана фреймворктор',
                    items: [
                        { name: 'OpenAI GPT-4', sub: 'Чоң тил моделдери' },
                        { name: 'TensorFlow', sub: 'ML фреймворк' },
                        { name: 'PyTorch', sub: 'Терең үйрөнүү' },
                        { name: 'LangChain', sub: 'LLM оркестрация' },
                        { name: 'Hugging Face', sub: 'Моделдер хабы' },
                        { name: 'scikit-learn', sub: 'Классикалык ML' },
                    ],
                },
                {
                    label: 'Инфраструктура',
                    desc: 'Масштабдуу жайгаштыруу үчүн булут платформасы',
                    items: [
                        { name: 'Kubernetes', sub: 'Контейнер оркестрациясы' },
                        { name: 'AWS / GCP', sub: 'Булут платформалары' },
                        { name: 'Docker', sub: 'Контейнеризация' },
                        { name: 'PostgreSQL', sub: 'Реляциялык маалымат базасы' },
                        { name: 'Redis', sub: 'Оперативдик кэш' },
                        { name: 'Kafka', sub: 'Окуялар агымы' },
                    ],
                },
                {
                    label: 'Коопсуздук',
                    desc: 'Корпоративдик деңгээлдеги маалыматтарды коргоо жана кирүү башкаруусу',
                    items: [
                        { name: 'ISO 27001', sub: 'Маалымат коопсуздугу' },
                        { name: 'GDPR', sub: 'Маалыматтарды коргоо' },
                        { name: 'OAuth 2.0', sub: 'Авторизация' },
                        { name: 'mTLS', sub: 'Өз ара TLS' },
                        { name: 'Vault', sub: 'Сырлар башкаруусу' },
                        { name: 'SIEM', sub: 'Коопсуздук мониторинги' },
                    ],
                },
            ],
            capabilities: [
                { title: 'Мульти-агенттик AI тутумдары', desc: 'Бир нече AI агент биргелешип иштейт: бири маалымат чогултат, экинчиси талдайт, үчүнчүсү чечим кабыл алат.' },
                { title: 'RAG жана вектордук базалар', desc: 'Моделдер корпоративдик билимдер менен Retrieval-Augmented Generation аркылуу кайра үйрөтүүсүз иштейт.' },
                { title: 'Реалдуу убакытта маалымат иштетүү', desc: 'Kafka + агымдык иштетүү — 100мс ашпаган кечигүү менен реалдуу убакыт тутумдары.' },
                { title: 'On-premise жана гибриддик жайгаштыруу', desc: 'Максималдуу коопсуздук жана маалыматтарды көзөмөлдөө үчүн кардардын серверлерине жайгаштыруу.' },
            ],
            steps: [
                { title: 'Изилдөө', desc: 'Бизнес-процесстерди изилдеп, тоскоолдуктарды аныктап, кардар командасы менен техникалык талаптарды түзүү.' },
                { title: 'Прототип', desc: '2 жумада MVP курабыз. Реалдуу маалымат, реалдуу бизнес-процесс — болжолдоосуз.' },
                { title: 'Иштеп чыгуу', desc: 'Тесттер, CI/CD жана мониторинг менен продакшн код. Кыска итерациялар, жума сайын прогресс демо.' },
                { title: 'Жайгаштыруу', desc: 'Кардардын инфраструктурасына же биздин булут кластерге чыгаруу. Нөл токтоп калуу, ката болгондо автоматтык кайтаруу.' },
                { title: 'Мониторинг', desc: 'Дашборддор, эскертүүлөр, 99.9% SLA. Көйгөйлөр бизнеске таасир эткенге чейин проактивдүү жооп.' },
                { title: 'Оптимизация', desc: 'Маалыматтарды талдоо, моделдерди жакшыртуу жана жүктөм өскөн сайын тутумду масштабдоо.' },
            ],
        }
    }

    // Default: Russian
    return {
        heroTitle: 'Современный AI-стек',
        heroDesc: 'Проверенные инструменты и индивидуальные решения, чтобы ваши AI-системы работали надёжно на любом масштабе.',
        techTitle: 'Три уровня надёжной AI-архитектуры',
        capabilitiesTitle: 'Что мы создаём',
        methodologyTitle: 'Как мы строим AI-системы',
        stepLabel: 'Шаг',
        ctaTitle: 'Хотите обсудить архитектуру проекта?',
        ctaDesc: 'Расскажите о вашей задаче — мы подберём оптимальный технологический стек.',
        ctaButton: 'Обсудить проект',
        techCategories: [
            {
                label: 'AI / ML',
                desc: 'Модели и фреймворки для создания интеллектуальных систем',
                items: [
                    { name: 'OpenAI GPT-4', sub: 'Большие языковые модели' },
                    { name: 'TensorFlow', sub: 'ML-фреймворк' },
                    { name: 'PyTorch', sub: 'Глубокое обучение' },
                    { name: 'LangChain', sub: 'Оркестрация LLM' },
                    { name: 'Hugging Face', sub: 'Хаб моделей' },
                    { name: 'scikit-learn', sub: 'Классический ML' },
                ],
            },
            {
                label: 'Инфраструктура',
                desc: 'Облачная платформа для масштабируемого развёртывания',
                items: [
                    { name: 'Kubernetes', sub: 'Оркестрация контейнеров' },
                    { name: 'AWS / GCP', sub: 'Облачные платформы' },
                    { name: 'Docker', sub: 'Контейнеризация' },
                    { name: 'PostgreSQL', sub: 'Реляционная СУБД' },
                    { name: 'Redis', sub: 'In-Memory кэш' },
                    { name: 'Kafka', sub: 'Потоковая обработка событий' },
                ],
            },
            {
                label: 'Безопасность',
                desc: 'Защита данных и контроль доступа корпоративного уровня',
                items: [
                    { name: 'ISO 27001', sub: 'Информационная безопасность' },
                    { name: 'GDPR', sub: 'Защита персональных данных' },
                    { name: 'OAuth 2.0', sub: 'Авторизация' },
                    { name: 'mTLS', sub: 'Взаимный TLS' },
                    { name: 'Vault', sub: 'Управление секретами' },
                    { name: 'SIEM', sub: 'Мониторинг безопасности' },
                ],
            },
        ],
        capabilities: [
            { title: 'Мульти-агентные AI-системы', desc: 'Несколько AI-агентов работают в связке: один собирает данные, другой анализирует, третий принимает решения.' },
            { title: 'RAG и векторные базы данных', desc: 'Модели работают с корпоративными знаниями через Retrieval-Augmented Generation без переобучения.' },
            { title: 'Обработка данных в реальном времени', desc: 'Kafka + потоковая обработка для систем реального времени с задержкой менее 100 мс.' },
            { title: 'On-premise и гибридное развёртывание', desc: 'Развёртывание на серверах клиента для максимальной безопасности и контроля данных.' },
        ],
        steps: [
            { title: 'Исследование', desc: 'Изучаем бизнес-процессы, выявляем узкие места, формируем технические требования совместно с командой клиента.' },
            { title: 'Прототип', desc: 'Создаём MVP за 2 недели. Реальные данные, реальный бизнес-процесс — без догадок.' },
            { title: 'Разработка', desc: 'Продакшн-код с тестами, CI/CD и мониторингом. Короткие итерации, еженедельные демо прогресса.' },
            { title: 'Развёртывание', desc: 'Выкатка на инфраструктуру клиента или наш облачный кластер. Нулевой простой, автоматический откат при сбое.' },
            { title: 'Мониторинг', desc: 'Дашборды, алерты, SLA 99.9%. Проактивная реакция до того, как проблемы затронут бизнес.' },
            { title: 'Оптимизация', desc: 'Анализ данных, улучшение моделей и масштабирование системы по мере роста нагрузки.' },
        ],
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function TechnologyPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground />

            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-4">
                        {content.heroTitle}
                    </h1>
                    <p className="text-base lg:text-lg text-gray-600 dark:text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        {content.heroDesc}
                    </p>
                </motion.div>
            </section>

            {/* Tech categories */}
            <section className="pb-24 border-t border-gray-100 dark:border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6 pt-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-3">{content.techTitle}</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {content.techCategories.map((cat, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                                className="p-7 rounded-2xl border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02] hover:bg-gray-100 dark:hover:bg-[#F0F0F5]/[0.04] hover:border-gray-300 dark:hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <span className="text-xs font-medium text-gray-500 dark:text-[#F0F0F5]/35 uppercase tracking-wider mb-4 block">{cat.label}</span>
                                <p className="text-sm text-gray-600 dark:text-[#F0F0F5]/45 leading-relaxed mb-6">{cat.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item, j) => (
                                        <div key={j} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02]">
                                            <span className="text-xs font-medium text-gray-500 dark:text-[#F0F0F5]/60">{item.name}</span>
                                            <span className="text-[10px] text-gray-500 dark:text-[#F0F0F5]/25 ml-1">{item.sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 border-t border-gray-100 dark:border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-3">{content.capabilitiesTitle}</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {content.capabilities.map((c, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-7 rounded-2xl border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02] hover:bg-gray-100 dark:hover:bg-[#F0F0F5]/[0.04] hover:border-gray-300 dark:hover:border-[#F0F0F5]/[0.1] transition-all duration-300"
                            >
                                <h3 className="text-base font-bold text-gray-900 dark:text-[#F0F0F5] mb-2">{c.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-[#F0F0F5]/45 leading-relaxed">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-24 border-t border-gray-100 dark:border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-[#F0F0F5] tracking-tight mb-3">{content.methodologyTitle}</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content.steps.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02]"
                            >
                                <span className="text-xs font-bold text-gray-500 dark:text-[#F0F0F5]/20 mb-3 block">{content.stepLabel} {i + 1}</span>
                                <h3 className="text-base font-bold text-gray-900 dark:text-[#F0F0F5] mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-[#F0F0F5]/40 leading-relaxed">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 border-t border-gray-100 dark:border-[#F0F0F5]/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl border border-gray-200 dark:border-[#F0F0F5]/[0.06] bg-gray-50 dark:bg-[#F0F0F5]/[0.02]">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-[#F0F0F5] mb-0.5">{content.ctaTitle}</p>
                            <p className="text-sm text-gray-600 dark:text-[#F0F0F5]/40">{content.ctaDesc}</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F0F0F5] text-[#0A0E1A] px-6 py-2.5 rounded-xl text-sm font-semibold no-underline hover:bg-white transition-colors"
                        >
                            {content.ctaButton} <ArrowIcon />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

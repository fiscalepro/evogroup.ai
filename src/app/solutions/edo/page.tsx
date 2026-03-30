'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

/* ──────────── ICONS ──────────── */

const featureIcons = [
    // Document lifecycle
    <svg key="lifecycle" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>,
    // Approval routes
    <svg key="routes" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
    </svg>,
    // Auto-routing
    <svg key="autoroute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
    </svg>,
    // Tasks & execution
    <svg key="tasks" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>,
    // Controller dashboard
    <svg key="controller" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
    </svg>,
    // Notifications
    <svg key="notifications" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>,
]

/* ──────────── CONTENT ──────────── */

function getContent(locale: string) {
    const content = {
        en: {
            badge: 'EDO Platform',
            heroTitle: 'Electronic Document',
            heroTitleLine2: 'Management',
            heroSubtitle: 'Full document lifecycle: creation, approval, execution control, and audit — in a single platform with multi-tenancy support.',
            ctaPrimary: 'Request a Demo',
            ctaSecondary: 'Learn More',
            featuresTitle: 'Capabilities',
            featuresSubtitle: 'Everything your organization needs for structured document management',
            features: [
                {
                    title: 'Full Document Lifecycle',
                    description: 'Creation, editing, versioning, attachments. Draft > Approval > Execution > Completion. Recall, reject or cancel at any stage.',
                },
                {
                    title: 'Flexible Approval Routes',
                    description: 'Multi-stage routes with role-based or individual assignees. Deadlines with business calendar and automatic escalation on overdue.',
                },
                {
                    title: 'Automatic Route Selection',
                    description: 'The system automatically determines the approval route based on document type and attributes — no manual setup required each time.',
                },
                {
                    title: 'Tasks & Execution Control',
                    description: 'After approval — assign executors, set deadlines, delegate tasks. Separate module for standalone tasks without document binding.',
                },
                {
                    title: 'Controller Dashboard',
                    description: 'Organization-wide monitoring: overdue approvals, overdue tasks, documents under review. Send reminders to executors.',
                },
                {
                    title: 'Three Notification Channels',
                    description: 'In-app, email digest during business hours, and Telegram bot with QR code account linking.',
                },
            ],
            rolesTitle: 'System Roles',
            roles: [
                { role: 'Platform Admin', desc: 'Manage organizations and global settings' },
                { role: 'Organization Admin', desc: 'Users, roles, settings within their organization' },
                { role: 'Initiator', desc: 'Create documents and form approval routes' },
                { role: 'Approver', desc: 'Approve or reject documents' },
                { role: 'Controller', desc: 'Monitor all documents, send reminders' },
            ],
            securityTitle: 'Enterprise Security',
            securityItems: [
                'Data isolation between organizations at database level',
                'JWT authentication with token refresh',
                'Corporate SSO via Keycloak / OAuth2',
                'Role-based access control (RBAC)',
                'Security audit: login logging, session blocking',
            ],
            integrationsTitle: 'Integrations',
            integrations: [
                { name: 'Telegram', desc: 'Push notifications & account linking' },
                { name: 'Email', desc: 'Digests with business hours awareness' },
                { name: 'SSO (Keycloak)', desc: 'Corporate authorization' },
                { name: 'REST API', desc: 'Documented API for external systems' },
                { name: 'S3 Storage', desc: 'Document attachment storage' },
            ],
            ctaBottomTitle: 'Ready to digitize your document workflow?',
            ctaBottomSubtitle: 'Request a demo and see how EDO can streamline your approval processes.',
            ctaBottomButton: 'Request a Demo',
        },
        ru: {
            badge: 'Платформа ЭДО',
            heroTitle: 'Электронный',
            heroTitleLine2: 'документооборот',
            heroSubtitle: 'Полный цикл работы с документами: создание, согласование, контроль исполнения и аудит — в единой платформе с мультитенантностью.',
            ctaPrimary: 'Запросить демо',
            ctaSecondary: 'Узнать больше',
            featuresTitle: 'Возможности',
            featuresSubtitle: 'Всё, что нужно для структурированного документооборота',
            features: [
                {
                    title: 'Полный жизненный цикл документа',
                    description: 'Создание, редактирование, версионирование, вложения. Черновик → Согласование → Исполнение → Завершение. Отзыв, отклонение или аннулирование на любом этапе.',
                },
                {
                    title: 'Гибкие маршруты согласования',
                    description: 'Многоэтапные маршруты с назначением по ролям или конкретным сотрудникам. Дедлайны с учётом производственного календаря и автоэскалация при просрочке.',
                },
                {
                    title: 'Автоматический подбор маршрута',
                    description: 'Система сама определяет маршрут согласования на основе типа документа и его атрибутов — не нужно настраивать вручную.',
                },
                {
                    title: 'Поручения и контроль исполнения',
                    description: 'Назначение исполнителей, установка сроков, делегирование задач. Отдельный модуль для поручений без привязки к документу.',
                },
                {
                    title: 'Дашборд контролёра',
                    description: 'Мониторинг всей организации: просроченные согласования, просроченные поручения, документы на рассмотрении. Напоминания исполнителям.',
                },
                {
                    title: 'Уведомления в трёх каналах',
                    description: 'В приложении, email-дайджест в рабочие часы и Telegram-бот с привязкой аккаунта по QR-коду.',
                },
            ],
            rolesTitle: 'Роли в системе',
            roles: [
                { role: 'Администратор платформы', desc: 'Управление организациями и глобальными настройками' },
                { role: 'Администратор организации', desc: 'Пользователи, роли, настройки внутри организации' },
                { role: 'Инициатор', desc: 'Создание документов и формирование маршрутов согласования' },
                { role: 'Согласующий', desc: 'Утверждение или отклонение документов' },
                { role: 'Контролёр', desc: 'Мониторинг всех документов, напоминания' },
            ],
            securityTitle: 'Безопасность',
            securityItems: [
                'Изоляция данных между организациями на уровне БД',
                'JWT-аутентификация с обновлением токенов',
                'Корпоративный SSO через Keycloak / OAuth2',
                'Разграничение прав доступа по ролям (RBAC)',
                'Аудит безопасности: логирование входов, блокировка сессий',
            ],
            integrationsTitle: 'Интеграции',
            integrations: [
                { name: 'Telegram', desc: 'Push-уведомления и привязка аккаунта' },
                { name: 'Email', desc: 'Дайджесты с учётом рабочих часов' },
                { name: 'SSO (Keycloak)', desc: 'Корпоративная авторизация' },
                { name: 'REST API', desc: 'Документированный API для внешних систем' },
                { name: 'S3-хранилище', desc: 'Хранение вложений документов' },
            ],
            ctaBottomTitle: 'Готовы оцифровать документооборот?',
            ctaBottomSubtitle: 'Запросите демо и узнайте, как EDO может оптимизировать ваши процессы согласования.',
            ctaBottomButton: 'Запросить демо',
        },
        ky: {
            badge: 'EDO Платформасы',
            heroTitle: 'Электрондук документ',
            heroTitleLine2: 'жүгүртүү',
            heroSubtitle: 'Документтер менен толук цикл: түзүү, макулдашуу, аткарууну контролдоо жана аудит — мультитенанттуулук менен бирдиктүү платформада.',
            ctaPrimary: 'Демо сурануу',
            ctaSecondary: 'Көбүрөөк билүү',
            featuresTitle: 'Мүмкүнчүлүктөр',
            featuresSubtitle: 'Структуралаштырылган документ жүгүртүү үчүн керектүү нерселердин баары',
            features: [
                {
                    title: 'Документтин толук жашоо цикли',
                    description: 'Түзүү, оңдоо, версиялоо, тиркемелер. Долбоор → Макулдашуу → Аткаруу → Аяктоо. Кайсы этапта болбосун кайтаруу, четке кагуу же жокко чыгаруу.',
                },
                {
                    title: 'Ийкемдүү макулдашуу маршруттары',
                    description: 'Ролдор же конкреттүү кызматкерлер боюнча дайындоо менен көп этаптуу маршруттар. Өндүрүштүк календарь менен мөөнөттөр жана мөөнөтү өткөндө автоэскалация.',
                },
                {
                    title: 'Маршрутту автоматтык тандоо',
                    description: 'Система документтин түрүнө жана атрибуттарына негизделип макулдашуу маршрутун өзү аныктайт — ар жолу кол менен жөндөөнүн кажети жок.',
                },
                {
                    title: 'Тапшырмалар жана аткаруу контролу',
                    description: 'Аткаруучуларды дайындоо, мөөнөттөрдү белгилөө, тапшырмаларды тапшыруу. Документсиз тапшырмалар үчүн өзүнчө модуль.',
                },
                {
                    title: 'Контролёр панели',
                    description: 'Бүт уюмду мониторингдөө: мөөнөтү өткөн макулдашуулар, мөөнөтү өткөн тапшырмалар, каралып жаткан документтер. Аткаруучуларга эскертүүлөр.',
                },
                {
                    title: 'Үч каналда билдирүүлөр',
                    description: 'Колдонмодо, жумуш убагында email-дайджест жана QR-код менен аккаунт байлоо аркылуу Telegram-бот.',
                },
            ],
            rolesTitle: 'Системадагы ролдор',
            roles: [
                { role: 'Платформа администратору', desc: 'Уюмдарды жана глобалдык жөндөөлөрдү башкаруу' },
                { role: 'Уюм администратору', desc: 'Уюмдун ичиндеги колдонуучулар, ролдор, жөндөөлөр' },
                { role: 'Демилгечи', desc: 'Документтерди түзүү жана макулдашуу маршруттарын калыптандыруу' },
                { role: 'Макулдашуучу', desc: 'Документтерди бекитүү же четке кагуу' },
                { role: 'Контролёр', desc: 'Бардык документтерди мониторингдөө, эскертүүлөр' },
            ],
            securityTitle: 'Коопсуздук',
            securityItems: [
                'Маалымат базасы деңгээлинде уюмдар ортосунда маалыматтарды изоляциялоо',
                'Токендерди жаңылоо менен JWT-аутентификация',
                'Keycloak / OAuth2 аркылуу корпоративдик SSO',
                'Ролдор боюнча мүмкүнчүлүктөрдү чектөө (RBAC)',
                'Коопсуздук аудити: кирүүлөрдү журналга жазуу, сессияларды бөгөттөө',
            ],
            integrationsTitle: 'Интеграциялар',
            integrations: [
                { name: 'Telegram', desc: 'Push-билдирүүлөр жана аккаунт байлоо' },
                { name: 'Email', desc: 'Жумуш убагын эсепке алган дайджесттер' },
                { name: 'SSO (Keycloak)', desc: 'Корпоративдик авторизация' },
                { name: 'REST API', desc: 'Тышкы системалар үчүн документтештирилген API' },
                { name: 'S3 сактагыч', desc: 'Документ тиркемелерин сактоо' },
            ],
            ctaBottomTitle: 'Документ жүгүртүүнү санариптештирүүгө даярсызбы?',
            ctaBottomSubtitle: 'Демо сураңыз жана EDO макулдашуу процесстериңизди кантип оптималдаштыра аларын билиңиз.',
            ctaBottomButton: 'Демо сурануу',
        },
    }
    return content[locale as keyof typeof content] || content.ru
}

/* ──────────── PAGE ──────────── */

function EDOContent() {
    const { locale } = useTranslation()
    const c = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground accent="blue" />
            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/[0.06] mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-xs text-amber-400 font-medium">{c.badge}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#F0F0F5] tracking-tight leading-[1.1] mb-6">
                            {c.heroTitle}
                            <br />
                            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                {c.heroTitleLine2}
                            </span>
                        </h1>
                        <p className="text-base lg:text-lg text-[#F0F0F5]/55 max-w-2xl mx-auto mb-10 leading-relaxed">
                            {c.heroSubtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                            >
                                {c.ctaPrimary}
                                <ArrowIcon />
                            </Link>
                            <a
                                href="#features"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/70 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white no-underline transition-all"
                            >
                                {c.ctaSecondary}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="relative py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#F0F0F5] tracking-tight mb-4">
                            {c.featuresTitle}
                        </h2>
                        <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-xl mx-auto">
                            {c.featuresSubtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {c.features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-white/[0.025] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-xl bg-amber-500/[0.08] flex items-center justify-center text-amber-400 mb-4">
                                    {featureIcons[i]}
                                </div>
                                <h3 className="text-base font-semibold text-[#F0F0F5] mb-2">{feature.title}</h3>
                                <p className="text-sm text-[#F0F0F5]/50 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roles */}
            <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F0F5] tracking-tight">
                            {c.rolesTitle}
                        </h2>
                    </motion.div>

                    <div className="space-y-3">
                        {c.roles.map((r, i) => (
                            <motion.div
                                key={r.role}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="flex items-start gap-4 bg-white/[0.025] border border-white/[0.07] rounded-xl px-5 py-4"
                            >
                                <span className="mt-0.5 text-amber-400 flex-shrink-0"><CheckIcon /></span>
                                <div>
                                    <span className="text-sm font-semibold text-[#F0F0F5]">{r.role}</span>
                                    <span className="text-sm text-[#F0F0F5]/50 ml-2">— {r.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F0F5] tracking-tight">
                            {c.securityTitle}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {c.securityItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="flex items-start gap-3 bg-white/[0.025] border border-white/[0.07] rounded-xl px-5 py-4"
                            >
                                <svg className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <span className="text-sm text-[#F0F0F5]/70">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations */}
            <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F0F0F5] tracking-tight">
                            {c.integrationsTitle}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {c.integrations.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white/[0.025] border border-white/[0.07] rounded-xl p-5 hover:bg-white/[0.04] transition-all"
                            >
                                <h4 className="text-sm font-semibold text-[#F0F0F5] mb-1">{item.name}</h4>
                                <p className="text-xs text-[#F0F0F5]/50">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-amber-500/[0.06] rounded-full blur-[120px]" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 max-w-2xl mx-auto px-6 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight mb-5">
                        {c.ctaBottomTitle}
                    </h2>
                    <p className="text-base text-white/55 mb-10 max-w-lg mx-auto">
                        {c.ctaBottomSubtitle}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors"
                    >
                        {c.ctaBottomButton}
                        <ArrowIcon />
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}

export default function EDOPage() {
    return (
        <I18nProvider initialLocale="ru">
            <EDOContent />
        </I18nProvider>
    )
}

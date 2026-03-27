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
    // Smart Scheduling
    <svg key="scheduling" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>,
    // Patient Records
    <svg key="patients" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>,
    // AI Analytics
    <svg key="analytics" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>,
    // Multi-Clinic
    <svg key="multiclinic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h1M14 10h1M9 14h1M14 14h1" />
    </svg>,
    // WhatsApp & Chat
    <svg key="chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
    </svg>,
    // Warehouse & Inventory
    <svg key="warehouse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 7h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M8 7H4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M12 3v4M12 17v4" />
    </svg>,
]

const moduleAccents: Array<'pink' | 'cyan'> = ['pink', 'cyan', 'pink', 'cyan', 'pink', 'cyan']

const roleColors = ['text-pink-400', 'text-cyan-400', 'text-pink-400', 'text-cyan-400', 'text-pink-400']

/* ──────────── TRANSLATIONS ──────────── */

function getContent(locale: string) {
    const content = {
        en: {
            heroBadge: 'Medical SaaS Platform',
            heroTitle1: 'Modern',
            heroTitleHighlight: 'medical scheduling',
            heroTitle2: 'system',
            heroDescription: 'Optimize clinic operations with smart appointment management, patient records, warehouse tracking, and AI analytics — all in one platform.',
            requestDemo: 'Request demo',
            openPlatform: 'Open platform',
            heroStats: [
                { v: '10+', l: 'Core modules' },
                { v: '5', l: 'User roles' },
                { v: '24/7', l: 'AI assistant' },
            ],
            phoneDashboard: 'Dashboard',
            phoneAppointments: 'Appointments',
            phonePatients: 'Patients',
            phoneUpcoming: 'Upcoming',
            phoneNav: ['Schedule', 'Patients', 'Chat', 'More'],
            phoneItems: [
                { time: '09:00', name: 'Anna K.', service: 'Consultation', color: 'bg-pink-500/20 text-pink-400' },
                { time: '09:30', name: 'Marat S.', service: 'Dental cleaning', color: 'bg-cyan-500/20 text-cyan-400' },
                { time: '10:00', name: 'Elena V.', service: 'Check-up', color: 'bg-pink-500/20 text-pink-400' },
                { time: '10:45', name: 'Timur B.', service: 'X-ray', color: 'bg-cyan-500/20 text-cyan-400' },
            ],
            floatingAnalytics: 'Analytics',
            floatingAnalyticsValue: '+23% this week',
            floatingToday: 'Today',
            floatingTodayValue: '0 no-shows',
            stats: [
                { value: '10+', label: 'Modules', detail: 'Scheduling to warehouse' },
                { value: '5', label: 'User roles', detail: 'Granular access control' },
                { value: '99.9%', label: 'Uptime', detail: 'SLA guaranteed' },
                { value: '256-bit', label: 'Encryption', detail: 'Data protection' },
            ],
            modulesBadge: 'Platform',
            modulesTitle: 'Everything your clinic needs',
            modulesDescription: '10+ integrated modules — from appointment scheduling to inventory management and AI-powered insights.',
            modules: [
                { title: 'Smart Scheduling', description: 'Calendar view with drag-and-drop appointments, time slot management, doctor availability, and conflict prevention.' },
                { title: 'Patient Records', description: 'Complete patient profiles with medical history, diagnoses, treatment plans, visit documentation, and file attachments.' },
                { title: 'AI Analytics', description: 'Revenue tracking, appointment trends, doctor performance, peak hour analysis, patient demographics, and predictive insights.' },
                { title: 'Multi-Clinic', description: 'Manage multiple clinic branches from a single dashboard. Centralized reporting, shared patient base, and department structure.' },
                { title: 'WhatsApp & Chat', description: 'Integrated messaging with patients via WhatsApp. AI bot handles appointment booking, reminders, and FAQs automatically.' },
                { title: 'Warehouse & Inventory', description: 'Material tracking, supplier management, stock levels, invoicing, write-offs, and procedure protocol cost analysis.' },
            ],
            rolesTitle: 'Role-based access',
            rolesDescription: 'Every team member sees only what they need. Granular permissions for every role.',
            roles: [
                { name: 'Super Admin', description: 'Full system access across all clinics' },
                { name: 'Admin', description: 'Clinic-level management and configuration' },
                { name: 'Doctor', description: 'Schedule, patient records, medical notes' },
                { name: 'Receptionist', description: 'Appointments, patient check-in, payments' },
                { name: 'Manager', description: 'Analytics, reports, financial oversight' },
            ],
            stepsTitle: 'Get started in 4 steps',
            steps: [
                { number: '01', title: 'Setup clinic profile', description: 'Configure departments, services, doctors, and working hours' },
                { number: '02', title: 'Onboard your team', description: 'Invite staff with role-based access — from admins to receptionists' },
                { number: '03', title: 'Start scheduling', description: 'Patients book online or via WhatsApp. AI handles reminders and confirmations' },
                { number: '04', title: 'Analyze & optimize', description: 'Track revenue, no-show rates, doctor utilization — AI suggests improvements' },
            ],
            securityTitle: 'Enterprise-grade security',
            securityDescription: 'Patient data protection is non-negotiable. Every layer is secured.',
            securityItems: [
                { title: 'Data Protection', desc: 'Full compliance with healthcare data regulations. Patient records encrypted at rest and in transit.' },
                { title: '256-bit Encryption', desc: 'AES-256 encryption for all sensitive data. TLS 1.3 for every API call and data transfer.' },
                { title: '99.9% Availability', desc: 'Multi-region infrastructure with automatic failover. SLA-guaranteed uptime for mission-critical operations.' },
            ],
            ctaTitle: 'Ready to modernize your clinic?',
            ctaSubtitle: 'Free demo and 14-day trial — no commitment.',
            ctaButton: 'Request demo',
        },
        ru: {
            heroBadge: 'Медицинская SaaS-платформа',
            heroTitle1: 'Современная',
            heroTitleHighlight: 'система записи',
            heroTitle2: 'пациентов',
            heroDescription: 'Оптимизируйте работу клиники с интеллектуальным управлением записью, электронными картами пациентов, складским учётом и AI-аналитикой — всё на одной платформе.',
            requestDemo: 'Запросить демо',
            openPlatform: 'Открыть платформу',
            heroStats: [
                { v: '10+', l: 'Модулей' },
                { v: '5', l: 'Ролей' },
                { v: '24/7', l: 'AI-ассистент' },
            ],
            phoneDashboard: 'Панель управления',
            phoneAppointments: 'Записи',
            phonePatients: 'Пациенты',
            phoneUpcoming: 'Ближайшие',
            phoneNav: ['Расписание', 'Пациенты', 'Чат', 'Ещё'],
            phoneItems: [
                { time: '09:00', name: 'Анна К.', service: 'Консультация', color: 'bg-pink-500/20 text-pink-400' },
                { time: '09:30', name: 'Марат С.', service: 'Чистка зубов', color: 'bg-cyan-500/20 text-cyan-400' },
                { time: '10:00', name: 'Елена В.', service: 'Осмотр', color: 'bg-pink-500/20 text-pink-400' },
                { time: '10:45', name: 'Тимур Б.', service: 'Рентген', color: 'bg-cyan-500/20 text-cyan-400' },
            ],
            floatingAnalytics: 'Аналитика',
            floatingAnalyticsValue: '+23% за неделю',
            floatingToday: 'Сегодня',
            floatingTodayValue: '0 неявок',
            stats: [
                { value: '10+', label: 'Модулей', detail: 'От записи до склада' },
                { value: '5', label: 'Ролей', detail: 'Гибкое разграничение доступа' },
                { value: '99.9%', label: 'Аптайм', detail: 'Гарантия SLA' },
                { value: '256-бит', label: 'Шифрование', detail: 'Защита данных' },
            ],
            modulesBadge: 'Платформа',
            modulesTitle: 'Всё, что нужно вашей клинике',
            modulesDescription: '10+ интегрированных модулей — от записи на приём до управления складом и AI-аналитики.',
            modules: [
                { title: 'Умное расписание', description: 'Календарь с перетаскиванием записей, управление временными слотами, доступность врачей и предотвращение конфликтов.' },
                { title: 'Карты пациентов', description: 'Полные профили пациентов с историей болезни, диагнозами, планами лечения, документацией посещений и вложениями.' },
                { title: 'AI-аналитика', description: 'Отслеживание выручки, тренды записей, эффективность врачей, анализ пиковых часов, демография пациентов и прогнозная аналитика.' },
                { title: 'Мультиклиника', description: 'Управление несколькими филиалами из единой панели. Централизованная отчётность, общая база пациентов и структура отделений.' },
                { title: 'WhatsApp и чат', description: 'Интегрированный обмен сообщениями с пациентами через WhatsApp. AI-бот автоматически обрабатывает запись, напоминания и ответы на вопросы.' },
                { title: 'Склад и инвентарь', description: 'Учёт материалов, управление поставщиками, контроль остатков, выставление счетов, списание и анализ себестоимости процедур.' },
            ],
            rolesTitle: 'Ролевой доступ',
            rolesDescription: 'Каждый сотрудник видит только то, что ему необходимо. Гибкие права для каждой роли.',
            roles: [
                { name: 'Суперадмин', description: 'Полный доступ ко всем клиникам системы' },
                { name: 'Администратор', description: 'Управление и настройка на уровне клиники' },
                { name: 'Врач', description: 'Расписание, карты пациентов, медицинские записи' },
                { name: 'Регистратор', description: 'Запись на приём, регистрация, платежи' },
                { name: 'Менеджер', description: 'Аналитика, отчёты, финансовый контроль' },
            ],
            stepsTitle: 'Начните за 4 шага',
            steps: [
                { number: '01', title: 'Настройте профиль клиники', description: 'Сконфигурируйте отделения, услуги, врачей и рабочие часы' },
                { number: '02', title: 'Подключите команду', description: 'Пригласите персонал с ролевым доступом — от администраторов до регистраторов' },
                { number: '03', title: 'Начните запись', description: 'Пациенты записываются онлайн или через WhatsApp. AI отправляет напоминания и подтверждения' },
                { number: '04', title: 'Анализируйте и улучшайте', description: 'Отслеживайте выручку, неявки, загрузку врачей — AI предлагает улучшения' },
            ],
            securityTitle: 'Безопасность корпоративного уровня',
            securityDescription: 'Защита данных пациентов — наш приоритет. Каждый уровень системы защищён.',
            securityItems: [
                { title: 'Защита данных', desc: 'Полное соответствие требованиям регулирования медицинских данных. Шифрование записей пациентов при хранении и передаче.' },
                { title: '256-битное шифрование', desc: 'Шифрование AES-256 для всех конфиденциальных данных. TLS 1.3 для каждого API-запроса и передачи данных.' },
                { title: '99.9% доступность', desc: 'Мультирегиональная инфраструктура с автоматическим переключением. Гарантия SLA для критически важных операций.' },
            ],
            ctaTitle: 'Готовы модернизировать вашу клинику?',
            ctaSubtitle: 'Бесплатная демонстрация и 14-дневный пробный период — без обязательств.',
            ctaButton: 'Запросить демо',
        },
        ky: {
            heroBadge: 'Медициналык SaaS-платформа',
            heroTitle1: 'Заманбап',
            heroTitleHighlight: 'медициналык жазуу',
            heroTitle2: 'системасы',
            heroDescription: 'Клиниканын ишин акылдуу жазуу башкаруу, бейтаптардын карталары, кампа эсеби жана AI-аналитика менен оптималдаштырыңыз — баары бир платформада.',
            requestDemo: 'Демо сурануу',
            openPlatform: 'Платформаны ачуу',
            heroStats: [
                { v: '10+', l: 'Модулдар' },
                { v: '5', l: 'Ролдор' },
                { v: '24/7', l: 'AI-жардамчы' },
            ],
            phoneDashboard: 'Башкаруу панели',
            phoneAppointments: 'Жазуулар',
            phonePatients: 'Бейтаптар',
            phoneUpcoming: 'Жакынкылар',
            phoneNav: ['Расписание', 'Бейтаптар', 'Чат', 'Дагы'],
            phoneItems: [
                { time: '09:00', name: 'Анна К.', service: 'Консультация', color: 'bg-pink-500/20 text-pink-400' },
                { time: '09:30', name: 'Марат С.', service: 'Тиш тазалоо', color: 'bg-cyan-500/20 text-cyan-400' },
                { time: '10:00', name: 'Елена В.', service: 'Текшерүү', color: 'bg-pink-500/20 text-pink-400' },
                { time: '10:45', name: 'Тимур Б.', service: 'Рентген', color: 'bg-cyan-500/20 text-cyan-400' },
            ],
            floatingAnalytics: 'Аналитика',
            floatingAnalyticsValue: '+23% бул жумада',
            floatingToday: 'Бүгүн',
            floatingTodayValue: '0 келбегендер',
            stats: [
                { value: '10+', label: 'Модулдар', detail: 'Жазуудан кампага чейин' },
                { value: '5', label: 'Ролдор', detail: 'Ийкемдүү мүмкүнчүлүк башкаруу' },
                { value: '99.9%', label: 'Аптайм', detail: 'SLA кепилдиги' },
                { value: '256-бит', label: 'Шифрлөө', detail: 'Маалымат коргоо' },
            ],
            modulesBadge: 'Платформа',
            modulesTitle: 'Клиникаңызга керектүүнүн баары',
            modulesDescription: '10+ интеграцияланган модулдар — жазуудан баштап кампа башкаруу жана AI-аналитикага чейин.',
            modules: [
                { title: 'Акылдуу расписание', description: 'Жазууларды сүйрөп коюу менен календарь, убакыт слоттору, дарыгерлердин жеткиликтүүлүгү жана конфликттерди алдын алуу.' },
                { title: 'Бейтап карталары', description: 'Ооруулар тарыхы, диагноздор, дарылоо пландары, визит документациясы жана тиркемелер менен толук профилдер.' },
                { title: 'AI-аналитика', description: 'Кирешени көзөмөлдөө, жазуу тренддери, дарыгерлердин натыйжалуулугу, пик сааттар анализи жана болжолдоо аналитикасы.' },
                { title: 'Мульти-клиника', description: 'Бир панелден бир нече филиалдарды башкаруу. Борбордоштурулган отчёттуулук, жалпы бейтап базасы жана бөлүмдөр түзүмү.' },
                { title: 'WhatsApp жана чат', description: 'WhatsApp аркылуу бейтаптар менен интеграцияланган билдирүү алмашуу. AI-бот жазууларды, эскертүүлөрдү жана суроолорго жоопторду автоматтык түрдө иштетет.' },
                { title: 'Кампа жана инвентарь', description: 'Материалдарды эсепке алуу, жеткирүүчүлөрдү башкаруу, калдыктарды көзөмөлдөө, эсеп коюу, эсептен чыгаруу жана процедуралардын наркын анализдөө.' },
            ],
            rolesTitle: 'Ролдук мүмкүнчүлүк',
            rolesDescription: 'Ар бир кызматкер өзүнө керектүү нерсени гана көрөт. Ар бир рол үчүн ийкемдүү укуктар.',
            roles: [
                { name: 'Супер Админ', description: 'Бардык клиникаларга толук мүмкүнчүлүк' },
                { name: 'Админ', description: 'Клиника деңгээлинде башкаруу жана тууралоо' },
                { name: 'Дарыгер', description: 'Расписание, бейтап карталары, медициналык жазуулар' },
                { name: 'Регистратор', description: 'Жазуу, каттоо, төлөмдөр' },
                { name: 'Менеджер', description: 'Аналитика, отчёттор, финансылык көзөмөл' },
            ],
            stepsTitle: '4 кадам менен баштаңыз',
            steps: [
                { number: '01', title: 'Клиника профилин тууралаңыз', description: 'Бөлүмдөрдү, кызматтарды, дарыгерлерди жана иш сааттарын конфигурациялаңыз' },
                { number: '02', title: 'Команданы туташтырыңыз', description: 'Кызматкерлерди ролдук мүмкүнчүлүк менен чакырыңыз — админдерден регистраторлорго чейин' },
                { number: '03', title: 'Жазууну баштаңыз', description: 'Бейтаптар онлайн же WhatsApp аркылуу жазылат. AI эскертүүлөрдү жана тастыктоолорду жөнөтөт' },
                { number: '04', title: 'Анализдеңиз жана жакшыртыңыз', description: 'Кирешени, келбегендерди, дарыгерлердин жүктөмүн көзөмөлдөңүз — AI жакшыртууларды сунуштайт' },
            ],
            securityTitle: 'Корпоративдик деңгээлдеги коопсуздук',
            securityDescription: 'Бейтаптардын маалыматтарын коргоо — биздин приоритет. Ар бир катмар корголгон.',
            securityItems: [
                { title: 'Маалымат коргоо', desc: 'Медициналык маалыматтарды жөнгө салуу талаптарына толук шайкештик. Бейтап жазуулары сактоодо жана өткөрүүдө шифрленген.' },
                { title: '256-бит шифрлөө', desc: 'Бардык купуя маалыматтар үчүн AES-256 шифрлөө. Ар бир API-суроо жана маалымат өткөрүү үчүн TLS 1.3.' },
                { title: '99.9% жеткиликтүүлүк', desc: 'Автоматтык которуштуруу менен мульти-региондук инфраструктура. Маанилүү операциялар үчүн SLA кепилдиги.' },
            ],
            ctaTitle: 'Клиникаңызды заманбапташтырууга даярсызбы?',
            ctaSubtitle: 'Акысыз демонстрация жана 14 күндүк сыноо — милдеттенмесиз.',
            ctaButton: 'Демо сурануу',
        },
    }

    return content[locale as keyof typeof content] || content.en
}

/* ──────────── STYLE CONSTANTS ──────────── */

const accentClasses = {
    pink: {
        iconBg: 'bg-pink-500/[0.08]',
        iconText: 'text-pink-400',
        border: 'hover:border-pink-400/20',
        gradient: 'from-pink-400 to-rose-400',
    },
    cyan: {
        iconBg: 'bg-cyan-500/[0.08]',
        iconText: 'text-cyan-400',
        border: 'hover:border-cyan-400/20',
        gradient: 'from-cyan-400 to-sky-400',
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

const securityIcons = ['🛡', '🔐', '⚡']

/* ──────────── PAGE ──────────── */

export default function EvoClinicPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    const scrollToContact = () => {
        const el = document.getElementById('evoclinic-contact')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground accent="purple" />
            <ModernHeader />

            {/* ── Hero ── */}
            <section className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-gradient-to-br from-pink-500/12 via-transparent to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-13 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/8 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 text-sm font-semibold text-pink-400 mb-6"
                            >
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                {content.heroBadge}
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
                            >
                                {content.heroTitle1}{' '}
                                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                    {content.heroTitleHighlight}
                                </span>{' '}
                                {content.heroTitle2}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg sm:text-xl text-white/65 mb-8 leading-relaxed"
                            >
                                {content.heroDescription}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-4"
                            >
                                <button
                                    onClick={scrollToContact}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-xl text-black font-bold text-lg transition-all hover:shadow-lg hover:shadow-pink-500/25 hover:-translate-y-1"
                                >
                                    {content.requestDemo}
                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                                <Link
                                    href="https://clinic.evogroup.ai"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/10 rounded-xl text-white font-semibold text-lg transition-all hover:bg-pink-500/10 hover:border-pink-500/30 no-underline"
                                >
                                    {content.openPlatform}
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-8 sm:gap-12 mt-12 pt-8 border-t border-white/10"
                            >
                                {content.heroStats.map((s, i) => (
                                    <div key={i}>
                                        <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                            {s.v}
                                        </div>
                                        <div className="text-sm text-white/50 mt-1">{s.l}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Phone Mockup */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative flex justify-center items-center"
                        >
                            <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-[#1a1a24] rounded-[40px] border-[3px] border-white/10 shadow-2xl shadow-black/50 overflow-hidden animate-float">
                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-black rounded-full z-10" />
                                <div className="absolute inset-0 pt-14 px-4 pb-4 bg-gradient-to-b from-[#1a1a24] to-[#0f0f15]">
                                    {/* App Header */}
                                    <div className="text-center mb-5">
                                        <div className="text-xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                            EvoClinic
                                        </div>
                                        <div className="text-xs text-white/50 mt-1">{content.phoneDashboard}</div>
                                    </div>

                                    {/* Today stats */}
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <div className="p-3 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                                            <div className="text-lg font-bold text-pink-400">12</div>
                                            <div className="text-[10px] text-white/40">{content.phoneAppointments}</div>
                                        </div>
                                        <div className="p-3 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                                            <div className="text-lg font-bold text-cyan-400">8</div>
                                            <div className="text-[10px] text-white/40">{content.phonePatients}</div>
                                        </div>
                                    </div>

                                    {/* Upcoming */}
                                    <div className="text-[10px] text-white/35 uppercase tracking-wider mb-2">{content.phoneUpcoming}</div>
                                    <div className="space-y-2">
                                        {content.phoneItems.map((apt, i) => (
                                            <div key={i} className="flex items-center gap-3 p-2.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                                                <div className={`px-2 py-1 rounded-md text-[10px] font-bold ${apt.color}`}>{apt.time}</div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-xs font-semibold text-white truncate">{apt.name}</div>
                                                    <div className="text-[10px] text-white/40 truncate">{apt.service}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom nav */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-around p-2 bg-white/[0.04] rounded-2xl border border-white/[0.06]">
                                        {content.phoneNav.map((label, i) => (
                                            <div key={i} className={`text-[9px] font-medium ${i === 0 ? 'text-pink-400' : 'text-white/35'}`}>
                                                {label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="absolute top-[10%] -right-4 sm:right-0 lg:-right-8 bg-[#1a1a24] border border-white/10 rounded-xl p-4 shadow-xl hidden sm:block"
                                style={{ animation: 'float 5s ease-in-out infinite' }}
                            >
                                <div className="w-9 h-9 bg-pink-500/15 rounded-lg flex items-center justify-center mb-2 text-pink-400">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                </div>
                                <div className="text-xs text-white/50">{content.floatingAnalytics}</div>
                                <div className="text-sm font-bold text-white">{content.floatingAnalyticsValue}</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 }}
                                className="absolute bottom-[20%] -left-8 sm:left-0 lg:-left-12 bg-[#1a1a24] border border-white/10 rounded-xl p-4 shadow-xl hidden sm:block"
                                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '-2s' }}
                            >
                                <div className="w-9 h-9 bg-cyan-500/15 rounded-lg flex items-center justify-center mb-2 text-cyan-400">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <div className="text-xs text-white/50">{content.floatingToday}</div>
                                <div className="text-sm font-bold text-white">{content.floatingTodayValue}</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Stats ── */}
            <section className="pb-20">
                <div className="max-w-5xl mx-auto px-6">
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

            {/* ── Modules ── */}
            <section className="py-24 border-t border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
                            <span className="text-xs text-white/55 uppercase tracking-widest font-medium">{content.modulesBadge}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">{content.modulesTitle}</h2>
                        <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
                            {content.modulesDescription}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {content.modules.map((m, i) => {
                            const a = accentClasses[moduleAccents[i]]
                            return (
                                <motion.div
                                    key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                    className={`group p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] ${a.border} transition-all duration-300`}
                                >
                                    <div className={`w-11 h-11 rounded-lg ${a.iconBg} border border-white/[0.06] flex items-center justify-center ${a.iconText} mb-5 group-hover:scale-105 transition-transform duration-300`}>
                                        {moduleIcons[i]}
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                                    <p className="text-sm text-white/45 leading-relaxed">{m.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── User Roles ── */}
            <section className="py-24 border-t border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">{content.rolesTitle}</h2>
                        <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
                            {content.rolesDescription}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content.roles.map((r, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="flex items-start gap-4 p-5 rounded-xl border border-white/[0.07] bg-white/[0.02]"
                            >
                                <span className={`text-2xl font-black leading-none select-none ${roleColors[i]} opacity-20`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className={`text-sm font-bold ${roleColors[i]} mb-0.5`}>{r.name}</h3>
                                    <p className="text-xs text-white/40 leading-relaxed">{r.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How it Works ── */}
            <section className="py-24 border-t border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">{content.stepsTitle}</h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {content.steps.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
                            >
                                <span className="text-3xl font-black text-white/[0.07] block mb-3">{s.number}</span>
                                <h3 className="text-sm font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-xs text-white/40 leading-relaxed">{s.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Security ── */}
            <section className="py-24 border-t border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">{content.securityTitle}</h2>
                        <p className="text-base text-white/50 max-w-lg mx-auto leading-relaxed">
                            {content.securityDescription}
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-4">
                        {content.securityItems.map((item, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] text-center"
                            >
                                <div className="text-3xl mb-4">{securityIcons[i]}</div>
                                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section id="evoclinic-contact" className="py-16 border-t border-white/[0.04]">
                <div className="max-w-5xl mx-auto px-6">
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

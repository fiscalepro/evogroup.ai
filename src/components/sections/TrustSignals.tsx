'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { motion, AnimatePresence } from 'framer-motion'

const Icons: Record<string, React.ReactNode> = {
    bank: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
    ),
    oil: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
    ),
    gov: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    ),
    telecom: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
    ),
    horeca: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72" />
        </svg>
    ),
    medicine: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    home: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    retail: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
    ),
    beauty: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
    ),
    food: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
        </svg>
    ),
    tourism: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    ),
    ecommerce: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    ),
    services: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658 3.286a.75.75 0 01-1.012-.317l-.099-.177a.75.75 0 01.237-.97l5.658-3.286m0 0l-1.06-1.768m1.06 1.768l5.658 3.286m-5.658-3.286l1.06-1.768m-1.06 1.768L12 21m0-6.83l5.658-3.286a.75.75 0 01.97.237l.099.177a.75.75 0 01-.237.97l-5.658 3.286m0 0L12 21m0 0l-1.06-1.768M12 21l1.06-1.768m0 0l5.658-3.286" />
        </svg>
    ),
    clinic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
    ),
    floristry: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
    ),
}

const ChevronIcon = ({ open }: { open: boolean }) => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-white/40"
    >
        <polyline points="6 9 12 15 18 9" />
    </motion.svg>
)

const TrustSignals: React.FC = () => {
    const { locale } = useTranslation()
    const [smbOpen, setSmbOpen] = useState(false)

    const getContent = () => {
        if (locale === 'en') {
            return {
                title: 'OUR KEY PARTNERS',
                partners: [
                    { icon: 'bank', name: 'Bakai Bank', sub: 'Universal Cabinet platform — 16 microservices' },
                    { icon: 'oil', name: 'Bishkek Petroleum', sub: '70+ gas stations, 10 oil depots' },
                    { icon: 'horeca', name: 'HoReCa', sub: 'EvoResto, SmartStay, restaurant mgmt' },
                    { icon: 'medicine', name: 'EvoClinic', sub: 'Clinic management + WhatsApp' },
                ],
                smb: {
                    icon: 'home',
                    name: 'SMB',
                    sub: 'Small & medium business',
                    categories: [
                        { icon: 'retail', name: 'Retail' },
                        { icon: 'beauty', name: 'Beauty & Care' },
                        { icon: 'food', name: 'Cafes & Restaurants' },
                        { icon: 'tourism', name: 'Tourism' },
                        { icon: 'ecommerce', name: 'Online Stores' },
                        { icon: 'services', name: 'Services' },
                        { icon: 'clinic', name: 'Clinics' },
                        { icon: 'floristry', name: 'Floristry' },
                    ],
                },
            }
        } else if (locale === 'ky') {
            return {
                title: 'БИЗДИН НЕГИЗГИ ӨНӨКТӨШТӨР',
                partners: [
                    { icon: 'bank', name: 'Бакай Банк', sub: 'Универсалдуу Кабинет платформасы — 16 микросервис' },
                    { icon: 'oil', name: 'Бишкек Петролеум', sub: '70+ АЗС, 10 мунай базасы' },
                    { icon: 'horeca', name: 'HoReCa', sub: 'EvoResto, SmartStay, ресторан башкаруу' },
                    { icon: 'medicine', name: 'EvoClinic', sub: 'Клиника башкаруу + WhatsApp' },
                ],
                smb: {
                    icon: 'home',
                    name: 'МСБ',
                    sub: 'Чакан жана орто бизнес',
                    categories: [
                        { icon: 'retail', name: 'Чекене соода' },
                        { icon: 'beauty', name: 'Сулуулук жана кам көрүү' },
                        { icon: 'food', name: 'Тамактануу жана кафе' },
                        { icon: 'tourism', name: 'Туризм' },
                        { icon: 'ecommerce', name: 'Интернет-дүкөндөр' },
                        { icon: 'services', name: 'Кызматтар' },
                        { icon: 'clinic', name: 'Клиникалар' },
                        { icon: 'floristry', name: 'Гүлчүлүк' },
                    ],
                },
            }
        }
        return {
            title: 'НАШИ КЛЮЧЕВЫЕ ПАРТНЁРЫ',
            partners: [
                { icon: 'bank', name: 'Бакай Банк', sub: 'Платформа Универсальный Кабинет — 16 микросервисов' },
                { icon: 'oil', name: 'Бишкек Петролеум', sub: '70+ АЗС, 10 нефтебаз' },
                { icon: 'horeca', name: 'HoReCa', sub: 'EvoResto, SmartStay, управление ресторанами' },
                { icon: 'medicine', name: 'EvoClinic', sub: 'Управление клиникой + WhatsApp' },
            ],
            smb: {
                icon: 'home',
                name: 'МСБ',
                sub: 'Малый и средний бизнес',
                categories: [
                    { icon: 'retail', name: 'Розничная торговля' },
                    { icon: 'beauty', name: 'Красота и уход' },
                    { icon: 'food', name: 'Общепит и кафе' },
                    { icon: 'tourism', name: 'Туризм' },
                    { icon: 'ecommerce', name: 'Интернет-магазины' },
                    { icon: 'services', name: 'Услуги и сервис' },
                    { icon: 'clinic', name: 'Медицина / клиники' },
                    { icon: 'floristry', name: 'Флористика' },
                ],
            },
        }
    }

    const content = getContent()

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        }),
    }

    return (
        <section id="trust" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-xs text-white/40 uppercase tracking-[0.25em] font-medium mb-10"
                >
                    {content.title}
                </motion.p>

                {/* 2x2 Partner Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {content.partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                        >
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 text-white/50 group-hover:text-white/70 group-hover:bg-white/[0.1] transition-all duration-300 p-2.5">
                                {Icons[partner.icon]}
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">{partner.name}</h3>
                            <p className="text-xs text-white/40">{partner.sub}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Expandable SMB Card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="rounded-2xl bg-white/[0.03] border border-white/[0.07] overflow-hidden transition-colors duration-300"
                >
                    {/* SMB Header — always visible, clickable */}
                    <button
                        onClick={() => setSmbOpen(!smbOpen)}
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors duration-200"
                    >
                        <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 p-2.5 flex-shrink-0">
                            {Icons[content.smb.icon]}
                        </div>
                        <div className="flex-grow min-w-0">
                            <h3 className="text-sm sm:text-base font-bold text-white">{content.smb.name}</h3>
                            <p className="text-xs text-white/40">{content.smb.sub}</p>
                        </div>
                        <ChevronIcon open={smbOpen} />
                    </button>

                    {/* Expandable sub-categories */}
                    <AnimatePresence initial={false}>
                        {smbOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                                    <div className="grid grid-cols-2 gap-3">
                                        {content.smb.categories.map((cat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: i * 0.04 }}
                                                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors duration-200"
                                            >
                                                <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/45 p-1.5 flex-shrink-0">
                                                    {Icons[cat.icon]}
                                                </div>
                                                <span className="text-xs sm:text-sm text-white/65 font-medium leading-tight">{cat.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    )
}

export default TrustSignals

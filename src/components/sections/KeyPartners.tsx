'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

// Иконки для Business OS тегов
const TagIcons: React.ReactNode[] = [
    // Розничная торговля — сумка
    <svg key="0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <path d="M5 7h10l-1 9H6L5 7zm2-2a3 3 0 016 0v2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Красота и уход — сердце
    <svg key="1" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M10 17s-6-3.5-6-8a3.5 3.5 0 016-2.5A3.5 3.5 0 0116 9c0 4.5-6 8-6 8z" />
    </svg>,
    // Общепит и кафе — storefront
    <svg key="2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <path d="M3 7l1-3h12l1 3M3 7v9h14V7M3 7h14M8 12h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Туризм — pin
    <svg key="3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <path d="M10 18s6-5.5 6-10a6 6 0 10-12 0c0 4.5 6 10 6 10z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="8" r="2" />
    </svg>,
    // Интернет-магазины — монитор
    <svg key="4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <rect x="2" y="4" width="16" height="11" rx="1.5" strokeLinecap="round" />
        <path d="M7 18h6M10 15v3" strokeLinecap="round" />
    </svg>,
    // Услуги и сервис — стрелка
    <svg key="5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <path d="M3 11l7-7 7 7-7 7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Медицина — список
    <svg key="6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-3.5 h-3.5">
        <rect x="4" y="3" width="12" height="14" rx="1.5" strokeLinecap="round" />
        <path d="M7 7h6M7 10h6M7 13h4" strokeLinecap="round" />
    </svg>,
    // Флористика — алмаз/sparkle
    <svg key="7" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M10 2l1.5 4 4.5 1-3.5 3 1 5-3.5-2-3.5 2 1-5L4 7l4.5-1L10 2z" />
    </svg>,
]

// SVG-карточка целиком из Figma — текст и иллюстрация в одном файле
interface CardProps {
    name: string
    description: string
    svgPath?: string // если указано — рендерится SVG-карточка целиком (без моих h3/p)
    illustration?: React.ReactNode
    className?: string
    children?: React.ReactNode
}

const PartnerCard: React.FC<CardProps> = ({
    name,
    description,
    svgPath,
    illustration,
    className = '',
    children,
}) => {
    // Режим 1: SVG из Figma уже содержит весь дизайн карточки (пропорции 600×340)
    if (svgPath) {
        return (
            <div
                className={`relative overflow-hidden rounded-3xl bg-white border border-[#E5E8EF] transition-shadow duration-300 hover:shadow-xl ${className}`}
                style={{ aspectRatio: '600 / 410' }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={svgPath}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-contain select-none"
                />
            </div>
        )
    }

    // Режим 2: HTML-карточка с моим заголовком/описанием (для Business OS и Clinic OS)
    return (
        <div
            className={`relative overflow-hidden rounded-3xl bg-white border border-[#E5E8EF] p-6 sm:p-7 lg:p-8 transition-shadow duration-300 hover:shadow-xl ${className}`}
        >
            <h3
                className="font-display font-bold bg-clip-text text-transparent mb-2"
                style={{
                    fontSize: 'clamp(20px, 2vw, 32px)',
                    lineHeight: 1.1,
                    backgroundImage:
                        'linear-gradient(90deg, #2769E6 0%, #6b4fb5 50%, #E10A4D 100%)',
                }}
                suppressHydrationWarning
            >
                {name}
            </h3>
            <p
                className="text-[#1B2951] mb-6 leading-snug max-w-[60%]"
                style={{ fontSize: 'clamp(13px, 1vw, 16px)' }}
                suppressHydrationWarning
            >
                {description}
            </p>

            {illustration && (
                <div className="absolute right-0 bottom-0 pointer-events-none select-none">
                    {illustration}
                </div>
            )}

            {children}
        </div>
    )
}

const KeyPartners: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('keyPartners')
    const cards = t.cards

    return (
        <section className="relative bg-[#EDF0F5] py-16 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1500px] mx-auto">
                <h2
                    className="font-display font-bold text-center text-[#00163F] mb-10 md:mb-14 lg:mb-16"
                    style={{
                        fontSize: 'clamp(24px, 3vw, 44px)',
                        lineHeight: 1.15,
                    }}
                    suppressHydrationWarning
                >
                    {t.title}
                </h2>

                {/* Grid: 3 колонки на десктопе, Business OS — rowspan 2 справа */}
                <div className="grid gap-4 md:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
                    {/* Fin Tech — целиком SVG из Figma */}
                    <PartnerCard
                        name={cards.finTech.name}
                        description={cards.finTech.description}
                        svgPath="/cards/fintech.svg"
                        className=""
                    />

                    {/* Energy OS — целиком SVG из Figma */}
                    <PartnerCard
                        name={cards.energyOS.name}
                        description={cards.energyOS.description}
                        svgPath="/cards/energy.svg"
                        className=""
                    />

                    {/* Business OS — справа, rowspan 2, карта мира на фоне */}
                    <div className="lg:row-span-2 relative overflow-hidden rounded-3xl bg-white border border-[#E5E8EF] p-6 sm:p-7 lg:p-8 transition-shadow duration-300 hover:shadow-xl flex flex-col h-full min-h-[260px]">
                        {/* Карта мира — большая, во всю верхнюю часть */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/businessos-map.svg"
                            alt=""
                            aria-hidden
                            className="absolute right-0 top-0 w-[85%] h-auto pointer-events-none select-none opacity-90"
                        />

                        <h3
                            className="font-display font-bold bg-clip-text text-transparent mb-2 relative z-10"
                            style={{
                                fontSize: 'clamp(20px, 2vw, 32px)',
                                lineHeight: 1.1,
                                backgroundImage:
                                    'linear-gradient(90deg, #0D2883 0%, #98125B 100%)',
                            }}
                            suppressHydrationWarning
                        >
                            {cards.businessOS.name}
                        </h3>
                        <p
                            className="text-[#1B2951] mb-6 leading-snug max-w-[60%] relative z-10"
                            style={{ fontSize: 'clamp(13px, 1vw, 16px)' }}
                            suppressHydrationWarning
                        >
                            {cards.businessOS.description}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mt-auto pt-4 max-w-md relative z-10">
                            {(cards.businessOS.tags as string[]).map((tag, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-[#E5E8EF] bg-white text-[#1B2951]"
                                    style={{ fontSize: 'clamp(11px, 0.85vw, 13px)' }}
                                    suppressHydrationWarning
                                >
                                    <span
                                        className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-white"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, #2769E6 0%, #E10A4D 100%)',
                                        }}
                                    >
                                        {TagIcons[i] ?? null}
                                    </span>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* HoreCA — HTML с настоящими SVG иллюстрациями метрик */}
                    <div
                        className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E8EF] p-6 sm:p-7 lg:p-8 transition-shadow duration-300 hover:shadow-xl"
                        style={{ aspectRatio: '600 / 410' }}
                    >
                        <h3
                            className="font-display font-bold bg-clip-text text-transparent mb-2 relative z-10"
                            style={{
                                fontSize: 'clamp(20px, 2vw, 32px)',
                                lineHeight: 1.1,
                                backgroundImage:
                                    'linear-gradient(90deg, #0D2883 0%, #98125B 100%)',
                            }}
                            suppressHydrationWarning
                        >
                            {cards.horeca.name}
                        </h3>
                        <p
                            className="text-[#1B2951] leading-snug max-w-[42%] relative z-10"
                            style={{ fontSize: 'clamp(13px, 1vw, 16px)' }}
                            suppressHydrationWarning
                        >
                            {cards.horeca.description}
                        </p>

                        {/* Иконка ресторана внизу слева */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/horeca-icon.svg"
                            alt=""
                            aria-hidden
                            className="absolute left-6 sm:left-7 lg:left-8 bottom-6 sm:bottom-7 lg:bottom-8 w-[18%] h-auto pointer-events-none select-none"
                        />

                        {/* Метрики справа, диагонально, наложены друг на друга */}
                        {/* "5 мин" — верхняя справа */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/horeca-img3.svg"
                            alt=""
                            aria-hidden
                            className="absolute right-[3%] top-[18%] w-[42%] h-auto pointer-events-none select-none drop-shadow-xl"
                        />
                        {/* "32,1 тыс" — средняя слева, перекрывает */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/horeca-img1.svg"
                            alt=""
                            aria-hidden
                            className="absolute left-[30%] top-[44%] w-[42%] h-auto pointer-events-none select-none drop-shadow-xl"
                        />
                        {/* "83%" — нижняя справа */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/horeca-img2.svg"
                            alt=""
                            aria-hidden
                            className="absolute right-[3%] bottom-[8%] w-[38%] h-auto pointer-events-none select-none drop-shadow-xl"
                        />
                    </div>

                    {/* Clinic OS — HTML с настоящими SVG иллюстрациями */}
                    <div
                        className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E8EF] p-6 sm:p-7 lg:p-8 transition-shadow duration-300 hover:shadow-xl"
                        style={{ aspectRatio: '600 / 410' }}
                    >
                        <h3
                            className="font-display font-bold bg-clip-text text-transparent mb-2 relative z-10"
                            style={{
                                fontSize: 'clamp(20px, 2vw, 32px)',
                                lineHeight: 1.1,
                                backgroundImage:
                                    'linear-gradient(90deg, #0D2883 0%, #98125B 100%)',
                            }}
                            suppressHydrationWarning
                        >
                            {cards.clinicOS.name}
                        </h3>
                        <p
                            className="text-[#1B2951] leading-snug max-w-[42%] relative z-10"
                            style={{ fontSize: 'clamp(13px, 1vw, 16px)' }}
                            suppressHydrationWarning
                        >
                            {cards.clinicOS.description}
                        </p>

                        {/* Иконка медицинского креста внизу слева */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/clinic-icon.svg"
                            alt=""
                            aria-hidden
                            className="absolute left-6 sm:left-7 lg:left-8 bottom-6 sm:bottom-7 lg:bottom-8 w-[15%] h-auto pointer-events-none select-none"
                        />

                        {/* WhatsApp плашка — ближе к центру */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/clinic-img2.svg"
                            alt=""
                            aria-hidden
                            className="absolute right-[8%] top-[28%] w-[45%] h-auto pointer-events-none select-none drop-shadow-xl"
                        />

                        {/* Чекбоксы — ниже WhatsApp, частично перекрывает */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/cards/clinic-img1.svg"
                            alt=""
                            aria-hidden
                            className="absolute right-[3%] bottom-[14%] w-[60%] h-auto pointer-events-none select-none drop-shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyPartners

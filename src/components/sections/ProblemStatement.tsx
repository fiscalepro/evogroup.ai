'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

// Координаты/размеры взяты 1:1 из Figma (figma-cache.yaml).
// Десктоп 1920px = 1:1 с макетом. Мобильную адаптацию делаем отдельной задачей.

type CardMeta = {
    solution: string
    href: string
    img: string
    // отступ контента от верха карточки
    contentTop: number
    // ширина текстового контейнера (заголовок + описание)
    contentWidth: number
    // ширина описания (если отличается)
    descriptionWidth?: number
}

const SMALL_CARDS: CardMeta[] = [
    {
        solution: 'EvoAI CRM',
        href: '/solutions/whatsapp',
        img: '/cards-problems/card1.png',
        contentTop: 60,
        contentWidth: 294,
    },
    {
        solution: 'EvoPay',
        href: '/solutions/evopay',
        img: '/cards-problems/card2.png',
        contentTop: 60,
        contentWidth: 294,
    },
    {
        solution: 'EvoClinic',
        href: '/solutions/evoclinic',
        img: '/cards-problems/card3.png',
        contentTop: 60,
        contentWidth: 294,
    },
]

const LARGE_CARDS: CardMeta[] = [
    {
        solution: 'EDO',
        href: '/solutions/edo',
        img: '/cards-problems/card4.png',
        contentTop: 60,
        contentWidth: 350,
    },
    {
        solution: 'CCE Platform',
        href: '/solutions/cce',
        img: '/cards-problems/card5.png',
        contentTop: 70,
        contentWidth: 350,
        descriptionWidth: 388,
    },
]

const ArrowRight: React.FC = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        style={{ flexShrink: 0 }}
    >
        <path
            d="M4 12h16M14 6l6 6-6 6"
            stroke="#5E96FF"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

interface ProblemCardProps {
    width: number
    title: string
    description: string
    solveText: string
    href: string
    img: string
    contentTop: number
    contentWidth: number
    descriptionWidth?: number
}

const ProblemCard: React.FC<ProblemCardProps> = ({
    width,
    title,
    description,
    solveText,
    href,
    img,
    contentTop,
    contentWidth,
    descriptionWidth,
}) => {
    const contentLeft = width === 600 ? 30 : 40
    return (
        <div
            style={{
                position: 'relative',
                width,
                height: 349,
                borderRadius: 20,
                overflow: 'hidden',
                backgroundImage: `url(${img})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    left: contentLeft,
                    top: contentTop,
                    width: contentWidth,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 24,
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <h3
                        style={{
                            margin: 0,
                            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                            fontWeight: 700,
                            fontSize: 24,
                            lineHeight: '28px',
                            color: '#FFFFFF',
                            whiteSpace: 'pre-line',
                            letterSpacing: 0,
                        }}
                        suppressHydrationWarning
                    >
                        {title}
                    </h3>
                    <p
                        style={{
                            margin: 0,
                            width: descriptionWidth,
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: '22.75px',
                            color: '#FFFFFF',
                        }}
                        suppressHydrationWarning
                    >
                        {description}
                    </p>
                </div>
                <Link
                    href={href}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        textDecoration: 'none',
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: 16,
                        lineHeight: '22.4px',
                        color: '#5E96FF',
                        width: 'fit-content',
                    }}
                >
                    <span suppressHydrationWarning>{solveText}</span>
                    <ArrowRight />
                </Link>
            </div>
        </div>
    )
}

const ProblemStatement: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('problemStatement')

    const renderCardAt = (idx: number, meta: CardMeta, width: number) => (
        <ProblemCard
            key={idx}
            width={width}
            title={t.problems[idx].title}
            description={t.problems[idx].description}
            solveText={t.solveWith.replace('{solution}', meta.solution)}
            href={meta.href}
            img={meta.img}
            contentTop={meta.contentTop}
            contentWidth={meta.contentWidth}
            descriptionWidth={meta.descriptionWidth}
        />
    )

    return (
        <section
            className="relative w-full"
            style={{ background: '#020133', overflow: 'hidden' }}
        >
            {/*
              Figma геометрия (px от верха страницы):
                Тёмный фрейм       y = 2453 (верх секции)
                Заголовок          y = 2569
                Карточки (ряд 1)   y = 2703 → 3052
                Карточки (ряд 2)   y = 3092 → 3441
                Конец секции       y ≈ 3613 (старт «Наши решения»)
            */}
            <div
                style={{
                    width: 1920,
                    margin: '0 auto',
                    position: 'relative',
                    height: 1160, // 2453 → 3613
                }}
            >
                {/* Заголовок: layout_TB61SX x=420, y=(2569-2453)=116, w=1079, h=74 */}
                <h2
                    style={{
                        position: 'absolute',
                        left: 420,
                        top: 116,
                        width: 1079,
                        margin: 0,
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 600,
                        fontSize: 64,
                        lineHeight: '74px',
                        textAlign: 'center',
                        color: '#FFFFFF',
                        letterSpacing: 0,
                    }}
                    suppressHydrationWarning
                >
                    {t.title}
                </h2>

                {/* Контейнер карточек: layout_P1Q063 x=33, y=(2703-2453)=250, w=1851, gap 40 column */}
                <div
                    style={{
                        position: 'absolute',
                        left: 33,
                        top: 250,
                        width: 1851,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 40,
                    }}
                >
                    {/* Ряд 1: 3 малые карточки 600×349, gap 20 */}
                    <div style={{ display: 'flex', gap: 20 }}>
                        {SMALL_CARDS.map((meta, i) => renderCardAt(i, meta, 600))}
                    </div>
                    {/* Ряд 2: 2 крупные карточки 914×349, gap 20 */}
                    <div style={{ display: 'flex', gap: 20 }}>
                        {LARGE_CARDS.map((meta, i) => renderCardAt(i + 3, meta, 914))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProblemStatement

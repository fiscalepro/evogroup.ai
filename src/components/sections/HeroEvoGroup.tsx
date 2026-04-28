'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

const HeroEvoGroup: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('hero')

    return (
        <section
            className="relative isolate overflow-hidden bg-[#010133] text-white w-full max-w-full"
            style={{
                // Пропорции Hero из Figma: 1920×1417 → aspect ratio 1.355
                minHeight: '100vh',
                aspectRatio: '1920 / 1417',
            }}
        >
            {/* Главный размытый блоб (Ellipse 377: x=477, y=688, 986×627, blur 300px) */}
            <div
                className="pointer-events-none absolute opacity-50"
                style={{
                    left: '24.8%', // 477/1920
                    top: '48.5%', // 688/1417
                    width: '51%', // 986/1920
                    aspectRatio: '986 / 627',
                    background:
                        'linear-gradient(138deg, rgba(230,149,213,1) 13%, rgba(95,95,255,1) 100%)',
                    filter: 'blur(220px)',
                    borderRadius: '50%',
                }}
                aria-hidden
            />

            {/* Мягкое свечение сверху */}
            <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-32 w-[80%] h-[400px] opacity-40"
                style={{
                    background:
                        'radial-gradient(ellipse at center, rgba(95,95,255,0.6) 0%, transparent 65%)',
                    filter: 'blur(60px)',
                }}
                aria-hidden
            />

            {/* Колонки слева — оригинал (x=0, y=570, 594×864) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/hero-colonki.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-0 select-none"
                style={{
                    top: '40.2%',
                    width: '31%',
                    height: '61%',
                }}
            />

            {/* Колонки справа — зеркало */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/hero-colonki.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute right-0 select-none"
                style={{
                    top: '40.2%',
                    width: '31%',
                    height: '61%',
                    transform: 'scaleX(-1)',
                }}
            />

            {/* Белая платформа-пьедестал под ракетой (трапеция) */}
            <div
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0"
                style={{
                    width: '50%',
                    height: '7%',
                    background: '#EDF0F5',
                    clipPath: 'polygon(18% 0, 82% 0, 100% 100%, 0% 100%)',
                    zIndex: 1,
                }}
                aria-hidden
            />

            {/* Ракета (Plane: x=498, y=592, 1115×961) — поверх колонок и платформы */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/hero-rocket.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute select-none"
                style={{
                    left: '25.9%',
                    top: '41.8%',
                    width: '58.1%',
                    height: 'auto',
                    zIndex: 2,
                }}
            />

            {/* Контент Hero (поверх декораций) — в верхней части Hero как в макете */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-12 sm:pt-28 lg:pt-32 text-center">
                <h1
                    className="font-display tracking-tight mb-4 md:mb-5 motion-safe:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{
                        fontSize: 'clamp(24px, 3vw, 44px)',
                        lineHeight: 1.15,
                        textWrap: 'balance' as React.CSSProperties['textWrap'],
                    }}
                >
                    <span className="font-semibold text-white block" suppressHydrationWarning style={{ fontSize: 'inherit' }}>
                        {t.titleLine1}
                    </span>
                    <span
                        className="font-bold inline-block bg-clip-text text-transparent mt-1"
                        style={{
                            fontSize: 'inherit',
                            backgroundImage:
                                'linear-gradient(90deg, #2769E6 0%, #E10A4D 100%)',
                        }}
                        suppressHydrationWarning
                    >
                        {t.titleLine2}
                    </span>
                </h1>

                <p
                    className="text-white/75 max-w-xl mx-auto leading-relaxed mb-7 md:mb-9 motion-safe:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]"
                    style={{
                        fontSize: 'clamp(14px, 1.15vw, 17px)',
                        textWrap: 'balance' as React.CSSProperties['textWrap'],
                    }}
                    suppressHydrationWarning
                >
                    {t.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center motion-safe:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
                    <Link
                        href="/contact"
                        className="hero-btn-primary group relative inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-white font-medium overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-w-[190px]"
                        style={{
                            fontSize: '16px',
                            background:
                                'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
                            boxShadow:
                                '0 10px 30px -10px rgba(225, 10, 77, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset',
                        }}
                        suppressHydrationWarning
                    >
                        <span
                            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                                background:
                                    'linear-gradient(91deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                                transform: 'translateX(-100%)',
                                animation: 'btnShimmer 1.5s ease-in-out infinite',
                            }}
                            aria-hidden
                        />
                        <span className="relative">{t.ctaPrimary}</span>
                    </Link>

                    <Link
                        href="#demo"
                        className="hero-btn-secondary group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-white font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] min-w-[190px]"
                        style={{ fontSize: '16px' }}
                    >
                        <span
                            className="absolute inset-0 rounded-2xl p-[2px] transition-opacity duration-300"
                            style={{
                                background:
                                    'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
                                WebkitMask:
                                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude',
                            }}
                            aria-hidden
                        />
                        <span
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background:
                                    'linear-gradient(91deg, rgba(1,49,140,0.15) 0%, rgba(225,10,77,0.15) 100%)',
                            }}
                            aria-hidden
                        />
                        <span className="relative" suppressHydrationWarning>
                            {t.ctaSecondary}
                        </span>
                        <svg
                            className="relative w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden
                        >
                            <path d="M6 4l10 6-10 6V4z" fill="currentColor" />
                        </svg>
                    </Link>
                </div>

                {/* Stat-карточки */}
                <div className="mt-14 md:mt-20 grid grid-cols-3 gap-3 sm:gap-5 md:gap-7 max-w-4xl mx-auto motion-safe:animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_0.35s_both]">
                    {(t.stats as { value: string; label: string }[]).map((stat, i) => {
                        const isLast = i === 2
                        return (
                            <div
                                key={i}
                                className={
                                    isLast
                                        ? 'flex flex-col items-center justify-center px-4 py-6 sm:py-8'
                                        : 'flex flex-col items-center justify-center px-4 py-6 sm:py-8 rounded-2xl border border-white/15 backdrop-blur-md'
                                }
                                style={
                                    isLast
                                        ? undefined
                                        : {
                                              background:
                                                  'linear-gradient(137deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.02) 100%)',
                                              boxShadow:
                                                  '0 1px 0 rgba(255,255,255,0.08) inset, 0 8px 30px rgba(2,1,51,0.3)',
                                          }
                                }
                            >
                                <div
                                    className="font-display font-bold text-white mb-1.5 leading-none"
                                    style={{ fontSize: 'clamp(22px, 2.4vw, 36px)' }}
                                    suppressHydrationWarning
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-white/75 text-center leading-tight"
                                    style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}
                                    suppressHydrationWarning
                                >
                                    {stat.label}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes btnShimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    )
}

export default HeroEvoGroup

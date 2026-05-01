'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

const FIGMA_W = 1920
const FIGMA_H = 2200

// Gradient/Blue из Figma cache
const CARD_BG = 'linear-gradient(0deg, rgba(16,1,51,1) 0%, rgba(7,70,208,1) 100%)'
// Electric Sky (#81ECFF) для метрик стандартных карточек
const METRIC_COLOR = '#81ECFF'
// Text/Link 2 (#00CFFD) для ссылок и метрики EvoPay
const LINK_COLOR = '#00CFFD'

const ArrowRight: React.FC = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden style={{ flexShrink: 0 }}>
        <path d="M4 12h16M14 6l6 6-6 6" stroke={LINK_COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

// Переиспользуемый блоб-свет внутри карточки
const CardGlow: React.FC<{ left: number; top: number }> = ({ left, top }) => (
    <div
        aria-hidden
        style={{
            position: 'absolute', left, top, width: 676, height: 181,
            background: 'radial-gradient(circle at 50% 50%, rgba(62,224,247,0.22) 0%, transparent 70%)',
            filter: 'blur(30px)', pointerEvents: 'none',
        }}
    />
)

type SolutionItem = {
    title: string
    category: string
    description: string
    metricValue: string
    metricLabel: string
}

const SolutionsPreview: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('solutionsPreview')
    const solutions = (t.solutions ?? []) as SolutionItem[]
    const learnMore = t.learnMore as string

    const [scale, setScale] = React.useState(() =>
        typeof window !== 'undefined' ? Math.min(1, window.innerWidth / FIGMA_W) : 1
    )
    React.useEffect(() => {
        const update = () => setScale(Math.min(1, window.innerWidth / FIGMA_W))
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    // Вспомогательный рендер стандартной карточки 910×619 (абс. позиция внутри секции)
    const renderHalfCard = (
        s: SolutionItem,
        href: string,
        sectionLeft: number,
        sectionTop: number,
        imgSrc: string,
        opts: {
            nameX?: number; nameW?: number
            leftX?: number; leftY?: number
            metricX?: number; metricY?: number
            linkX?: number; linkY?: number
            imgX?: number; imgY?: number; imgW?: number; imgH?: number
            img2Src?: string; img2X?: number; img2Y?: number; img2W?: number; img2H?: number
        } = {}
    ) => {
        const {
            nameX = 305, nameW = 301,
            leftX = 50, leftY = 103,
            metricX = 678, metricY = 110,
            linkX = 714, linkY = 47,
            imgX = 82, imgY = 228, imgW = 750, imgH = 391,
            img2Src, img2X, img2Y, img2W, img2H,
        } = opts
        return (
            <div style={{
                position: 'absolute', left: sectionLeft, top: sectionTop,
                width: 910, height: 619,
                borderRadius: 20, overflow: 'hidden',
                background: CARD_BG,
                border: '1px solid rgba(70,120,255,0.4)',
            }}>
                <CardGlow left={133} top={-91} />

                {/* Название продукта */}
                <span style={{
                    position: 'absolute', left: nameX, top: 20, width: nameW, height: 72,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 600, fontSize: 54, lineHeight: 1, color: '#FFFFFF',
                }} suppressHydrationWarning>{s.title}</span>

                {/* Подробнее */}
                <Link href={href} style={{
                    position: 'absolute', left: linkX, top: linkY,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 20, color: LINK_COLOR, textDecoration: 'none',
                }}>
                    <span suppressHydrationWarning>{learnMore}</span>
                    <ArrowRight />
                </Link>

                {/* Категория + описание */}
                <div style={{ position: 'absolute', left: leftX, top: leftY, width: 420 }}>
                    <p style={{
                        margin: '0 0 14px',
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 700, fontSize: 32, color: '#FFFFFF',
                    }} suppressHydrationWarning>{s.category}</p>
                    <p style={{
                        margin: 0,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 18, lineHeight: '26px',
                        color: 'rgba(255,255,255,0.75)',
                    }} suppressHydrationWarning>{s.description}</p>
                </div>

                {/* Метрика */}
                <div style={{
                    position: 'absolute', left: metricX, top: metricY, width: 182,
                    display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 7,
                }}>
                    <span style={{
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 700, fontSize: 64, lineHeight: '26px',
                        color: METRIC_COLOR, textAlign: 'right',
                    }} suppressHydrationWarning>{s.metricValue}</span>
                    <span style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 16, color: '#FFFFFF', textAlign: 'center',
                    }} suppressHydrationWarning>{s.metricLabel}</span>
                </div>

                {/* Скриншот */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc} alt="" aria-hidden style={{
                    position: 'absolute', left: imgX, top: imgY, width: imgW, height: imgH,
                    objectFit: 'cover', borderRadius: '22px 22px 0 0',
                }} />

                {img2Src && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img2Src} alt="" aria-hidden style={{
                        position: 'absolute', left: img2X, top: img2Y, width: img2W, height: img2H,
                        objectFit: 'cover', borderRadius: '22px 22px 0 0',
                    }} />
                )}
            </div>
        )
    }

    const s = solutions

    return (
        <section
            className="relative w-full"
            style={{ background: '#020133', overflow: 'hidden', height: FIGMA_H * scale }}
        >
            <div style={{
                width: FIGMA_W, height: FIGMA_H,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
            }}>
                {/* ── Заголовок: layout_U2SYMS x=515 y=3613→60 w=927 ── */}
                <h2 style={{
                    position: 'absolute', left: 515, top: 60, width: 927, margin: 0,
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 700, fontSize: 74, lineHeight: '110px',
                    textAlign: 'center', color: '#FFFFFF',
                }} suppressHydrationWarning>{t.title as string}</h2>

                {/* ── Ряд 1: EvoClinic (x=40) + EvoAI CRM (x=970), y=196 ── */}
                {s[0] && renderHalfCard(s[0], '/solutions/evoclinic', 40, 196,
                    '/cards-solutions/evoclinic.png',
                    { nameX: 305, nameW: 301, leftX: 55, leftY: 103, imgX: 82, imgY: 228, imgW: 756, imgH: 391 }
                )}
                {s[1] && renderHalfCard(s[1], '/solutions/whatsapp', 970, 196,
                    '/cards-solutions/evocrm-284ec3.png',
                    { nameX: 304, nameW: 301, leftX: 44, leftY: 108, metricX: 678, metricY: 112, imgX: 74, imgY: 235, imgW: 762, imgH: 384 }
                )}

                {/* ── Ряд 2: EvoPay — полная ширина 1840×619, x=40, y=835 ── */}
                <div style={{
                    position: 'absolute', left: 40, top: 835,
                    width: 1840, height: 619,
                    borderRadius: 20, overflow: 'hidden',
                    background: CARD_BG,
                    border: '1px solid rgba(70,120,255,0.4)',
                }}>
                    <CardGlow left={0} top={-91} />
                    <CardGlow left={1061} top={-91} />

                    {/* Название */}
                    <span style={{
                        position: 'absolute', left: 813, top: 39, width: 215, height: 72,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 600, fontSize: 54, lineHeight: 1, color: '#FFFFFF',
                    }} suppressHydrationWarning>{s[2]?.title ?? 'EvoPay'}</span>

                    {/* Категория */}
                    <p style={{
                        position: 'absolute', left: 80, top: 107, width: 669, margin: 0,
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 700, fontSize: 38, color: '#FFFFFF',
                    }} suppressHydrationWarning>{s[2]?.category}</p>

                    {/* Описание */}
                    <p style={{
                        position: 'absolute', left: 80, top: 178, width: 728, margin: 0,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 18, lineHeight: '26px',
                        color: 'rgba(255,255,255,0.75)',
                    }} suppressHydrationWarning>{s[2]?.description}</p>

                    {/* Подробнее */}
                    <Link href="/solutions/evopay" style={{
                        position: 'absolute', left: 80, top: 224,
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 500, fontSize: 20, color: LINK_COLOR, textDecoration: 'none',
                    }}>
                        <span suppressHydrationWarning>{learnMore}</span>
                        <ArrowRight />
                    </Link>

                    {/* Метрика (style_N1V5OV: 94px!) */}
                    <div style={{ position: 'absolute', left: 80, top: 406, width: 272 }}>
                        <p style={{
                            margin: 0,
                            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                            fontWeight: 700, fontSize: 94, lineHeight: '26px',
                            color: LINK_COLOR,
                        }} suppressHydrationWarning>{s[2]?.metricValue}</p>
                        <p style={{
                            margin: '12px 0 0',
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 400, fontSize: 20, color: '#FFFFFF',
                        }} suppressHydrationWarning>{s[2]?.metricLabel}</p>
                    </div>

                    {/* Скриншот 1 (дашборд) */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cards-solutions/evopay1.png" alt="" aria-hidden style={{
                        position: 'absolute', left: 920, top: 133, width: 795, height: 486,
                        objectFit: 'cover', borderRadius: '22px 22px 0 0',
                    }} />
                    {/* Скриншот 2 (меню-оверлей) */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/cards-solutions/evopay2.png" alt="" aria-hidden style={{
                        position: 'absolute', left: 638, top: 297, width: 532, height: 322,
                        objectFit: 'cover', borderRadius: '22px 22px 0 0',
                    }} />
                </div>

                {/* ── Ряд 3: ЭДО (x=47) + CCE (x=977), y=1474 ── */}
                {s[3] && renderHalfCard(s[3], '/solutions/edo', 47, 1474,
                    '/cards-solutions/edo.png',
                    { nameX: 304, nameW: 301, leftX: 50, leftY: 108, metricX: 678, metricY: 108, imgX: 77, imgY: 233, imgW: 755, imgH: 386 }
                )}
                {s[4] && renderHalfCard(s[4], '/solutions/cce', 977, 1474,
                    '/cards-solutions/cce1.png',
                    {
                        nameX: 277, nameW: 355, leftX: 50, leftY: 108,
                        metricX: 678, metricY: 110,
                        imgX: 55, imgY: 198, imgW: 798, imgH: 421,
                        img2Src: '/cards-solutions/cce2.png',
                        img2X: 50, img2Y: 434, img2W: 164, img2H: 141,
                    }
                )}
            </div>
        </section>
    )
}

export default SolutionsPreview

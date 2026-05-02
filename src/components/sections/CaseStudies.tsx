'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const FIGMA_W = 1920
const FIGMA_H = 2580

const SECTION_DARK_H = 1264
const CARD_BG = '#FFFFFF'
const CARD_RADIUS = 22
const CARD_W = 910
const CARD_H = 622

// tag bg #F6F9FF, tag text #003074
// num gradient 141deg #0F2580→#A90F56
// btn gradient 91deg #01318C→#E10A4D
// metric value #022660, metric label #6F798E
// card title #2A3D65, card desc #647088

type Metric = { value: string; label: string }
type CaseItem = {
    tag: string
    num: string
    company: string
    title: string
    description: string
    metrics: Metric[]
}

const CardGlow: React.FC<{ x: number; y: number; color: string }> = ({ x, y, color }) => (
    <div aria-hidden style={{
        position: 'absolute', left: x, top: y, width: 638, height: 572,
        background: color, filter: 'blur(60px)', opacity: 0.5, pointerEvents: 'none',
    }} />
)

const CaseCard: React.FC<{ item: CaseItem; discussLabel: string }> = ({ item, discussLabel }) => (
    <div style={{
        position: 'relative', width: CARD_W, height: CARD_H,
        background: CARD_BG, borderRadius: CARD_RADIUS,
        overflow: 'hidden', flexShrink: 0,
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
    }}>
        {/* Decorative ellipses */}
        <CardGlow x={-260} y={493} color="radial-gradient(circle, rgba(255,140,182,1) 0%, rgba(216,202,214,0.6) 100%)" />
        <CardGlow x={547} y={-266} color="radial-gradient(circle, rgba(140,144,255,1) 0%, rgba(216,202,214,0.6) 100%)" />

        {/* Industry tag */}
        <div style={{
            position: 'absolute', left: 32, top: 77,
            background: '#F6F9FF', borderRadius: 6,
            padding: '4px 10px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 600, fontSize: 11, letterSpacing: '1.1px',
            textTransform: 'uppercase', color: '#003074',
        }} suppressHydrationWarning>{item.tag}</div>

        {/* Case number */}
        <span style={{
            position: 'absolute', left: 809, top: 30, width: 72,
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 700, fontSize: 64, lineHeight: '63px',
            background: 'linear-gradient(141deg, #0F2580 0%, #A90F56 93%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
        }} suppressHydrationWarning>{item.num}</span>

        {/* Left column: company + button */}
        <div style={{
            position: 'absolute', left: 32, top: 123, width: 377, height: 183,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
            <span style={{
                fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                fontWeight: 700, fontSize: 40, lineHeight: '44px', color: '#111827',
            }} suppressHydrationWarning>{item.company}</span>
            <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 20px', borderRadius: 10,
                background: 'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 500, fontSize: 16, color: '#FFFFFF',
                textDecoration: 'none', width: 'fit-content',
            }} suppressHydrationWarning>
                {discussLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 12h16M14 6l6 6-6 6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>

        {/* Right column: title + description */}
        <div style={{
            position: 'absolute', left: 440, top: 123, width: 440,
            display: 'flex', flexDirection: 'column', gap: 16,
        }}>
            <p style={{
                margin: 0,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600, fontSize: 18, lineHeight: '24px',
                color: '#2A3D65', textAlign: 'right',
            }} suppressHydrationWarning>{item.title}</p>
            <p style={{
                margin: 0,
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 400, fontSize: 14, lineHeight: '22px',
                color: '#647088', textAlign: 'right',
            }} suppressHydrationWarning>{item.description}</p>
        </div>

        {/* Divider */}
        <div style={{
            position: 'absolute', left: 32, top: 360, width: 847, height: 1,
            background: '#E8EBF0',
        }} />

        {/* Metrics row */}
        <div style={{
            position: 'absolute', left: 32, top: 395, width: 847,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
            {item.metrics.map((m, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <span style={{
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 700, fontSize: 56, lineHeight: '36px',
                        color: '#022660',
                    }} suppressHydrationWarning>{m.value}</span>
                    <span style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 14, lineHeight: '20px',
                        color: '#6F798E', textAlign: 'center', maxWidth: 160,
                    }} suppressHydrationWarning>{m.label}</span>
                </div>
            ))}
        </div>
    </div>
)

const CaseStudies: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('caseStudies')
    const cases = (t.cases ?? []) as CaseItem[]
    const title = t.title as string
    const subtitle = t.subtitle as string
    const discussLabel = t.discuss as string

    const [scale, setScale] = React.useState(() =>
        typeof window !== 'undefined' ? Math.min(1, window.innerWidth / FIGMA_W) : 1
    )
    React.useEffect(() => {
        const update = () => setScale(Math.min(1, window.innerWidth / FIGMA_W))
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

    const row1 = cases.slice(0, 2)
    const row2 = cases.slice(2, 4)

    return (
        <section
            className="relative w-full"
            style={{ background: '#EDF0F5', overflow: 'hidden', height: FIGMA_H * scale }}
        >
            <div style={{
                width: FIGMA_W, height: FIGMA_H,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
            }}>
                {/* Dark header area */}
                <div style={{
                    position: 'absolute', left: 0, top: 0, width: 1920, height: SECTION_DARK_H,
                    background: '#010133',
                }} />

                {/* Title area */}
                <div style={{
                    position: 'absolute', left: 505, top: 305, width: 890,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
                }}>
                    <h2 style={{
                        margin: 0, width: '100%',
                        fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                        fontWeight: 700, fontSize: 74, lineHeight: '90px',
                        textAlign: 'center', color: '#FFFFFF',
                    }} suppressHydrationWarning>{title}</h2>
                    <p style={{
                        margin: 0, width: 677,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 18, lineHeight: '28px',
                        textAlign: 'center', color: 'rgba(255,255,255,0.7)',
                    }} suppressHydrationWarning>{subtitle}</p>
                </div>

                {/* ROI decoration (right) */}
                <div style={{
                    position: 'absolute', left: 1442, top: 417, width: 423, height: 568,
                    background: 'radial-gradient(circle at 50% 50%, rgba(194,97,254,0.15) 0%, rgba(255,255,255,0.5) 100%)',
                    borderRadius: 48,
                }} />
                <p style={{
                    position: 'absolute', left: 1550, top: 695,
                    margin: 0, width: 202,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 32, lineHeight: '24px', color: '#FAFAFF',
                }}>средний ROI</p>
                <p style={{
                    position: 'absolute', left: 1486, top: 920,
                    margin: 0, width: 298,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 24, lineHeight: '32px', color: '#FFFFFF',
                }}>В течение 6–18 месяцев</p>

                {/* Stats decoration (left) */}
                <div style={{
                    position: 'absolute', left: 61, top: 417, width: 423, height: 568,
                    background: 'radial-gradient(circle at 50% 50%, rgba(194,97,254,0.15) 0%, rgba(255,255,255,0.5) 100%)',
                    borderRadius: 48,
                }} />
                <p style={{
                    position: 'absolute', left: 95, top: 480,
                    margin: 0,
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 700, fontSize: 99, lineHeight: '88px',
                    background: 'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>50+</p>
                <p style={{
                    position: 'absolute', left: 95, top: 600,
                    margin: 0,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 32, lineHeight: '24px', color: '#FAFAFF',
                }}>клиентов</p>
                <p style={{
                    position: 'absolute', left: 95, top: 650,
                    margin: 0,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 24, lineHeight: '32px', color: 'rgba(255,255,255,0.7)',
                }}>Активных внедрений</p>

                {/* Cards row 1 */}
                <div style={{
                    position: 'absolute', left: 38, top: 1264,
                    display: 'flex', gap: 20,
                }}>
                    {row1.map((item, i) => (
                        <CaseCard key={i} item={item} discussLabel={discussLabel} />
                    ))}
                </div>

                {/* Cards row 2 */}
                <div style={{
                    position: 'absolute', left: 38, top: 1264 + CARD_H + 20,
                    display: 'flex', gap: 20,
                }}>
                    {row2.map((item, i) => (
                        <CaseCard key={i} item={item} discussLabel={discussLabel} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies

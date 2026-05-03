'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

const FIGMA_W = 1920
const FIGMA_H = 1620
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
type NextCaseCert = { title: string; desc: string }
type NextCaseData = { tag: string; title: string; btnLabel: string; certs: NextCaseCert[] }

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
                whiteSpace: 'pre-line',
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
                        whiteSpace: 'pre-line',
                    }} suppressHydrationWarning>{m.label}</span>
                </div>
            ))}
        </div>
    </div>
)

const CERT_ICONS = [
    <svg key={0} width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key={1} width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    <svg key={2} width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    <svg key={3} width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
]

const NextBizCard: React.FC<{ data: NextCaseData }> = ({ data }) => (
    <div style={{
        position: 'relative', width: CARD_W, height: CARD_H,
        borderRadius: CARD_RADIUS, overflow: 'hidden', flexShrink: 0,
        background: 'linear-gradient(145deg, #1A0840 0%, #5A0E78 55%, #200A50 100%)',
    }}>
        {/* Grid texture */}
        <div aria-hidden style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
            backgroundSize: '38px 38px', pointerEvents: 'none',
        }} />
        {/* Glow */}
        <div aria-hidden style={{
            position: 'absolute', right: -60, bottom: -60, width: 480, height: 480,
            background: 'radial-gradient(circle, rgba(190,50,210,0.5) 0%, transparent 65%)',
            pointerEvents: 'none',
        }} />

        {/* Tag */}
        <div style={{ position: 'absolute', left: 32, top: 40, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(180,120,255,0.8)', flexShrink: 0 }} />
            <span style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600, fontSize: 11, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
            }} suppressHydrationWarning>{data.tag}</span>
        </div>

        {/* Title */}
        <h3 style={{
            position: 'absolute', left: 32, top: 90, width: 530, margin: 0,
            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
            fontWeight: 700, fontSize: 46, lineHeight: 1.15, color: '#FFFFFF',
        }} suppressHydrationWarning>{data.title}</h3>

        {/* Button */}
        <Link href="/contact" style={{
            position: 'absolute', left: 32, top: 270,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 28px', borderRadius: 10,
            background: 'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 500, fontSize: 16, color: '#FFFFFF', textDecoration: 'none',
        }} suppressHydrationWarning>{data.btnLabel} →</Link>

        {/* Cert badges 2x2 */}
        <div style={{
            position: 'absolute', left: 32, top: 368, width: CARD_W - 64,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
        }}>
            {data.certs.map((cert, i) => (
                <div key={i} style={{
                    padding: '24px 20px', borderRadius: 20,
                    background: 'linear-gradient(137deg, rgba(255,255,255,0.47) 0%, rgba(255,255,255,0) 100%)',
                    backdropFilter: 'blur(42px)',
                    WebkitBackdropFilter: 'blur(42px)',
                    boxShadow: '0 0 0 1.5px rgba(115,187,255,0.5)',
                    display: 'flex', flexDirection: 'column', gap: 5,
                }}>
                    <div style={{ marginBottom: 6 }}>{CERT_ICONS[i]}</div>
                    <div style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#FFFFFF',
                    }} suppressHydrationWarning>{cert.title}</div>
                    <div style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 14, lineHeight: '22px', color: '#EFF4FF',
                    }} suppressHydrationWarning>{cert.desc}</div>
                </div>
            ))}
        </div>
    </div>
)

const CaseStudies: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('caseStudies')
    const cases = (t.cases ?? []) as CaseItem[]
    const nextCase = t.nextCase as NextCaseData
    const title = t.title as string
    const subtitle = t.subtitle as string
    const discussLabel = t.discuss as string

    const [scale, setScale] = React.useState(1)
    React.useEffect(() => {
        const update = () => setScale(Math.min(1, window.innerWidth / FIGMA_W))
        update()
        window.addEventListener('resize', update)
        return () => window.removeEventListener('resize', update)
    }, [])

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
                {/* Title */}
                <h2 style={{
                    position: 'absolute', left: 505, top: 80, width: 910, margin: 0,
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 700, fontSize: 74, lineHeight: '90px',
                    textAlign: 'center', color: '#1B2951',
                }} suppressHydrationWarning>{title}</h2>

                {/* Subtitle */}
                <p style={{
                    position: 'absolute', left: 505, top: 192, width: 910, margin: 0,
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 400, fontSize: 18, lineHeight: '28px',
                    textAlign: 'center', color: '#647088',
                }} suppressHydrationWarning>{subtitle}</p>

                {/* Cards row 1 */}
                <div style={{
                    position: 'absolute', left: 38, top: 270,
                    display: 'flex', gap: 20,
                }}>
                    {cases[0] && <CaseCard item={cases[0]} discussLabel={discussLabel} />}
                    {cases[1] && <CaseCard item={cases[1]} discussLabel={discussLabel} />}
                </div>

                {/* Cards row 2 */}
                <div style={{
                    position: 'absolute', left: 38, top: 270 + CARD_H + 20,
                    display: 'flex', gap: 20,
                }}>
                    {cases[2] && <CaseCard item={cases[2]} discussLabel={discussLabel} />}
                    {nextCase && <NextBizCard data={nextCase} />}
                </div>
            </div>
        </section>
    )
}

export default CaseStudies

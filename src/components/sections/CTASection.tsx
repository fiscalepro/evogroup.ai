'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

const CTASection: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('ctaSection') as {
        overline: string; titleLine1: string; titleHighlight: string
        titleLine2: string; subtitle: string; btnPrimary: string; btnSecondary: string
    }

    return (
        <section style={{
            position: 'relative', background: '#010133', overflow: 'hidden',
            padding: '120px 40px 100px', textAlign: 'center',
        }}>
            {/* Globe — slightly below center */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cta-globe.png" alt="" aria-hidden style={{
                position: 'absolute', left: '50%', top: '55%',
                transform: 'translate(-50%, -50%)',
                width: '75%', maxWidth: 1100,
                mixBlendMode: 'screen',
                opacity: 0.55, pointerEvents: 'none',
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
                {/* Overline */}
                <p style={{
                    margin: '0 0 24px',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 500, fontSize: 13, letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
                }} suppressHydrationWarning>{t.overline}</p>

                {/* Title */}
                <h2 style={{
                    margin: '0 0 20px',
                    fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                    fontWeight: 700, fontSize: 'clamp(42px, 4vw, 74px)',
                    lineHeight: 1.1, color: '#FFFFFF',
                }}>
                    <span suppressHydrationWarning>{t.titleLine1}</span>
                    <br />
                    <span style={{
                        background: 'linear-gradient(90deg, #A855F7 0%, #3B82F6 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }} suppressHydrationWarning>{t.titleHighlight}{t.titleLine2 ? ` ${t.titleLine2}` : ''}</span>
                </h2>

                {/* Subtitle */}
                <p style={{
                    margin: '0 0 40px',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 400, fontSize: 18, lineHeight: '28px',
                    color: 'rgba(255,255,255,0.65)', maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
                }} suppressHydrationWarning>{t.subtitle}</p>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '14px 32px', borderRadius: 12,
                        background: 'linear-gradient(91deg, #01318C 0%, #E10A4D 100%)',
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 500, fontSize: 16, color: '#FFFFFF',
                        textDecoration: 'none',
                    }} suppressHydrationWarning>{t.btnPrimary}</Link>

                    <Link href="/contact" style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '14px 32px', borderRadius: 12,
                        border: '1px solid rgba(255,255,255,0.25)',
                        background: 'transparent',
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 500, fontSize: 16, color: '#FFFFFF',
                        textDecoration: 'none',
                    }} suppressHydrationWarning>{t.btnSecondary}</Link>
                </div>
            </div>
        </section>
    )
}

export default CTASection

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
            {/* Globe glow background */}
            <div aria-hidden style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700, height: 700, borderRadius: '50%',
                background: 'radial-gradient(circle at 50% 50%, rgba(62,97,255,0.18) 0%, rgba(130,60,255,0.08) 40%, transparent 70%)',
                border: '1px solid rgba(62,97,255,0.12)',
                pointerEvents: 'none',
            }} />
            {/* Inner globe ring */}
            <div aria-hidden style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 480, height: 480, borderRadius: '50%',
                border: '1px solid rgba(62,97,255,0.1)',
                background: 'radial-gradient(circle at 30% 35%, rgba(100,60,255,0.12) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            {/* Side vertical bars */}
            <div aria-hidden style={{
                position: 'absolute', left: 0, top: 0, width: 60, height: '100%',
                background: 'linear-gradient(90deg, rgba(2,1,60,0.9) 0%, transparent 100%)',
                pointerEvents: 'none',
            }} />
            <div aria-hidden style={{
                position: 'absolute', right: 0, top: 0, width: 60, height: '100%',
                background: 'linear-gradient(270deg, rgba(2,1,60,0.9) 0%, transparent 100%)',
                pointerEvents: 'none',
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
                    <span suppressHydrationWarning>{t.titleLine1} </span>
                    <span style={{
                        background: 'linear-gradient(90deg, #A855F7 0%, #3B82F6 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }} suppressHydrationWarning>{t.titleHighlight}</span>
                    {t.titleLine2 && (
                        <span suppressHydrationWarning> {t.titleLine2}</span>
                    )}
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

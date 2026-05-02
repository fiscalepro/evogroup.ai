'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

// Figma: glassmorphism cards 200×auto, bg=Main Gradient (linear 137deg white/47%→transparent),
// border=radial-gradient blue, backdrop-blur 42px, borderRadius 20px
// Section bg #020133 (same dark as other sections)

const CERTS = [
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        key: 'iso',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        ),
        key: 'api',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        key: 'ai',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" stroke="#8BB7FF" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
        key: 'meta',
    },
]

type CertItem = { title: string; description: string }

const Certifications: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('certifications')
    const items = (t.items ?? []) as CertItem[]
    const overline = t.overline as string

    return (
        <section
            style={{
                background: '#020133',
                padding: '80px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 48,
                overflow: 'hidden',
            }}
        >
            {/* Overline badge */}
            <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '4px 14px', borderRadius: 9999,
                border: '1px solid rgba(139,183,255,0.35)',
                background: 'rgba(139,183,255,0.08)',
            }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8BB7FF' }} />
                <span style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600, fontSize: 12, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: '#8BB7FF',
                }} suppressHydrationWarning>{overline}</span>
            </div>

            {/* Cards row */}
            <div style={{
                display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center',
                maxWidth: 1840,
            }}>
                {items.map((item, i) => (
                    <div key={i} style={{
                        width: 200, padding: '24px 20px', borderRadius: 20,
                        background: 'linear-gradient(137deg, rgba(255,255,255,0.47) 0%, rgba(255,255,255,0) 100%)',
                        backdropFilter: 'blur(42px)',
                        WebkitBackdropFilter: 'blur(42px)',
                        border: '2px solid',
                        borderColor: 'transparent',
                        backgroundImage: 'linear-gradient(137deg, rgba(255,255,255,0.47) 0%, rgba(255,255,255,0) 100%)',
                        boxShadow: '0 0 0 1.5px rgba(115,187,255,0.5)',
                        display: 'flex', flexDirection: 'column', gap: 5,
                    }}>
                        <div style={{ marginBottom: 6 }}>{CERTS[i]?.icon}</div>
                        <h3 style={{
                            margin: 0,
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 700, fontSize: 16, lineHeight: '24px',
                            color: '#FFFFFF',
                        }} suppressHydrationWarning>{item.title}</h3>
                        <p style={{
                            margin: 0,
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 400, fontSize: 14, lineHeight: '22px',
                            color: '#EFF4FF',
                        }} suppressHydrationWarning>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications

'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/components/providers/I18nProvider'

// Figma: bg #020133, divider rgba(255,255,255,0.2), grid max-width 1232px
// Overlines: Inter 12px 500 uppercase 15% letterSpacing #C4CCD9
// Link titles: Inter 14px 400 #FFFFFF; sub-descriptions: Inter 11px #C4CCD9
// Copyright: #DEDEDE

const MailIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
)
const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
)
const MapIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)
const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
)
const TelegramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 5L2 12.5l7 1M21 5l-5 15-4.5-5.5M21 5L9 13.5m0 0V19l3-3" />
    </svg>
)

const OVERLINE: React.CSSProperties = {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    fontWeight: 500, fontSize: 12, lineHeight: '16px',
    letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C4CCD9',
    margin: 0, marginBottom: 20,
}
const LINK_TITLE: React.CSSProperties = {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    fontWeight: 400, fontSize: 14, lineHeight: '17.5px', color: '#FFFFFF',
    textDecoration: 'none', display: 'block',
}
const LINK_SUB: React.CSSProperties = {
    fontFamily: 'var(--font-inter), Inter, sans-serif',
    fontWeight: 400, fontSize: 11, lineHeight: '16.5px', color: '#C4CCD9',
}

type SolutionItem = { label: string; sublabel: string }

const SOLUTIONS_HREFS: Record<string, string> = {
    'EvoAI CRM': '/solutions/whatsapp',
    'EvoPay': '/solutions/evopay',
    'EvoCabinet': '/solutions/evocabinet',
    'ЭДО': '/solutions/edo',
    'CCE Platform': '/solutions/cce',
}

const COMPANY_HREFS: Record<string, string> = {
    'О компании': '/about', 'About': '/about', 'Компания жөнүндө': '/about',
    'Технологии': '/technology', 'Technology': '/technology', 'Технологиялар': '/technology',
    'Кейсы': '/cases', 'Cases': '/cases', 'Кейстер': '/cases',
    'Карьера': '/career', 'Careers': '/career',
}

const Footer: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('footer') as {
        brand: { description: string }
        solutions: { title: string; items: SolutionItem[] }
        company: { title: string; links: string[] }
        contact: { title: string; email: string; phone: string; location: string }
        bottom: { rights: string; privacy: string; terms: string }
    }

    return (
        <footer style={{ background: '#020133', color: '#FFFFFF' }}>
            <div style={{ height: 1, background: 'rgba(255,255,255,0.2)' }} />

            <div style={{ maxWidth: 1232, margin: '0 auto', padding: '60px 40px 40px' }}>
                {/* Main grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 2fr 1fr 1.2fr',
                    gap: 40, marginBottom: 48,
                }}>
                    {/* Col 1: Brand */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <span style={{
                            fontFamily: 'var(--font-manrope), Manrope, sans-serif',
                            fontWeight: 700, fontSize: 20, color: '#FFFFFF',
                        }}>Evolution Group</span>
                        <p style={{
                            margin: 0,
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 400, fontSize: 14, lineHeight: '22px', color: '#C4CCD9',
                        }} suppressHydrationWarning>{t.brand?.description}</p>
                        <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
                            {[
                                { href: 'https://instagram.com/evogroup.ai', icon: <InstagramIcon /> },
                                { href: 'https://t.me/evogroup_ai', icon: <TelegramIcon /> },
                            ].map(({ href, icon }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                                    width: 36, height: 36, borderRadius: 8,
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: '#C4CCD9', textDecoration: 'none',
                                }}>{icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Solutions */}
                    <div>
                        <p style={OVERLINE} suppressHydrationWarning>{t.solutions?.title}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                            {(t.solutions?.items ?? []).map((s, i) => (
                                <Link key={i} href={SOLUTIONS_HREFS[s.label] ?? '/'} style={{ textDecoration: 'none' }}>
                                    <span style={LINK_TITLE} suppressHydrationWarning>{s.label}</span>
                                    <span style={LINK_SUB} suppressHydrationWarning>{s.sublabel}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Company */}
                    <div>
                        <p style={OVERLINE} suppressHydrationWarning>{t.company?.title}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {(t.company?.links ?? []).map((label, i) => (
                                <Link key={i} href={COMPANY_HREFS[label] ?? '/'} style={LINK_TITLE} suppressHydrationWarning>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Col 4: Contacts */}
                    <div>
                        <p style={OVERLINE} suppressHydrationWarning>{t.contact?.title}</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {[
                                { icon: <MailIcon />, text: t.contact?.email, href: `mailto:${t.contact?.email}` },
                                { icon: <PhoneIcon />, text: t.contact?.phone, href: `tel:${t.contact?.phone?.replace(/\s/g, '')}` },
                                { icon: <MapIcon />, text: t.contact?.location, href: '#' },
                            ].map(({ icon, text, href }, i) => (
                                <a key={i} href={href} style={{
                                    display: 'flex', alignItems: 'center', gap: 8,
                                    color: '#FFFFFF', textDecoration: 'none',
                                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                                    fontWeight: 400, fontSize: 14, lineHeight: '20px',
                                }}>
                                    <span style={{ color: '#C4CCD9', flexShrink: 0 }}>{icon}</span>
                                    <span suppressHydrationWarning>{text}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: 24,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: 12,
                }}>
                    <p style={{
                        margin: 0,
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontWeight: 400, fontSize: 12, color: '#DEDEDE',
                    }} suppressHydrationWarning>© 2026 Evolution Group. {t.bottom?.rights}</p>
                    <div style={{ display: 'flex', gap: 16 }}>
                        {[
                            { label: t.bottom?.privacy, href: '/privacy' },
                            { label: t.bottom?.terms, href: '/terms' },
                        ].map(({ label, href }, i) => (
                            <Link key={i} href={href} style={{
                                fontFamily: 'var(--font-inter), Inter, sans-serif',
                                fontWeight: 400, fontSize: 12, color: '#DEDEDE',
                                textDecoration: 'none',
                            }} suppressHydrationWarning>{label}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
)

const TelegramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 5L2 12.5l7 1M21 5l-5 15-4.5-5.5M21 5L9 13.5m0 0V19l3-3" />
    </svg>
)

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
    </svg>
)

const MailIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
)

const PhoneIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
)

const MapIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

const socials = [
    { icon: <InstagramIcon />, label: 'Instagram', href: 'https://instagram.com/evogroup.ai' },
    { icon: <TelegramIcon />, label: 'Telegram', href: 'https://t.me/evogroup_ai' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://linkedin.com/company/evogroup-ai' },
]

const solutionHrefs = ['/solutions/whatsapp', '/solutions/evopay', '/solutions/cce', '/solutions/smartuchet']

const companyHrefs = ['/about', '/technology', '/cases', '#career']

const Footer: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('footer')
    const currentYear = new Date().getFullYear()

    const contactItems = [
        {
            icon: <MailIcon />,
            label: t.contact.email,
            href: 'mailto:info@evogroup.ai',
        },
        { icon: <PhoneIcon />, label: t.contact.phone, href: 'tel:+996552343333' },
        {
            icon: <MapIcon />,
            label: t.contact.location,
            href: 'https://maps.app.goo.gl/WCRHWcAnH9RnPZ7P7',
        },
    ]

    return (
			<footer className='relative overflow-hidden border-t border-white/[0.06]'>
				{/* Pre-footer CTA */}
				<div className='relative py-20 lg:py-28 border-b border-white/[0.06]'>
					<div className='absolute inset-0 pointer-events-none'>
						<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-500/[0.06] rounded-full blur-[120px]' />
					</div>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: '-60px' }}
						transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
						className='relative z-10 max-w-3xl mx-auto px-6 text-center'
					>
						<p className='text-xs text-white/50 uppercase tracking-[0.2em] font-medium mb-5'>
							{t.cta.overline}
						</p>
						<h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5'>
							{t.cta.title}
							<br className='hidden sm:block' /> {t.cta.titleLine2}
						</h2>
						<p className='text-base lg:text-lg text-white/60 leading-relaxed mb-10 max-w-xl mx-auto'>
							{t.cta.subtitle}
						</p>
						<div className='flex flex-col sm:flex-row gap-3 justify-center'>
							<Link
								href='/contact'
								className='inline-flex items-center justify-center gap-2 bg-white text-black px-7 py-3.5 rounded-xl text-sm font-bold no-underline hover:bg-white/90 transition-colors'
							>
								{t.cta.primaryButton}
								<svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
									<path
										d='M2 7h10M8 3l4 4-4 4'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
							<Link
								href='mailto:info@evogroup.ai'
								className='inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white/70 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white no-underline transition-all'
							>
								{t.cta.secondaryButton}
							</Link>
						</div>
					</motion.div>
				</div>

				{/* Main footer columns */}
				<div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1fr_1.2fr] gap-12 lg:gap-8'>
						{/* Brand column */}
						<div>
							<div className='flex items-center gap-2.5 mb-4'>
								<Image
									src='/Vector.svg'
									alt='Evolution Group'
									width={22}
									height={22}
									className='object-contain opacity-90'
								/>
								<span className='text-white font-semibold text-base'>
									Evolution Group
								</span>
							</div>
							<p className='text-sm text-white/70 leading-relaxed mb-6 max-w-[220px]'>
								{t.brand.description}
							</p>
							<div className='flex items-center gap-3'>
								{socials.map(s => (
									<a
										key={s.label}
										href={s.href}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={s.label}
										className='w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-white/55 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-200'
									>
										{s.icon}
									</a>
								))}
							</div>
						</div>

						{/* Solutions */}
						<div>
							<p className='text-xs text-blue-400 uppercase tracking-[0.15em] font-medium mb-5'>
								{t.solutions.title}
							</p>
							<ul className='space-y-3.5'>
								{t.solutions.items.map((s, i) => (
									<li key={s.label}>
										<Link href={solutionHrefs[i]} className='group no-underline'>
											<span className='block text-sm text-white group-hover:text-blue-400 transition-colors leading-tight'>
												{s.label}
											</span>
											<span className='block text-[11px] text-white/60 mt-0.5'>
												{s.sublabel}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<p className='text-xs text-purple-400 uppercase tracking-[0.15em] font-medium mb-5'>
								{t.company.title}
							</p>
							<ul className='space-y-3'>
								{t.company.links.map((label, i) => (
									<li key={label}>
										<Link
											href={companyHrefs[i]}
											className='text-sm text-white hover:text-purple-400 transition-colors no-underline'
										>
											{label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div>
							<p className='text-xs text-emerald-400 uppercase tracking-[0.15em] font-medium mb-5'>
								{t.contact.title}
							</p>
							<ul className='space-y-3.5'>
								{contactItems.map(c => (
									<li key={c.href}>
										<a
											href={c.href}
											className='inline-flex items-center gap-2.5 text-sm text-white hover:text-emerald-400 transition-colors no-underline'
										>
											<span className='text-white/50'>{c.icon}</span>
											{c.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='relative z-10 border-t border-white/[0.05]'>
					<div className='max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3'>
						<p className='text-xs text-white/75'>
							© {currentYear} Evolution Group. {t.bottom.rights}
						</p>
						<div className='flex items-center gap-4'>
							<Link
								href='/privacy'
								className='text-xs text-white/75 hover:text-white/50 transition-colors no-underline'
							>
								{t.bottom.privacy}
							</Link>
							<span className='text-white/10'>·</span>
							<Link
								href='/terms'
								className='text-xs text-white/75 hover:text-white/50 transition-colors no-underline'
							>
								{t.bottom.terms}
							</Link>
							<span className='text-white/10'>·</span>
							<span className='text-xs text-white/75'>🇰🇬 {t.bottom.country}</span>
						</div>
					</div>
				</div>

				{/* Background */}
				<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none' />
			</footer>
		)
}

export default Footer

'use client'

import Image from 'next/image'
import { useTranslation } from '@/components/providers/I18nProvider'

const partnerLogos: Record<string, string> = {
	'Bakai Bank': '/partners/bakai-bank.png',
	'Бакай Банк': '/partners/bakai-bank.png',
	'Bishkek Petroleum': '/partners/bishkek-petroleum.svg',
	'Бишкек Петролеум': '/partners/bishkek-petroleum.svg',
	'Partner Neft': '/partners/partner-neft.png',
	'Партнер Нефть': '/partners/partner-neft.png',
	'BIAST.KG': '/partners/biast.png',
	'Tauras-Phoenix': '/partners/tauras-phoenix.svg',
	'Таурас-Феникс': '/partners/tauras-phoenix.svg',
}

export function PartnersMarquee() {
	const { tObj } = useTranslation()
	const t = tObj('partnerMarquee')
	const partners = t.partners as string[]

	const PartnerItem = ({ partner, prefix }: { partner: string; prefix: string }) => (
		<div
			key={`${prefix}`}
			className='flex-shrink-0 px-5 sm:px-10 flex flex-col items-center gap-2 sm:gap-3 cursor-default group'
		>
			<div className='h-8 w-20 sm:h-10 sm:w-28 relative flex items-center justify-center'>
				{partnerLogos[partner] ? (
					<Image
						src={partnerLogos[partner]}
						alt={partner}
						width={112}
						height={40}
						className='object-contain max-h-10 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity'
					/>
				) : null}
			</div>
			<span className='text-xs sm:text-sm font-medium text-white/50 group-hover:text-white/80 transition-colors'>
				{partner}
			</span>
		</div>
	)

	return (
		<section className='py-12 sm:py-20 border-y border-white/10 overflow-hidden my-8 sm:my-12'>
			<div className='max-w-7xl mx-auto px-6 mb-12'>
				<p className='text-center text-white/80 uppercase tracking-wider text-sm'>
					{t.heading}
				</p>
			</div>

			<div className='relative'>
				<div className='flex overflow-hidden select-none'>
					<div className='marquee-track flex shrink-0'>
						{partners.map((partner, i) => (
							<PartnerItem key={`a-${i}`} partner={partner} prefix={`a-${i}`} />
						))}
					</div>
					<div className='marquee-track flex shrink-0' aria-hidden='true'>
						{partners.map((partner, i) => (
							<PartnerItem key={`b-${i}`} partner={partner} prefix={`b-${i}`} />
						))}
					</div>
				</div>

				{/* Gradient overlays */}
				<div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0E1A] to-transparent pointer-events-none' />
				<div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0E1A] to-transparent pointer-events-none' />
			</div>

			<style jsx>{`
				.marquee-track {
					animation: marquee-scroll 30s linear infinite;
				}

				@keyframes marquee-scroll {
					from {
						transform: translateX(0);
					}
					to {
						transform: translateX(-100%);
					}
				}

				@media (prefers-reduced-motion: reduce) {
					.marquee-track {
						animation-play-state: paused;
					}
				}
			`}</style>
		</section>
	)
}

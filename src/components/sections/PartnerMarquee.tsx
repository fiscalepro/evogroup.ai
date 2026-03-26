'use client'

import { useTranslation } from '@/components/providers/I18nProvider'

export function PartnersMarquee() {
	const { tObj } = useTranslation()
	const t = tObj('partnerMarquee')
	const partners = t.partners as string[]

	return (
		<section className='py-20 border-y border-white/10 overflow-hidden my-12'>
			<div className='max-w-7xl mx-auto px-6 mb-12'>
				<p className='text-center text-white/80 uppercase tracking-wider text-sm'>
					{t.heading}
				</p>
			</div>

			<div className='relative'>
				<div className='flex overflow-hidden select-none'>
					<div className='marquee-track flex shrink-0'>
						{partners.map((partner, i) => (
							<div
								key={`a-${i}`}
								className='flex-shrink-0 px-8 text-2xl font-semibold text-white hover:text-white/55 transition-colors cursor-default'
							>
								{partner}
							</div>
						))}
					</div>
					<div className='marquee-track flex shrink-0' aria-hidden='true'>
						{partners.map((partner, i) => (
							<div
								key={`b-${i}`}
								className='flex-shrink-0 px-8 text-2xl font-semibold text-white hover:text-white/55 transition-colors cursor-default'
							>
								{partner}
							</div>
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

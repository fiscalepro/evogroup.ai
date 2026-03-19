'use client'

import { motion } from 'framer-motion'

export function PartnersMarquee() {
	const partners = [
		'Kyrgyz National Bank',
		'KyrgyzGas',
		'Ministry of Digital Development',
		'Dos-Kredobank',
		'KyrgyzTelecom',
		'Bishkek City Administration',
		'KyrgyzEnergo',
		'RSK Bank',
	]

	return (
		<section className='py-20 border-y border-white/10 overflow-hidden my-12'>
			<div className='max-w-7xl mx-auto px-6 mb-12'>
				<p className='text-center text-white/80 uppercase tracking-wider text-sm'>
					Trusted by Leading Organizations
				</p>
			</div>

			<div className='relative'>
				<div className='flex overflow-hidden'>
					<motion.div
						className='flex gap-16 whitespace-nowrap'
						animate={{
							x: ['0%', '-50%'],
						}}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: 'linear',
						}}
					>
						{[...partners, ...partners].map((partner, index) => (
							<div
								key={index}
								className='text-2xl font-semibold text-white hover:text-white/55 transition-colors cursor-default'
							>
								{partner}
							</div>
						))}
					</motion.div>
				</div>

				{/* Gradient overlays */}
				<div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B0F1A] to-transparent pointer-events-none' />
				<div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B0F1A] to-transparent pointer-events-none' />
			</div>
		</section>
	)
}

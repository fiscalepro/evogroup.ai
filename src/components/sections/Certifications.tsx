'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

function getData(locale: string) {
	if (locale === 'en') {
		return {
			overline: 'Certifications & Partnerships',
			items: [
				{ title: 'ISO 27001', description: 'Information security management' },
				{ title: 'API Partner', description: 'Direct access to platforms' },
				{ title: 'AI Certified', description: 'Certified AI solutions' },
				{ title: 'Meta Tech Provider', description: 'Official Meta technology provider' },
			],
		}
	}
	if (locale === 'ky') {
		return {
			overline: 'Сертификаттар жана өнөктөштүктөр',
			items: [
				{ title: 'ISO 27001', description: 'Маалымат коопсуздугун башкаруу' },
				{ title: 'API Partner', description: 'Платформаларга түз кирүү' },
				{ title: 'AI Certified', description: 'Сертификатталган ЖИ-чечимдер' },
				{ title: 'Meta Tech Provider', description: 'Meta расмий технологиялык провайдери' },
			],
		}
	}
	return {
		overline: 'Сертификации и партнёрства',
		items: [
			{ title: 'ISO 27001', description: 'Управление информационной безопасностью' },
			{ title: 'API Partner', description: 'Прямой доступ к платформам' },
			{ title: 'AI Certified', description: 'Сертифицированные ИИ-решения' },
			{ title: 'Meta Tech Provider', description: 'Официальный технологический провайдер Meta' },
		],
	}
}

const icons = [
	// Shield — ISO 27001
	<svg key="iso" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
	</svg>,
	// Plug/Link — API Partner
	<svg key="api" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
	</svg>,
	// Sparkle/Brain — AI Certified
	<svg key="ai" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
	</svg>,
	// Globe — Meta Tech Provider
	<svg key="meta" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
	</svg>,
]

const Certifications: React.FC = () => {
	const { locale } = useTranslation()
	const data = getData(locale)

	return (
		<section className="py-20 lg:py-28 relative overflow-hidden">
			<div className="max-w-5xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-14"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
						<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
						<span className="text-xs text-white/55 uppercase tracking-widest font-medium">
							{data.overline}
						</span>
					</div>
				</motion.div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{data.items.map((item, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
							className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-200"
						>
							<div className="text-blue-400/70 group-hover:text-blue-400 transition-colors mb-4">
								{icons[i]}
							</div>
							<h3 className="text-base font-semibold text-white mb-1.5">
								{item.title}
							</h3>
							<p className="text-sm text-white/50 leading-relaxed">
								{item.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Certifications

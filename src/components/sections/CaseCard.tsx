import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

interface CaseCard {
	number: string
	color: 'green' | 'blue'
	tag: string
	company: string
	headline: string
	teaser: string
	results: { value: string; label: string }[]
	quoteAuthor: string
	instagram: { handle: string; url: string }
}

const InstagramIcon = () => (
	<svg
		width='13'
		height='13'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
	>
		<rect x='2' y='2' width='20' height='20' rx='5' />
		<circle cx='12' cy='12' r='4' />
		<circle cx='17.5' cy='6.5' r='0.8' fill='currentColor' stroke='none' />
	</svg>
)

export function CaseCard({ card, index }: { card: CaseCard; index: number }) {
	const { locale } = useTranslation()
	const ctaText = locale === 'en' ? 'Discuss project' : locale === 'ky' ? 'Долбоорду талкуулоо' : 'Обсудить проект'
	const isBlue = card.color === 'blue'

	const g = isBlue
		? {
				tagText: 'text-blue-600 dark:text-blue-400',
				tagBorder: 'border-blue-200 dark:border-blue-400/20',
				tagBg: 'bg-blue-50 dark:bg-blue-500/[0.08]',
				metricText: 'text-blue-600 dark:text-blue-400',
				metricBg: 'bg-blue-50 dark:bg-blue-500/[0.08]',
				quoteLine: 'bg-blue-300',
				ctaBg: 'bg-gray-900 dark:bg-[#F0F0F5] dark:text-[#0A0E1A] hover:bg-black dark:hover:bg-white',
				igText: 'text-gray-500 dark:text-[#F0F0F5]/55 hover:text-gray-900 dark:hover:text-[#F0F0F5]',
			}
		: {
				tagText: 'text-gray-600 dark:text-[#F0F0F5]/60',
				tagBorder: 'border-gray-300 dark:border-white/[0.07]',
				tagBg: 'bg-gray-100 dark:bg-white/[0.04]',
				metricText: 'text-gray-700 dark:text-[#F0F0F5]/70',
				metricBg: 'bg-gray-50 dark:bg-white/[0.03]',
				quoteLine: 'bg-gray-300 dark:border-white/[0.07]',
				ctaBg: 'bg-gray-900 dark:bg-[#F0F0F5] dark:text-[#0A0E1A] hover:bg-black dark:hover:bg-white',
				igText: 'text-gray-500 dark:text-[#F0F0F5]/55 hover:text-gray-900 dark:hover:text-[#F0F0F5]',
			}

	return (
		<motion.article
			initial={{ opacity: 0, y: 36 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-50px' }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: [0.25, 0.1, 0.25, 1],
			}}
			className={`relative rounded-2xl border border-transparent hover:border-gray-700 dark:hover:border-white/[0.12] bg-white dark:bg-white/[0.02] overflow-hidden shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-none transition-all duration-400`}
		>
			{/* Accent top line */}
			<div
				className={`h-[1.5px] w-full bg-gradient-to-r`}
			/>

			<div className='p-4 sm:p-7 lg:p-10'>
				{/* Top row: tag + case number */}
				<div className='flex items-start justify-between mb-5'>
					<span
						className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 ${g.tagText} ${g.tagBorder} ${g.tagBg}`}
					>
						{card.tag}
					</span>
					<span
						className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-none select-none text-black/50 dark:text-white/15`}
					>
						{card.number}
					</span>
				</div>

				{/* Company + headline */}
				<h3 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-[#F0F0F5] leading-tight mb-2'>
					{card.company}
				</h3>
				<p className='text-sm lg:text-base text-gray-500 dark:text-[#F0F0F5]/55 leading-relaxed mb-8 max-w-2xl'>
					{card.headline}
				</p>

				{/* Metrics — horizontal stat bar */}
				<div className='grid grid-cols-2 sm:grid-cols-4 border border-gray-200 dark:border-white/[0.07] rounded-xl overflow-hidden mb-8'>
					{card.results.map((r, i) => (
						<div
							key={i}
							className={[
								'px-3 py-3 sm:px-5 sm:py-4 text-center',
								i < 3 ? 'border-r border-gray-200 dark:border-white/[0.07]' : '',
								i < 2 ? 'border-b border-gray-200 dark:border-white/[0.07] sm:border-b-0' : '',
								i === 2 ? 'sm:border-r border-gray-200 dark:border-white/[0.07] border-b-0' : '',
								g.metricBg,
							].join(' ')}
						>
							<div
								className={`text-lg sm:text-2xl lg:text-3xl font-bold font-mono leading-none mb-1.5 ${g.metricText}`}
							>
								{r.value}
							</div>
							<div className='text-[11px] text-gray-500 dark:text-[#F0F0F5]/55 leading-tight'>
								{r.label}
							</div>
						</div>
					))}
				</div>

				{/* Teaser + Quote — two columns on lg */}
				<div className='flex gap-6 mb-8'>
					<p className='text-sm text-gray-500 dark:text-[#F0F0F5]/55 leading-relaxed self-center'>
						{card.teaser}
					</p>
				</div>

				{/* Footer: Instagram + CTA */}
				<div className='flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-gray-200 dark:border-white/[0.07]'>
					<Link
						href={card.instagram.url}
						target='_blank'
						rel='noopener noreferrer'
						className={`inline-flex items-center gap-1.5 text-[12px] font-mono transition-colors no-underline ${g.igText}`}
					>
						<InstagramIcon />
						{card.instagram.handle}
					</Link>
					<Link
						href='/contact'
						className={`arrow-hover inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg text-[12px] sm:text-[13px] font-bold text-white no-underline shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-none transition-all ${g.ctaBg}`}
					>
						{ctaText}
						<svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
							<path
								d='M2.5 6h7M6.5 3l3 3-3 3'
								stroke='currentColor'
								strokeWidth='1.5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</motion.article>
	)
}

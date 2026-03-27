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
				accentFrom: 'from-cyan-400',
				tagText: 'text-cyan-400',
				tagBorder: 'border-cyan-400/20',
				tagBg: 'bg-cyan-400/[0.06]',
				numText: 'text-cyan-400/15',
				metricText: 'text-cyan-300',
				metricBg: 'bg-cyan-400/[0.04]',
				quoteLine: 'bg-cyan-400/40',
				ctaBg: 'bg-cyan-400 hover:bg-cyan-300',
				igText: 'text-cyan-400/70 hover:text-cyan-300',
				cardBorder: 'border-white/[0.07] hover:border-cyan-400/25',
			}
		: {
				accentFrom: 'from-emerald-400',
				tagText: 'text-emerald-400',
				tagBorder: 'border-emerald-400/20',
				tagBg: 'bg-emerald-400/[0.06]',
				numText: 'text-emerald-400/15',
				metricText: 'text-emerald-300',
				metricBg: 'bg-emerald-400/[0.04]',
				quoteLine: 'bg-emerald-400/40',
				ctaBg: 'bg-emerald-400 hover:bg-emerald-300',
				igText: 'text-emerald-400/70 hover:text-emerald-300',
				cardBorder: 'border-white/[0.07] hover:border-emerald-400/25',
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
			className={`relative rounded-2xl border bg-white/[0.025] overflow-hidden transition-colors duration-400 ${g.cardBorder}`}
		>
			{/* Accent top line */}
			<div
				className={`h-[1.5px] w-full bg-gradient-to-r ${g.accentFrom} to-transparent`}
			/>

			<div className='p-7 lg:p-10'>
				{/* Top row: tag + case number */}
				<div className='flex items-start justify-between mb-5'>
					<span
						className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest border rounded-md px-2.5 py-1 ${g.tagText} ${g.tagBorder} ${g.tagBg}`}
					>
						{card.tag}
					</span>
					<span
						className={`text-5xl font-black leading-none select-none ${g.numText}`}
					>
						{card.number}
					</span>
				</div>

				{/* Company + headline */}
				<h3 className='text-xl lg:text-2xl font-bold text-white leading-tight mb-2'>
					{card.company}
				</h3>
				<p className='text-sm lg:text-base text-white/55 leading-relaxed mb-8 max-w-2xl'>
					{card.headline}
				</p>

				{/* Metrics — horizontal stat bar */}
				<div className='grid grid-cols-2 sm:grid-cols-4 border border-white/[0.07] rounded-xl overflow-hidden mb-8'>
					{card.results.map((r, i) => (
						<div
							key={i}
							className={[
								'px-5 py-4 text-center',
								i < 3 ? 'border-r border-white/[0.07]' : '',
								i < 2 ? 'border-b border-white/[0.07] sm:border-b-0' : '',
								i === 2 ? 'sm:border-r border-white/[0.07] border-b-0' : '',
								g.metricBg,
							].join(' ')}
						>
							<div
								className={`text-2xl lg:text-3xl font-bold font-mono leading-none mb-1.5 ${g.metricText}`}
							>
								{r.value}
							</div>
							<div className='text-[11px] text-white/50 leading-tight'>
								{r.label}
							</div>
						</div>
					))}
				</div>

				{/* Teaser + Quote — two columns on lg */}
				<div className='flex gap-6 mb-8'>
					<p className='text-sm text-white/60 leading-relaxed self-center'>
						{card.teaser}
					</p>
				</div>

				{/* Footer: Instagram + CTA */}
				<div className='flex items-center justify-between pt-5 border-t border-white/[0.06]'>
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
						className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-[13px] font-bold text-black no-underline transition-colors ${g.ctaBg}`}
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

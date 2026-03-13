'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const ModernHero: React.FC = () => {
    const { tObj } = useTranslation()
    const translations = tObj('hero')
    // const [currentWord, setCurrentWord] = useState(0)
    const [wordIndex, setWordIndex] = useState(0)
	const [displayText, setDisplayText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)


    useEffect(() => {
			const words = translations.titleHighlight
			const current = words[wordIndex]

			const typingSpeed = isDeleting ? 70 : 110

			const timeout = setTimeout(() => {
				if (!isDeleting) {
					setDisplayText(current.substring(0, displayText.length + 1))

					if (displayText === current) {
						setTimeout(() => setIsDeleting(true), 2500)
					}
				} else {
					setDisplayText(current.substring(0, displayText.length - 1))

					if (displayText === '') {
						setIsDeleting(false)
						setWordIndex(prev => (prev + 1) % words.length)
					}
				}
			}, typingSpeed)

			return () => clearTimeout(timeout)
		}, [displayText, isDeleting, wordIndex, translations.titleHighlight])

    return (
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
				<div className='relative z-10 max-w-7xl mx-auto px-6 py-32 text-center'>
					{/* Pre-title */}
					<div className='mb-8 animate-fade-in'>
						<a
							href='https://main.evogroup.ai/demo'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors'
						>
							{translations.preTitle}
						</a>
					</div>

					{/* Main Title */}
					<h1 className='text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up'>
						<span className='block text-white mb-2'>{translations.title}</span>
						<span className='block bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent pb-2'>
							{displayText}
							<span className='animate-pulse text-white'>|</span>
						</span>
					</h1>

					{/* Subtitle */}
					<p
						className='text-lg sm:text-xl lg:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up'
						style={{ animationDelay: '0.2s' }}
					>
						{translations.subtitle}
					</p>

					{/* Stats */}
					<div
						className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-slide-up'
					>
						{translations.stats.map((stat, index) => (
							<div
								key={index}
								className='group p-6'
							>
								<div className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2'>
									{stat.value}
								</div>
								<div className='text-base text-white/60 font-medium'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Decorative gradient orbs */}
				<div className='absolute top-1/4 left-10 w-72 h-72 bg-blue-500/50 rounded-full blur-[100px] animate-glow' />
				<div
					className='absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/40 rounded-full blur-[120px] animate-glow'
					style={{ animationDelay: '-1.5s' }}
				/>
			</section>
		)
}

export default ModernHero

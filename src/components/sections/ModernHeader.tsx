'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/components/providers/I18nProvider'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

const ModernHeader = () => {
    const { tObj } = useTranslation()
    const t = tObj('header')
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

    const menuItems = [
			{ href: '/solutions', label: t.solutions },
			{ href: '/solutions/whatsapp', label: t.whatsappCrm },
			{ href: '/solutions/evopay', label: t.evopay },
			{ href: '/solutions/cce', label: t.cce },
			{ href: '/cases', label: t.cases },
			{ href: '/technology', label: t.technology },
			// { href: '/team', label: t.team },
			{ href: '/contact', label: t.contact },
		]

    const isActive = (href: string) => pathname === href
	const isSolutions = pathname.startsWith('/solutions')

	const firstItems = menuItems.slice(0, 4)
	const restItems = menuItems.slice(4)
	const solutionTitle = menuItems.at(0)

	const toggleSolution = useCallback(() => setIsOpen(prev => !prev), [])

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false)
    }

	useEffect(() => {
		if(!isOpen) return

		const outsideClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (!target.closest('.toolbar-header')) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', outsideClick)
		return () => document.removeEventListener('click', outsideClick)
	}, [isOpen])


  	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

    return (
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all border-b duration-300 ${
					isScrolled
						? 'bg-[#0e0e0e]/60 backdrop-blur-xl border-white/10'
						: 'bg-transparent border-transparent'
				}`}
			>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<Link href='/' className='flex items-center gap-3'>
							<div className='w-10 h-10 flex items-center justify-center'>
								<Image
									src='/Vector.svg'
									alt='Evolution Group Logo'
									width={40}
									height={40}
									className='object-contain'
								/>
							</div>
							<p className='font-bold text-white text-xl'>{t.company}</p>
						</Link>

						{/* Desktop Navigation */}
						<nav className='hidden lg:flex items-center gap-8 toolbar-header'>
							<div className='flex flex-col relative'>
								<button
									onClick={toggleSolution}
									className='flex items-center gap-1'
								>
									<span
										className={
											isSolutions
												? 'text-white'
												: 'text-white/60 hover:text-white'
										}
									>
										{solutionTitle?.label}
									</span>
									<svg
										className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</button>
								{isOpen && (
									<div className='absolute top-full mt-2 right-0 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col'>
										{firstItems.map(item => (
											<Link
												key={item.href}
												href={item.href}
												className={`font-medium transition-colors duration-200 ${
													isActive(item.href)
														? 'text-white'
														: 'text-white/60 hover:text-white'
												}`}
											>
												{item.label}
											</Link>
										))}
									</div>
								)}
							</div>

							{restItems.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={`font-medium transition-colors duration-200 ${
										isActive(item.href)
											? 'text-white'
											: 'text-white/60 hover:text-white'
									}`}
								>
									{item.label}
								</Link>
							))}
						</nav>

						{/* Right side: Language + CTA + Mobile Menu */}
						<div className='flex items-center gap-4'>
							<LanguageSwitcher />

							{/* Desktop CTA */}
							<Link
								href='/contact'
								className='hidden sm:block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20'
							>
								{t.cta}
							</Link>

							{/* Mobile Menu Button */}
							<button
								onClick={toggleMenu}
								className='lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors'
								aria-label='Toggle menu'
							>
								{isMobileMenuOpen ? (
									// Close icon
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								) : (
									// Hamburger icon
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4 6h16M4 12h16M4 18h16'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>

					{/* Mobile Menu */}
					{isMobileMenuOpen && (
						<div className='lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-200'>
							<nav className='flex flex-col gap-2'>
								{menuItems.map(item => (
									<Link
										key={item.href}
										href={item.href}
										onClick={closeMenu}
										className={`px-4 py-3 rounded-lg transition-colors ${
											isActive(item.href)
												? 'text-white font-semibold bg-white/10'
												: 'text-white/80 hover:text-white hover:bg-white/5'
										}`}
									>
										{item.label}
									</Link>
								))}
								<Link
									href='/contact'
									onClick={closeMenu}
									className='mt-2 block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20 text-center'
								>
									{t.cta}
								</Link>
							</nav>
						</div>
					)}
				</div>
			</header>
		)
}

export default ModernHeader

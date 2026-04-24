'use client'

import React, { useEffect, useRef, useState } from 'react'
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
	const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false)
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

	const solutionItems = [
		{ href: '/solutions', label: t.solutions },
		{ href: '/solutions/whatsapp', label: t.whatsappCrm },
		{ href: '/solutions/evopay', label: t.evopay },
		{ href: '/solutions/evoclinic', label: t.evoclinic },
		{ href: '/solutions/smartuchet', label: t.smartuchet },
		{ href: '/solutions/edo', label: t.edo },
		{ href: '/solutions/cce', label: t.cce },
	]

	const navItems = [
		{ href: '/cases', label: t.cases },
		{ href: '/technology', label: t.technology },
		{ href: '/about', label: t.about },
		{ href: '/career', label: t.careers },
		{ href: '/contact', label: t.contact },
	]

	const isActive = (href: string) => pathname === href
	const isSolutions = pathname.startsWith('/solutions')

	const handleMouseEnter = () => {
		if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
		setIsOpen(true)
	}

	const handleMouseLeave = () => {
		hoverTimeout.current = setTimeout(() => setIsOpen(false), 200)
	}

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
			document.body.style.overscrollBehavior = 'none'
			const preventTouch = (e: TouchEvent) => {
				const sidebar = document.getElementById('mobile-sidebar')
				if (sidebar && sidebar.contains(e.target as Node)) return
				e.preventDefault()
			}
			document.addEventListener('touchmove', preventTouch, { passive: false })
			return () => {
				document.documentElement.style.overflow = ''
				document.body.style.overflow = ''
				document.body.style.overscrollBehavior = ''
				document.removeEventListener('touchmove', preventTouch)
			}
		}
	}, [isMobileMenuOpen])

	useEffect(() => {
		setIsMobileMenuOpen(false)
		setIsSolutionsExpanded(false)
	}, [pathname])

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		handleScroll()
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<header
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/80 dark:bg-[#0A0E1A]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/[0.06]'
						: 'bg-transparent border-b border-transparent'
				}`}
			>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<Link href='/' className='flex items-center gap-3'>
							<div className='w-8 h-8 flex items-center justify-center'>
								<Image
									src='/Vector.svg'
									alt='Evolution Group Logo'
									width={32}
									height={32}
									className='object-contain'
								/>
							</div>
							<span className='font-semibold text-gray-900 dark:text-[#F0F0F5] text-base'>
								{t.company}
							</span>
						</Link>

						{/* Desktop Navigation */}
						<nav className='hidden lg:flex items-center gap-1'>
							{/* Solutions dropdown */}
							<div
								className='relative'
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
								<div
									className={`flex cursor-pointer items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
										isSolutions
											? 'text-gray-900 dark:text-[#F0F0F5]'
											: 'text-gray-500 dark:text-[#F0F0F5]/60 hover:text-gray-900 dark:hover:text-[#F0F0F5]'
									}`}
								>
									{t.solutions}
									<svg
										className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
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
								</div>

								{/* Dropdown */}
								<div className={`absolute top-full pt-2 left-0 z-50 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-1 invisible pointer-events-none'}`}>
									<div className='w-56 bg-white dark:bg-[#0F1423] border border-gray-200 dark:border-white/[0.08] rounded-xl shadow-lg shadow-black/10 dark:shadow-black/40 p-2'>
										{solutionItems.map(item => (
											<Link
												key={item.href}
												href={item.href}
												className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
													isActive(item.href)
														? 'text-gray-900 dark:text-[#F0F0F5] bg-gray-100 dark:bg-white/[0.06]'
														: 'text-gray-500 dark:text-[#F0F0F5]/60 hover:text-gray-900 dark:hover:text-[#F0F0F5] hover:bg-gray-50 dark:hover:bg-white/[0.04]'
												}`}
											>
												{item.label}
											</Link>
										))}
									</div>
								</div>
							</div>

							{/* Other nav items */}
							{navItems.map(item => (
								<Link
									key={item.href}
									href={item.href}
									className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
										isActive(item.href)
											? 'text-gray-900 dark:text-[#F0F0F5]'
											: 'text-gray-500 dark:text-[#F0F0F5]/60 hover:text-gray-900 dark:hover:text-[#F0F0F5]'
									}`}
								>
									{item.label}
								</Link>
							))}
						</nav>

						{/* Right side */}
						<div className='flex items-center gap-2'>
							<LanguageSwitcher />

							{/* Desktop CTA */}
							<Link
								href='/contact'
								className='hidden sm:inline-flex items-center px-5 py-2 bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-[#0A0E1A] rounded-lg text-sm font-semibold transition-all duration-150 hover:bg-black dark:hover:bg-white'
							>
								{t.cta}
							</Link>

							{/* Mobile Menu Button */}
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className='lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.06] rounded-lg transition-colors'
								aria-label='Toggle menu'
							>
								<svg
									className='w-5 h-5'
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
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Sidebar Overlay */}
			<div
				className={`lg:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
					isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
				onClick={() => setIsMobileMenuOpen(false)}
				aria-hidden='true'
			/>

			{/* Mobile Sidebar - slides from right */}
			<aside
				id='mobile-sidebar'
				className={`lg:hidden fixed top-0 right-0 z-[70] h-[100dvh] w-[280px] max-w-[80vw] bg-white dark:bg-[#0F1423] border-l border-gray-200 dark:border-white/[0.08] shadow-2xl transition-transform duration-300 ease-out will-change-transform ${
					isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className='flex flex-col h-full overflow-y-auto' style={{ WebkitOverflowScrolling: 'touch' }}>
					{/* Sidebar header */}
					<div className='flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/[0.06]'>
						<span className='font-semibold text-gray-900 dark:text-[#F0F0F5] text-base'>
							{t.company}
						</span>
						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className='p-2 text-gray-400 dark:text-[#F0F0F5]/60 hover:text-gray-700 dark:hover:text-[#F0F0F5] hover:bg-gray-100 dark:hover:bg-white/[0.06] rounded-lg transition-colors'
							aria-label='Close menu'
						>
							<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>
					</div>

					{/* Navigation links */}
					<nav className='flex flex-col gap-1 px-4 py-4'>
						{/* Solutions accordion */}
						<button
							onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
							className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm transition-colors ${
								isSolutions
									? 'text-gray-900 dark:text-[#F0F0F5] font-semibold bg-gray-100 dark:bg-white/[0.06]'
									: 'text-gray-600 dark:text-[#F0F0F5]/70 hover:text-gray-900 dark:hover:text-[#F0F0F5] hover:bg-gray-50 dark:hover:bg-white/[0.04]'
							}`}
						>
							{t.solutions}
							<svg
								className={`w-4 h-4 transition-transform duration-200 ${isSolutionsExpanded ? 'rotate-180' : ''}`}
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
							</svg>
						</button>

						{/* Solutions sub-items */}
						<div
							className={`overflow-hidden transition-all duration-200 ease-out ${
								isSolutionsExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
							}`}
						>
							<div className='flex flex-col gap-0.5 pl-3 mt-1'>
								{solutionItems.map(item => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
											isActive(item.href)
												? 'text-gray-900 dark:text-[#F0F0F5] font-semibold bg-gray-100 dark:bg-white/[0.06]'
												: 'text-gray-500 dark:text-[#F0F0F5]/60 hover:text-gray-900 dark:hover:text-[#F0F0F5] hover:bg-gray-50 dark:hover:bg-white/[0.04]'
										}`}
									>
										{item.label}
									</Link>
								))}
							</div>
						</div>

						{/* Other nav items */}
						{navItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setIsMobileMenuOpen(false)}
								className={`px-4 py-3 rounded-lg text-sm transition-colors ${
									isActive(item.href)
										? 'text-gray-900 dark:text-[#F0F0F5] font-semibold bg-gray-100 dark:bg-white/[0.06]'
										: 'text-gray-600 dark:text-[#F0F0F5]/70 hover:text-gray-900 dark:hover:text-[#F0F0F5] hover:bg-gray-50 dark:hover:bg-white/[0.04]'
								}`}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* CTA at bottom */}
					<div className='mt-auto px-4 py-6 border-t border-gray-100 dark:border-white/[0.06]'>
						<Link
							href='/contact'
							onClick={() => setIsMobileMenuOpen(false)}
							className='block w-full px-4 py-3 bg-gray-900 dark:bg-[#F0F0F5] text-white dark:text-[#0A0E1A] rounded-lg text-sm font-semibold text-center transition-colors hover:bg-black dark:hover:bg-white'
						>
							{t.cta}
						</Link>
					</div>
				</div>
			</aside>
		</>
	)
}

export default ModernHeader

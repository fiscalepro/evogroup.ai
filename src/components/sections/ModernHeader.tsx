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
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

    const solutionItems = [
        { href: '/solutions', label: t.solutions },
        { href: '/solutions/whatsapp', label: t.whatsappCrm },
        { href: '/solutions/evopay', label: t.evopay },
        { href: '/solutions/cce', label: t.cce },
    ]

    const navItems = [
        { href: '/cases', label: t.cases },
        { href: '/technology', label: t.technology },
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
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/[0.06]'
                    : 'bg-transparent border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <Image
                                src="/Vector.svg"
                                alt="Evolution Group Logo"
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <span className="font-semibold text-[#F0F0F5] text-base">{t.company}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {/* Solutions dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href="/solutions"
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                    isSolutions
                                        ? 'text-[#F0F0F5]'
                                        : 'text-[#F0F0F5]/60 hover:text-[#F0F0F5]'
                                }`}
                            >
                                {t.solutions}
                                <svg
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Dropdown */}
                            {isOpen && (
                                <div className="absolute top-full pt-2 left-0 z-50">
                                    <div className="w-56 bg-[#0F1423] border border-white/[0.08] rounded-xl shadow-2xl shadow-black/40 p-2">
                                        {solutionItems.map(item => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                                    isActive(item.href)
                                                        ? 'text-[#F0F0F5] bg-white/[0.06]'
                                                        : 'text-[#F0F0F5]/55 hover:text-[#F0F0F5] hover:bg-white/[0.04]'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Other nav items */}
                        {navItems.map(item => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                                    isActive(item.href)
                                        ? 'text-[#F0F0F5]'
                                        : 'text-[#F0F0F5]/60 hover:text-[#F0F0F5]'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <LanguageSwitcher />

                        {/* Desktop CTA */}
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex items-center px-5 py-2 bg-[#F0F0F5] text-[#0B0F1A] rounded-lg text-sm font-semibold transition-all duration-150 hover:bg-white"
                        >
                            {t.cta}
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-[#F0F0F5] hover:bg-white/[0.06] rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-white/[0.06] pt-4">
                        <nav className="flex flex-col gap-1">
                            {[...solutionItems, ...navItems].map(item => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-sm transition-colors ${
                                        isActive(item.href)
                                            ? 'text-[#F0F0F5] font-semibold bg-white/[0.06]'
                                            : 'text-[#F0F0F5]/70 hover:text-[#F0F0F5] hover:bg-white/[0.04]'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-2 block w-full px-4 py-3 bg-[#F0F0F5] text-[#0B0F1A] rounded-lg text-sm font-semibold text-center transition-colors hover:bg-white"
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

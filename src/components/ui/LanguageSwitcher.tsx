'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { useTranslation, Locale } from '@/components/providers/I18nProvider'

const languages = [
    { code: 'ru' as Locale, name: 'Русский', nativeName: 'Русский', flag: '🇷🇺' },
    { code: 'en' as Locale, name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'ky' as Locale, name: 'Кыргызча', nativeName: 'Кыргызча', flag: '🇰🇬' }
]

const LanguageSwitcher: React.FC = React.memo(() => {
    const { locale, changeLanguage } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const currentLanguage = useMemo(() =>
        languages.find(lang => lang.code === locale),
        [locale]
    )

    const handleLanguageChange = useCallback((newLocale: Locale) => {
        changeLanguage(newLocale)
        setIsOpen(false)
    }, [changeLanguage])

    const toggleOpen = useCallback(() => setIsOpen(prev => !prev), [])

    // Закрытие по клику вне области
    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest('.language-switcher')) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isOpen])

    return (
        <div className="relative language-switcher">
            <button
                onClick={toggleOpen}
                className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
                aria-label="Выбрать язык"
            >
                <span className="text-lg" role="img" aria-label={currentLanguage?.name}>
                    {currentLanguage?.flag}
                </span>
                <span className="text-sm font-medium hidden sm:block">
                    {currentLanguage?.nativeName}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 ${
                                locale === language.code
                                    ? 'text-blue-400 bg-white/5'
                                    : 'text-white hover:text-blue-300'
                            }`}
                        >
                            <span className="text-lg" role="img" aria-label={language.name}>
                                {language.flag}
                            </span>
                            <div className="flex-1">
                                <div className="font-medium">{language.nativeName}</div>
                                <div className="text-xs opacity-70">{language.name}</div>
                            </div>
                            {locale === language.code && (
                                <svg
                                    className="w-4 h-4 text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'

export default LanguageSwitcher

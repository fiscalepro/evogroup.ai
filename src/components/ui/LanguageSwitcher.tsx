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
        <div
            className="language-switcher flex items-center gap-0.5 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
            role="group"
            aria-label="Выбрать язык"
        >
            {languages.map((language) => {
                const isActive = locale === language.code
                return (
                    <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        aria-pressed={isActive}
                        aria-label={language.name}
                        className={`relative px-2.5 py-1 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                            isActive
                                ? 'bg-white/15 text-white shadow-sm'
                                : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                        }`}
                    >
                        {language.code.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'

export default LanguageSwitcher

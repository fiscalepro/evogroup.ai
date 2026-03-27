'use client'

import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react'

// Тип для локалей
export type Locale = 'ru' | 'en' | 'ky'

// Простые типы для переводов
type TranslationValue = string | number | boolean | { [key: string]: unknown } | unknown[]
type NamespaceTranslations = Record<string, TranslationValue>
type AllTranslations = Record<Locale, Record<string, NamespaceTranslations>>

// Контекст
interface I18nContextType {
    locale: Locale
    changeLanguage: (locale: Locale) => void
    t: (key: string, namespace?: string) => string
    isHydrated: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Встроенные переводы (без загрузки файлов)
const EMBEDDED_TRANSLATIONS: AllTranslations = {
    ru: {
        common: {
            company_name: 'Evolution Group',
            tagline: 'AI Solutions',
        },
        navigation: {
            solutions: 'Решения',
            cases: 'Кейсы',
            technology: 'Технологии',
            team: 'Команда',
            contact: 'Контакты'
        }
    },
    en: {
        common: {
            company_name: 'Evolution Group',
            tagline: 'AI Solutions',
        },
        navigation: {
            solutions: 'Solutions',
            cases: 'Cases',
            technology: 'Technology',
            team: 'Team',
            contact: 'Contact'
        }
    },
    ky: {
        common: {
            company_name: 'Evolution Group',
            tagline: 'AI чечимдери',
        },
        navigation: {
            solutions: 'Чечимдер',
            cases: 'Мисалдар',
            technology: 'Технологиялар',
            team: 'Команда',
            contact: 'Байланыш'
        }
    }
}

// Провайдер
interface I18nProviderProps {
    children: ReactNode
    initialLocale?: Locale
}

const I18nProviderComponent = ({ children, initialLocale = 'ru' }: I18nProviderProps) => {
    const [locale, setLocale] = useState<Locale>(initialLocale)
    const [isHydrated, setIsHydrated] = useState(false)

    // Синхронизация с localStorage ПОСЛЕ гидратации (предотвращает hydration mismatch)
    useEffect(() => {
        const saved = localStorage.getItem('locale') as Locale
        if (saved && ['ru', 'en', 'ky'].includes(saved)) {
            setLocale(saved)
        }
        setIsHydrated(true)
    }, [])

    // Смена языка (оптимизированная)
    const changeLanguage = React.useCallback((newLocale: Locale) => {
        if (newLocale === locale) return
        setLocale(newLocale)
        if (typeof window !== 'undefined') {
            localStorage.setItem('locale', newLocale)
        }
    }, [locale])

    // Простая функция перевода - всегда возвращает строку
    const t = React.useCallback((key: string, namespace: string = 'common'): string => {
        const localeTranslations = EMBEDDED_TRANSLATIONS[locale]
        if (!localeTranslations) return key

        const namespaceTranslations = localeTranslations[namespace]
        if (!namespaceTranslations) return key

        const keys = key.split('.')
        let value: unknown = namespaceTranslations

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                return key
            }
        }

        // Всегда возвращаем строку
        if (typeof value === 'string') return value
        if (typeof value === 'number') return String(value)
        if (typeof value === 'boolean') return String(value)
        if (Array.isArray(value)) return value.join(', ')
        if (typeof value === 'object') return JSON.stringify(value)

        return key
    }, [locale])

    const contextValue = useMemo<I18nContextType>(() => ({
        locale,
        changeLanguage,
        t,
        isHydrated,
    }), [locale, changeLanguage, t, isHydrated])

    return (
        <I18nContext.Provider value={contextValue}>
            {children}
        </I18nContext.Provider>
    )
}

I18nProviderComponent.displayName = 'I18nProvider'

export const I18nProvider = React.memo(I18nProviderComponent)

// Оптимизированный хук
export function useTranslation(namespace?: string) {
    const context = useContext(I18nContext)

    if (!context) {
        throw new Error('useTranslation must be used within I18nProvider')
    }

    const t = React.useCallback((key: string): string => context.t(key, namespace), [context, namespace])

    return useMemo(() => ({
        locale: context.locale,
        changeLanguage: context.changeLanguage,
        isHydrated: context.isHydrated,
        t: namespace ? t : context.t,
    }), [context.locale, context.changeLanguage, context.isHydrated, namespace, t, context.t])
}

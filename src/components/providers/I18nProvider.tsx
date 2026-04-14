'use client'

import React, { createContext, useContext, useState, useMemo, ReactNode, useEffect } from 'react'
import { locales, type Translations, type LocaleKey } from '@/locales'

// Тип для локалей
export type Locale = LocaleKey

// Контекст
interface I18nContextType {
    locale: Locale
    changeLanguage: (locale: Locale) => void
    t: (key: string, namespace?: string) => string
    tObj: <T extends keyof Translations>(section: T) => Translations[T]
    isHydrated: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

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

    // Обновление lang атрибута на <html> при смене локали
    React.useEffect(() => {
        const langMap: Record<string, string> = { ru: 'ru', en: 'en', ky: 'ky' };
        document.documentElement.lang = langMap[locale] || 'ru';
    }, [locale]);

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
        const localeData = locales[locale]
        if (!localeData) return key

        const ns = (localeData as Record<string, unknown>)[namespace]
        if (!ns || typeof ns !== 'object') return key

        const keys = key.split('.')
        let value: unknown = ns

        for (const k of keys) {
            if (value && typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k]
            } else {
                return key
            }
        }

        if (typeof value === 'string') return value
        if (typeof value === 'number') return String(value)
        if (typeof value === 'boolean') return String(value)
        if (Array.isArray(value)) return value.join(', ')
        if (typeof value === 'object') return JSON.stringify(value)

        return key
    }, [locale])

    // Типизированная функция для получения объекта переводов секции
    const tObj = React.useCallback(<T extends keyof Translations>(section: T): Translations[T] => {
        return locales[locale][section]
    }, [locale])

    const contextValue = useMemo<I18nContextType>(() => ({
        locale,
        changeLanguage,
        t,
        tObj,
        isHydrated,
    }), [locale, changeLanguage, t, tObj, isHydrated])

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
        tObj: context.tObj,
    }), [context.locale, context.changeLanguage, context.isHydrated, context.tObj, namespace, t, context.t])
}

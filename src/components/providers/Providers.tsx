'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { I18nProvider } from '@/components/providers/I18nProvider'

export const Providers = React.memo(({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    // Мемоизируем navigate функцию
    const navigate = React.useCallback((path: string) => {
        router.push(path)
    }, [router])

    return (
        <I18nProvider initialLocale="ru">
            <NextUIProvider navigate={navigate}>
                {children}
            </NextUIProvider>
        </I18nProvider>
    )
})

Providers.displayName = 'Providers'

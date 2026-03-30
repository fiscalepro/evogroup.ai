'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export const Providers = React.memo(({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    const navigate = React.useCallback((path: string) => {
        router.push(path)
    }, [router])

    return (
        <ThemeProvider>
            <I18nProvider initialLocale="ru">
                <NextUIProvider navigate={navigate}>
                    {children}
                </NextUIProvider>
            </I18nProvider>
        </ThemeProvider>
    )
})

Providers.displayName = 'Providers'

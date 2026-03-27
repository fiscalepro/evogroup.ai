'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export const Providers = React.memo(({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    // Мемоизируем navigate функцию
    const navigate = React.useCallback((path: string) => {
        router.push(path)
    }, [router])

    return (
        <NextUIProvider navigate={navigate}>
            {children}
        </NextUIProvider>
    )
})

Providers.displayName = 'Providers'

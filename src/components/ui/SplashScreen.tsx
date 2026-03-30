'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const SplashScreen: React.FC = () => {
    const [phase, setPhase] = useState<'check' | 'visible' | 'fading' | 'hidden'>('check')

    useEffect(() => {
        // Only show splash once per browser session
        if (sessionStorage.getItem('splashShown')) {
            setPhase('hidden')
            return
        }
        sessionStorage.setItem('splashShown', '1')
        setPhase('visible')

        const fadeTimer = setTimeout(() => setPhase('fading'), 800)
        const hideTimer = setTimeout(() => setPhase('hidden'), 1300)
        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    if (phase === 'hidden' || phase === 'check') return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-[#0A0E1A] transition-opacity duration-500 ${
                phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            <div className="flex flex-col items-center gap-6">
                {/* Logo with pulse */}
                <div className="relative">
                    <div className="w-16 h-16 flex items-center justify-center animate-[scaleIn_0.5s_ease-out]">
                        <Image
                            src="/Vector.svg"
                            alt="Evolution Group"
                            width={56}
                            height={56}
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Ring animation */}
                    <div className="absolute inset-0 -m-3 rounded-full border-2 border-gray-200 dark:border-white/10 animate-ping opacity-30" />
                </div>

                {/* Company name */}
                <span className="text-sm font-semibold text-gray-900 dark:text-[#F0F0F5] tracking-wide animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                    Evolution Group
                </span>

                {/* Loading bar */}
                <div className="w-32 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden animate-[fadeIn_0.4s_ease-out_0.3s_both]">
                    <div className="h-full bg-gray-900 dark:bg-white rounded-full animate-[loadBar_0.8s_ease-in-out_both]" />
                </div>
            </div>
        </div>
    )
}

export default SplashScreen

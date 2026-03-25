'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const PortfolioGallery: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('portfolioGallery')

    return (
        <section id="portfolio" className="py-24 bg-slate-800/20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {t.title}
                </h2>
                <p className="text-xl text-white/70">
                    {t.subtitle}
                </p>
            </div>
        </section>
    )
}

export default PortfolioGallery

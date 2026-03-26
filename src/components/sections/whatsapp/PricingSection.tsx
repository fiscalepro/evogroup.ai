'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@nextui-org/react'

interface PricingPlan {
    name: string
    price: string
    period: string
    description: string
    features: { name: string; included: boolean }[]
    recommended?: boolean
    cta: string
}

const PricingSection: React.FC = () => {
    const { tObj } = useTranslation()
    const translations = tObj('whatsappPricing')
    const [isYearly, setIsYearly] = useState(false)

    const scrollToContact = () => {
        const element = document.getElementById('whatsapp-contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="pricing" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-400 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>

                    {/* Billing toggle */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <span className={`text-sm ${!isYearly ? 'text-white' : 'text-white/50'}`}>
                            {translations.monthly}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className={`relative w-14 h-7 rounded-full transition-colors ${isYearly ? 'bg-green-600' : 'bg-white/20'}`}
                        >
                            <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isYearly ? 'left-8' : 'left-1'}`} />
                        </button>
                        <span className={`text-sm ${isYearly ? 'text-white' : 'text-white/50'}`}>
                            {translations.yearly}
                        </span>
                        {isYearly && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                {translations.yearlySave}
                            </span>
                        )}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {translations.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                                plan.recommended
                                    ? 'bg-gradient-to-b from-green-500/20 to-green-500/5 border-green-500/50'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                            }`}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {translations.popular}
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-white/60 mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-4xl font-bold text-white">
                                        {plan.price === 'Узнать цену' || plan.price === 'Get pricing' || plan.price === 'Бааны билүү'
                                            ? ''
                                            : isYearly
                                                ? Math.round(parseInt(plan.price.replace(',', '')) * 12 * 0.8).toLocaleString()
                                                : plan.price}
                                    </span>
                                    {plan.price !== 'По запросу' && plan.price !== 'Custom' && plan.price !== 'Суроо боюнча' && (
                                        <>
                                            <span className="text-white/60 text-sm">{translations.currency}</span>
                                            <span className="text-white/60 text-sm">
                                                {isYearly ? translations.perYear : translations.perMonth}
                                            </span>
                                        </>
                                    )}
                                    {(plan.price === 'Узнать цену' || plan.price === 'Get pricing' || plan.price === 'Бааны билүү') && (
                                        <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    )}
                                </div>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        {feature.included ? (
                                            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-white/80' : 'text-white/55'}`}>
                                            {feature.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${
                                    plan.recommended
                                        ? 'bg-green-600 hover:bg-green-700 text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}
                                onPress={scrollToContact}
                            >
                                {plan.price === 'Узнать цену' || plan.price === 'Get pricing' || plan.price === 'Бааны билүү'
                                    ? translations.contactSales
                                    : translations.startTrial}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-12 text-center text-sm text-white/50">
                    <p>
                        {translations.additionalInfo}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PricingSection

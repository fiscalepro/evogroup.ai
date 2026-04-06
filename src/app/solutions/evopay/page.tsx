'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import EvoPayHeroSection from '@/components/sections/evopay/EvoPayHeroSection'
import ProblemSection from '@/components/sections/evopay/ProblemSection'
import HowItWorksSection from '@/components/sections/evopay/HowItWorksSection'
import BenefitsSection from '@/components/sections/evopay/BenefitsSection'
import FeaturesSection from '@/components/sections/evopay/FeaturesSection'
import EvoPayPricingSection from '@/components/sections/evopay/EvoPayPricingSection'
import EvoPayDemoForm from '@/components/sections/evopay/EvoPayDemoForm'
import PageBackground from '@/components/sections/PageBackground'

function EvoPayContent() {
    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground accent="green" />

            <ModernHeader />

            <EvoPayHeroSection />
            <ProblemSection />
            <HowItWorksSection />
            <BenefitsSection />
            <FeaturesSection />
            <EvoPayPricingSection />
            <EvoPayDemoForm />

            <Footer />
        </div>
    )
}

export default function EvoPayPage() {
    return (
        <I18nProvider initialLocale="ru">
            <EvoPayContent />
        </I18nProvider>
    )
}

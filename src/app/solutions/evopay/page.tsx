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

function EvoPayContent() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '4s'}} />
            </div>

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

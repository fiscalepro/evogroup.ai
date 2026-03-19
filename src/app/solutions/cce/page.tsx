'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import CCEHeroSection from '@/components/sections/cce/CCEHeroSection'
import CCEProblemSection from '@/components/sections/cce/CCEProblemSection'
import CCEPlatformOverview from '@/components/sections/cce/CCEPlatformOverview'
import CCESwarmIntelligence from '@/components/sections/cce/CCESwarmIntelligence'
import CCEDeveloperGrowth from '@/components/sections/cce/CCEDeveloperGrowth'
import CCESecuritySection from '@/components/sections/cce/CCESecuritySection'
import CCEHowItWorks from '@/components/sections/cce/CCEHowItWorks'
import CCEContactForm from '@/components/sections/cce/CCEContactForm'
import PageBackground from '@/components/sections/PageBackground'

function CCEContent() {
    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground accent="purple" />

            <ModernHeader />

            <CCEHeroSection />
            <CCEProblemSection />
            <CCEPlatformOverview />
            <CCESwarmIntelligence />
            <CCEDeveloperGrowth />
            <CCESecuritySection />
            <CCEHowItWorks />
            <CCEContactForm />

            <Footer />
        </div>
    )
}

export default function CCEPage() {
    return (
        <I18nProvider initialLocale="ru">
            <CCEContent />
        </I18nProvider>
    )
}

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

function CCEContent() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[100px] animate-float" style={{animationDelay: '4s'}} />
            </div>

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

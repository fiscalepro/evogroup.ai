'use client'

import { I18nProvider } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import WhatsAppHeroSection from '@/components/sections/whatsapp/WhatsAppHeroSection'
import ProblemCards from '@/components/sections/whatsapp/ProblemCards'
import UnifiedInboxShowcase from '@/components/sections/whatsapp/UnifiedInboxShowcase'
import WhatsAppAIBotSection from '@/components/sections/whatsapp/WhatsAppAIBotSection'
import QualityControlSection from '@/components/sections/whatsapp/QualityControlSection'
import TrainingSystemSection from '@/components/sections/whatsapp/TrainingSystemSection'
import BonusSystemSection from '@/components/sections/whatsapp/BonusSystemSection'
// import WhatsAppCaseStudies from '@/components/sections/whatsapp/WhatsAppCaseStudies'
import PricingSection from '@/components/sections/whatsapp/PricingSection'
import FAQSection from '@/components/sections/whatsapp/FAQSection'
import WhatsAppContactForm from '@/components/sections/whatsapp/WhatsAppContactForm'

function WhatsAppCRMContent() {
    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '4s'}} />
            </div>

            <ModernHeader />

            <WhatsAppHeroSection />
            <ProblemCards />
            <UnifiedInboxShowcase />
            <WhatsAppAIBotSection />
            <QualityControlSection />
            <TrainingSystemSection />
            <BonusSystemSection />
            {/* <WhatsAppCaseStudies /> */}
            <PricingSection />
            <FAQSection />
            <WhatsAppContactForm />

            <Footer />
        </div>
    )
}

export default function WhatsAppCRMPage() {
    return (
        <I18nProvider initialLocale="ru">
            <WhatsAppCRMContent />
        </I18nProvider>
    )
}

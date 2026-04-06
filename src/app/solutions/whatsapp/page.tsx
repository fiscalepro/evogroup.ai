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
import PageBackground from '@/components/sections/PageBackground'

function WhatsAppCRMContent() {
    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] transition-colors duration-300">
            <PageBackground accent="green" />

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

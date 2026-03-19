'use client'

import ModernHeader from '@/components/sections/ModernHeader'
import HeroRedesign from '@/components/sections/HeroRedesign'
import { PartnersMarquee } from '@/components/sections/PartnerMarquee'
import ProblemStatement from '@/components/sections/ProblemStatement'
import SolutionsPreview from '@/components/sections/SolutionsPreview'
import CaseStudies from '@/components/sections/CaseStudies'
import CTABanner from '@/components/sections/CTABanner'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground />
            <ModernHeader />
            <HeroRedesign />
            <PartnersMarquee />
            <ProblemStatement />
            <SolutionsPreview />
            <CaseStudies />
            <CTABanner />
            <Footer />
        </div>
    )
}

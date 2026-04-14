'use client'

import ModernHeader from '@/components/sections/ModernHeader'
import HeroRedesign from '@/components/sections/HeroRedesign'
import ProblemStatement from '@/components/sections/ProblemStatement'
import SolutionsPreview from '@/components/sections/SolutionsPreview'
import CaseStudies from '@/components/sections/CaseStudies'
import Certifications from '@/components/sections/Certifications'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import TrustSignals from '@/components/sections/TrustSignals'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground />
            <ModernHeader />
            <HeroRedesign />
            <TrustSignals />
            <ProblemStatement />
            <SolutionsPreview />
            <CaseStudies />
            <Certifications />
            <Footer />
        </div>
    )
}

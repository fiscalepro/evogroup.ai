'use client'

import ModernHeader from '@/components/sections/ModernHeader'
import HeroRedesign from '@/components/sections/HeroRedesign'
import ProblemStatement from '@/components/sections/ProblemStatement'
import SolutionsPreview from '@/components/sections/SolutionsPreview'
import CaseStudies from '@/components/sections/CaseStudies'
import Certifications from '@/components/sections/Certifications'
import Footer from '@/components/sections/Footer'
import TrustSignals from '@/components/sections/TrustSignals'

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#eeeeee] dark:bg-[#0A0E1A] dot-grid transition-colors duration-300">
            <ModernHeader />
            <HeroRedesign />
            <TrustSignals />
            <div className="section-tinted">
                <ProblemStatement />
            </div>
            <SolutionsPreview />
            <div className="section-tinted">
                <CaseStudies />
            </div>
            <Certifications />
            <Footer />
        </div>
    )
}

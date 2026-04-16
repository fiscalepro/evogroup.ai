import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ModernHeader from '@/components/sections/ModernHeader'
import HeroRedesign from '@/components/sections/HeroRedesign'
import Footer from '@/components/sections/Footer'

// Lazy load секций ниже fold — грузятся только когда пользователь скроллит
const TrustSignals = dynamic(() => import('@/components/sections/TrustSignals'), { ssr: false })
const ProblemStatement = dynamic(() => import('@/components/sections/ProblemStatement'), { ssr: false })
const SolutionsPreview = dynamic(() => import('@/components/sections/SolutionsPreview'), { ssr: false })
const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'), { ssr: false })
const Certifications = dynamic(() => import('@/components/sections/Certifications'), { ssr: false })

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

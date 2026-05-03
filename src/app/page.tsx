import dynamic from 'next/dynamic'
import ModernHeader from '@/components/sections/ModernHeader'
import HeroEvoGroup from '@/components/sections/HeroEvoGroup'
import Footer from '@/components/sections/Footer'

const KeyPartners = dynamic(() => import('@/components/sections/KeyPartners'))
const ProblemStatement = dynamic(() => import('@/components/sections/ProblemStatement'))
const SolutionsPreview = dynamic(() => import('@/components/sections/SolutionsPreview'))
const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'))
const CTASection = dynamic(() => import('@/components/sections/CTASection'))

export default function Home() {
    return (
        <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#eeeeee] dark:bg-[#0A0E1A] dot-grid transition-colors duration-300">
            <ModernHeader />
            <HeroEvoGroup />
            <KeyPartners />
            <ProblemStatement />
            <SolutionsPreview />
            <CaseStudies />
            <CTASection />
            <Footer />
        </div>
    )
}

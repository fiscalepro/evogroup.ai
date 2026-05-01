import dynamic from 'next/dynamic'
import ModernHeader from '@/components/sections/ModernHeader'
import HeroEvoGroup from '@/components/sections/HeroEvoGroup'
import Footer from '@/components/sections/Footer'

// Lazy load секций ниже fold — грузятся только когда пользователь скроллит
const KeyPartners = dynamic(() => import('@/components/sections/KeyPartners'))
const ProblemStatement = dynamic(() => import('@/components/sections/ProblemStatement'))
const SolutionsPreview = dynamic(() => import('@/components/sections/SolutionsPreview'))
const CaseStudies = dynamic(() => import('@/components/sections/CaseStudies'))
const Certifications = dynamic(() => import('@/components/sections/Certifications'))

export default function Home() {
    return (
        <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#eeeeee] dark:bg-[#0A0E1A] dot-grid transition-colors duration-300">
            <ModernHeader />
            <HeroEvoGroup />
            <KeyPartners />
            <ProblemStatement />
            <SolutionsPreview />
            <div className="section-tinted">
                <CaseStudies />
            </div>
            <Certifications />
            <Footer />
        </div>
    )
}

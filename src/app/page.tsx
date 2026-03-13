'use client'

import ModernHeader from '@/components/sections/ModernHeader'
import ModernHero from '@/components/sections/ModernHero'
import TrustSignals from '@/components/sections/TrustSignals'
import CaseStudies from '@/components/sections/CaseStudies'
import Footer from '@/components/sections/Footer'
import { PartnersMarquee } from '@/components/sections/PartnerMarquee'

export default function Home() {
    return (
                <div className="relative min-h-screen bg-black">
                    {/* Apple-style gradient background */}
                    {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] animate-float" />
                        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
                        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-indigo-500/15 rounded-full blur-[110px] animate-float" style={{animationDelay: '4s'}} />
                    </div> */}

                    <ModernHeader />
                    <ModernHero />
                    <PartnersMarquee />

                    <TrustSignals />
                    <CaseStudies />

                    {/* CTA Section */}
                    {/* <section className="relative py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Готовы начать проект?
                            </h2>
                            <p className="text-xl text-white/70 mb-8">
                                Свяжитесь с нами и мы обсудим, как AI может улучшить ваш бизнес
                            </p>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg"
                                >
                                    Связаться с нами
                                </Button>
                            </Link>
                        </div>
                    </section> */}

                    <Footer />
                </div>
    )
}
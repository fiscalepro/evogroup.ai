'use client'

import React from 'react'

interface PageBackgroundProps {
    /** Optional accent color position: 'blue' | 'green' | 'purple' - adds a subtle tinted area */
    accent?: 'blue' | 'green' | 'purple'
    /** Whether to show the aurora top band (default: true) */
    aurora?: boolean
}

const accentStyles = {
    blue: 'radial-gradient(ellipse 50% 40% at 70% 20%, rgba(56, 130, 246, 0.06), transparent)',
    green: 'radial-gradient(ellipse 50% 40% at 30% 30%, rgba(16, 185, 129, 0.05), transparent)',
    purple: 'radial-gradient(ellipse 50% 40% at 70% 25%, rgba(139, 92, 246, 0.06), transparent)',
}

const PageBackground: React.FC<PageBackgroundProps> = ({ accent, aurora = true }) => {
    return (
        <div className="fixed inset-0 pointer-events-none hidden dark:block" aria-hidden="true">
            {/* Layer 1: Base gradient mesh — multiple color points for rich depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: [
                        'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(30, 58, 138, 0.18), transparent 60%)',
                        'radial-gradient(ellipse 40% 40% at 10% 20%, rgba(30, 64, 175, 0.07), transparent 50%)',
                        'radial-gradient(ellipse 40% 30% at 90% 60%, rgba(67, 56, 202, 0.05), transparent 50%)',
                        'radial-gradient(ellipse 50% 40% at 40% 90%, rgba(30, 58, 138, 0.04), transparent 50%)',
                    ].join(', '),
                }}
            />

            {/* Layer 2: Aurora top band — colorful gradient strip at the very top */}
            {aurora && (
                <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{
                        background: 'linear-gradient(90deg, transparent 5%, rgba(59, 130, 246, 0.5) 20%, rgba(139, 92, 246, 0.4) 40%, rgba(16, 185, 129, 0.3) 60%, rgba(59, 130, 246, 0.4) 80%, transparent 95%)',
                    }}
                />
            )}

            {/* Layer 3: Optional page-specific accent */}
            {accent && (
                <div
                    className="absolute inset-0"
                    style={{ background: accentStyles[accent] }}
                />
            )}

            {/* Layer 4: Noise/grain texture for depth — SVG filter */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
                <filter id="grain">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain)" />
            </svg>

            {/* Layer 5: Subtle dot grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />
        </div>
    )
}

export default PageBackground

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/components/providers/I18nProvider'

const platforms = [
    { name: 'Claude Code', company: 'Anthropic', color: 'from-orange-400 to-amber-500' },
    { name: 'OpenAI Codex', company: 'OpenAI', color: 'from-emerald-400 to-green-500' },
    { name: 'Gemini CLI', company: 'Google', color: 'from-blue-400 to-cyan-500' },
    { name: 'OpenCode', company: 'Open Source', color: 'from-violet-400 to-purple-500' },
    { name: 'Qwen Code', company: 'Alibaba', color: 'from-sky-400 to-blue-500' },
    { name: 'OpenClaw', company: 'Plugins & Agents', color: 'from-rose-400 to-pink-500' },
]

const CCEPlatformOverview: React.FC = () => {
    const { tObj } = useTranslation()
    const t = tObj('ccePlatform')

    const pillarIcons = [
        // Multi-platform / globe icon
        <svg key="globe" className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>,
        // Dashboard icon
        <svg key="dashboard" className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>,
        // Config/gear icon
        <svg key="config" className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>,
    ]

    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-10 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-violet-500/10 rounded-full text-xs font-bold text-violet-400 uppercase tracking-wider mb-6"
                >
                    {t.badge}
                </motion.span>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-16"
                >
                    {t.title}
                </motion.h2>

                {/* Pillars grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {t.pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`bg-[#1a1a24] border border-white/5 rounded-2xl p-8 transition-all ${pillar.borderHover} hover:-translate-y-2 group relative overflow-hidden`}
                        >
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                            {/* Icon */}
                            <div className={`w-16 h-16 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {pillarIcons[index]}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed mb-6">{pillar.description}</p>

                            {/* Platform tags (only for first pillar) */}
                            {pillar.showPlatforms && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {platforms.map((platform, pIndex) => (
                                        <span
                                            key={pIndex}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium transition-all hover:border-white/25 hover:bg-white/10"
                                        >
                                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${platform.color}`} />
                                            <span className="text-white/80">{platform.name}</span>
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Features list */}
                            <ul className="space-y-3">
                                {pillar.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-violet-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-white/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Status Line Feature Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 bg-[#1a1a24] border border-white/5 rounded-2xl p-6 sm:p-8 overflow-hidden"
                >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left: description */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1 mb-4">
                                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                                <span className="text-xs font-medium text-violet-300">ccstatusline</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t.statusline.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-5">{t.statusline.description}</p>
                            <div className="space-y-3">
                                {t.statusline.features.map((feat: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-white/70">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Terminal mock with 3 status lines */}
                        <div className="bg-black/60 border border-white/10 rounded-xl overflow-hidden">
                            {/* Terminal header */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-white/55 font-mono">terminal</span>
                            </div>

                            {/* Terminal content area */}
                            <div className="px-4 py-3 min-h-[80px]">
                                <p className="text-xs text-white/50 font-mono">{t.statusline.terminalHint}</p>
                            </div>

                            {/* Status Line 1 */}
                            <div className="px-4 py-1.5 bg-[#0a0a14] border-t border-white/5 font-mono text-xs flex items-center gap-2 flex-wrap">
                                <span className="text-cyan-400">Model: Opus 4.6</span>
                                <span className="text-white/20">|</span>
                                <span className="text-yellow-400">Ctx(u): 86.2%</span>
                                <span className="text-white/20">|</span>
                                <span className="text-magenta-400 text-fuchsia-400">{'\u2387'}main(+4,-0)</span>
                                <span className="text-white/20">|</span>
                                <span className="text-blue-400">cwd: .../evogroup</span>
                            </div>

                            {/* Status Line 2 */}
                            <div className="px-4 py-1.5 bg-[#0a0a14] border-t border-white/5 font-mono text-xs flex items-center gap-2 flex-wrap">
                                <span className="text-white/55">In: 145</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/55">Out: 56.7k</span>
                                <span className="text-white/20">|</span>
                                <span className="text-green-400">Cached: 11.0M</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/55">Block: 3hr 33m</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/55">Session: 32m</span>
                                <span className="text-white/20">|</span>
                                <span className="text-white/55">v2.1.49</span>
                            </div>

                            {/* Status Line 3 — CCE Enterprise */}
                            <div className="px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-amber-500/10 border-t border-violet-500/20 font-mono text-xs flex items-center gap-2">
                                <span className="text-white/90">{'\u26A0'} CCE 2.0.27 {'\u2192'} 2.0.28 /cce update</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CCEPlatformOverview

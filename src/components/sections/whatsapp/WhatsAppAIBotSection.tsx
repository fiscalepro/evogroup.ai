'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

interface QuickReply {
    text: string
    response: string
}

const WhatsAppAIBotSection: React.FC = () => {
    const { tObj } = useTranslation()
    const translations = tObj('whatsappAiBot')
    const [selectedReply, setSelectedReply] = useState<number | null>(null)
    const [isTyping, setIsTyping] = useState(false)

    const handleQuickReply = async (index: number) => {
        setSelectedReply(null)
        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsTyping(false)
        setSelectedReply(index)
    }

    return (
        <section id="ai-bot" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-4 py-2 text-sm text-purple-400 shadow-sm mb-4 sm:mb-6">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Features */}
                    <div className="space-y-4">
                        {translations.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                            >
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                    <p className="text-white/60 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Demo Chat */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                        {/* Chat header */}
                        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-white font-medium">{translations.botName}</div>
                                <div className="text-green-400 text-xs">{translations.botStatus}</div>
                            </div>
                        </div>

                        {/* Quick replies */}
                        <div className="p-4 border-b border-white/10">
                            <p className="text-white/60 text-sm mb-3">{translations.tryIt}</p>
                            <div className="grid grid-cols-2 gap-2">
                                {translations.quickReplies.map((reply, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickReply(index)}
                                        className="p-3 bg-white/5 border border-white/10 rounded-lg text-left hover:bg-white/10 hover:border-purple-500/30 transition-all text-sm text-white/80"
                                    >
                                        {reply.text}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat messages */}
                        <div className="p-4 min-h-[200px] space-y-3">
                            {selectedReply !== null && (
                                <>
                                    {/* User message */}
                                    <div className="flex justify-end">
                                        <div className="bg-green-600 rounded-lg rounded-tr-none px-3 py-2 max-w-[80%]">
                                            <p className="text-white text-sm">{translations.quickReplies[selectedReply].text}</p>
                                        </div>
                                    </div>
                                    {/* Bot message */}
                                    <div className="flex justify-start">
                                        <div className="bg-white/10 rounded-lg rounded-tl-none px-3 py-2 max-w-[80%]">
                                            <p className="text-white text-sm">{translations.quickReplies[selectedReply].response}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 rounded-lg px-4 py-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                                            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {selectedReply === null && !isTyping && (
                                <div className="flex items-center justify-center h-32 text-white/55 text-sm">
                                    {translations.placeholder}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatsAppAIBotSection

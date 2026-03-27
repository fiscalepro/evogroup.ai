'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

interface QuickReply {
    text: string
    response: string
}

const WhatsAppAIBotSection: React.FC = () => {
    const { locale } = useTranslation()
    const [selectedReply, setSelectedReply] = useState<number | null>(null)
    const [isTyping, setIsTyping] = useState(false)

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'AI Bot',
                title: 'AI assistant that works 24/7',
                subtitle: 'Handles 40-60% of inquiries automatically. Complex cases go to managers.',
                features: [
                    { title: 'Works around the clock', description: 'Responds even at night and on weekends' },
                    { title: 'Learns your business', description: 'Trained on your FAQs and products' },
                    { title: 'Passes to managers', description: 'Complex questions go to humans' },
                    { title: 'Saves time', description: '40-60% of questions handled automatically' }
                ],
                quickReplies: [
                    { text: 'How much is delivery?', response: 'Delivery within Bishkek is free for orders over 5,000 som. For smaller orders, delivery is 200 som. Outside the city — calculated individually. When would you like delivery?' },
                    { text: 'Is it in stock?', response: 'Please specify which product you\'re interested in, and I\'ll check availability immediately. You can also send a photo if you have one!' },
                    { text: 'When will my order arrive?', response: 'To check your order status, please provide your order number or the phone number used for the order. I\'ll find all the information right away!' },
                    { text: 'How to pay?', response: 'We accept: bank cards, cash on delivery, bank transfer, Elsom, O!Money. For orders over 50,000 som, installment payment is available. Which method works best for you?' }
                ],
                tryIt: 'Try asking a question',
                botName: 'AI Assistant',
                botStatus: 'Online • Responds instantly',
                placeholder: 'Click on a question above...'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'AI Бот',
                title: '24/7 иштеген AI жардамчы',
                subtitle: 'Сурамдардын 40-60%ын автоматтык түрдө иштетет. Татаал учурлар менеджерлерге өтөт.',
                features: [
                    { title: 'Күнү-түнү иштейт', description: 'Түнкүсүн жана дем алыш күндөрү да жооп берет' },
                    { title: 'Бизнесиңизди үйрөнөт', description: 'Көп берилүүчү суроолорго жана товарларга үйрөтүлгөн' },
                    { title: 'Менеджерлерге өткөрөт', description: 'Татаал суроолор адамдарга өтөт' },
                    { title: 'Убакытты үнөмдөйт', description: 'Суроолордун 40-60%ы автоматтык түрдө иштелет' }
                ],
                quickReplies: [
                    { text: 'Жеткирүү канча?', response: 'Бишкек ичинде 5,000 сомдон жогору буйрутмалар үчүн жеткирүү акысыз. Кичине буйрутмалар үчүн - 200 сом. Шаардан тышкары - жекече эсептелет. Качан жеткирүүнү каалайсыз?' },
                    { text: 'Бар белең?', response: 'Кайсы товар сизди кызыктырарын так көрсөтүңүз, мен дароо бар экендигин текшерем. Сүрөт жөнөтсөңүз да болот!' },
                    { text: 'Буйрутмам качан келет?', response: 'Буйрутмаңыздын статусун текшерүү үчүн буйрутма номерин же буйрутма берүүдө колдонулган телефон номерин айтыңыз. Бардык маалыматты дароо табам!' },
                    { text: 'Кантип төлөйм?', response: 'Биз кабыл алабыз: банк карталары, жеткирүүдө накталай, банк которуусу, Элсом, О!Деньги. 50,000 сомдон жогору буйрутмалар үчүн бөлүп төлөө бар. Кайсы ыкма сизге ыңгайлуу?' }
                ],
                tryIt: 'Суроо берип көрүңүз',
                botName: 'AI Жардамчы',
                botStatus: 'Онлайн • Тез жооп берет',
                placeholder: 'Жогорудагы суроону басыңыз...'
            }
        } else {
            return {
                badge: 'AI Бот',
                title: 'AI-ассистент, который работает 24/7',
                subtitle: 'Обрабатывает 40-60% запросов автоматически. Сложные случаи передаёт менеджерам.',
                features: [
                    { title: 'Работает круглосуточно', description: 'Отвечает даже ночью и в выходные' },
                    { title: 'Знает ваш бизнес', description: 'Обучен на ваших FAQ и товарах' },
                    { title: 'Передаёт менеджерам', description: 'Сложные вопросы идут к людям' },
                    { title: 'Экономит время', description: '40-60% вопросов обрабатываются автоматически' }
                ],
                quickReplies: [
                    { text: 'Сколько стоит доставка?', response: 'Доставка по Бишкеку бесплатная при заказе от 5,000 сом. При меньшем заказе — 200 сом. За пределы города — рассчитывается индивидуально. Когда вам удобно получить заказ?' },
                    { text: 'Есть ли в наличии?', response: 'Уточните, пожалуйста, какой товар вас интересует, и я сразу проверю наличие. Можете также прислать фото, если есть!' },
                    { text: 'Когда привезёте заказ?', response: 'Для проверки статуса заказа укажите номер заказа или телефон, на который оформляли. Сразу найду всю информацию!' },
                    { text: 'Как оплатить?', response: 'Принимаем: банковские карты, наличные при доставке, банковский перевод, Элсом, О!Деньги. При заказе от 50,000 сом доступна рассрочка. Какой способ вам удобнее?' }
                ],
                tryIt: 'Попробуйте задать вопрос',
                botName: 'AI Ассистент',
                botStatus: 'Онлайн • Отвечает мгновенно',
                placeholder: 'Нажмите на вопрос выше...'
            }
        }
    }

    const translations = getTranslations()

    const handleQuickReply = async (index: number) => {
        setSelectedReply(null)
        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsTyping(false)
        setSelectedReply(index)
    }

    return (
        <section id="ai-bot" className="py-12 sm:py-24 bg-slate-900/30 relative overflow-hidden">
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
                                <div className="flex items-center justify-center h-32 text-white/40 text-sm">
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

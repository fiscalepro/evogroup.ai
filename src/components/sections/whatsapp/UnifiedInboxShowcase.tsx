'use client'

import React from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

const UnifiedInboxShowcase: React.FC = () => {
    const { locale } = useTranslation()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Unified Inbox',
                title: 'All chats in one place',
                subtitle: 'No more switching between phones. See all conversations from any device.',
                features: [
                    { title: 'All message types', description: 'Text, photos, videos, documents, locations, contacts' },
                    { title: 'Interactive buttons', description: 'Quick replies and menu selection' },
                    { title: 'Delivery status', description: 'Sent → Delivered → Read tracking' },
                    { title: 'Full-text search', description: 'Find any message in history instantly' },
                    { title: 'Smart filters', description: 'All / Assigned to me / Unanswered / Archive' }
                ],
                chatPreview: {
                    name: 'Anna Petrova',
                    message: 'When will my order arrive?',
                    time: '2 min ago',
                    unread: 3
                },
                messageExample: 'Hi! Your order #1234 will be delivered tomorrow between 10:00-14:00. Is that convenient?'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Бирдиктүү Inbox',
                title: 'Бардык чаттар бир жерде',
                subtitle: 'Телефондордун ортосунда которулуунун кереги жок. Бардык жазышмаларды каалаган түзүлүштөн көрүңүз.',
                features: [
                    { title: 'Бардык билдирүү түрлөрү', description: 'Текст, сүрөттөр, видеолор, документтер, жайгашкан жерлер, байланыштар' },
                    { title: 'Интерактивдүү баскычтар', description: 'Тез жооптор жана меню тандоо' },
                    { title: 'Жеткирүү статусу', description: 'Жөнөтүлдү → Жеткирилди → Окулду көзөмөлдөө' },
                    { title: 'Толук текст издөө', description: 'Тарыхтан каалаган билдирүүнү дароо табыңыз' },
                    { title: 'Акылдуу чыпкалар', description: 'Бардыгы / Мага дайындалган / Жоопсуз / Архив' }
                ],
                chatPreview: {
                    name: 'Анна Петрова',
                    message: 'Буйрутмам качан жетет?',
                    time: '2 мүн мурун',
                    unread: 3
                },
                messageExample: 'Салам! Сиздин буйрутма #1234 эртең 10:00-14:00 ортосунда жеткирилет. Бул сизге ыңгайлуубу?'
            }
        } else {
            return {
                badge: 'Единый Inbox',
                title: 'Все чаты в одном месте',
                subtitle: 'Больше не нужно переключаться между телефонами. Видите все переписки с любого устройства.',
                features: [
                    { title: 'Все типы сообщений', description: 'Текст, фото, видео, документы, геолокация, контакты' },
                    { title: 'Интерактивные кнопки', description: 'Быстрые ответы и меню выбора' },
                    { title: 'Статус доставки', description: 'Отправлено → Доставлено → Прочитано' },
                    { title: 'Полнотекстовый поиск', description: 'Найдите любое сообщение в истории мгновенно' },
                    { title: 'Умные фильтры', description: 'Все / Назначенные мне / Без ответа / Архив' }
                ],
                chatPreview: {
                    name: 'Анна Петрова',
                    message: 'Когда придёт мой заказ?',
                    time: '2 мин назад',
                    unread: 3
                },
                messageExample: 'Здравствуйте! Ваш заказ #1234 будет доставлен завтра с 10:00 до 14:00. Вам удобно?'
            }
        }
    }

    const translations = getTranslations()

    return (
        <section id="whatsapp-demo" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 text-sm text-green-400 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Mock UI */}
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Header */}
                        <div className="bg-slate-800/50 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-white/40 text-sm">WhatsApp CRM</span>
                        </div>

                        {/* Content */}
                        <div className="grid grid-cols-3">
                            {/* Chat list */}
                            <div className="col-span-1 border-r border-white/10 h-80">
                                <div className="p-3 border-b border-white/10">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-3 py-2 bg-white/5 rounded-lg text-sm text-white/60 placeholder-white/30"
                                        readOnly
                                    />
                                </div>
                                {/* Chat item */}
                                <div className="p-3 bg-green-500/10 border-l-2 border-green-500">
                                    <div className="flex items-start gap-2">
                                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                            AP
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-white text-sm font-medium truncate">{translations.chatPreview.name}</span>
                                                <span className="text-green-400 text-xs">{translations.chatPreview.time}</span>
                                            </div>
                                            <p className="text-white/50 text-xs truncate">{translations.chatPreview.message}</p>
                                        </div>
                                        <span className="bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                                            {translations.chatPreview.unread}
                                        </span>
                                    </div>
                                </div>
                                {/* More chat items (placeholder) */}
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="p-3 border-b border-white/5">
                                        <div className="flex items-start gap-2">
                                            <div className="w-10 h-10 bg-white/10 rounded-full flex-shrink-0" />
                                            <div className="flex-1">
                                                <div className="h-3 bg-white/10 rounded w-20 mb-2" />
                                                <div className="h-2 bg-white/5 rounded w-32" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Chat window */}
                            <div className="col-span-2 h-80 flex flex-col">
                                {/* Chat header */}
                                <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        AP
                                    </div>
                                    <div>
                                        <div className="text-white font-medium">{translations.chatPreview.name}</div>
                                        <div className="text-green-400 text-xs">Online</div>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                                    {/* Incoming message */}
                                    <div className="flex justify-start">
                                        <div className="bg-white/10 rounded-lg rounded-tl-none px-3 py-2 max-w-[70%]">
                                            <p className="text-white text-sm">{translations.chatPreview.message}</p>
                                            <span className="text-white/40 text-xs">10:32</span>
                                        </div>
                                    </div>
                                    {/* Outgoing message */}
                                    <div className="flex justify-end">
                                        <div className="bg-green-600 rounded-lg rounded-tr-none px-3 py-2 max-w-[70%]">
                                            <p className="text-white text-sm">{translations.messageExample}</p>
                                            <div className="flex items-center justify-end gap-1 mt-1">
                                                <span className="text-white/70 text-xs">10:33</span>
                                                <svg className="w-4 h-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="px-4 py-3 border-t border-white/10 flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-1 px-3 py-2 bg-white/5 rounded-lg text-sm text-white/60 placeholder-white/30"
                                        readOnly
                                    />
                                    <button className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Features */}
                    <div className="space-y-4">
                        {translations.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-green-500/30 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                                    <p className="text-white/60 text-sm">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnifiedInboxShowcase

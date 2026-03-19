'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

interface Message {
    id: string
    text: string
    sender: 'user' | 'bot'
    timestamp: Date
    typing?: boolean
}

interface QuickReply {
    id: string
    text: string
    response: string
}

const AIChatbotSection: React.FC = () => {
    const { locale } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputText, setInputText] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Переводы с поддержкой всех языков
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'AI Assistant',
                title: 'Ask Our AI Assistant',
                subtitle: 'Get instant answers about our services, pricing, and AI capabilities for your business',
                demoTitle: 'Chatbot Demo',
                openChatbot: 'Open Chatbot',
                placeholder: 'Type your question...',
                headerTitle: 'AI Assistant',
                headerStatus: 'Online • Responds quickly',
                features: [
                    { title: 'Instant Answers', description: 'Get answers to questions 24/7 without waiting' },
                    { title: 'Smart Advice', description: 'Personalized recommendations for your business' },
                    { title: 'Always With You', description: 'Works on all devices and platforms' }
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'ИИ Жардамчы',
                title: 'Биздин ИИ жардамчыдан сураңыз',
                subtitle: 'Биздин кызматтар, баалар жана бизнесиңиз үчүн ИИ мүмкүнчүлүктөрү жөнүндө тез жооп алыңыз',
                demoTitle: 'Чат-бот демонстрациясы',
                openChatbot: 'Чат-ботту ачуу',
                placeholder: 'Сурагыңызды жазыңыз...',
                headerTitle: 'ИИ Жардамчы',
                headerStatus: 'Онлайн • Тез жооп берет',
                features: [
                    { title: 'Тез жооптор', description: '24/7 күтүүсүз суракка жооп алыңыз' },
                    { title: 'Акылдуу кеңештер', description: 'Бизнесиңиз үчүн жекелештирилген сунуштамалар' },
                    { title: 'Дайыма сиз менен', description: 'Бардык түзүлүштөрдө жана платформаларда иштейт' }
                ]
            }
        } else {
            return {
                badge: 'ИИ Ассистент',
                title: 'Задайте вопрос нашему ИИ-боту',
                subtitle: 'Получите мгновенные ответы о наших услугах, ценах и возможностях ИИ для вашего бизнеса',
                demoTitle: 'Демонстрация чат-бота',
                openChatbot: 'Открыть чат-бот',
                placeholder: 'Напишите ваш вопрос...',
                headerTitle: 'ИИ Ассистент',
                headerStatus: 'Онлайн • Отвечает быстро',
                features: [
                    { title: 'Мгновенные ответы', description: 'Получайте ответы на вопросы 24/7 без ожидания' },
                    { title: 'Умные советы', description: 'Персонализированные рекомендации для вашего бизнеса' },
                    { title: 'Везде с вами', description: 'Работает на всех устройствах и платформах' }
                ]
            }
        }
    }

    const translations = getTranslations()

    // Быстрые ответы для разных языков
    const getQuickReplies = (): QuickReply[] => {
        if (locale === 'en') {
            return [
                {
                    id: '1',
                    text: 'AI Project Cost',
                    response: 'AI project cost depends on many factors: task type, complexity, timeline, and integrations. Base cost starts from $50,000 for 3 months of development. Use our calculator above for precise calculation or contact us for personal consultation.'
                },
                {
                    id: '2',
                    text: 'Development Timeline',
                    response: 'Typical AI solution development timelines:\n• Simple chatbots: 1-2 months\n• Analytics systems: 3-4 months\n• Complex ML models: 4-6 months\n• Enterprise solutions: 6-12 months\n\nExact timelines depend on your requirements and data readiness.'
                },
                {
                    id: '3',
                    text: 'What Technologies Do You Use',
                    response: 'We work with cutting-edge AI technologies:\n• Machine Learning: TensorFlow, PyTorch, Scikit-learn\n• NLP: OpenAI GPT, Transformers, spaCy\n• Computer Vision: OpenCV, YOLO, ResNet\n• Big Data: Apache Spark, Kafka, Elasticsearch\n• Cloud: AWS, Google Cloud, Azure\n\nWe choose optimal stack for each task.'
                },
                {
                    id: '4',
                    text: 'Examples of Your Work',
                    response: 'We have 50+ successful projects:\n• Credit scoring for Demir Bank (+35% accuracy)\n• Digital gov services for MinDigital (+60% speed)\n• Anti-fraud system for KICB (98.5% accuracy)\n• Predictive maintenance for KyrgyzGaz (-45% failures)\n\nView complete portfolio in our work gallery above.'
                }
            ]
        } else if (locale === 'ky') {
            return [
                {
                    id: '1',
                    text: 'ИИ долбоорунун наркы',
                    response: 'ИИ долбоорунун наркы көп факторлордон көз каранды: тапшырманын түрү, татаалдуулугу, мөөнөттөрү жана интеграциялар. Негизги наркы 3 айлык иштеп чыгуу үчүн $50,000дон баштолат. Так эсептөө үчүн жогорудагы калькуляторду колдонуңуз же жеке консультация үчүн биз менен байланышыңыз.'
                },
                {
                    id: '2',
                    text: 'Иштеп чыгуу мөөнөттөрү',
                    response: 'ИИ чечимдерин иштеп чыгуунун типтүү мөөнөттөрү:\n• Жөнөкөй чат-боттор: 1-2 ай\n• Аналитикалык системалар: 3-4 ай\n• Татаал ML моделдер: 4-6 ай\n• Корпоративдик чечимдер: 6-12 ай\n\nТак мөөнөттөр талаптарыңызга жана маалыматтардын даярдыгына көз каранды.'
                },
                {
                    id: '3',
                    text: 'Кандай технологияларды колдоносуздар',
                    response: 'Биз алдыңкы ИИ технологиялары менен иштейбиз:\n• Machine Learning: TensorFlow, PyTorch, Scikit-learn\n• NLP: OpenAI GPT, Transformers, spaCy\n• Computer Vision: OpenCV, YOLO, ResNet\n• Big Data: Apache Spark, Kafka, Elasticsearch\n• Cloud: AWS, Google Cloud, Azure\n\nАр бир тапшырма үчүн эң жакшы стекти тандайбыз.'
                },
                {
                    id: '4',
                    text: 'Ишиңиздин мисалдары',
                    response: 'Бизде 50дон ашык ийгиликтүү долбоорлор бар:\n• Демир Банк үчүн кредиттик скоринг (+35% тактык)\n• Минцифра үчүн санариптик мамлекеттик кызматтар (+60% ылдамдык)\n• KICB үчүн антифрод система (98.5% тактык)\n• КыргызГаз үчүн алдын ала тейлөө (-45% авариялар)\n\nТолук портфолиону жогорудагы иштер галереясынан көрүңүз.'
                }
            ]
        } else {
            return [
                {
                    id: '1',
                    text: 'Стоимость ИИ проекта',
                    response: 'Стоимость ИИ проекта зависит от многих факторов: типа задачи, сложности, сроков и интеграций. Базовая стоимость начинается от $50,000 за 3 месяца разработки. Используйте наш калькулятор выше для точного расчета или свяжитесь с нами для персональной консультации.'
                },
                {
                    id: '2',
                    text: 'Сроки разработки',
                    response: 'Типичные сроки разработки ИИ-решений:\n• Простые чат-боты: 1-2 месяца\n• Аналитические системы: 3-4 месяца\n• Сложные ML модели: 4-6 месяцев\n• Энтерпрайз решения: 6-12 месяцев\n\nТочные сроки зависят от ваших требований и готовности данных.'
                },
                {
                    id: '3',
                    text: 'Какие технологии используете',
                    response: 'Мы работаем с передовыми технологиями ИИ:\n• Machine Learning: TensorFlow, PyTorch, Scikit-learn\n• NLP: OpenAI GPT, Transformers, spaCy\n• Computer Vision: OpenCV, YOLO, ResNet\n• Big Data: Apache Spark, Kafka, Elasticsearch\n• Cloud: AWS, Google Cloud, Azure\n\nВыбираем оптимальный стек под каждую задачу.'
                },
                {
                    id: '4',
                    text: 'Примеры ваших работ',
                    response: 'У нас более 50 успешных проектов:\n• Кредитный скоринг для Демир Банка (+35% точности)\n• Цифровые госуслуги для Минцифры (+60% скорости)\n• Антифрод система для KICB (98.5% точности)\n• Предиктивное обслуживание для КыргызГаз (-45% аварий)\n\nПосмотрите полное портфолио в галерее работ выше.'
                }
            ]
        }
    }

    const quickReplies = getQuickReplies()

    // Ответы бота для разных языков
    const getBotResponses = (): { [key: string]: string } => {
        if (locale === 'en') {
            return {
                'hello': 'Hello! I\'m the AI assistant of Evolution Group. I help answer questions about our AI services and solutions.',
                'services': 'We provide:\n• Custom AI solution development\n• Big data analytics\n• Business process automation\n• Integration with existing systems\n• 24/7 technical support',
                'price': 'Project costs start from $50,000. Use the calculator above or contact us for personal consultation.',
                'contacts': 'Contact us:\n📧 info@fiscalepro.kg\n📞 +996 312 123-456\n🏢 Bishkek, Kievskaya str. 123\n\nOr fill out the contact form on our website.',
                'team': 'Our team has 25+ experts:\n• ML Engineers\n• Data Scientists\n• Backend/Frontend Developers\n• DevOps Engineers\n• Business Analysts\n\nAverage team experience - 7+ years in AI.'
            }
        } else if (locale === 'ky') {
            return {
                'салам': 'Салам! Мен Evolution Group ИИ жардамчысымын. Биздин ИИ кызматтары жана чечимдери жөнүндө суракка жооп берүүгө жардам берем.',
                'кызматтар': 'Биз сунуштайбыз:\n• Буйрутма боюнча ИИ чечимдерин иштеп чыгуу\n• Чоң маалыматтарды талдоо\n• Бизнес процесстерди автоматташтыруу\n• Учурдагы системалар менен интеграция\n• 24/7 техникалык колдоо',
                'баа': 'Долбоорлордун баасы $50,000дон баштолат. Жогорудагы калькуляторду колдонуңуз же жеке консультация үчүн биз менен байланышыңыз.',
                'байланыш': 'Биз менен байланыш:\n📧 info@fiscalepro.kg\n📞 +996 312 123-456\n🏢 Бишкек ш., Киев көч. 123\n\nЖе сайттагы байланыш формасын толтуруңуз.',
                'команда': 'Биздин командада 25+ эксперт бар:\n• ML инженерлер\n• Маалымат окумуштуулары\n• Backend/Frontend өнүктүрүүчүлөр\n• DevOps инженерлер\n• Бизнес аналитиктер\n\nКомандынын ортоcho тажрыйбасы - ИИда 7+ жыл.'
            }
        } else {
            return {
                'привет': 'Привет! Я ИИ-ассистент Evolution Group. Помогу ответить на вопросы о наших услугах и решениях искусственного интеллекта.',
                'услуги': 'Мы предоставляем:\n• Разработку ИИ-решений под заказ\n• Аналитику больших данных\n• Автоматизацию бизнес-процессов\n• Интеграцию с существующими системами\n• Техническую поддержку 24/7',
                'цена': 'Стоимость проектов начинается от $50,000. Используйте калькулятор выше или оставьте заявку для персональной консультации.',
                'контакты': 'Свяжитесь с нами:\n📧 info@fiscalepro.kg\n📞 +996 312 123-456\n🏢 г. Бишкек, ул. Киевская 123\n\nИли заполните форму обратной связи на сайте.',
                'команда': 'В нашей команде 25+ экспертов:\n• ML-инженеры\n• Data Scientists\n• Backend/Frontend разработчики\n• DevOps инженеры\n• Бизнес-аналитики\n\nСредний опыт команды - 7+ лет в ИИ.'
            }
        }
    }

    const botResponses = getBotResponses()

    // Приветствие для разных языков
    const getGreeting = (): string => {
        if (locale === 'en') {
            return 'Hello! I\'m the AI assistant of Evolution Group. I help answer questions about our AI services and solutions. How can I help you?'
        } else if (locale === 'ky') {
            return 'Салам! Мен Evolution Group ИИ жардамчысымын. Биздин ИИ кызматтары жана чечимдери жөнүндө суракка жооп берүүгө жардам берем. Кантип жардам бере алам?'
        } else {
            return 'Здравствуйте! Я ИИ-ассистент Evolution Group. Помогу ответить на вопросы о наших услугах в области искусственного интеллекта. Чем могу помочь?'
        }
    }

    const getRandomDelay = () => Math.random() * 1000 + 500

    const addMessage = (text: string, sender: 'user' | 'bot', typing = false) => {
        const message: Message = {
            id: Date.now().toString(),
            text,
            sender,
            timestamp: new Date(),
            typing
        }
        setMessages(prev => [...prev, message])
    }

    const findBotResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase()

        for (const [key, response] of Object.entries(botResponses)) {
            if (message.includes(key)) {
                return response
            }
        }

        // Универсальные ответы для всех языков
        if (message.includes('помощь') || message.includes('помоги') || message.includes('help') || message.includes('жардам')) {
            if (locale === 'en') {
                return 'Of course! I can tell you about our services, prices, development timelines, and portfolio. What specifically interests you?'
            } else if (locale === 'ky') {
                return 'Албетте! Мен биздин кызматтар, баалар, иштеп чыгуу мөөнөттөрү жана портфолио жөнүндө айта алам. Сизди кандай маселе кызыктырат?'
            } else {
                return 'Конечно! Я могу рассказать о наших услугах, ценах, сроках разработки и портфолио. Что именно вас интересует?'
            }
        }

        if (message.includes('спасибо') || message.includes('thanks') || message.includes('рахмат')) {
            if (locale === 'en') {
                return 'You\'re welcome! If you have more questions - feel free to ask. Ready to help you choose an AI solution for your business.'
            } else if (locale === 'ky') {
                return 'Кайрылык эмес! Дагы сурагыңыз болсо - сураңыз. Бизнесиңиз үчүн ИИ чечимин тандоого жардам берүүгө даярмын.'
            } else {
                return 'Пожалуйста! Если у вас есть еще вопросы - обращайтесь. Готов помочь с выбором ИИ-решения для вашего бизнеса.'
            }
        }

        // Fallback ответ
        if (locale === 'en') {
            return 'Interesting question! For detailed consultation, I recommend contacting our specialists at +996 312 123-456 or filling out the form on our website.'
        } else if (locale === 'ky') {
            return 'Кызыктуу сурак! Толук консультация алуу үчүн адистерибиз менен +996 312 123-456 аркылуу байланышууну же сайтыбыздагы форманы толтурууну сунуштайм.'
        } else {
            return 'Интересный вопрос! Для получения детальной консультации рекомендую связаться с нашими специалистами по телефону +996 312 123-456 или заполнить форму на сайте.'
        }
    }

    const handleSendMessage = async () => {
        if (!inputText.trim()) return

        addMessage(inputText, 'user')
        const userMessage = inputText
        setInputText('')

        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()))

        const response = findBotResponse(userMessage)
        setIsTyping(false)
        addMessage(response, 'bot')
    }

    const handleQuickReply = async (quickReply: QuickReply) => {
        addMessage(quickReply.text, 'user')

        setIsTyping(true)
        await new Promise(resolve => setTimeout(resolve, getRandomDelay()))

        setIsTyping(false)
        addMessage(quickReply.response, 'bot')
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setTimeout(() => {
                addMessage(getGreeting(), 'bot')
            }, 500)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, locale, messages.length])

    return (
        <section id="chatbot" className="py-12 sm:py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-[#F0F0F5]/[0.04] border border-[#F0F0F5]/[0.08] rounded-full px-4 py-2 text-sm text-[#F0F0F5]/60 mb-4 sm:mb-6">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#F0F0F5] mb-4 sm:mb-6 px-4">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-[#F0F0F5]/50 max-w-3xl mx-auto px-4">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#F0F0F5]/[0.02] rounded-2xl p-4 sm:p-8 border border-[#F0F0F5]/[0.06] mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F0F0F5] mb-4 sm:mb-6 text-center">{translations.demoTitle}</h3>

                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {quickReplies.map((reply) => (
                                <button
                                    key={reply.id}
                                    onClick={() => {
                                        setIsOpen(true)
                                        setTimeout(() => handleQuickReply(reply), 300)
                                    }}
                                    className="p-3 sm:p-4 bg-[#F0F0F5]/[0.02] border border-[#F0F0F5]/[0.06] rounded-xl text-left hover:bg-[#F0F0F5]/[0.05] hover:border-[#F0F0F5]/[0.12] transition-all duration-200 group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/[0.08] rounded-lg flex items-center justify-center group-hover:bg-blue-500/[0.12] transition-colors flex-shrink-0">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[#F0F0F5] font-medium text-sm sm:text-base">{reply.text}</div>
                                            <div className="text-[#F0F0F5]/40 text-xs sm:text-sm">
                                                {locale === 'en' ? 'Click for example' :
                                                    locale === 'ky' ? 'Мисал үчүн басыңыз' :
                                                        'Нажмите для примера'}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button
                                onClick={() => setIsOpen(true)}
                                variant="primary"
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                            >
                                {translations.openChatbot}
                            </Button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
                        {translations.features.map((feature, index) => (
                            <div key={index} className="text-center bg-[#F0F0F5]/[0.02] rounded-2xl p-4 sm:p-6 border border-[#F0F0F5]/[0.06]">
                                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#F0F0F5]/[0.04] border border-[#F0F0F5]/[0.06] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                    {index === 0 && (
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    )}
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-[#F0F0F5] mb-2">{feature.title}</h4>
                                <p className="text-[#F0F0F5]/45 text-xs sm:text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Widget */}
            {isOpen && (
                <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] bg-slate-900/95 backdrop-blur-xl sm:rounded-2xl border-t sm:border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-blue-600 to-violet-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-white font-medium text-sm sm:text-base">{translations.headerTitle}</div>
                                <div className="text-white/70 text-xs">{translations.headerStatus}</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] sm:max-w-xs px-4 py-2 rounded-lg ${
                                    message.sender === 'user'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white/10 text-white border border-white/10'
                                }`}>
                                    <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                                    <div className={`text-xs mt-1 ${
                                        message.sender === 'user' ? 'text-blue-100' : 'text-white/50'
                                    }`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 border border-white/10 px-4 py-2 rounded-lg">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-4 border-t border-white/10 bg-slate-900/50">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder={translations.placeholder}
                                className="flex-1 px-3 py-2.5 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputText.trim()}
                                className="w-10 h-10 sm:h-10 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center text-white transition-colors flex-shrink-0"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center group"
                >
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                </button>
            )}
        </section>
    )
}

export default AIChatbotSection
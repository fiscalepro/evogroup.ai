'use client'

import React, { useState, useEffect } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'

interface ProjectOptions {
    type: string
    duration: number
    complexity: string
    integrations: string[]
    support: string
}

interface PricingResult {
    basePrice: number
    totalPrice: number
    monthlySupport: number
    breakdown: {
        development: number
        integration: number
        testing: number
        deployment: number
        support: number
    }
}

const AICalculatorSection: React.FC = () => {
    const { locale } = useTranslation()
    const [options, setOptions] = useState<ProjectOptions>({
        type: 'data-analytics',
        duration: 3,
        complexity: 'medium',
        integrations: [],
        support: 'standard'
    })

    const [result, setResult] = useState<PricingResult | null>(null)
    const [showResult, setShowResult] = useState(false)

    // Переводы с fallback значениями по языкам
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'Cost Calculator',
                title: 'Calculate Your AI Project Cost',
                subtitle: 'Get preliminary cost estimate and development timeline',
                projectTypeTitle: 'Project Type',
                durationTitle: 'Development Timeline',
                complexityTitle: 'Project Complexity',
                integrationsTitle: 'Integrations',
                supportTitle: 'Support Level',
                months: 'months',
                calculateButton: 'Calculate Cost',
                totalCost: 'Total Project Cost',
                developmentTime: 'Development Time',
                costBreakdown: 'Cost Breakdown',
                development: 'Development',
                integrations: 'Integrations',
                testing: 'Testing',
                deployment: 'Deployment',
                training: 'Team Training',
                total: 'Total',
                monthlySupport: 'Monthly Support',
                level: 'level',
                readyToStart: 'Ready to Start Your Project?',
                getConsultation: 'Get detailed consultation and accurate estimate from our experts',
                orderConsultation: 'Request Consultation',
                downloadEstimate: 'Download PDF Estimate',
                configureProject: 'Configure Project Parameters',
                selectOptions: 'Choose project type, complexity and additional options to get cost estimate',
                from: 'from'
            }
        } else if (locale === 'ky') {
            return {
                badge: 'Наркты эсептөөчү',
                title: 'Сиздин ИИ долбооруңуздун наркын эсептеңиз',
                subtitle: 'Алдын ала наркты жана иштеп чыгуу мөөнөтүн алыңыз',
                projectTypeTitle: 'Долбоордун түрү',
                durationTitle: 'Иштеп чыгуу мөөнөтү',
                complexityTitle: 'Долбоордун татаалдуулугу',
                integrationsTitle: 'Интеграциялар',
                supportTitle: 'Колдоо деңгээли',
                months: 'ай',
                calculateButton: 'Наркын эсептөө',
                totalCost: 'Долбоордун жалпы наркы',
                developmentTime: 'Иштеп чыгуу мөөнөтү',
                costBreakdown: 'Наркты бөлүштүрүү',
                development: 'Иштеп чыгуу',
                integrations: 'Интеграциялар',
                testing: 'Сыноо',
                deployment: 'Орнотуу',
                training: 'Команданы окутуу',
                total: 'Жыйынтык',
                monthlySupport: 'Айлык колдоо',
                level: 'деңгээл',
                readyToStart: 'Долбоорду баштоого дайынсызбы?',
                getConsultation: 'Адистерибизден толук консультация жана так смета алыңыз',
                orderConsultation: 'Консультация заказ берүү',
                downloadEstimate: 'PDF смета жүктөө',
                configureProject: 'Долбоор параметрлерин жөндөө',
                selectOptions: 'Долбоордун түрүн, татаалдуулугун жана кошумча параметрлерди тандап, наркты эсептеп алыңыз',
                from: 'ден'
            }
        } else {
            // Русский по умолчанию
            return {
                badge: 'Калькулятор стоимости',
                title: 'Рассчитайте стоимость вашего ИИ проекта',
                subtitle: 'Получите предварительную оценку стоимости и сроков разработки',
                projectTypeTitle: 'Тип проекта',
                durationTitle: 'Срок разработки',
                complexityTitle: 'Сложность проекта',
                integrationsTitle: 'Интеграции',
                supportTitle: 'Уровень поддержки',
                months: 'мес',
                calculateButton: 'Рассчитать стоимость',
                totalCost: 'Общая стоимость проекта',
                developmentTime: 'Срок разработки',
                costBreakdown: 'Детализация стоимости',
                development: 'Разработка',
                integrations: 'Интеграции',
                testing: 'Тестирование',
                deployment: 'Развертывание',
                training: 'Обучение команды',
                total: 'Итого',
                monthlySupport: 'Ежемесячная поддержка',
                level: 'уровень',
                readyToStart: 'Готовы начать проект?',
                getConsultation: 'Получите детальную консультацию и точную смету от наших экспертов',
                orderConsultation: 'Заказать консультацию',
                downloadEstimate: 'Скачать смету PDF',
                configureProject: 'Настройте параметры проекта',
                selectOptions: 'Выберите тип проекта, сложность и дополнительные опции для получения расчета стоимости',
                from: 'от'
            }
        }
    }

    const translations = getTranslations()

    // Данные проектов с переводами
    const getProjectTypes = () => {
        if (locale === 'en') {
            return [
                { id: 'data-analytics', label: 'Data Analytics', multiplier: 1.0, icon: '📊' },
                { id: 'chatbot', label: 'Chatbot', multiplier: 0.7, icon: '💬' },
                { id: 'fraud-detection', label: 'Fraud Detection System', multiplier: 1.5, icon: '🛡️' },
                { id: 'predictive', label: 'Predictive Analytics', multiplier: 1.3, icon: '🔮' },
                { id: 'document-processing', label: 'Document Processing', multiplier: 1.1, icon: '📄' },
                { id: 'computer-vision', label: 'Computer Vision', multiplier: 1.8, icon: '👁️' }
            ]
        } else if (locale === 'ky') {
            return [
                { id: 'data-analytics', label: 'Маалымат аналитикасы', multiplier: 1.0, icon: '📊' },
                { id: 'chatbot', label: 'Чат-бот', multiplier: 0.7, icon: '💬' },
                { id: 'fraud-detection', label: 'Алдамчылыкка каршы система', multiplier: 1.5, icon: '🛡️' },
                { id: 'predictive', label: 'Алдын ала болжолдуу аналитика', multiplier: 1.3, icon: '🔮' },
                { id: 'document-processing', label: 'Документтерди иштетүү', multiplier: 1.1, icon: '📄' },
                { id: 'computer-vision', label: 'Компьютердик көрүү', multiplier: 1.8, icon: '👁️' }
            ]
        } else {
            return [
                { id: 'data-analytics', label: 'Аналитика данных', multiplier: 1.0, icon: '📊' },
                { id: 'chatbot', label: 'Чат-бот', multiplier: 0.7, icon: '💬' },
                { id: 'fraud-detection', label: 'Антифрод система', multiplier: 1.5, icon: '🛡️' },
                { id: 'predictive', label: 'Предиктивная аналитика', multiplier: 1.3, icon: '🔮' },
                { id: 'document-processing', label: 'Обработка документов', multiplier: 1.1, icon: '📄' },
                { id: 'computer-vision', label: 'Компьютерное зрение', multiplier: 1.8, icon: '👁️' }
            ]
        }
    }

    const getComplexityLevels = () => {
        if (locale === 'en') {
            return [
                { id: 'simple', label: 'Simple', multiplier: 0.8, description: 'Standard algorithms' },
                { id: 'medium', label: 'Medium', multiplier: 1.0, description: 'Custom logic' },
                { id: 'complex', label: 'Complex', multiplier: 1.4, description: 'Deep learning' },
                { id: 'enterprise', label: 'Enterprise', multiplier: 1.8, description: 'Scalable architecture' }
            ]
        } else if (locale === 'ky') {
            return [
                { id: 'simple', label: 'Жөнөкөй', multiplier: 0.8, description: 'Стандарттуу алгоритмдер' },
                { id: 'medium', label: 'Орточо', multiplier: 1.0, description: 'Атайын логика' },
                { id: 'complex', label: 'Татаал', multiplier: 1.4, description: 'Терең үйрөнүү' },
                { id: 'enterprise', label: 'Корпоративдик', multiplier: 1.8, description: 'Масштабдуу архитектура' }
            ]
        } else {
            return [
                { id: 'simple', label: 'Простой', multiplier: 0.8, description: 'Стандартные алгоритмы' },
                { id: 'medium', label: 'Средний', multiplier: 1.0, description: 'Кастомная логика' },
                { id: 'complex', label: 'Сложный', multiplier: 1.4, description: 'Глубокое обучение' },
                { id: 'enterprise', label: 'Энтерпрайз', multiplier: 1.8, description: 'Масштабируемая архитектура' }
            ]
        }
    }

    const getIntegrationOptions = () => {
        if (locale === 'en') {
            return [
                { id: '1c', label: '1C:Enterprise', cost: 15000 },
                { id: 'sap', label: 'SAP', cost: 25000 },
                { id: 'crm', label: 'CRM Systems', cost: 20000 },
                { id: 'erp', label: 'ERP Systems', cost: 30000 },
                { id: 'api', label: 'REST API', cost: 10000 },
                { id: 'database', label: 'Databases', cost: 12000 }
            ]
        } else if (locale === 'ky') {
            return [
                { id: '1c', label: '1С:Ишкана', cost: 15000 },
                { id: 'sap', label: 'SAP', cost: 25000 },
                { id: 'crm', label: 'CRM системалар', cost: 20000 },
                { id: 'erp', label: 'ERP системалар', cost: 30000 },
                { id: 'api', label: 'REST API', cost: 10000 },
                { id: 'database', label: 'Маалымат базалары', cost: 12000 }
            ]
        } else {
            return [
                { id: '1c', label: '1С', cost: 15000 },
                { id: 'sap', label: 'SAP', cost: 25000 },
                { id: 'crm', label: 'CRM системы', cost: 20000 },
                { id: 'erp', label: 'ERP системы', cost: 30000 },
                { id: 'api', label: 'REST API', cost: 10000 },
                { id: 'database', label: 'Базы данных', cost: 12000 }
            ]
        }
    }

    const getSupportLevels = () => {
        if (locale === 'en') {
            return [
                { id: 'basic', label: 'Basic', multiplier: 0.05, description: 'Email support' },
                { id: 'standard', label: 'Standard', multiplier: 0.08, description: '8/5 support' },
                { id: 'premium', label: 'Premium', multiplier: 0.12, description: '24/7 support' },
                { id: 'enterprise', label: 'Enterprise', multiplier: 0.15, description: 'Dedicated team' }
            ]
        } else if (locale === 'ky') {
            return [
                { id: 'basic', label: 'Негизги', multiplier: 0.05, description: 'Email колдоо' },
                { id: 'standard', label: 'Стандарттык', multiplier: 0.08, description: '8/5 колдоо' },
                { id: 'premium', label: 'Премиум', multiplier: 0.12, description: '24/7 колдоо' },
                { id: 'enterprise', label: 'Корпоративдик', multiplier: 0.15, description: 'Арнайы команда' }
            ]
        } else {
            return [
                { id: 'basic', label: 'Базовая', multiplier: 0.05, description: 'Email поддержка' },
                { id: 'standard', label: 'Стандартная', multiplier: 0.08, description: '8/5 поддержка' },
                { id: 'premium', label: 'Премиум', multiplier: 0.12, description: '24/7 поддержка' },
                { id: 'enterprise', label: 'Корпоративная', multiplier: 0.15, description: 'Выделенная команда' }
            ]
        }
    }

    const projectTypes = getProjectTypes()
    const complexityLevels = getComplexityLevels()
    const integrationOptions = getIntegrationOptions()
    const supportLevels = getSupportLevels()

    const calculatePrice = () => {
        const basePrice = 50000

        const typeMultiplier = projectTypes.find(t => t.id === options.type)?.multiplier || 1
        const complexityMultiplier = complexityLevels.find(c => c.id === options.complexity)?.multiplier || 1
        const supportMultiplier = supportLevels.find(s => s.id === options.support)?.multiplier || 0.08

        const developmentCost = basePrice * typeMultiplier * complexityMultiplier * (options.duration / 3)

        const integrationCost = options.integrations.reduce((sum, integration) => {
            const integrationOption = integrationOptions.find(i => i.id === integration)
            return sum + (integrationOption?.cost || 0)
        }, 0)

        const breakdown = {
            development: Math.round(developmentCost * 0.6),
            integration: integrationCost,
            testing: Math.round(developmentCost * 0.15),
            deployment: Math.round(developmentCost * 0.15),
            support: Math.round(developmentCost * 0.1)
        }

        const totalPrice = Object.values(breakdown).reduce((sum, cost) => sum + cost, 0)
        const monthlySupport = Math.round(totalPrice * supportMultiplier)

        setResult({
            basePrice: developmentCost,
            totalPrice,
            monthlySupport,
            breakdown
        })
        setShowResult(true)

        setTimeout(() => {
            const resultsElement = document.querySelector('#calculator-results')
            if (resultsElement) {
                resultsElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
        }, 100)
    }

    const formatPrice = (price: number) => {
        const loc = locale === 'en' ? 'en-US' : locale === 'ky' ? 'ky-KG' : 'ru-RU'
        return new Intl.NumberFormat(loc, {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
    }

    const handleIntegrationChange = (integrationId: string, checked: boolean) => {
        if (checked) {
            setOptions(prev => ({
                ...prev,
                integrations: [...prev.integrations, integrationId]
            }))
        } else {
            setOptions(prev => ({
                ...prev,
                integrations: prev.integrations.filter(id => id !== integrationId)
            }))
        }
    }

    useEffect(() => {
        if (showResult) {
            calculatePrice()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options, showResult])

    return (
        <section id="calculator" className="py-24 bg-slate-900/50 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-20 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/80 shadow-sm mb-6">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        {translations.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto">
                        {translations.subtitle}
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left Column - Form */}
                        <div>
                            {/* Project Type */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {translations.projectTypeTitle}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {projectTypes.map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => setOptions(prev => ({ ...prev, type: type.id }))}
                                            className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.type === type.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{type.icon}</span>
                                                <div>
                                                    <div className="font-medium">{type.label}</div>
                                                    <div className="text-xs opacity-60">{translations.from} {formatPrice(50000 * type.multiplier)}</div>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {translations.durationTitle}
                                </h3>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        value={options.duration}
                                        onChange={(e) => setOptions(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                                        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                                    />
                                    <div className="flex justify-between text-sm text-white/60 mt-2">
                                        <span>1 {translations.months}</span>
                                        <span className="text-white font-medium">
                                            {options.duration} {translations.months}
                                        </span>
                                        <span>12 {translations.months}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Complexity */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {translations.complexityTitle}
                                </h3>
                                <div className="space-y-3">
                                    {complexityLevels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => setOptions(prev => ({ ...prev, complexity: level.id }))}
                                            className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.complexity === level.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">{level.label}</div>
                                                    <div className="text-xs opacity-60">{level.description}</div>
                                                </div>
                                                <div className="text-sm font-medium">
                                                    x{level.multiplier}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Integrations */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {translations.integrationsTitle}
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {integrationOptions.map((integration) => (
                                        <label
                                            key={integration.id}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer border border-white/10"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={options.integrations.includes(integration.id)}
                                                onChange={(e) => handleIntegrationChange(integration.id, e.target.checked)}
                                                className="w-4 h-4 text-blue-500 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-white text-sm font-medium">{integration.label}</div>
                                                <div className="text-white/60 text-xs">{formatPrice(integration.cost)}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Support */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {translations.supportTitle}
                                </h3>
                                <div className="space-y-3">
                                    {supportLevels.map((level) => (
                                        <button
                                            key={level.id}
                                            onClick={() => setOptions(prev => ({ ...prev, support: level.id }))}
                                            className={`w-full p-4 rounded-xl border transition-all duration-200 text-left ${
                                                options.support === level.id
                                                    ? 'bg-blue-500/20 border-blue-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <div className="font-medium">{level.label}</div>
                                                    <div className="text-xs opacity-60">{level.description}</div>
                                                </div>
                                                <div className="text-sm font-medium">
                                                    {(level.multiplier * 100).toFixed(1)}%/{translations.months}
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button
                                onClick={calculatePrice}
                                variant="primary"
                                size="lg"
                                className="w-full bg-blue-600 hover:bg-blue-700"
                            >
                                {translations.calculateButton}
                            </Button>
                        </div>

                        {/* Right Column - Results */}
                        <div id="calculator-results">
                            {showResult && result && (
                                <div className="space-y-6">
                                    <div className="bg-gradient-to-br from-blue-500/20 to-violet-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {translations.totalCost}
                                            </h3>
                                            <div className="text-4xl font-bold text-blue-400 mb-4">
                                                {formatPrice(result.totalPrice)}
                                            </div>
                                            <div className="text-white/70">
                                                {translations.developmentTime}: {options.duration} {translations.months}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                                        <h3 className="text-lg font-bold text-white mb-4">
                                            {translations.costBreakdown}
                                        </h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">{translations.development}</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.development)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">{translations.integrations}</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.integration)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">{translations.testing}</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.testing)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">{translations.deployment}</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.deployment)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-white/70">{translations.training}</span>
                                                <span className="text-white font-medium">{formatPrice(result.breakdown.support)}</span>
                                            </div>
                                            <div className="border-t border-white/20 pt-3">
                                                <div className="flex justify-between items-center font-bold">
                                                    <span className="text-white">{translations.total}</span>
                                                    <span className="text-blue-400 text-lg">{formatPrice(result.totalPrice)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="text-lg font-bold text-white">
                                                    {translations.monthlySupport}
                                                </h4>
                                                <p className="text-white/60 text-sm">
                                                    {supportLevels.find(s => s.id === options.support)?.label} {translations.level}
                                                </p>
                                            </div>
                                            <div className="text-xl font-bold text-green-400">
                                                {formatPrice(result.monthlySupport)}/{translations.months}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                                        <h4 className="text-lg font-bold text-white mb-3">
                                            {translations.readyToStart}
                                        </h4>
                                        <p className="text-white/70 mb-4 text-sm">
                                            {translations.getConsultation}
                                        </p>
                                        <div className="flex flex-col gap-3">
                                            <Button
                                                variant="primary"
                                                size="md"
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                {translations.orderConsultation}
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="md"
                                                className="border-white/20 text-white hover:bg-white/10"
                                            >
                                                {translations.downloadEstimate}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!showResult && (
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {translations.configureProject}
                                    </h3>
                                    <p className="text-white/60">
                                        {translations.selectOptions}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    appearance: none;
                    height: 20px;
                    width: 20px;
                    border-radius: 50%;
                    background: #3B82F6;
                    cursor: pointer;
                    border: 2px solid #1E40AF;
                }
            `}</style>
        </section>
    )
}

export default AICalculatorSection
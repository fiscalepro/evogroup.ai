'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'
import { Button, Input, Textarea, Checkbox, Card, CardBody } from '@nextui-org/react'

interface FormData {
    name: string
    email: string
    company: string
    phone: string
    description: string
    newsletter: boolean
}

interface FormErrors {
    name?: string
    email?: string
    company?: string
    phone?: string
    description?: string
    general?: string
}

const ContactForm: React.FC = () => {
    const { locale } = useTranslation()

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        phone: '',
        description: '',
        newsletter: false,
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // --- Переводы ---
    const getTranslations = () => {
        if (locale === 'en') {
            return {
                preTitle: 'Contact',
                title: 'Start your project',
                subtitle: 'Tell us about your task, and our experts will propose optimal AI solution considering your business specifics',
                form: {
                    fields: {
                        name: { label: 'Name', placeholder: 'Your name' },
                        email: { label: 'Email', placeholder: 'your@email.com' },
                        company: { label: 'Company', placeholder: 'Company name' },
                        phone: { label: 'Phone', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Task Description',
                            placeholder: 'Describe your business task that you want to solve with AI. The more detailed - the more accurately we can evaluate the project and propose a solution.'
                        }
                    },
                    newsletter: {
                        label: 'Subscribe to AI technology news'
                    }
                },
                buttons: {
                    submit: 'Submit Request',
                    submitting: 'Submitting...',
                    downloadPresentation: 'Download Presentation',
                    sendAnother: 'Send Another Request'
                },
                success: {
                    title: 'Request Sent!',
                    message: 'We received your request and will respond within 2 hours during business hours.',
                    nextSteps: [
                        'Our expert will study your task',
                        'We\'ll prepare preliminary proposal',
                        'Contact you to discuss details',
                        'Provide accurate project estimate'
                    ]
                },
                privacyNotice: 'By submitting the form, you agree to personal data processing',
                errors: {
                    nameRequired: 'Name is required',
                    nameInvalid: 'Name contains invalid characters',
                    emailRequired: 'Email is required',
                    emailInvalid: 'Invalid email address',
                    descriptionRequired: 'Description is required',
                    descriptionTooShort: 'Description must be at least 10 characters',
                    phoneInvalid: 'Invalid phone format',
                    rateLimited: 'Too many requests. Please try again in 15 minutes.',
                    serverError: 'Failed to submit form. Please try again later.',
                }
            }
        } else if (locale === 'ky') {
            return {
                preTitle: 'Байланыш',
                title: 'Долбоорду баштоо',
                subtitle: 'Сиздин тапшырмаңыз жөнүндө айтыңыз, биздин адистер сиздин бизнесиңиздин өзгөчөлүктөрүн эске алуу менен оптималдуу ИИ чечимин сунушташат',
                form: {
                    fields: {
                        name: { label: 'Аты', placeholder: 'Сиздин атыңыз' },
                        email: { label: 'Email', placeholder: 'sizdin@email.com' },
                        company: { label: 'Компания', placeholder: 'Компанияның аталышы' },
                        phone: { label: 'Телефон', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Тапшырманын сүрөттөмөсү',
                            placeholder: 'ИИ менен чечкиңиз келген бизнес тапшырмаңызды сүрөттөңүз. Канчалык толук болсо - ошончолук так долбоорду баалап, чечим сунушта алабыз.'
                        }
                    },
                    newsletter: {
                        label: 'ИИ технологиялары жаңылыктарына жазылуу'
                    }
                },
                buttons: {
                    submit: 'Өтүнүч жөнөтүү',
                    submitting: 'Жөнөтүлүүдө...',
                    downloadPresentation: 'Презентацияны жүктөө',
                    sendAnother: 'Дагы бир өтүнүч жөнөтүү'
                },
                success: {
                    title: 'Өтүнүч жөнөтүлдү!',
                    message: 'Биз сиздин өтүнүчүңүздү алдык жана жумуш убактысында 2 саат ичинде жооп беребиз.',
                    nextSteps: [
                        'Биздин адис сиздин тапшырмаңызды изилдейт',
                        'Алдын ала сунушту даярдайбыз',
                        'Деталдарды талкуулоо үчүн байланышабыз',
                        'Долбоордун так бааланышын беребиз'
                    ]
                },
                privacyNotice: 'Форманы жөнөтүү менен, сиз жеке маалыматтарды иштетүүгө макулсуз',
                errors: {
                    nameRequired: 'Аты талап кылынат',
                    nameInvalid: 'Атта уруксат берилбеген символдор бар',
                    emailRequired: 'Email талап кылынат',
                    emailInvalid: 'Туура эмес email дареги',
                    descriptionRequired: 'Сүрөттөмө талап кылынат',
                    descriptionTooShort: 'Сүрөттөмө кеминде 10 символ болушу керек',
                    phoneInvalid: 'Туура эмес телефон форматы',
                    rateLimited: 'Өтө көп суроо. 15 мүнөттөн кийин кайталап көрүңүз.',
                    serverError: 'Форманы жөнөтүү мүмкүн болгон жок. Кийинчерээк кайталап көрүңүз.',
                }
            }
        } else {
            return {
                preTitle: 'Контакты',
                title: 'Начните свой проект',
                subtitle: 'Расскажите о вашей задаче, и наши эксперты предложат оптимальное ИИ-решение с учетом специфики вашего бизнеса',
                form: {
                    fields: {
                        name: { label: 'Имя', placeholder: 'Ваше имя' },
                        email: { label: 'Email', placeholder: 'your@email.com' },
                        company: { label: 'Компания', placeholder: 'Название компании' },
                        phone: { label: 'Телефон', placeholder: '+996 XXX XXX XXX' },
                        description: {
                            label: 'Описание задачи',
                            placeholder: 'Опишите бизнес-задачу, которую хотите решить с помощью ИИ. Чем подробнее - тем точнее сможем оценить проект и предложить решение.'
                        }
                    },
                    newsletter: {
                        label: 'Подписаться на новости о технологиях ИИ'
                    }
                },
                buttons: {
                    submit: 'Отправить заявку',
                    submitting: 'Отправка...',
                    downloadPresentation: 'Скачать презентацию',
                    sendAnother: 'Отправить еще одну заявку'
                },
                success: {
                    title: 'Заявка отправлена!',
                    message: 'Мы получили вашу заявку и ответим в течение 2 часов в рабочее время.',
                    nextSteps: [
                        'Наш эксперт изучит вашу задачу',
                        'Подготовим предварительное предложение',
                        'Свяжемся для обсуждения деталей',
                        'Предоставим точную оценку проекта'
                    ]
                },
                privacyNotice: 'Отправляя форму, вы соглашаетесь с обработкой персональных данных',
                errors: {
                    nameRequired: 'Имя обязательно',
                    nameInvalid: 'Имя содержит недопустимые символы',
                    emailRequired: 'Email обязателен',
                    emailInvalid: 'Неверный формат email',
                    descriptionRequired: 'Описание обязательно',
                    descriptionTooShort: 'Описание должно быть не менее 10 символов',
                    phoneInvalid: 'Неверный формат телефона',
                    rateLimited: 'Слишком много запросов. Попробуйте через 15 минут.',
                    serverError: 'Не удалось отправить форму. Попробуйте позже.',
                }
            }
        }
    }

    const translations = getTranslations()

    // --- Клиентская валидация ---
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}

        // Имя
        if (!formData.name.trim()) {
            newErrors.name = translations.errors.nameRequired
        } else if (!/^[a-zA-Zа-яА-ЯёЁүҮөӨңҢ\s\-']+$/.test(formData.name)) {
            newErrors.name = translations.errors.nameInvalid
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = translations.errors.emailRequired
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = translations.errors.emailInvalid
        }

        // Телефон (необязательный, но если указан - проверяем формат)
        if (formData.phone && !/^[\d\+\-\s()]*$/.test(formData.phone)) {
            newErrors.phone = translations.errors.phoneInvalid
        }

        // Описание
        if (!formData.description.trim()) {
            newErrors.description = translations.errors.descriptionRequired
        } else if (formData.description.trim().length < 10) {
            newErrors.description = translations.errors.descriptionTooShort
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Очищаем ошибку при вводе
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
    }

    // --- Отправка через защищённый API ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Клиентская валидация
        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (response.status === 429) {
                setErrors({ general: translations.errors.rateLimited })
                return
            }

            if (!response.ok) {
                setErrors({ general: result.error || translations.errors.serverError })
                return
            }

            if (result.success) {
                setIsSubmitted(true)
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    description: '',
                    newsletter: false,
                })
            } else {
                setErrors({ general: result.error || translations.errors.serverError })
            }
        } catch {
            setErrors({ general: translations.errors.serverError })
        } finally {
            setIsSubmitting(false)
        }
    }

    // --- Успешная отправка ---
    if (isSubmitted) {
        return (
            <section className="relative py-32 overflow-hidden" id="contact">
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <Card className="bg-white/5 backdrop-blur-xl border-white/10">
                        <CardBody className="p-12 text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                {translations.success.title}
                            </h2>
                            <p className="text-white/70 mb-10 text-lg">
                                {translations.success.message}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-10">
                                {translations.success.nextSteps.map((step: string, index: number) => (
                                    <div key={index} className="flex items-center gap-3 text-left text-white/80 p-4 bg-white/5 rounded-xl border border-white/10">
                                        <span className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-sm text-blue-400 font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-sm">{step}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => setIsSubmitted(false)}
                                size="lg"
                                className="bg-white/10 hover:bg-white/15 text-white border border-white/20"
                                radius="full"
                            >
                                {translations.buttons.sendAnother}
                            </Button>
                        </CardBody>
                    </Card>
                </div>

                {/* Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none" />
            </section>
        )
    }

    // --- Основная форма ---
    return (
        <section className="relative py-32 overflow-hidden" id="contact">
            {/* Section header */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
                <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-white/90 animate-fade-in">
                    {translations.preTitle}
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                    {translations.title}
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
                    {translations.subtitle}
                </p>
            </div>

            {/* Form */}
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <CardBody className="p-8 sm:p-10">
                        <form onSubmit={handleSubmit} noValidate>
                            {/* General Error */}
                            {errors.general && (
                                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    {errors.general}
                                </div>
                            )}

                            {/* Name & Email */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        label={translations.form.fields.name.label}
                                        placeholder={translations.form.fields.name.placeholder}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={100}
                                        isInvalid={!!errors.name}
                                        errorMessage={errors.name}
                                        classNames={{
                                            input: "text-white",
                                            label: "text-white/70",
                                            inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                        }}
                                        radius="lg"
                                        size="lg"
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        label={translations.form.fields.email.label}
                                        placeholder={translations.form.fields.email.placeholder}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        maxLength={254}
                                        isInvalid={!!errors.email}
                                        errorMessage={errors.email}
                                        classNames={{
                                            input: "text-white",
                                            label: "text-white/70",
                                            inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                        }}
                                        radius="lg"
                                        size="lg"
                                    />
                                </div>
                            </div>

                            {/* Company & Phone */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <Input
                                    type="text"
                                    name="company"
                                    label={translations.form.fields.company.label}
                                    placeholder={translations.form.fields.company.placeholder}
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    maxLength={200}
                                    classNames={{
                                        input: "text-white",
                                        label: "text-white/70",
                                        inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                    }}
                                    radius="lg"
                                    size="lg"
                                />
                                <div>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        label={translations.form.fields.phone.label}
                                        placeholder={translations.form.fields.phone.placeholder}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        maxLength={20}
                                        isInvalid={!!errors.phone}
                                        errorMessage={errors.phone}
                                        classNames={{
                                            input: "text-white",
                                            label: "text-white/70",
                                            inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                        }}
                                        radius="lg"
                                        size="lg"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <Textarea
                                    name="description"
                                    label={translations.form.fields.description.label}
                                    placeholder={translations.form.fields.description.placeholder}
                                    value={formData.description}
                                    onValueChange={(value) => {
                                        setFormData(prev => ({ ...prev, description: value }))
                                        if (errors.description) {
                                            setErrors(prev => ({ ...prev, description: undefined }))
                                        }
                                    }}
                                    required
                                    maxLength={5000}
                                    minRows={5}
                                    isInvalid={!!errors.description}
                                    errorMessage={errors.description}
                                    classNames={{
                                        input: "text-white",
                                        label: "text-white/70",
                                        inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                                    }}
                                    radius="lg"
                                />
                            </div>

                            {/* Newsletter */}
                            <div className="mb-8">
                                <Checkbox
                                    name="newsletter"
                                    isSelected={formData.newsletter}
                                    onValueChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
                                    classNames={{
                                        label: "text-white/80 text-sm"
                                    }}
                                >
                                    {translations.form.newsletter.label}
                                </Checkbox>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <Button
                                    type="submit"
                                    size="lg"
                                    color="primary"
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 font-semibold h-14"
                                    radius="full"
                                    isLoading={isSubmitting}
                                    isDisabled={isSubmitting}
                                >
                                    {isSubmitting ? translations.buttons.submitting : translations.buttons.submit}
                                </Button>
                                <Button
                                    type="button"
                                    size="lg"
                                    className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/20 h-14"
                                    radius="full"
                                >
                                    {translations.buttons.downloadPresentation}
                                </Button>
                            </div>

                            <p className="text-white/50 text-xs text-center">
                                {translations.privacyNotice}
                            </p>
                        </form>
                    </CardBody>
                </Card>
            </div>

            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
        </section>
    )
}

export default ContactForm

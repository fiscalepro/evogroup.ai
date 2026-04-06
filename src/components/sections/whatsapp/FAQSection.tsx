'use client'

import React, { useState } from 'react'
import { useTranslation } from '@/components/providers/I18nProvider'

interface FAQItem {
    question: string
    answer: string
}

const FAQSection: React.FC = () => {
    const { locale } = useTranslation()
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                badge: 'FAQ',
                title: 'Frequently Asked Questions',
                subtitle: 'Answers to common questions about WhatsApp CRM',
                faqs: [
                    {
                        question: 'How does the free trial work?',
                        answer: '30 days completely free with full functionality. No credit card required. At the end of the trial, we\'ll notify you 7 and 3 days in advance. There\'s no automatic charge.'
                    },
                    {
                        question: 'What happens after the trial period?',
                        answer: 'After 30 days, you can choose a plan and continue using the platform. If you don\'t pay, access is limited to "read-only" mode for 7 days, then suspended. Your data is stored for 30 days.'
                    },
                    {
                        question: 'How do I connect WhatsApp?',
                        answer: 'You need WhatsApp Business. We connect your number to the platform within 24 hours. The process is simple: scan a QR code or verify via SMS.'
                    },
                    {
                        question: 'What uptime guarantee do you offer?',
                        answer: '99.5% monthly uptime with compensation: if less than 99%, we add free days. Response time ≤2 seconds. Support Mon-Fri 09:00-18:00.'
                    },
                    {
                        question: 'Is my data secure?',
                        answer: 'Yes. TLS 1.3 encryption in transit, AES-256 at rest. Data isolation between clients at database level. Daily backups stored for 30 days.'
                    },
                    {
                        question: 'Can I change my plan?',
                        answer: 'Yes! Upgrade takes effect immediately (you pay the difference). Downgrade takes effect from the next month. You can change plans anytime in your dashboard.'
                    },
                    {
                        question: 'Is there CRM integration?',
                        answer: 'Professional and Enterprise plans include API + Webhooks for integration with 1C, Bitrix24, amoCRM, and other systems.'
                    },
                    {
                        question: 'What if WhatsApp blocks my number?',
                        answer: 'We follow WhatsApp policies: limit of 100 messages/minute, no spam. Following our recommendations minimizes block risk. We\'re not responsible for blocks by Meta.'
                    },
                    {
                        question: 'How do I cancel my subscription?',
                        answer: 'Anytime through your dashboard. Cancellation takes effect at the end of the current paid period. Your data is stored for 30 days after cancellation.'
                    },
                    {
                        question: 'What payment methods do you accept?',
                        answer: 'Bank cards, bank transfer, Elsom, O!Money, MegaPay, Balance.kg. Invoices are generated automatically 5 days before the next period.'
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                badge: 'FAQ',
                title: 'Көп берилүүчү суроолор',
                subtitle: 'WhatsApp CRM жөнүндө жалпы суроолорго жооптор',
                faqs: [
                    {
                        question: 'Акысыз сыноо кантип иштейт?',
                        answer: '30 күн толук функционал менен толугу менен акысыз. Кредиттик карта талап кылынбайт. Сыноонун аягында 7 жана 3 күн мурун кабарлайбыз. Автоматтык төлөм жок.'
                    },
                    {
                        question: 'Сыноо мөөнөтүнөн кийин эмне болот?',
                        answer: '30 күндөн кийин тарифти тандап, платформаны колдонууну улантсаңыз болот. Төлөбөсөңүз, 7 күнгө "окуу гана" режимине өтөт, андан кийин токтотулат. Маалыматтар 30 күн сакталат.'
                    },
                    {
                        question: 'WhatsAppты кантип туташтырам?',
                        answer: 'WhatsApp Business керек. Номериңизди 24 сааттын ичинде туташтырабыз. Процесс жөнөкөй: QR кодун сканерлөө же SMS аркылуу ырастоо.'
                    },
                    {
                        question: 'Кандай иштөө убактысы кепилдиги бар?',
                        answer: 'Айына 99.5% иштөө убактысы компенсация менен: 99%дан аз болсо, акысыз күндөр кошобуз. Жооп убактысы ≤2 секунд. Колдоо Дш-Жм 09:00-18:00.'
                    },
                    {
                        question: 'Маалыматтарым коопсузбу?',
                        answer: 'Ооба. Өткөрүүдө TLS 1.3, сактоодо AES-256 шифрлөө. Кардарлар ортосунда маалымат базасы деңгээлинде изоляция. Күн сайын бэкап, 30 күн сакталат.'
                    },
                    {
                        question: 'Тарифти өзгөртө аламбы?',
                        answer: 'Ооба! Апгрейд дароо күчүнө кирет (айырманы төлөйсүз). Даунгрейд кийинки айдан күчүнө кирет. Тарифти каалаган убакта өзгөртө аласыз.'
                    },
                    {
                        question: 'CRM интеграциясы барбы?',
                        answer: 'Профессионал жана Корпоративдик тарифтерде 1С, Bitrix24, amoCRM жана башка системалар менен интеграция үчүн API + Webhooks бар.'
                    },
                    {
                        question: 'WhatsApp номеримди бөгөттөсө эмне болот?',
                        answer: 'WhatsApp саясатын сактайбыз: мүнөтүнө 100 билдирүү лимити, спам жок. Сунуштарыбызды аткаруу бөгөттөө тобокелдигин азайтат. Meta тарабынан бөгөттөөгө жооп бербейбиз.'
                    },
                    {
                        question: 'Жазылуудан кантип баш тартам?',
                        answer: 'Каалаган убакта панелиңиз аркылуу. Баш тартуу учурдагы төлөнгөн мезгилдин аягында күчүнө кирет. Маалыматтарыңыз баш тартуудан кийин 30 күн сакталат.'
                    },
                    {
                        question: 'Кандай төлөм ыкмаларын кабыл аласыздар?',
                        answer: 'Банк карталары, банк которуусу, Элсом, О!Деньги, MegaPay, Balance.kg. Эсеп-фактуралар кийинки мезгилге чейин 5 күн автоматтык түрдө түзүлөт.'
                    }
                ]
            }
        } else {
            return {
                badge: 'FAQ',
                title: 'Частые вопросы',
                subtitle: 'Ответы на популярные вопросы о WhatsApp CRM',
                faqs: [
                    {
                        question: 'Как работает пробный период?',
                        answer: '30 дней полностью бесплатно с полным функционалом. Карта не требуется. В конце пробного периода уведомим за 7 и 3 дня. Автоматического списания нет.'
                    },
                    {
                        question: 'Что будет после пробного периода?',
                        answer: 'После 30 дней можете выбрать тариф и продолжить. Если не оплатите — доступ ограничивается до "только чтение" на 7 дней, затем приостанавливается. Данные хранятся 30 дней.'
                    },
                    {
                        question: 'Как подключить WhatsApp?',
                        answer: 'Нужен WhatsApp Business. Подключаем ваш номер к платформе за 24 часа. Процесс простой: сканируете QR-код или подтверждаете по SMS.'
                    },
                    {
                        question: 'Какая гарантия доступности?',
                        answer: '99.5% доступности в месяц с компенсацией: если меньше 99% — добавляем бесплатные дни. Время отклика ≤2 секунды. Поддержка Пн-Пт 09:00-18:00.'
                    },
                    {
                        question: 'Безопасны ли мои данные?',
                        answer: 'Да. Шифрование TLS 1.3 при передаче, AES-256 при хранении. Изоляция данных между клиентами на уровне БД. Ежедневные бэкапы хранятся 30 дней.'
                    },
                    {
                        question: 'Можно ли менять тариф?',
                        answer: 'Да! Апгрейд вступает в силу сразу (доплачиваете разницу). Даунгрейд — со следующего месяца. Менять тариф можно в любой момент в личном кабинете.'
                    },
                    {
                        question: 'Есть ли интеграция с CRM?',
                        answer: 'На тарифах Профессионал и Корпоративный доступны API + Webhooks для интеграции с 1С, Bitrix24, amoCRM и другими системами.'
                    },
                    {
                        question: 'Что если WhatsApp заблокирует номер?',
                        answer: 'Мы соблюдаем политику WhatsApp: лимит 100 сообщений/минуту, без спама. Следование нашим рекомендациям минимизирует риск блокировки. За блокировки со стороны Meta не отвечаем.'
                    },
                    {
                        question: 'Как отменить подписку?',
                        answer: 'В любой момент через личный кабинет. Отмена вступает в силу по окончании текущего оплаченного периода. Данные хранятся 30 дней после отмены.'
                    },
                    {
                        question: 'Какие способы оплаты принимаете?',
                        answer: 'Банковские карты, банковский перевод, Элсом, О!Деньги, MegaPay, Balance.kg. Счета формируются автоматически за 5 дней до следующего периода.'
                    }
                ]
            }
        }
    }

    const translations = getTranslations()

    return (
        <section id="faq" className="py-12 sm:py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-full px-4 py-2 text-sm text-gray-700 dark:text-white/80 shadow-sm mb-4 sm:mb-6">
                        {translations.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                        {translations.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-white/70">
                        {translations.subtitle}
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {translations.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="text-gray-900 dark:text-white font-medium pr-4">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-6 pb-5 text-gray-600 dark:text-white/70 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection

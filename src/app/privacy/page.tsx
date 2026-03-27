'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

function PrivacyContent() {
    const { locale } = useTranslation()

    const getContent = () => {
        if (locale === 'en') {
            return {
                title: 'Privacy Policy',
                subtitle: 'How we protect your data',
                effectiveDate: 'Effective Date: January 20, 2026',
                sections: [
                    {
                        title: '1. Introduction',
                        content: `EvoGroup (LLC "Evolution Group", hereinafter referred to as "Company", "we", "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you use our EvoAI CRM platform and related services (hereinafter referred to as "Services").

By using our Services, you agree to the terms of this Privacy Policy. If you do not agree with these terms, please do not use our Services.`
                    },
                    {
                        title: '2. Information We Collect',
                        content: `2.1. Information you provide directly:
- Account information (name, email, phone number)
- Payment information (for paid services)
- Profile information and preferences
- Communications with our support team

2.2. Automatically collected information:
- Usage data and analytics
- Device information (device type, operating system)
- Log data (IP address, browser type, pages viewed)
- Cookies and similar technologies

2.3. Information from third-party integrations:
When you authorize integrations with third-party platforms (Instagram, WhatsApp, Facebook), we access information associated with your accounts on these platforms in accordance with the permissions you grant.`
                    },
                    {
                        title: '3. How We Use Your Information',
                        content: `We use the collected information for the following purposes:
- Providing and maintaining our Services
- Managing your account
- Improving and developing new features
- Providing customer support
- Conducting research and analytics
- Training AI models to improve service quality
- Sending marketing communications (with your consent)
- Complying with legal obligations`
                    },
                    {
                        title: '4. Data Sharing',
                        content: `We do not sell your personal data. We may share your information in the following cases:
- With service providers who help us deliver our Services
- With third-party platforms when you authorize integrations
- During mergers, acquisitions, or asset sales
- When required by law or to protect our rights`
                    },
                    {
                        title: '5. Data Security',
                        content: `We implement the following security measures:
- TLS 1.3 encryption for data transmission
- AES-256 encryption for data storage
- Role-based access controls
- 24/7 security monitoring
- Regular vulnerability assessments
- Employee training programs on data protection`
                    },
                    {
                        title: '6. Data Retention',
                        content: `- Account information: retained for 30 days after account closure
- Customer data: retained during active subscription plus 30 days after cancellation
- Encrypted backups: retained for up to 90 days
- Analytics data: retained in anonymized form`
                    },
                    {
                        title: '7. Your Rights',
                        content: `You have the right to:
- Access your personal data
- Correct inaccurate data
- Delete your data
- Restrict data processing
- Withdraw consent for integrations
- Data portability

To exercise your rights, contact us at privacy@evogroup.ai. We will respond within 30 days.`
                    },
                    {
                        title: '8. Third-Party Integrations',
                        content: `When using integrations with Meta platforms (Instagram, Facebook), WhatsApp Business, and other messaging services, their respective terms and privacy policies also apply. You can disable integrations at any time through your account settings.`
                    },
                    {
                        title: '9. Cookies',
                        content: `We use the following types of cookies:
- Necessary cookies (for basic site functionality)
- Functional cookies (to remember your preferences)
- Analytical cookies (to understand how you use our Services)
- Marketing cookies (to show relevant advertising)

You can manage your cookie preferences through your browser settings.`
                    },
                    {
                        title: '10. International Data Transfers',
                        content: `Your data may be processed in countries outside your country of residence. We use standard contractual clauses and other appropriate measures to protect your data during international transfers.`
                    },
                    {
                        title: "11. Children's Privacy",
                        content: `Our Services are intended for adults only. We do not knowingly collect personal information from individuals under 18 years of age.`
                    },
                    {
                        title: '12. Policy Updates',
                        content: `We may update this Privacy Policy from time to time. In case of significant changes, we will notify you at least 30 days in advance via email or platform notification.`
                    },
                    {
                        title: '13. Contact Us',
                        content: `If you have questions about this Privacy Policy, contact us:

Email: privacy@evogroup.ai
Support: support@evogroup.ai
Website: https://evogroup.ai
Address: Bishkek, Kyrgyzstan`
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                title: 'Купуялык саясаты',
                subtitle: 'Биз сиздин маалыматтарыңызды кантип коргойбуз',
                effectiveDate: 'Күчүнө кирген датасы: 2026-жылдын 20-январы',
                sections: [
                    {
                        title: '1. Киришүү',
                        content: `EvoGroup (ЖЧК "Эволюшн Групп", мындан ары "Компания", "биз", "биздин") сиздин жеке маалыматтарыңызды коргоого милдеттенет. Бул Купуялык саясаты биз EvoAI CRM платформасын жана тиешелүү кызматтарды (мындан ары "Кызматтар") колдонгонуңузда маалыматыңызды кантип чогултуп, колдонуп, бөлүшүп жана коргоорубузду түшүндүрөт.

Биздин Кызматтарыбызды колдонуу менен сиз бул Купуялык саясатынын шарттарына макулдугуңузду билдиресиз.`
                    },
                    {
                        title: '2. Чогултулган маалымат',
                        content: `2.1. Сиз түздөн-түз берген маалымат:
- Каттоо маалыматы (аты, email, телефон номери)
- Төлөм маалыматы (акы төлөнүүчү кызматтар үчүн)
- Профиль маалыматы жана каалоолор

2.2. Автоматтык түрдө чогултулган маалымат:
- Колдонуу маалыматтары жана аналитика
- Түзмөк маалыматы
- Журнал маалыматтары

2.3. Үчүнчү тараптын интеграцияларынан маалымат:
Instagram, WhatsApp, Facebook менен интеграцияларга уруксат бергениңизде, биз сиз берген уруксаттарга ылайык маалыматка жетем.`
                    },
                    {
                        title: '3. Маалыматты колдонуу',
                        content: `Биз чогултулган маалыматты төмөнкү максаттарда колдонобуз:
- Кызматтарыбызды көрсөтүү жана колдоо
- Каттоо эсебиңизди башкаруу
- Жаңы функцияларды өнүктүрүү
- Кардарларды колдоо
- Изилдөө жана аналитика`
                    },
                    {
                        title: '7. Сиздин укуктарыңыз',
                        content: `Сизде төмөнкү укуктар бар:
- Жеке маалыматтарыңызга жетүү
- Так эмес маалыматтарды оңдоо
- Маалыматтарыңызды жок кылуу
- Маалыматтарды иштетүүнү чектөө

Укуктарыңызды ишке ашыруу үчүн privacy@evogroup.ai дарегине кайрылыңыз.`
                    },
                    {
                        title: '13. Биз менен байланыш',
                        content: `Суроолоруңуз болсо, биз менен байланышыңыз:

Email: privacy@evogroup.ai
Колдоо: support@evogroup.ai
Веб-сайт: https://evogroup.ai
Дареги: Бишкек, Кыргызстан`
                    }
                ]
            }
        } else {
            // Russian (default)
            return {
                title: 'Политика конфиденциальности',
                subtitle: 'Как мы защищаем ваши данные',
                effectiveDate: 'Дата вступления в силу: 20 января 2026 года',
                sections: [
                    {
                        title: '1. Введение',
                        content: `EvoGroup (ОсОО "Эволюшн Групп", далее именуемое "Компания", "мы", "наш") обязуется защищать вашу личную информацию. Настоящая Политика конфиденциальности объясняет, как мы собираем, используем, передаем и защищаем вашу информацию при использовании платформы EvoAI CRM и связанных услуг (далее "Услуги").

Используя наши Услуги, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Если вы не согласны с этими условиями, пожалуйста, не используйте наши Услуги.`
                    },
                    {
                        title: '2. Информация, которую мы собираем',
                        content: `2.1. Информация, которую вы предоставляете напрямую:
- Данные учетной записи (имя, email, номер телефона)
- Платежная информация (для платных услуг)
- Информация профиля и предпочтения
- Переписка с нашей службой поддержки

2.2. Автоматически собираемая информация:
- Данные об использовании и аналитика
- Информация об устройстве (тип устройства, операционная система)
- Данные журналов (IP-адрес, тип браузера, просмотренные страницы)
- Файлы cookie и аналогичные технологии

2.3. Информация от сторонних интеграций:
Когда вы авторизуете интеграции со сторонними платформами (Instagram, WhatsApp, Facebook), мы получаем доступ к информации, связанной с вашими аккаунтами на этих платформах, в соответствии с предоставленными вами разрешениями.`
                    },
                    {
                        title: '3. Как мы используем вашу информацию',
                        content: `Мы используем собранную информацию для следующих целей:
- Предоставление и поддержка наших Услуг
- Управление вашей учетной записью
- Улучшение и разработка новых функций
- Предоставление клиентской поддержки
- Проведение исследований и аналитики
- Обучение AI-моделей для улучшения качества сервиса
- Отправка маркетинговых сообщений (с вашего согласия)
- Соблюдение юридических обязательств`
                    },
                    {
                        title: '4. Передача данных',
                        content: `Мы не продаем ваши персональные данные. Мы можем передавать вашу информацию в следующих случаях:
- Поставщикам услуг, которые помогают нам предоставлять наши Услуги
- Сторонним платформам, когда вы авторизуете интеграции
- При слияниях, поглощениях или продаже активов
- Когда это требуется по закону или для защиты наших прав`
                    },
                    {
                        title: '5. Безопасность данных',
                        content: `Мы применяем следующие меры безопасности:
- Шифрование TLS 1.3 для передачи данных
- Шифрование AES-256 для хранения данных
- Контроль доступа на основе ролей
- Круглосуточный мониторинг безопасности
- Регулярные оценки уязвимостей
- Программы обучения сотрудников по защите данных`
                    },
                    {
                        title: '6. Хранение данных',
                        content: `- Информация об учетной записи: хранится 30 дней после закрытия аккаунта
- Данные клиентов: хранятся в течение активной подписки плюс 30 дней после отмены
- Зашифрованные резервные копии: хранятся до 90 дней
- Аналитические данные: хранятся в анонимизированном виде`
                    },
                    {
                        title: '7. Ваши права',
                        content: `Вы имеете право:
- Получить доступ к своим персональным данным
- Исправить неточные данные
- Удалить свои данные
- Ограничить обработку данных
- Отозвать согласие на интеграции
- На переносимость данных

Для реализации ваших прав свяжитесь с нами по адресу privacy@evogroup.ai. Мы ответим в течение 30 дней.`
                    },
                    {
                        title: '8. Сторонние интеграции',
                        content: `При использовании интеграций с платформами Meta (Instagram, Facebook), WhatsApp Business и другими сервисами обмена сообщениями также применяются их условия и политики конфиденциальности. Вы можете отключить интеграции в любое время через настройки аккаунта.`
                    },
                    {
                        title: '9. Файлы cookie',
                        content: `Мы используем следующие типы файлов cookie:
- Необходимые cookie (для базовой функциональности сайта)
- Функциональные cookie (для запоминания ваших предпочтений)
- Аналитические cookie (для понимания того, как вы используете наши Услуги)
- Маркетинговые cookie (для показа релевантной рекламы)

Вы можете управлять настройками cookie через настройки браузера.`
                    },
                    {
                        title: '10. Международная передача данных',
                        content: `Ваши данные могут обрабатываться в странах за пределами страны вашего проживания. Мы используем стандартные договорные положения и другие соответствующие меры для защиты ваших данных при международной передаче.`
                    },
                    {
                        title: '11. Конфиденциальность детей',
                        content: `Наши Услуги предназначены только для взрослых. Мы не собираем сознательно персональную информацию от лиц младше 18 лет.`
                    },
                    {
                        title: '12. Обновления политики',
                        content: `Мы можем время от времени обновлять настоящую Политику конфиденциальности. В случае существенных изменений мы уведомим вас не менее чем за 30 дней по электронной почте или через уведомление на платформе.`
                    },
                    {
                        title: '13. Контактная информация',
                        content: `Если у вас есть вопросы о настоящей Политике конфиденциальности, свяжитесь с нами:

Email: privacy@evogroup.ai
Поддержка: support@evogroup.ai
Веб-сайт: https://evogroup.ai
Адрес: г. Бишкек, Кыргызстан`
                    }
                ]
            }
        }
    }

    const content = getContent()

    return (
        <div className="relative min-h-screen bg-black">
            {/* Background gradients */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
            </div>

            <ModernHeader />

            {/* Header */}
            <div className="relative pt-32 pb-12">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {content.title}
                    </h1>
                    <p className="text-lg text-white/60 mb-2">
                        {content.subtitle}
                    </p>
                    <p className="text-sm text-white/40">
                        {content.effectiveDate}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="relative pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-8">
                        {content.sections.map((section, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                                    {section.title}
                                </h2>
                                <div className="text-white/70 whitespace-pre-line leading-relaxed">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default function PrivacyPage() {
    return (
        <I18nProvider initialLocale="ru">
            <PrivacyContent />
        </I18nProvider>
    )
}

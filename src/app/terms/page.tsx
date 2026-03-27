'use client'

import { I18nProvider, useTranslation } from '@/components/providers/I18nProvider'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'

function TermsContent() {
    const { locale } = useTranslation()

    const getContent = () => {
        if (locale === 'en') {
            return {
                title: 'Terms of Service',
                subtitle: 'Terms and conditions for using our services',
                effectiveDate: 'Effective Date: January 20, 2026',
                sections: [
                    {
                        title: '1. Acceptance of Terms',
                        content: `By accessing or using the EvoAI CRM platform and related services provided by EvoGroup (LLC "Evolution Group", hereinafter referred to as "Company", "we", "our"), you agree to be bound by these Terms of Service ("Terms").

If you do not agree to these Terms, you may not access or use our Services. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.`
                    },
                    {
                        title: '2. Description of Services',
                        content: `EvoAI CRM is an AI-powered customer relationship management platform that provides:
- Customer communication management across multiple channels (WhatsApp, Instagram, Facebook, Telegram)
- AI-powered chatbots and automated responses
- Analytics and reporting tools
- Integration with third-party platforms
- Customer data management

We reserve the right to modify, suspend, or discontinue any part of the Services at any time with reasonable notice.`
                    },
                    {
                        title: '3. Account Registration',
                        content: `To use our Services, you must:
- Provide accurate and complete registration information
- Maintain the security of your account credentials
- Notify us immediately of any unauthorized access
- Be at least 18 years of age

You are responsible for all activities that occur under your account.`
                    },
                    {
                        title: '4. Acceptable Use',
                        content: `You agree not to use our Services to:
- Violate any applicable laws or regulations
- Send spam, unsolicited messages, or harassing content
- Infringe on intellectual property rights
- Transmit malware, viruses, or harmful code
- Attempt to gain unauthorized access to our systems
- Use automated means to access the Services without permission
- Engage in fraudulent or deceptive practices
- Violate the privacy rights of others

We reserve the right to suspend or terminate accounts that violate these terms.`
                    },
                    {
                        title: '5. Third-Party Integrations',
                        content: `Our Services allow integration with third-party platforms including:
- Meta Platforms (Instagram, Facebook, WhatsApp)
- Messaging services (Telegram)
- Other business tools and APIs

When using these integrations:
- You must comply with the terms of service of each platform
- We are not responsible for the availability or functionality of third-party services
- You authorize us to access and process data from connected platforms
- You can disconnect integrations at any time through your account settings`
                    },
                    {
                        title: '6. Payment Terms',
                        content: `For paid Services:
- Subscription fees are billed in advance on a monthly or annual basis
- All fees are non-refundable except as required by law
- We may change pricing with 30 days notice
- You authorize us to charge your payment method for applicable fees
- Failure to pay may result in service suspension

Free trial periods, if offered, are subject to additional terms.`
                    },
                    {
                        title: '7. Intellectual Property',
                        content: `The Services, including all software, content, trademarks, and intellectual property, are owned by EvoGroup or our licensors.

You retain ownership of your data and content. By using the Services, you grant us a limited license to process your data as necessary to provide the Services.

You may not copy, modify, distribute, or reverse engineer any part of our Services without written permission.`
                    },
                    {
                        title: '8. Data Processing',
                        content: `We process your data in accordance with our Privacy Policy. By using the Services, you acknowledge:
- We may use anonymized data to improve our Services and AI models
- Customer data is stored securely and processed in compliance with applicable laws
- You are responsible for obtaining necessary consents from your customers
- Data retention and deletion are governed by our Privacy Policy`
                    },
                    {
                        title: '9. Service Level and Support',
                        content: `We strive to maintain high availability of our Services:
- Target uptime: 99.9% (excluding scheduled maintenance)
- Support is available via email at support@evogroup.ai
- Response times vary based on subscription tier
- Scheduled maintenance will be announced in advance when possible`
                    },
                    {
                        title: '10. Limitation of Liability',
                        content: `To the maximum extent permitted by law:
- Our Services are provided "as is" without warranties of any kind
- We are not liable for indirect, incidental, or consequential damages
- Our total liability shall not exceed the fees paid by you in the preceding 12 months
- We are not responsible for third-party services or integrations`
                    },
                    {
                        title: '11. Indemnification',
                        content: `You agree to indemnify and hold harmless EvoGroup, its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
- Your use of the Services
- Your violation of these Terms
- Your violation of any third-party rights
- Content you submit through the Services`
                    },
                    {
                        title: '12. Termination',
                        content: `Either party may terminate this agreement:
- You may cancel your subscription at any time through account settings
- We may suspend or terminate your account for violation of these Terms
- Upon termination, your access to the Services will cease
- Data retention after termination is governed by our Privacy Policy`
                    },
                    {
                        title: '13. Changes to Terms',
                        content: `We may update these Terms from time to time. We will notify you of material changes at least 30 days before they take effect. Continued use of the Services after changes constitutes acceptance of the new Terms.`
                    },
                    {
                        title: '14. Governing Law',
                        content: `These Terms are governed by the laws of the Kyrgyz Republic. Any disputes shall be resolved in the courts of Bishkek, Kyrgyzstan. For international users, we may agree to alternative dispute resolution mechanisms.`
                    },
                    {
                        title: '15. Contact Information',
                        content: `For questions about these Terms:

Email: legal@evogroup.ai
Support: support@evogroup.ai
Website: https://evogroup.ai
Address: Bishkek, Kyrgyzstan`
                    }
                ]
            }
        } else if (locale === 'ky') {
            return {
                title: 'Кызмат көрсөтүү шарттары',
                subtitle: 'Кызматтарыбызды колдонуу шарттары',
                effectiveDate: 'Күчүнө кирген датасы: 2026-жылдын 20-январы',
                sections: [
                    {
                        title: '1. Шарттарды кабыл алуу',
                        content: `EvoGroup (ЖЧК "Эволюшн Групп") тарабынан сунушталган EvoAI CRM платформасын жана тиешелүү кызматтарды колдонуу менен сиз бул Кызмат көрсөтүү шарттарын ("Шарттар") кабыл алууга макулдугуңузду билдиресиз.

Эгер сиз бул Шарттарга макул болбосоңуз, биздин Кызматтарыбызды колдонбоңуз.`
                    },
                    {
                        title: '2. Кызматтардын сүрөттөмөсү',
                        content: `EvoAI CRM - бул AI-менен иштеген кардарлар менен болгон мамилелерди башкаруу платформасы:
- Бир нече каналдар аркылуу кардарлар менен байланыш башкаруу
- AI-чатботтор жана автоматташтырылган жооптор
- Аналитика жана отчеттуулук куралдары
- Үчүнчү тараптын платформалары менен интеграция`
                    },
                    {
                        title: '3. Каттоо',
                        content: `Биздин Кызматтарды колдонуу үчүн сиз:
- Так жана толук каттоо маалыматын бериңиз
- Каттоо эсебиңиздин купуялыгын сактаңыз
- Уруксатсыз кирүү жөнүндө бизге дароо кабарлаңыз
- 18 жаштан жогору болуңуз`
                    },
                    {
                        title: '15. Байланыш маалыматы',
                        content: `Бул Шарттар боюнча суроолор үчүн:

Email: legal@evogroup.ai
Колдоо: support@evogroup.ai
Веб-сайт: https://evogroup.ai
Дареги: Бишкек, Кыргызстан`
                    }
                ]
            }
        } else {
            // Russian (default)
            return {
                title: 'Условия использования',
                subtitle: 'Условия и положения использования наших услуг',
                effectiveDate: 'Дата вступления в силу: 20 января 2026 года',
                sections: [
                    {
                        title: '1. Принятие условий',
                        content: `Получая доступ или используя платформу EvoAI CRM и связанные услуги, предоставляемые EvoGroup (ОсОО "Эволюшн Групп", далее именуемое "Компания", "мы", "наш"), вы соглашаетесь соблюдать настоящие Условия использования ("Условия").

Если вы не согласны с этими Условиями, вы не можете использовать наши Услуги. Если вы используете Услуги от имени организации, вы подтверждаете, что имеете полномочия связывать эту организацию данными Условиями.`
                    },
                    {
                        title: '2. Описание услуг',
                        content: `EvoAI CRM — это AI-платформа для управления взаимоотношениями с клиентами, которая предоставляет:
- Управление коммуникациями с клиентами через множество каналов (WhatsApp, Instagram, Facebook, Telegram)
- AI-чатботы и автоматизированные ответы
- Инструменты аналитики и отчетности
- Интеграция со сторонними платформами
- Управление данными клиентов

Мы оставляем за собой право изменять, приостанавливать или прекращать любую часть Услуг в любое время с разумным уведомлением.`
                    },
                    {
                        title: '3. Регистрация аккаунта',
                        content: `Для использования наших Услуг вы должны:
- Предоставить точную и полную регистрационную информацию
- Обеспечить безопасность учетных данных вашего аккаунта
- Немедленно уведомить нас о любом несанкционированном доступе
- Быть не моложе 18 лет

Вы несете ответственность за все действия, совершаемые под вашим аккаунтом.`
                    },
                    {
                        title: '4. Допустимое использование',
                        content: `Вы соглашаетесь не использовать наши Услуги для:
- Нарушения применимых законов или нормативных актов
- Отправки спама, нежелательных сообщений или оскорбительного контента
- Нарушения прав интеллектуальной собственности
- Передачи вредоносного ПО, вирусов или вредоносного кода
- Попыток получить несанкционированный доступ к нашим системам
- Использования автоматизированных средств для доступа к Услугам без разрешения
- Мошеннических или обманных действий
- Нарушения прав на конфиденциальность других лиц

Мы оставляем за собой право приостановить или заблокировать аккаунты, нарушающие эти условия.`
                    },
                    {
                        title: '5. Сторонние интеграции',
                        content: `Наши Услуги позволяют интеграцию со сторонними платформами, включая:
- Платформы Meta (Instagram, Facebook, WhatsApp)
- Мессенджеры (Telegram)
- Другие бизнес-инструменты и API

При использовании этих интеграций:
- Вы должны соблюдать условия использования каждой платформы
- Мы не несем ответственности за доступность или функциональность сторонних сервисов
- Вы разрешаете нам доступ и обработку данных из подключенных платформ
- Вы можете отключить интеграции в любое время через настройки аккаунта`
                    },
                    {
                        title: '6. Условия оплаты',
                        content: `Для платных Услуг:
- Абонентская плата взимается заранее на ежемесячной или ежегодной основе
- Все платежи не подлежат возврату, за исключением случаев, предусмотренных законом
- Мы можем изменить цены с уведомлением за 30 дней
- Вы разрешаете нам списывать средства с вашего платежного метода за применимые сборы
- Неуплата может привести к приостановке услуг

Бесплатные пробные периоды, если предлагаются, подчиняются дополнительным условиям.`
                    },
                    {
                        title: '7. Интеллектуальная собственность',
                        content: `Услуги, включая все программное обеспечение, контент, товарные знаки и интеллектуальную собственность, принадлежат EvoGroup или нашим лицензиарам.

Вы сохраняете право собственности на ваши данные и контент. Используя Услуги, вы предоставляете нам ограниченную лицензию на обработку ваших данных в объеме, необходимом для предоставления Услуг.

Вы не можете копировать, модифицировать, распространять или осуществлять обратную разработку любой части наших Услуг без письменного разрешения.`
                    },
                    {
                        title: '8. Обработка данных',
                        content: `Мы обрабатываем ваши данные в соответствии с нашей Политикой конфиденциальности. Используя Услуги, вы признаете:
- Мы можем использовать анонимизированные данные для улучшения наших Услуг и AI-моделей
- Данные клиентов хранятся безопасно и обрабатываются в соответствии с применимым законодательством
- Вы несете ответственность за получение необходимых согласий от ваших клиентов
- Хранение и удаление данных регулируются нашей Политикой конфиденциальности`
                    },
                    {
                        title: '9. Уровень сервиса и поддержка',
                        content: `Мы стремимся поддерживать высокую доступность наших Услуг:
- Целевое время безотказной работы: 99,9% (исключая плановое обслуживание)
- Поддержка доступна по электронной почте support@evogroup.ai
- Время ответа зависит от уровня подписки
- О плановом обслуживании будет сообщено заранее, когда это возможно`
                    },
                    {
                        title: '10. Ограничение ответственности',
                        content: `В максимальной степени, допускаемой законом:
- Наши Услуги предоставляются "как есть" без каких-либо гарантий
- Мы не несем ответственности за косвенные, случайные или последующие убытки
- Наша общая ответственность не превышает сумму платежей, уплаченных вами за предыдущие 12 месяцев
- Мы не несем ответственности за сторонние сервисы или интеграции`
                    },
                    {
                        title: '11. Возмещение убытков',
                        content: `Вы соглашаетесь возместить убытки и оградить EvoGroup, ее должностных лиц, директоров, сотрудников и агентов от любых претензий, убытков или расходов, возникающих в результате:
- Вашего использования Услуг
- Вашего нарушения настоящих Условий
- Вашего нарушения прав третьих лиц
- Контента, который вы отправляете через Услуги`
                    },
                    {
                        title: '12. Прекращение',
                        content: `Любая из сторон может расторгнуть данное соглашение:
- Вы можете отменить подписку в любое время через настройки аккаунта
- Мы можем приостановить или заблокировать ваш аккаунт за нарушение настоящих Условий
- После прекращения ваш доступ к Услугам будет закрыт
- Хранение данных после прекращения регулируется нашей Политикой конфиденциальности`
                    },
                    {
                        title: '13. Изменения условий',
                        content: `Мы можем время от времени обновлять настоящие Условия. Мы уведомим вас о существенных изменениях не менее чем за 30 дней до их вступления в силу. Продолжение использования Услуг после изменений означает принятие новых Условий.`
                    },
                    {
                        title: '14. Применимое право',
                        content: `Настоящие Условия регулируются законодательством Кыргызской Республики. Любые споры подлежат разрешению в судах города Бишкек, Кыргызстан. Для международных пользователей мы можем согласовать альтернативные механизмы разрешения споров.`
                    },
                    {
                        title: '15. Контактная информация',
                        content: `По вопросам, касающимся настоящих Условий:

Email: legal@evogroup.ai
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
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px] animate-float" />
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-float" style={{animationDelay: '2s'}} />
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

export default function TermsPage() {
    return (
        <I18nProvider initialLocale="ru">
            <TermsContent />
        </I18nProvider>
    )
}

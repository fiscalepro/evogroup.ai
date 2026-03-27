'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input, Link } from '@nextui-org/react'
import { useTranslation } from '@/components/providers/I18nProvider'

const Footer: React.FC = () => {
    const { locale } = useTranslation()
    const [email, setEmail] = useState('')
    const currentYear = new Date().getFullYear()

    const getTranslations = () => {
        if (locale === 'en') {
            return {
                newsletter: {
                    title: 'Stay updated',
                    subtitle: 'Get the latest AI insights delivered to your inbox',
                    placeholder: 'Enter your email',
                    button: 'Subscribe'
                },
                company: {
                    name: 'Evolution Group',
                    slogan: 'Made with ❤️ in Kyrgyzstan'
                },
                sections: {
                    company: { title: 'Company', items: ['About', 'Team', 'Careers'], links: ['/', '/team', '/contact'] },
                    support: { title: 'Support', items: ['Documentation', 'Cases', 'Contact'], links: ['/technology', '/cases', '/contact'] },
                    legal: { title: 'Legal', items: ['Privacy Policy', 'Terms of Service'], links: ['/privacy', '/terms'] }
                },
                copyright: 'All rights reserved.'
            }
        } else if (locale === 'ky') {
            return {
                newsletter: {
                    title: 'Жаңылыктарды алыңыз',
                    subtitle: 'ИИ боюнча соңку маалыматтарды алыңыз',
                    placeholder: 'Email дарегиңиз',
                    button: 'Жазылуу'
                },
                company: {
                    name: 'Evolution Group',
                    slogan: 'Кыргызстанда ❤️ менен жасалган'
                },
                sections: {
                    company: { title: 'Компания', items: ['Биз жөнүндө', 'Команда', 'Карьера'], links: ['/', '/team', '/contact'] },
                    support: { title: 'Колдоо', items: ['Документация', 'Кейстер', 'Байланыш'], links: ['/technology', '/cases', '/contact'] },
                    legal: { title: 'Укуктук', items: ['Купуялык саясаты', 'Колдонуу шарттары'], links: ['/privacy', '/terms'] }
                },
                copyright: 'Бардык укуктар корголгон.'
            }
        } else {
            return {
                newsletter: {
                    title: 'Оставайтесь в курсе',
                    subtitle: 'Получайте последние новости AI на почту',
                    placeholder: 'Введите email',
                    button: 'Подписаться'
                },
                company: {
                    name: 'Evolution Group',
                    slogan: 'Сделано с ❤️ в Кыргызстане'
                },
                sections: {
                    company: { title: 'Компания', items: ['О нас', 'Команда', 'Карьера'], links: ['/', '/team', '/contact'] },
                    support: { title: 'Поддержка', items: ['Документация', 'Кейсы', 'Контакты'], links: ['/technology', '/cases', '/contact'] },
                    legal: { title: 'Правовая информация', items: ['Политика конфиденциальности', 'Условия использования'], links: ['/privacy', '/terms'] }
                },
                copyright: 'Все права защищены.'
            }
        }
    }

    const translations = getTranslations()

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Подписка:', email)
        setEmail('')
    }

    return (
        <footer className="relative py-20 overflow-hidden border-t border-white/5">
            {/* Newsletter section */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 mb-16 text-center animate-fade-in">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    {translations.newsletter.title}
                </h3>
                <p className="text-white/60 mb-10 text-lg">
                    {translations.newsletter.subtitle}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={translations.newsletter.placeholder}
                            className="flex-1"
                            classNames={{
                                input: "text-white text-base",
                                inputWrapper: "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-xl transition-all h-14"
                            }}
                            radius="full"
                            size="lg"
                            required
                        />
                        <Button
                            type="submit"
                            color="primary"
                            className="bg-blue-600 hover:bg-blue-700 font-semibold px-8 h-14 transition-all"
                            radius="full"
                            size="lg"
                        >
                            {translations.newsletter.button}
                        </Button>
                    </div>
                </form>
            </div>

            {/* Links */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
                <div className="animate-slide-up">
                    <h4 className="text-white font-semibold mb-6 text-base">{translations.sections.company.title}</h4>
                    <ul className="space-y-4">
                        {translations.sections.company.items.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={translations.sections.company.links[i]}
                                    className="text-white/60 hover:text-white text-sm transition-colors duration-300 block"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                    <h4 className="text-white font-semibold mb-6 text-base">{translations.sections.support.title}</h4>
                    <ul className="space-y-4">
                        {translations.sections.support.items.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={translations.sections.support.links[i]}
                                    className="text-white/60 hover:text-white text-sm transition-colors duration-300 block"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <h4 className="text-white font-semibold mb-6 text-base">{translations.sections.legal.title}</h4>
                    <ul className="space-y-4">
                        {translations.sections.legal.items.map((item, i) => (
                            <li key={i}>
                                <Link
                                    href={translations.sections.legal.links[i]}
                                    className="text-white/60 hover:text-white text-sm transition-colors duration-300 block"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-10 border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 order-2 md:order-1">
                        <Image
                            src="/Vector.svg"
                            alt="Evolution Group Logo"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <p className="text-white/50 text-sm">
                            © {currentYear} {translations.company.name}. {translations.copyright}
                        </p>
                    </div>
                    <p className="text-white/50 text-sm order-1 md:order-2">
                        {translations.company.slogan}
                    </p>
                </div>
            </div>

            {/* Background */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
        </footer>
    )
}

export default Footer

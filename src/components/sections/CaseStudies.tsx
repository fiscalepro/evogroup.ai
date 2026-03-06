'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface AccordionItem {
    icon: React.ReactNode
    title: string
    items: string[]
    isSolution?: boolean
}

interface ResultItem {
    value: string
    label: string
}

interface CaseCard {
    color: 'green' | 'blue'
    icon: string
    tag: string
    company: string
    headline: string
    teaser: string
    accordion: AccordionItem[]
    results: ResultItem[]
    quote: string
    quoteAuthor: string
    chips: string[]
    instagram: {
        handle: string
        url: string
        description: string
    }
    footerLabel: string
}

const WarningIcon = () => (
    <span className="w-5 h-5 rounded-[5px] flex items-center justify-center text-[11px] flex-shrink-0 bg-red-500/10 text-red-400">!</span>
)

const StarIcon = ({ color }: { color: 'green' | 'blue' }) => (
    <span className={`w-5 h-5 rounded-[5px] flex items-center justify-center text-[11px] flex-shrink-0 ${
        color === 'green' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-cyan-400/10 text-cyan-400'
    }`}>*</span>
)

const InstagramIcon = ({ color }: { color: 'green' | 'blue' }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color === 'green' ? '#63dc8c' : '#3ecfff'} strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill={color === 'green' ? '#63dc8c' : '#3ecfff'} stroke="none"/>
    </svg>
)

function Accordion({ items, cardColor }: { items: AccordionItem[], cardColor: 'green' | 'blue' }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="border border-white/[0.07] rounded-xl overflow-hidden mb-4">
            {items.map((item, index) => (
                <div key={index} className={index < items.length - 1 ? 'border-b border-white/[0.07]' : ''}>
                    <button
                        onClick={() => toggle(index)}
                        className="w-full bg-transparent border-none py-3 px-4 flex items-center gap-2.5 cursor-pointer text-[13px] font-semibold text-white text-left hover:bg-white/[0.03] transition-colors"
                    >
                        {item.icon}
                        {item.title}
                        <span className={`ml-auto text-white/40 text-[11px] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                            &#9662;
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="px-4 pb-3.5 text-[13px] text-white/50 leading-[1.7]">
                            <ul className="list-none flex flex-col gap-1.5">
                                {item.items.map((li, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className={`flex-shrink-0 ${item.isSolution
                                            ? cardColor === 'green' ? 'text-emerald-400' : 'text-cyan-400'
                                            : 'text-white/20'
                                        }`}>
                                            {item.isSolution ? '\u2713' : '\u00B7'}
                                        </span>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

const cases: CaseCard[] = [
    {
        color: 'green',
        icon: '\uD83D\uDC84',
        tag: '\u0411\u044C\u044E\u0442\u0438 \u00B7 \u0421\u0430\u043B\u043E\u043D',
        company: '\u0421\u0430\u0439\u043A\u0430\u043B \u041F\u0435\u0440\u043C\u0430\u043D\u0435\u043D\u0442\u043D\u044B\u0439 \u043C\u0430\u043A\u0438\u044F\u0436',
        headline: '\u041A\u0430\u043A \u0441\u0442\u0443\u0434\u0438\u044F \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B\u0430 \u0442\u0435\u0440\u044F\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438\u0437-\u0437\u0430 \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439',
        teaser: '\u041C\u0430\u0441\u0442\u0435\u0440 \u043D\u0435 \u0443\u0441\u043F\u0435\u0432\u0430\u043B \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u0432 Instagram \u0438 WhatsApp \u043C\u0435\u0436\u0434\u0443 \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440\u0430\u043C\u0438. \u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0443\u0445\u043E\u0434\u0438\u043B\u0438 \u043A \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C. \u0412\u043D\u0435\u0434\u0440\u0438\u043B\u0438 AI-\u0447\u0430\u0442\u0431\u043E\u0442 \u2014 \u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0438\u0441\u0447\u0435\u0437\u043B\u0430.',
        accordion: [
            {
                icon: <WarningIcon />,
                title: '\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0434\u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u044F',
                items: [
                    '\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0431\u0435\u0437 \u043E\u0442\u0432\u0435\u0442\u0430 \u043F\u043E 3\u20136 \u0447\u0430\u0441\u043E\u0432',
                    '\u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0443\u0445\u043E\u0434\u0438\u043B\u0438 \u043A \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u0430\u043C',
                    '\u041C\u0430\u0441\u0442\u0435\u0440 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u043B\u0441\u044F \u043D\u0430 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0443 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0446\u0435\u0434\u0443\u0440',
                    '\u041E\u0434\u043D\u0438 \u0438 \u0442\u0435 \u0436\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E\u0432\u0442\u043E\u0440\u044F\u043B\u0438\u0441\u044C \u0434\u0435\u0441\u044F\u0442\u043A\u0438 \u0440\u0430\u0437',
                ],
            },
            {
                icon: <StarIcon color="green" />,
                title: '\u0427\u0442\u043E \u0432\u043D\u0435\u0434\u0440\u0438\u043B\u0438',
                isSolution: true,
                items: [
                    'AI-\u0447\u0430\u0442\u0431\u043E\u0442 \u0432 WhatsApp \u0438 Instagram \u2014 24/7',
                    '\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043F\u0440\u044F\u043C\u043E \u0432 \u0447\u0430\u0442\u0435',
                    '\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u2014 \u043C\u0430\u0441\u0442\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u0435\u0442\u0441\u044F',
                ],
            },
        ],
        results: [
            { value: '<1 \u043C\u0438\u043D', label: '\u0412\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430 (\u0431\u044B\u043B\u043E 3\u20136 \u0447)' },
            { value: '24/7', label: '\u0427\u0430\u0442\u0431\u043E\u0442 \u0431\u0435\u0437 \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u0445' },
            { value: '+\u2191', label: '\u0411\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u043F\u0438\u0441\u0435\u0439' },
            { value: '0', label: '\u041E\u0442\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0439 \u043C\u0430\u0441\u0442\u0435\u0440\u0430' },
        ],
        quote: '\u00AB\u0420\u0430\u043D\u044C\u0448\u0435 \u044F \u0441\u0430\u043C\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u043B\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435. \u0422\u0435\u043F\u0435\u0440\u044C \u0447\u0430\u0442\u0431\u043E\u0442 \u0432\u0441\u0451 \u0434\u0435\u043B\u0430\u0435\u0442 \u0437\u0430 \u043C\u0435\u043D\u044F \u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B, \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0441\u0442\u0430\u043B\u043E \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435.\u00BB',
        quoteAuthor: '\u2014 \u0421\u0430\u0439\u043A\u0430\u043B, \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0441\u0442\u0443\u0434\u0438\u0438',
        chips: ['AI-\u0447\u0430\u0442\u0431\u043E\u0442', 'WhatsApp', 'Instagram', '\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C', '\u0411\u0438\u0448\u043A\u0435\u043A'],
        instagram: {
            handle: '@saikal_begimbaeva.pm',
            url: 'https://instagram.com/saikal_begimbaeva.pm',
            description: '41.4K \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \u00B7 \u0427\u0435\u043C\u043F\u0438\u043E\u043D \u043C\u0438\u0440\u0430 \u041F\u041C 2024',
        },
        footerLabel: '\u0411\u044C\u044E\u0442\u0438 \u00B7 \u041C\u0430\u043B\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441',
    },
    {
        color: 'blue',
        icon: '\uD83C\uDFED',
        tag: '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u00B7 B2B',
        company: '\u0411\u0418\u0410\u0421\u0422.\u041A\u0413',
        headline: '\u041F\u043E\u043B\u043D\u0430\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F: \u043E\u0442 \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E \u043E\u0442\u0433\u0440\u0443\u0437\u043A\u0438',
        teaser: '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0441\u044D\u043D\u0434\u0432\u0438\u0447-\u043F\u0430\u043D\u0435\u043B\u0435\u0439 \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0431\u043B\u043E\u043A\u043E\u0432 \u0432\u043D\u0435\u0434\u0440\u0438\u043B \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u2014 \u0447\u0430\u0442\u0431\u043E\u0442, CRM, \u0434\u0430\u0448\u0431\u043E\u0440\u0434, \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432.',
        accordion: [
            {
                icon: <WarningIcon />,
                title: '\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0434\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438',
                items: [
                    '\u0417\u0430\u044F\u0432\u043A\u0438 \u0442\u0435\u0440\u044F\u043B\u0438\u0441\u044C \u2014 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043C\u0435\u0441\u0442\u0430\u0445',
                    '30\u201360 \u043C\u0438\u043D \u043D\u0430 \u0440\u0443\u0447\u043D\u043E\u0435 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u043A\u0430\u0436\u0434\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438',
                    '\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043D\u0435 \u0432\u0438\u0434\u0435\u043B \u0441\u0442\u0430\u0442\u0443\u0441 \u0431\u0435\u0437 \u043E\u0431\u0437\u0432\u043E\u043D\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u044B',
                    '\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u0451\u043B\u0441\u044F \u0445\u0430\u043E\u0442\u0438\u0447\u043D\u043E',
                ],
            },
            {
                icon: <StarIcon color="blue" />,
                title: '\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438',
                isSolution: true,
                items: [
                    'AI-\u0447\u0430\u0442\u0431\u043E\u0442 \u2014 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442 \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B',
                    'CRM \u2014 \u0432\u0441\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0432 \u043E\u0434\u043D\u043E\u043C \u043E\u043A\u043D\u0435, \u043F\u043E\u043B\u043D\u0430\u044F \u0432\u043E\u0440\u043E\u043D\u043A\u0430',
                    '\u0414\u0430\u0448\u0431\u043E\u0440\u0434 \u2014 \u0441\u0442\u0430\u0442\u0443\u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u0432 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u043C \u0432\u0440\u0435\u043C\u0435\u043D\u0438',
                    '\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u2014 \u0444\u0438\u043A\u0441\u0430\u0446\u0438\u044F \u044D\u0442\u0430\u043F\u043E\u0432 \u0441 \u0444\u043E\u0442\u043E\u043E\u0442\u0447\u0451\u0442\u0430\u043C\u0438',
                    '\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u2014 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0431\u0430\u0437\u0430 \u0437\u043D\u0430\u043D\u0438\u0439',
                ],
            },
        ],
        results: [
            { value: '~0%', label: '\u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A' },
            { value: '\u221280%', label: '\u0412\u0440\u0435\u043C\u0435\u043D\u0438 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443' },
            { value: '100%', label: '\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432' },
            { value: '3\u20135 \u0434\u043D', label: '\u041E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433 (\u0431\u044B\u043B\u043E 2\u20133 \u043D\u0435\u0434)' },
        ],
        quote: '\u00AB\u0422\u0435\u043F\u0435\u0440\u044C \u044F \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u0434\u0430\u0448\u0431\u043E\u0440\u0434 \u0438 \u0432\u0438\u0436\u0443, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441 \u043A\u0430\u0436\u0434\u044B\u043C \u0437\u0430\u043A\u0430\u0437\u043E\u043C. \u0420\u0430\u043D\u044C\u0448\u0435 \u043D\u0443\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0437\u0432\u043E\u043D\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0443.\u00BB',
        quoteAuthor: '\u2014 \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0411\u0418\u0410\u0421\u0422.\u041A\u0413',
        chips: ['AI-\u0447\u0430\u0442\u0431\u043E\u0442', 'CRM', '\u0414\u0430\u0448\u0431\u043E\u0440\u0434', '\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430', '\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435', 'B2B'],
        instagram: {
            handle: '@biast_kg',
            url: 'https://instagram.com/biast_kg',
            description: '25.3K \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432 \u00B7 \u0421\u044D\u043D\u0434\u0432\u0438\u0447-\u043F\u0430\u043D\u0435\u043B\u0438, \u0411\u0438\u0448\u043A\u0435\u043A',
        },
        footerLabel: '\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u00B7 \u041C\u0421\u0411',
    },
]

const stats = [
    { value: '50+', label: '\u041F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043E' },
    { value: '<1 \u043C\u0438\u043D', label: '\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430' },
    { value: '~0%', label: '\u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A' },
    { value: '2 \u043D\u0435\u0434', label: '\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0434\u0435\u043C\u043E-\u043F\u0435\u0440\u0438\u043E\u0434' },
]

function CaseCard({ card, index }: { card: CaseCard, index: number }) {
    const isBlue = card.color === 'blue'
    const accent = isBlue ? 'cyan' : 'emerald'

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`bg-white/[0.04] border border-white/[0.07] rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 ${
                isBlue ? 'hover:border-cyan-400/30' : 'hover:border-emerald-400/30'
            }`}
        >
            {/* Card Head */}
            <div className="p-7 pb-0 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-[22px] flex-shrink-0 ${
                    isBlue ? 'bg-cyan-400/10 border border-cyan-400/20' : 'bg-emerald-400/10 border border-emerald-400/20'
                }`}>
                    {card.icon}
                </div>
                <div>
                    <span className={`inline-block rounded-md px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider mb-1.5 ${
                        isBlue
                            ? 'bg-cyan-400/[0.08] border border-cyan-400/15 text-cyan-400'
                            : 'bg-emerald-400/[0.08] border border-emerald-400/15 text-emerald-400'
                    }`}>
                        {card.tag}
                    </span>
                    <div className="text-[19px] font-extrabold tracking-tight text-white">{card.company}</div>
                </div>
            </div>

            {/* Card Body */}
            <div className="px-7 pt-4 pb-6">
                <div className="text-sm font-semibold leading-relaxed text-white mb-2.5">{card.headline}</div>
                <div className="text-[13px] text-white/50 leading-relaxed mb-5">{card.teaser}</div>

                <Accordion items={card.accordion} cardColor={card.color} />

                {/* Results */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    {card.results.map((r, i) => (
                        <div key={i} className="bg-white/[0.04] border border-white/[0.07] rounded-[10px] p-3">
                            <div className={`text-[19px] font-extrabold leading-none mb-1 font-mono ${
                                isBlue ? 'text-cyan-400' : 'text-emerald-400'
                            }`}>
                                {r.value}
                            </div>
                            <div className="text-[11px] text-white/50 leading-snug">{r.label}</div>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className={`bg-white/[0.02] border-l-2 rounded-r-[10px] p-3.5 mb-4 ${
                    isBlue ? 'border-l-cyan-400' : 'border-l-emerald-400'
                }`}>
                    <p className="text-[13px] text-white/50 leading-relaxed italic mb-1.5">{card.quote}</p>
                    <span className="text-[12px] font-bold text-white">{card.quoteAuthor}</span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {card.chips.map((chip, i) => (
                        <span key={i} className="bg-white/[0.04] border border-white/[0.07] rounded-md px-2.5 py-1 text-[11px] text-white/50 font-mono">
                            {chip}
                        </span>
                    ))}
                </div>

                {/* Instagram */}
                <a
                    href={card.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 rounded-[10px] p-3 no-underline transition-colors ${
                        isBlue
                            ? 'bg-cyan-400/[0.05] border border-cyan-400/15 hover:border-cyan-400/40'
                            : 'bg-emerald-400/[0.05] border border-emerald-400/15 hover:border-emerald-400/40'
                    }`}
                >
                    <InstagramIcon color={card.color} />
                    <span className="text-[13px] font-bold font-mono text-white">{card.instagram.handle}</span>
                    <span className="text-[11px] text-white/50 flex-1 hidden sm:inline">{card.instagram.description}</span>
                    <span className="text-sm text-white/20">&nearr;</span>
                </a>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between px-7 py-3.5 border-t border-white/[0.07] bg-white/[0.01]">
                <span className="text-[12px] text-white/50">{card.footerLabel}</span>
                <a
                    href="#contact"
                    className={`px-4 py-2 rounded-[9px] text-[13px] font-bold border-none cursor-pointer transition-opacity hover:opacity-85 no-underline ${
                        isBlue ? 'bg-cyan-400 text-[#0a0d12]' : 'bg-emerald-400 text-[#0a0d12]'
                    }`}
                >
                    Обсудить проект &rarr;
                </a>
            </div>
        </motion.div>
    )
}

const CaseStudies: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
        },
    }

    return (
        <section id="cases" className="relative py-32 lg:py-40 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-[1100px] mx-auto px-6">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-emerald-400/[0.08] border border-emerald-400/20 rounded-full px-4 py-1.5 text-[12px] font-semibold text-emerald-400 uppercase tracking-wider mb-6">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                        Кейсы клиентов
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        Реальные результаты<br/>
                        для <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">малого и среднего</span><br/>
                        бизнеса
                    </h2>
                    <p className="text-base text-white/50 leading-relaxed max-w-[540px]">
                        Внедряем AI-автоматизацию под ключ — чатботы, CRM, контроль качества и дашборды. Вот что получают наши клиенты на практике.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-5 py-3.5"
                        >
                            <div className="text-[22px] font-extrabold text-emerald-400 font-mono">{stat.value}</div>
                            <div className="text-[12px] text-white/50 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
                    {cases.map((card, index) => (
                        <CaseCard key={index} card={card} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-emerald-400/[0.06] to-cyan-400/[0.04] border border-emerald-400/15 rounded-[18px] p-10 flex items-center justify-between gap-6 flex-wrap"
                >
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-1.5">Ваш бизнес — следующий кейс?</h3>
                        <p className="text-sm text-white/50 max-w-[400px] leading-relaxed">
                            Оставьте заявку — разберём вашу ситуацию, покажем демо и запустим пилот бесплатно на 2 недели.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="bg-emerald-400 text-[#0a0d12] px-7 py-3.5 rounded-[11px] text-sm font-bold cursor-pointer transition-opacity hover:opacity-[0.88] flex-shrink-0 no-underline"
                    >
                        Начать бесплатный пилот &rarr;
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default CaseStudies

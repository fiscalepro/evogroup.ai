'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ModernHeader from '@/components/sections/ModernHeader'
import Footer from '@/components/sections/Footer'
import PageBackground from '@/components/sections/PageBackground'
import { CaseCard } from '@/components/sections/CaseCard'
import Solutions from '@/components/sections/Solutions'
import { useTranslation } from '@/components/providers/I18nProvider'

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

interface CaseCardData {
    number: string
    color: 'green' | 'blue'
    tag: string
    company: string
    headline: string
    teaser: string
    results: { value: string; label: string }[]
    quoteAuthor: string
    instagram: { handle: string; url: string }
}

function getContent(locale: string) {
    const content = {
        en: {
            heroTitle: 'Real results',
            heroSubtitle: 'AI automation delivered end-to-end. Here\u2019s what clients get in practice \u2014 with numbers and names.',
            stats: [
                { value: '50+', label: 'Clients', detail: 'Active deployments' },
                { value: '5', label: 'Industries', detail: 'Beauty, retail, manufacturing, education' },
                { value: '2 weeks', label: 'To results', detail: 'Average launch time' },
                { value: '250%', label: 'Average ROI', detail: 'Within 6-18 months' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: 'Oil & Gas \u00b7 EDO',
                    company: 'Oil & Gas EDO',
                    headline: 'Full EDO system automated document workflow for an oil & gas company',
                    teaser: 'An oil & gas company needed a complete electronic document management system. We built a Spring Boot 3.2.5 backend with React 18 frontend (FSD architecture), JWT auth with HttpOnly cookies, MinIO file storage, Redis caching, and PostgreSQL with Flyway migrations.',
                    results: [
                        { value: '226+', label: 'PRs shipped' },
                        { value: '100%', label: 'Digital document workflow' },
                        { value: 'JWT', label: 'Secure token management' },
                        { value: 'MinIO', label: 'S3-compatible file storage' },
                    ],
                    quoteAuthor: '\u2014 EDO project team',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: 'Manufacturing \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: 'Full automation: from incoming request to shipping',
                    teaser: 'Sandwich panel manufacturer was losing requests and spending hours on manual order processing. We deployed AI chatbot, CRM, and dashboard \u2014 everything became transparent.',
                    results: [
                        { value: '~0%', label: 'Lost requests' },
                        { value: '\u221280%', label: 'Processing time' },
                        { value: '100%', label: 'Transparency' },
                        { value: '3\u20135 d', label: 'Onboarding' },
                    ],
                    quoteAuthor: '\u2014 CEO, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: 'Retail \u00b7 E-commerce',
                    company: 'Phone Store',
                    headline: 'AI chatbot replaced 2 managers and boosted sales by 35%',
                    teaser: 'A phone store was losing customers on Instagram and WhatsApp \u2014 slow responses, missed messages after hours. We deployed an AI chatbot that knows the full catalog, recommends phones, and takes orders 24/7.',
                    results: [
                        { value: '+35%', label: 'Sales conversion' },
                        { value: '5 sec', label: 'Response time' },
                        { value: '+40%', label: 'After-hours sales' },
                        { value: '$800+', label: 'Monthly savings' },
                    ],
                    quoteAuthor: '\u2014 Store owner',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: 'Distribution \u00b7 HR Tech',
                    company: 'Distributor Training Platform',
                    headline: 'AI training platform cut onboarding from 2 weeks to 3 days',
                    teaser: 'A distributor spent weeks training sales reps manually \u2014 supervisors were tied up, quality varied. We built an AI platform with role-based courses, 24/7 AI tutor, automatic exams, and instant reports.',
                    results: [
                        { value: '3 days', label: 'Onboarding time' },
                        { value: '78%', label: 'Avg exam score' },
                        { value: '24/7', label: 'AI tutor' },
                        { value: '0', label: 'Supervisor hours' },
                    ],
                    quoteAuthor: '\u2014 HR Director',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
        ru: {
            heroTitle: '\u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b',
            heroSubtitle: 'AI-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u0434 \u043a\u043b\u044e\u0447. \u0412\u043e\u0442 \u0447\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435 \u2014 \u0441 \u0446\u0438\u0444\u0440\u0430\u043c\u0438 \u0438 \u0438\u043c\u0435\u043d\u0430\u043c\u0438.',
            stats: [
                { value: '50+', label: '\u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432', detail: '\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0439' },
                { value: '5', label: '\u041e\u0442\u0440\u0430\u0441\u043b\u0435\u0439', detail: '\u041a\u0440\u0430\u0441\u043e\u0442\u0430, \u0440\u0438\u0442\u0435\u0439\u043b, \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e, \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435' },
                { value: '2 \u043d\u0435\u0434\u0435\u043b\u0438', label: '\u0414\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430', detail: '\u0421\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430' },
                { value: '250%', label: '\u0421\u0440\u0435\u0434\u043d\u0438\u0439 ROI', detail: '\u0412 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 6\u201318 \u043c\u0435\u0441\u044f\u0446\u0435\u0432' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: '\u041d\u0435\u0444\u0442\u044c \u0438 \u0433\u0430\u0437 \u00b7 \u042d\u0414\u041e',
                    company: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c',
                    headline: '\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u042d\u0414\u041e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0431\u043e\u0440\u043e\u0442 \u043d\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043e\u0432\u043e\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                    teaser: '\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u00ab\u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c\u00bb \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u0430\u0441\u044c \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0431\u043e\u0440\u043e\u0442\u0430. \u041c\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u0431\u044d\u043a\u0435\u043d\u0434 \u043d\u0430 Spring Boot 3.2.5 \u0438 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u043d\u0430 React 18 (FSD-\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430), JWT-\u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044e \u0441 HttpOnly cookies, \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 MinIO, \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 Redis \u0438 PostgreSQL \u0441 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u043c\u0438 Flyway.',
                    results: [
                        { value: '226+', label: 'PR \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e' },
                        { value: '100%', label: '\u0426\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0431\u043e\u0440\u043e\u0442' },
                        { value: 'JWT', label: '\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u043e\u043a\u0435\u043d\u0430\u043c\u0438' },
                        { value: 'MinIO', label: 'S3-\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0435 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435' },
                    ],
                    quoteAuthor: '\u2014 \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: '\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: '\u041f\u043e\u043b\u043d\u0430\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f: \u043e\u0442 \u0432\u0445\u043e\u0434\u044f\u0449\u0435\u0439 \u0437\u0430\u044f\u0432\u043a\u0438 \u0434\u043e \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438',
                    teaser: '\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c \u0441\u044d\u043d\u0434\u0432\u0438\u0447-\u043f\u0430\u043d\u0435\u043b\u0435\u0439 \u0442\u0435\u0440\u044f\u043b \u0437\u0430\u044f\u0432\u043a\u0438 \u0438 \u0442\u0440\u0430\u0442\u0438\u043b \u0447\u0430\u0441\u044b \u043d\u0430 \u0440\u0443\u0447\u043d\u0443\u044e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043a\u0430\u0437\u043e\u0432. \u041c\u044b \u0432\u043d\u0435\u0434\u0440\u0438\u043b\u0438 AI-\u0447\u0430\u0442\u0431\u043e\u0442, CRM \u0438 \u0434\u0430\u0448\u0431\u043e\u0440\u0434 \u2014 \u0432\u0441\u0451 \u0441\u0442\u0430\u043b\u043e \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u043c.',
                    results: [
                        { value: '~0%', label: '\u041f\u043e\u0442\u0435\u0440\u044f\u043d\u043d\u044b\u0445 \u0437\u0430\u044f\u0432\u043e\u043a' },
                        { value: '\u221280%', label: '\u0412\u0440\u0435\u043c\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438' },
                        { value: '100%', label: '\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c' },
                        { value: '3\u20135 \u0434\u043d', label: '\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f' },
                    ],
                    quoteAuthor: '\u2014 \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: '\u0420\u0438\u0442\u0435\u0439\u043b \u00b7 E-commerce',
                    company: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432',
                    headline: 'AI-\u0447\u0430\u0442\u0431\u043e\u0442 \u0437\u0430\u043c\u0435\u043d\u0438\u043b 2 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u0432 \u0438 \u043f\u043e\u0434\u043d\u044f\u043b \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0430 35%',
                    teaser: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u0441\u043e\u0442\u043e\u0432\u044b\u0445 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043e\u0432 \u0442\u0435\u0440\u044f\u043b \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0432 Instagram \u0438 WhatsApp \u2014 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u044b, \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u043d\u0435\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f. \u0412\u043d\u0435\u0434\u0440\u0438\u043b\u0438 AI-\u0447\u0430\u0442\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u043d\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u043f\u043e\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u044b 24/7.',
                    results: [
                        { value: '+35%', label: '\u041a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044f \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0438' },
                        { value: '5 \u0441\u0435\u043a', label: '\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430' },
                        { value: '+40%', label: '\u041f\u0440\u043e\u0434\u0430\u0436\u0438 \u0432 \u043d\u0435\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u0432\u0440\u0435\u043c\u044f' },
                        { value: '$800+', label: '\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u044f \u0432 \u043c\u0435\u0441\u044f\u0446' },
                    ],
                    quoteAuthor: '\u2014 \u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: '\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044f \u00b7 HR Tech',
                    company: '\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u043e\u0440\u0430',
                    headline: '\u0418\u0418-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u043b\u0430 \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433 \u0441 2 \u043d\u0435\u0434\u0435\u043b\u044c \u0434\u043e 3 \u0434\u043d\u0435\u0439',
                    teaser: '\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u043e\u0440 \u0442\u0440\u0430\u0442\u0438\u043b \u043d\u0435\u0434\u0435\u043b\u0438 \u043d\u0430 \u0440\u0443\u0447\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u0439 \u2014 \u0441\u0443\u043f\u0435\u0440\u0432\u0430\u0439\u0437\u0435\u0440\u044b \u0431\u044b\u043b\u0438 \u0437\u0430\u043d\u044f\u0442\u044b, \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u044b\u043b\u043e \u043d\u0435\u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u043c. \u041c\u044b \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0418\u0418-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 \u0441 \u043a\u0443\u0440\u0441\u0430\u043c\u0438 \u043f\u043e \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044f\u043c, \u0418\u0418-\u0442\u0440\u0435\u043d\u0435\u0440\u043e\u043c 24/7, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430\u043c\u0438 \u0438 \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u0442\u0447\u0451\u0442\u0430\u043c\u0438.',
                    results: [
                        { value: '3 \u0434\u043d\u044f', label: '\u0412\u0440\u0435\u043c\u044f \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433\u0430' },
                        { value: '78%', label: '\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0431\u0430\u043b\u043b \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0430' },
                        { value: '24/7', label: '\u0418\u0418-\u0442\u0440\u0435\u043d\u0435\u0440' },
                        { value: '0', label: '\u0427\u0430\u0441\u043e\u0432 \u0441\u0443\u043f\u0435\u0440\u0432\u0430\u0439\u0437\u0435\u0440\u0430' },
                    ],
                    quoteAuthor: '\u2014 HR-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
        ky: {
            heroTitle: '\u0427\u044b\u043d\u044b\u0433\u044b \u043d\u0430\u0442\u044b\u0439\u0436\u0430\u043b\u0430\u0440',
            heroSubtitle: 'AI-\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u0430\u0448\u0442\u044b\u0440\u0443\u0443 \u0442\u043e\u043b\u0443\u0433\u0443 \u043c\u0435\u043d\u0435\u043d. \u041a\u0430\u0440\u0434\u0430\u0440\u043b\u0430\u0440 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430\u0434\u0430 \u044d\u043c\u043d\u0435 \u0430\u043b\u044b\u0448\u0430\u0442 \u2014 \u0441\u0430\u043d\u0434\u0430\u0440 \u0436\u0430\u043d\u0430 \u0430\u0442\u0442\u0430\u0440 \u043c\u0435\u043d\u0435\u043d.',
            stats: [
                { value: '50+', label: '\u041a\u0430\u0440\u0434\u0430\u0440\u043b\u0430\u0440', detail: '\u0410\u043a\u0442\u0438\u0432\u0434\u04af\u04af \u0438\u0448\u043a\u0435 \u0430\u0448\u044b\u0440\u0443\u0443\u043b\u0430\u0440' },
                { value: '5', label: '\u0422\u0430\u0440\u043c\u0430\u043a\u0442\u0430\u0440', detail: '\u0421\u0443\u043b\u0443\u0443\u043b\u0443\u043a, \u0440\u0438\u0442\u0435\u0439\u043b, \u04e9\u043d\u0434\u04af\u0440\u04af\u0448, \u043e\u043a\u0443\u0442\u0443\u0443' },
                { value: '2 \u0436\u0443\u043c\u0430', label: '\u041d\u0430\u0442\u044b\u0439\u0436\u0430\u0433\u0430 \u0447\u0435\u0439\u0438\u043d', detail: '\u041e\u0440\u0442\u043e\u0447\u043e \u0438\u0448\u043a\u0435 \u043a\u0438\u0440\u0438\u04af\u04af \u043c\u04e9\u04e9\u043d\u04e9\u0442\u04af' },
                { value: '250%', label: '\u041e\u0440\u0442\u043e\u0447\u043e ROI', detail: '6\u201318 \u0430\u0439\u0434\u044b\u043d \u0438\u0447\u0438\u043d\u0434\u0435' },
            ],
            cases: [
                {
                    number: '01',
                    color: 'green' as const,
                    tag: '\u041c\u0443\u043d\u0430\u0439 \u0436\u0430\u043d\u0430 \u0433\u0430\u0437 \u00b7 \u042d\u0414\u041e',
                    company: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c',
                    headline: '\u0422\u043e\u043b\u0443\u043a \u042d\u0414\u041e \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0441\u044b \u043c\u0443\u043d\u0430\u0439-\u0433\u0430\u0437 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0441\u044b\u043d\u044b\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0436\u04af\u0433\u04af\u0440\u0442\u04af\u04af\u0441\u04af\u043d \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u0430\u0448\u0442\u044b\u0440\u0434\u044b',
                    teaser: '\u00ab\u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c\u00bb \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0441\u044b\u043d\u0430 \u0442\u043e\u043b\u0443\u043a \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0434\u0443\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0436\u04af\u0433\u04af\u0440\u0442\u04af\u04af \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0441\u044b \u043a\u0435\u0440\u0435\u043a \u0431\u043e\u043b\u0433\u043e\u043d. Spring Boot 3.2.5 \u0431\u044d\u043a\u0435\u043d\u0434 \u0436\u0430\u043d\u0430 React 18 \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 (FSD \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430\u0441\u044b), HttpOnly cookies \u043c\u0435\u043d\u0435\u043d JWT \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f, MinIO \u0444\u0430\u0439\u043b \u0441\u0430\u043a\u0442\u043e\u043e, Redis \u043a\u044d\u0448\u0442\u04e9\u04e9 \u0436\u0430\u043d\u0430 Flyway \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u043b\u0430\u0440\u044b \u043c\u0435\u043d\u0435\u043d PostgreSQL \u0438\u0448\u0442\u0435\u043f \u0447\u044b\u043a\u0442\u044b\u043a.',
                    results: [
                        { value: '226+', label: 'PR \u0436\u04e9\u043d\u04e9\u0442\u04af\u043b\u0434\u04af' },
                        { value: '100%', label: '\u0421\u0430\u043d\u0434\u044b\u043a \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0436\u04af\u0433\u04af\u0440\u0442\u04af\u04af' },
                        { value: 'JWT', label: '\u041a\u043e\u043e\u043f\u0441\u0443\u0437 \u0442\u043e\u043a\u0435\u043d \u0431\u0430\u0448\u043a\u0430\u0440\u0443\u0443' },
                        { value: 'MinIO', label: 'S3-\u0448\u0430\u0439\u043a\u0435\u0448 \u0444\u0430\u0439\u043b \u0441\u0430\u043a\u0442\u043e\u043e' },
                    ],
                    quoteAuthor: '\u2014 \u041f\u0430\u0440\u0442\u043d\u0451\u0440 \u041d\u0435\u0444\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0441\u044b',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '02',
                    color: 'blue' as const,
                    tag: '\u04e8\u043d\u0434\u04af\u0440\u04af\u0448 \u00b7 B2B',
                    company: 'BIAST.KG',
                    headline: '\u0422\u043e\u043b\u0443\u043a \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u0430\u0448\u0442\u044b\u0440\u0443\u0443: \u043a\u0438\u0440\u0433\u0435\u043d \u04e9\u0442\u04af\u043d\u04af\u0447\u0442\u04e9\u043d \u0436\u0435\u0442\u043a\u0438\u0440\u04af\u04af\u0433\u04e9 \u0447\u0435\u0439\u0438\u043d',
                    teaser: '\u0421\u044d\u043d\u0434\u0432\u0438\u0447-\u043f\u0430\u043d\u0435\u043b\u044c \u04e9\u043d\u0434\u04af\u0440\u04af\u04af\u0447\u04af \u04e9\u0442\u04af\u043d\u04af\u0447\u0442\u04e9\u0440\u0434\u04af \u0436\u043e\u0433\u043e\u0442\u0443\u043f, \u0437\u0430\u043a\u0430\u0437\u0434\u0430\u0440\u0434\u044b \u043a\u043e\u043b \u043c\u0435\u043d\u0435\u043d \u0438\u0448\u0442\u0435\u0442\u04af\u04af\u0433\u04e9 \u0441\u0430\u0430\u0442\u0442\u0430\u0448 \u0443\u0431\u0430\u043a\u044b\u0442 \u043a\u043e\u0440\u043e\u0442\u0443\u043f \u0436\u0430\u0442\u043a\u0430\u043d. \u0411\u0438\u0437 AI-\u0447\u0430\u0442\u0431\u043e\u0442, CRM \u0436\u0430\u043d\u0430 \u0434\u0430\u0448\u0431\u043e\u0440\u0434 \u043e\u0440\u043d\u043e\u0442\u0442\u0443\u043a \u2014 \u0431\u0430\u0430\u0440\u044b \u0430\u0447\u044b\u043a-\u0430\u0439\u043a\u044b\u043d \u0431\u043e\u043b\u0434\u0443.',
                    results: [
                        { value: '~0%', label: '\u0416\u043e\u0433\u043e\u043b\u0433\u043e\u043d \u04e9\u0442\u04af\u043d\u04af\u0447\u0442\u04e9\u0440' },
                        { value: '\u221280%', label: '\u0418\u0448\u0442\u0435\u0442\u04af\u04af \u0443\u0431\u0430\u043a\u0442\u044b\u0441\u044b' },
                        { value: '100%', label: '\u0410\u0447\u044b\u043a-\u0430\u0439\u043a\u044b\u043d\u0434\u044b\u043a' },
                        { value: '3\u20135 \u043a\u04af\u043d', label: '\u0410\u0434\u0430\u043f\u0442\u0430\u0446\u0438\u044f' },
                    ],
                    quoteAuthor: '\u2014 \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440, BIAST.KG',
                    instagram: { handle: '@biast_kg', url: 'https://instagram.com/biast_kg' },
                },
                {
                    number: '03',
                    color: 'green' as const,
                    tag: '\u0420\u0438\u0442\u0435\u0439\u043b \u00b7 E-commerce',
                    company: '\u0422\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u04af\u043a\u04e9\u043d\u04af',
                    headline: 'AI-\u0447\u0430\u0442\u0431\u043e\u0442 2 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0434\u0438 \u0430\u043b\u043c\u0430\u0448\u0442\u044b\u0440\u044b\u043f, \u0441\u0430\u0442\u0443\u0443\u043d\u0443 35% \u043a\u04e9\u0442\u04e9\u0440\u0434\u04af',
                    teaser: '\u0423\u044e\u043b\u0434\u0443\u043a \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0434\u04af\u043a\u04e9\u043d\u04af Instagram \u0436\u0430\u043d\u0430 WhatsApp\'\u0442\u0430 \u043a\u0430\u0440\u0434\u0430\u0440\u043b\u0430\u0440\u0434\u044b \u0436\u043e\u0433\u043e\u0442\u0443\u043f \u0436\u0430\u0442\u043a\u0430\u043d \u2014 \u0436\u0430\u0439 \u0436\u043e\u043e\u043f\u0442\u043e\u0440, \u0436\u0443\u043c\u0443\u0448 \u0443\u0431\u0430\u043a\u0442\u044b\u0441\u044b\u043d\u0430\u043d \u0442\u044b\u0448\u043a\u0430\u0440\u044b \u04e9\u0442\u043a\u04e9\u0440\u04af\u043b\u0433\u04e9\u043d \u0441\u0443\u0440\u043e\u043e-\u0442\u0430\u043b\u0430\u043f\u0442\u0430\u0440. \u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0434\u0443 \u0442\u043e\u043b\u0443\u043a \u0431\u0438\u043b\u0433\u0435\u043d, \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0441\u0443\u043d\u0443\u0448\u0442\u0430\u0433\u0430\u043d \u0436\u0430\u043d\u0430 \u0437\u0430\u043a\u0430\u0437 \u043a\u0430\u0431\u044b\u043b \u0430\u043b\u0433\u0430\u043d AI-\u0447\u0430\u0442\u0431\u043e\u0442 \u043e\u0440\u043d\u043e\u0442\u0442\u0443\u043a.',
                    results: [
                        { value: '+35%', label: '\u0421\u0430\u0442\u0443\u0443 \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u044f\u0441\u044b' },
                        { value: '5 \u0441\u0435\u043a', label: '\u0416\u043e\u043e\u043f \u0443\u0431\u0430\u043a\u0442\u044b\u0441\u044b' },
                        { value: '+40%', label: '\u0416\u0443\u043c\u0443\u0448\u0442\u0430\u043d \u0442\u044b\u0448\u043a\u0430\u0440\u044b \u0441\u0430\u0442\u0443\u0443' },
                        { value: '$800+', label: '\u0410\u0439\u043b\u044b\u043a \u04af\u043d\u04e9\u043c\u0434\u04e9\u04e9' },
                    ],
                    quoteAuthor: '\u2014 \u0414\u04af\u043a\u04e9\u043d \u044d\u044d\u0441\u0438',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
                {
                    number: '04',
                    color: 'blue' as const,
                    tag: '\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u0443\u0446\u0438\u044f \u00b7 HR Tech',
                    company: '\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u043e\u0440 \u043e\u043a\u0443\u0442\u0443\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0441\u044b',
                    headline: '\u0416\u0418 \u043e\u043a\u0443\u0442\u0443\u0443 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0441\u044b \u043e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433\u0434\u0438 2 \u0436\u0443\u043c\u0430\u0434\u0430\u043d 3 \u043a\u04af\u043d\u0433\u04e9 \u043a\u044b\u0441\u043a\u0430\u0440\u0442\u0442\u044b',
                    teaser: '\u0414\u0438\u0441\u0442\u0440\u0438\u0431\u044c\u044e\u0442\u043e\u0440 \u0441\u043e\u043e\u0434\u0430 \u04e9\u043a\u04af\u043b\u0434\u04e9\u0440\u04af\u043d \u043a\u043e\u043b \u043c\u0435\u043d\u0435\u043d \u043e\u043a\u0443\u0442\u0443\u0443\u0433\u0430 \u0436\u0443\u043c\u0430\u043b\u0430\u0440\u0434\u044b \u043a\u043e\u0440\u043e\u0442\u0443\u043f \u0436\u0430\u0442\u043a\u0430\u043d \u2014 \u0441\u0443\u043f\u0435\u0440\u0432\u0430\u0439\u0437\u0435\u0440\u043b\u0435\u0440 \u0431\u043e\u0448 \u044d\u043c\u0435\u0441, \u0441\u0430\u043f\u0430\u0442 \u0442\u0443\u0440\u0443\u043a\u0441\u0443\u0437 \u0431\u043e\u043b\u0433\u043e\u043d. \u041a\u044b\u0437\u043c\u0430\u0442\u0442\u0430\u0440 \u0431\u043e\u044e\u043d\u0447\u0430 \u043a\u0443\u0440\u0441\u0442\u0430\u0440, 24/7 \u0416\u0418-\u0442\u0440\u0435\u043d\u0435\u0440, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0442\u044b\u043a \u044d\u043a\u0437\u0430\u043c\u0435\u043d\u0434\u0435\u0440 \u0436\u0430\u043d\u0430 \u0442\u0435\u0437 \u043e\u0442\u0447\u0451\u0442\u0442\u043e\u0440 \u043c\u0435\u043d\u0435\u043d \u0416\u0418-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0442\u04af\u0437\u0434\u04af\u043a.',
                    results: [
                        { value: '3 \u043a\u04af\u043d', label: '\u041e\u043d\u0431\u043e\u0440\u0434\u0438\u043d\u0433 \u0443\u0431\u0430\u043a\u0442\u044b\u0441\u044b' },
                        { value: '78%', label: '\u041e\u0440\u0442\u043e\u0447\u043e \u044d\u043a\u0437\u0430\u043c\u0435\u043d \u0443\u043f\u0430\u0439' },
                        { value: '24/7', label: '\u0416\u0418-\u0442\u0440\u0435\u043d\u0435\u0440' },
                        { value: '0', label: '\u0421\u0443\u043f\u0435\u0440\u0432\u0430\u0439\u0437\u0435\u0440 \u0441\u0430\u0430\u0442\u044b' },
                    ],
                    quoteAuthor: '\u2014 HR-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440',
                    instagram: { handle: '@evogroup.ai', url: 'https://instagram.com/evogroup.ai' },
                },
            ],
        },
    }

    return content[locale as keyof typeof content] || content.en
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    }),
}

export default function CasesPage() {
    const { locale } = useTranslation()
    const content = getContent(locale)

    return (
        <div className="relative min-h-screen bg-[#0A0E1A]">
            <PageBackground />

            <ModernHeader />

            {/* Hero */}
            <section className="relative pt-32 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
                >
                    <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#F0F0F5] tracking-tight mb-4">
                        {content.heroTitle}
                    </h1>
                    <p className="text-base lg:text-lg text-[#F0F0F5]/50 max-w-lg mx-auto leading-relaxed">
                        {content.heroSubtitle}
                    </p>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {content.stats.map((s, i) => (
                            <motion.div
                                key={i} custom={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                className="p-3 sm:p-5 rounded-xl border border-[#F0F0F5]/[0.06] bg-[#F0F0F5]/[0.02]"
                            >
                                <div className="text-lg sm:text-2xl font-bold text-[#F0F0F5] mb-0.5">{s.value}</div>
                                <div className="text-sm font-medium text-[#F0F0F5]/55 mb-0.5">{s.label}</div>
                                <div className="text-xs text-[#F0F0F5]/30">{s.detail}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cases */}
            <section className="pb-24 border-t border-[#F0F0F5]/[0.04]">
                <div className="max-w-4xl mx-auto px-6 pt-20">
                    <div className="flex flex-col gap-5 mb-12">
                        {content.cases.map((card, index) => (
                            <CaseCard key={index} card={card} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            <Solutions />

            <Footer />
        </div>
    )
}

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

// Mock framer-motion
jest.mock('framer-motion', () => ({
    motion: {
        div: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLDivElement>) => (
            <div ref={ref} {...props}>{children}</div>
        )),
        span: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLSpanElement>) => (
            <span ref={ref} {...props}>{children}</span>
        )),
        h1: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLHeadingElement>) => (
            <h1 ref={ref} {...props}>{children}</h1>
        )),
        h2: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLHeadingElement>) => (
            <h2 ref={ref} {...props}>{children}</h2>
        )),
        p: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLParagraphElement>) => (
            <p ref={ref} {...props}>{children}</p>
        )),
        form: React.forwardRef(({ children, whileInView, viewport, initial, animate, exit, transition, ...props }: React.PropsWithChildren<Record<string, unknown>>, ref: React.Ref<HTMLFormElement>) => (
            <form ref={ref} {...props}>{children}</form>
        )),
        line: ({ x1, y1, x2, y2, stroke, strokeWidth, ...props }: Record<string, unknown>) => (
            <line x1={x1 as string} y1={y1 as string} x2={x2 as string} y2={y2 as string} stroke={stroke as string} strokeWidth={strokeWidth as string} {...props} />
        ),
    },
    AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

// Mock I18nProvider
jest.mock('@/components/providers/I18nProvider', () => ({
    useTranslation: () => ({ locale: 'ru' as const, changeLanguage: jest.fn(), isHydrated: true, t: (key: string) => key, tObj: (section: string) => require('../../../src/locales/ru').ru[section] }),
    I18nProvider: ({ children }: React.PropsWithChildren) => <>{children}</>,
}))

import CCEHeroSection from '@/components/sections/cce/CCEHeroSection'
import CCEProblemSection from '@/components/sections/cce/CCEProblemSection'
import CCEPlatformOverview from '@/components/sections/cce/CCEPlatformOverview'
import CCESwarmIntelligence from '@/components/sections/cce/CCESwarmIntelligence'
import CCEDeveloperGrowth from '@/components/sections/cce/CCEDeveloperGrowth'
import CCESecuritySection from '@/components/sections/cce/CCESecuritySection'
import CCEHowItWorks from '@/components/sections/cce/CCEHowItWorks'
import CCEContactForm from '@/components/sections/cce/CCEContactForm'

describe('CCE Hero Section', () => {
    it('renders badge and title', () => {
        render(<CCEHeroSection />)
        expect(screen.getByText('Claude Code Enterprise')).toBeInTheDocument()
        expect(screen.getByText(/Один AI-ассистент хорош/)).toBeInTheDocument()
    })

    it('renders CTA button linking to contact form', () => {
        render(<CCEHeroSection />)
        const cta = screen.getByText('Связаться с нами')
        expect(cta.closest('a')).toHaveAttribute('href', '#cce-contact')
    })

    it('renders stats', () => {
        render(<CCEHeroSection />)
        expect(screen.getByText('117+')).toBeInTheDocument()
        expect(screen.getByText('MCP инструментов')).toBeInTheDocument()
        expect(screen.getByText('6')).toBeInTheDocument()
        expect(screen.getByText('измерений роста')).toBeInTheDocument()
    })
})

describe('CCE Problem Section', () => {
    it('renders badge and title', () => {
        render(<CCEProblemSection />)
        expect(screen.getByText('Знакомые проблемы?')).toBeInTheDocument()
        expect(screen.getByText('AI без координации = хаос')).toBeInTheDocument()
    })

    it('renders all 4 problem cards', () => {
        render(<CCEProblemSection />)
        expect(screen.getByText('Каждый настраивает сам')).toBeInTheDocument()
        expect(screen.getByText('Знания не передаются')).toBeInTheDocument()
        expect(screen.getByText('Нет видимости и метрик')).toBeInTheDocument()
        expect(screen.getByText('Безопасность под вопросом')).toBeInTheDocument()
    })
})

describe('CCE Platform Overview', () => {
    it('renders three pillars', () => {
        render(<CCEPlatformOverview />)
        expect(screen.getByText('Три столпа CCE')).toBeInTheDocument()
        expect(screen.getByText('Мультиплатформенность')).toBeInTheDocument()
        expect(screen.getByText('CCE Dashboard')).toBeInTheDocument()
        expect(screen.getByText('Enterprise Config')).toBeInTheDocument()
    })

    it('renders platform tags', () => {
        render(<CCEPlatformOverview />)
        expect(screen.getByText('Claude Code')).toBeInTheDocument()
        expect(screen.getByText('OpenAI Codex')).toBeInTheDocument()
        expect(screen.getByText('Gemini CLI')).toBeInTheDocument()
        expect(screen.getByText('OpenCode')).toBeInTheDocument()
        expect(screen.getByText('Qwen Code')).toBeInTheDocument()
        expect(screen.getByText('OpenClaw')).toBeInTheDocument()
    })

    it('renders feature checkmarks', () => {
        render(<CCEPlatformOverview />)
        expect(screen.getByText('117+ MCP инструментов')).toBeInTheDocument()
        expect(screen.getByText('Централизованное подключение агентов')).toBeInTheDocument()
    })

    it('renders statusline feature block', () => {
        render(<CCEPlatformOverview />)
        expect(screen.getByText('Командная строка состояния')).toBeInTheDocument()
        expect(screen.getByText('ccstatusline')).toBeInTheDocument()
        expect(screen.getByText(/Линия 3 — CCE/)).toBeInTheDocument()
    })
})

describe('CCE Swarm Intelligence', () => {
    it('renders badge and title', () => {
        render(<CCESwarmIntelligence />)
        expect(screen.getByText('Swarm Intelligence')).toBeInTheDocument()
        expect(screen.getByText('Паттерн одного — знание всех')).toBeInTheDocument()
    })

    it('renders 4 features', () => {
        render(<CCESwarmIntelligence />)
        expect(screen.getByText('Автообнаружение паттернов')).toBeInTheDocument()
        expect(screen.getByText('Умные рекомендации')).toBeInTheDocument()
        expect(screen.getByText('Усиление и затухание')).toBeInTheDocument()
        expect(screen.getByText('Метрики эффективности')).toBeInTheDocument()
    })

    it('renders network visualization hub', () => {
        render(<CCESwarmIntelligence />)
        expect(screen.getAllByText('CCE Hub').length).toBeGreaterThanOrEqual(1)
    })
})

describe('CCE Developer Growth', () => {
    it('renders title and subtitle', () => {
        render(<CCEDeveloperGrowth />)
        expect(screen.getByText(/Рост каждого разработчика/)).toBeInTheDocument()
    })

    it('renders 6 dimension tags', () => {
        render(<CCEDeveloperGrowth />)
        // Each dimension appears twice: as a tag and in the profile card
        expect(screen.getAllByText('Продуктивность')).toHaveLength(2)
        expect(screen.getAllByText('Качество кода')).toHaveLength(2)
        expect(screen.getAllByText('AI-мастерство')).toHaveLength(2)
        expect(screen.getAllByText('Командная работа')).toHaveLength(2)
        expect(screen.getAllByText('Инновации')).toHaveLength(2)
        expect(screen.getAllByText('Техническая глубина')).toHaveLength(2)
    })

    it('renders developer profile card', () => {
        render(<CCEDeveloperGrowth />)
        expect(screen.getByText('Алексей К.')).toBeInTheDocument()
        expect(screen.getByText('Senior Developer')).toBeInTheDocument()
        expect(screen.getByText('82/100')).toBeInTheDocument()
    })
})

describe('CCE Security Section', () => {
    it('renders 6 security features', () => {
        render(<CCESecuritySection />)
        expect(screen.getByText('Безопасность без компромиссов')).toBeInTheDocument()
        expect(screen.getByText('Политики безопасности')).toBeInTheDocument()
        expect(screen.getByText('Аудит и мониторинг')).toBeInTheDocument()
        expect(screen.getByText('Секреты под контролем')).toBeInTheDocument()
        expect(screen.getByText('Code Review AI')).toBeInTheDocument()
        expect(screen.getByText('Compliance Ready')).toBeInTheDocument()
        expect(screen.getByText('Self-hosted опция')).toBeInTheDocument()
    })
})

describe('CCE How It Works', () => {
    it('renders 3 steps', () => {
        render(<CCEHowItWorks />)
        expect(screen.getByText('3 шага к умной команде')).toBeInTheDocument()
        expect(screen.getByText('Подключаем')).toBeInTheDocument()
        expect(screen.getByText('Запускаем')).toBeInTheDocument()
        expect(screen.getByText('Растём')).toBeInTheDocument()
    })

    it('renders step numbers', () => {
        render(<CCEHowItWorks />)
        expect(screen.getByText('1')).toBeInTheDocument()
        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByText('3')).toBeInTheDocument()
    })
})

describe('CCE Contact Form', () => {
    it('renders form fields', () => {
        render(<CCEContactForm />)
        expect(screen.getByText('Готовы усилить свою команду?')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ваше имя')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('email@company.com')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('+996 ...')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Название компании')).toBeInTheDocument()
    })

    it('has contact section id for anchor scrolling', () => {
        const { container } = render(<CCEContactForm />)
        expect(container.querySelector('#cce-contact')).toBeInTheDocument()
    })

    it('validates required fields on submit', async () => {
        render(<CCEContactForm />)
        const submitButton = screen.getByText('Связаться с нами')
        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(screen.getByText('Укажите ваше имя')).toBeInTheDocument()
            expect(screen.getByText('Укажите email')).toBeInTheDocument()
            expect(screen.getByText('Укажите компанию')).toBeInTheDocument()
        })
    })

    it('validates email format', async () => {
        render(<CCEContactForm />)

        fireEvent.change(screen.getByPlaceholderText('Ваше имя'), { target: { value: 'Test' } })
        // Use value with @ but invalid format (no TLD) to bypass jsdom type=email sanitization
        fireEvent.change(screen.getByPlaceholderText('email@company.com'), { target: { value: 'test@invalid' } })
        fireEvent.change(screen.getByPlaceholderText('Название компании'), { target: { value: 'Test Co' } })

        fireEvent.click(screen.getByText('Связаться с нами'))

        await waitFor(() => {
            expect(screen.getByText('Некорректный email')).toBeInTheDocument()
        })
    })

    it('submits form successfully', async () => {
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            status: 200,
            json: async () => ({ success: true }),
        })

        render(<CCEContactForm />)

        fireEvent.change(screen.getByPlaceholderText('Ваше имя'), { target: { value: 'Тест', name: 'name' } })
        fireEvent.change(screen.getByPlaceholderText('email@company.com'), { target: { value: 'test@example.com', name: 'email' } })
        fireEvent.change(screen.getByPlaceholderText('Название компании'), { target: { value: 'Test Corp', name: 'company' } })

        fireEvent.click(screen.getByText('Связаться с нами'))

        await waitFor(() => {
            expect(screen.getByText('Заявка отправлена!')).toBeInTheDocument()
        })

        expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }))
    })

    it('renders info items on the left side', () => {
        render(<CCEContactForm />)
        expect(screen.getByText('Персональная демонстрация')).toBeInTheDocument()
        expect(screen.getByText('Анализ процессов')).toBeInTheDocument()
        expect(screen.getByText('Настройка под вас')).toBeInTheDocument()
        expect(screen.getByText('Сопровождение')).toBeInTheDocument()
    })
})

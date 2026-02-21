import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'CCE — Claude Code Enterprise | Evolution Group',
    description: 'Enterprise-платформа управления AI-командами разработчиков. Swarm Intelligence, 117+ MCP инструментов, 6 измерений роста. Работает с Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code.',
    keywords: [
        'Claude Code Enterprise', 'CCE', 'AI coding', 'Swarm Intelligence',
        'MCP tools', 'developer growth', 'enterprise AI', 'team intelligence',
        'Claude Code', 'OpenAI Codex', 'Gemini CLI', 'OpenCode', 'Qwen Code',
        'Evolution Group', 'AI разработка', 'управление командой'
    ],
    openGraph: {
        title: 'CCE — Claude Code Enterprise | Evolution Group',
        description: 'Один AI-ассистент хорош. Команда AI-ассистентов — непобедима. Превращаем AI-кодинг из инструмента одиночки в координированный командный интеллект.',
        type: 'website',
        locale: 'ru_RU',
        siteName: 'Evolution Group',
        url: 'https://evogroup.ai/solutions/cce',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CCE — Claude Code Enterprise',
        description: 'Enterprise-платформа управления AI-командами. Swarm Intelligence, 117+ MCP инструментов, 6 измерений роста разработчика.',
        site: '@evolutiongroup',
        creator: '@evolutiongroup',
    },
    other: {
        'telegram:title': 'CCE — Claude Code Enterprise | Evolution Group',
        'telegram:description': 'Enterprise-платформа управления AI-командами разработчиков. 117+ MCP инструментов, Swarm Intelligence, рост каждого разработчика.',
    },
    alternates: {
        canonical: 'https://evogroup.ai/solutions/cce',
    },
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Claude Code Enterprise (CCE)',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    description: 'Enterprise-платформа управления AI-командами разработчиков. Превращает индивидуальный AI-инструмент в координированную систему командного интеллекта.',
    offers: {
        '@type': 'Offer',
        category: 'Enterprise',
        availability: 'https://schema.org/OnlineOnly',
    },
    featureList: [
        'Swarm Intelligence — автоматическое обнаружение и распространение паттернов',
        '117+ MCP инструментов из коробки',
        '6 измерений роста разработчика',
        'Мультиплатформенность: Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code',
        'Enterprise Security с политиками и аудитом',
        'Настройка за 1 команду — cce init',
    ],
    provider: {
        '@type': 'Organization',
        name: 'Evolution Group',
        url: 'https://evogroup.ai',
    },
}

// JSON-LD uses a static, hardcoded object — no user input, safe from XSS
const jsonLdString = JSON.stringify(jsonLd)

export default function CCELayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: jsonLdString }}
            />
            {children}
        </>
    )
}

import { Solution, Client, CaseStudy, TeamMember } from './types'

export const solutions: Solution[] = [
  {
    id: 'api-integration',
    title: 'Интеграция с госсистемами через Tunduk X-Road',
    description: 'Прямая интеграция с государственными информационными системами КР через шину Tunduk',
    icon: 'api',
    features: [
      'ЭСФ — электронные счета-фактуры через ГНС',
      'ЭТТН — электронные товарно-транспортные накладные',
      'ККМ — контрольно-кассовые машины через Salyk',
      'Регистрация ИП через X-Road API'
    ],
    color: 'blue'
  },
  {
    id: 'fintech-ecosystem',
    title: 'SmartUchet — платформа для Бакай Банка',
    description: 'Комплексная экосистема микросервисов для банковского малого бизнеса',
    icon: 'bank',
    features: [
      'HR-модуль с генерацией документов на 4 языках',
      'ERP с кассовым рабочим местом и аналитикой',
      'Смарт-контракты с ОЭЦП подписанием',
      'Налоговая отчётность и мониторинг'
    ],
    color: 'green'
  },
  {
    id: 'corporate-systems',
    title: 'Корпоративные системы управления',
    description: 'Автоматизация бизнес-процессов для предприятий любого масштаба',
    icon: 'building',
    features: [
      'Управление нефтебазами (10 баз, 152 резервуара)',
      'Тех. поддержка сети из 70+ АЗС',
      'Электронный документооборот (ЭДО)',
      'AI-автоматизация разработки через Claude Code'
    ],
    color: 'purple'
  },
  {
    id: 'industry-automation',
    title: 'Отраслевые решения',
    description: 'Специализированные продукты для ресторанов, клиник, отелей и логистики',
    icon: 'cog',
    features: [
      'EvoResto — QR-меню, заказы, оплата через Bakai24',
      'EvoClinic — управление клиникой с WhatsApp-ботом',
      'SmartStay — управление гостиницами',
      'Cargo CRM — логистика и грузоперевозки'
    ],
    color: 'orange'
  }
]

export const clients: Client[] = [
  { id: 'bakai', name: 'Бакай Банк', logo: '/logos/bank1.svg', industry: 'banking' },
  { id: 'bpetroleum', name: 'Бишкек Петролеум', logo: '/logos/oil1.svg', industry: 'oil' },
  { id: 'partnerneft', name: 'Партнёр Нефть', logo: '/logos/oil1.svg', industry: 'oil' },
  { id: 'minedu', name: 'Мин. образования КР', logo: '/logos/gov1.svg', industry: 'government' }
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'bakai-smartuchet',
    title: 'SmartUchet — экосистема для малого бизнеса',
    client: 'Бакай Банк',
    industry: 'Банковский сектор',
    challenge: 'Банку необходимо предоставить клиентам малого бизнеса полный цикл электронных госуслуг в мобильном приложении',
    solution: 'Разработали 16 микросервисов на Spring Boot/React: ЭСФ, ЭТТН, HR, ERP, налоговая отчётность, регистрация ИП, мониторинг — с интеграцией через Tunduk X-Road и ОЭЦП подписание',
    results: [
      { metric: 'Микросервисов в продакшне', value: '16', description: 'Полная экосистема на Spring Cloud + Eureka' },
      { metric: 'REST endpoints', value: '84+', description: 'Только в HR-модуле, 24 таблицы БД' },
      { metric: 'Языков интерфейса', value: '4', description: 'Русский, Кыргызский, English, 中文' }
    ],
    image: '/cases/banking.jpg'
  },
  {
    id: 'petro-depot',
    title: 'Цифровизация сети нефтебаз Кыргызстана',
    client: 'Бишкек Петролеум',
    industry: 'Нефтегазовая отрасль',
    challenge: 'Управление 10 нефтебазами с 152 резервуарами и 70+ АЗС без единой цифровой системы',
    solution: 'Создали комплексную платформу: учёт приёмки/отпуска топлива, контроль качества, AI-аналитика, интеграция с ЭТТН и ЭСФ, система техподдержки с мобильными приложениями',
    results: [
      { metric: 'Резервуаров под контролем', value: '152', description: '142 РВС + 10 РГС на 10 нефтебазах' },
      { metric: 'Тикетов техподдержки', value: '600+', description: 'PR в основном репозитории' },
      { metric: 'Ролей пользователей', value: '10', description: 'От оператора АЗС до аудитора' }
    ],
    image: '/cases/oil.jpg'
  },
  {
    id: 'isuo-education',
    title: 'ИСУО 2.0 — система управления образованием',
    client: 'Министерство образования КР',
    industry: 'Государственный сектор',
    challenge: 'Централизованный мониторинг всей образовательной системы страны: школы, детсады, колледжи',
    solution: 'Разработали веб-платформу с AI-поиском, региональной аналитикой, мониторингом инфраструктуры и интеграцией с Kundoluk на 3 языках',
    results: [
      { metric: 'Уровней образования', value: '3', description: 'Общее, дошкольное, профессиональное' },
      { metric: 'Языков', value: '3', description: 'Кыргызский, русский, узбекский' },
      { metric: 'Ключевая фича', value: 'AI', description: 'Интеллектуальный поиск по всей базе данных' }
    ],
    image: '/cases/government.jpg'
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: 'cto',
    name: 'Тимур Камнев',
    position: 'CTO & Engineering Lead',
    expertise: ['Spring Boot', 'Next.js', 'Microservices', 'Claude AI'],
    image: '/team/cto.jpg',
    linkedin: 'https://linkedin.com/company/evogroup-ai'
  },
  {
    id: 'lead-dev',
    name: 'A. Kerimkulov',
    position: 'Backend Developer',
    expertise: ['Java 21', 'Spring Cloud', 'PostgreSQL', 'Docker'],
    image: '/team/lead-dev.jpg',
    linkedin: 'https://linkedin.com/company/evogroup-ai'
  },
  {
    id: 'ai-specialist',
    name: 'I. Kazakbaev',
    position: 'Full-Stack Developer',
    expertise: ['React', 'TypeScript', 'Next.js', 'Flutter'],
    image: '/team/ai-specialist.jpg',
    linkedin: 'https://linkedin.com/company/evogroup-ai'
  }
]

export const companyStats = {
  projectsCompleted: '68+',
  clientsSaved: '$10M+',
  uptime: '99.9%',
  teamSize: '25+'
}

export const competitiveAdvantages = [
  {
    title: 'ИИ-центричный подход',
    description: 'Claude AI в каждом продукте — от чат-ботов до code review',
    icon: 'brain'
  },
  {
    title: 'Экспертиза в госинтеграции',
    description: 'Tunduk X-Road, Salyk, ГНС, ОЭЦП Infocom — всё в продакшне',
    icon: 'government'
  },
  {
    title: 'Полный цикл разработки',
    description: 'Spring Boot + Next.js + Flutter — от бэкенда до мобильных приложений',
    icon: 'puzzle'
  },
  {
    title: 'Проверено крупнейшими',
    description: 'Бакай Банк, Бишкек Петролеум, Министерство образования КР',
    icon: 'shield'
  }
]
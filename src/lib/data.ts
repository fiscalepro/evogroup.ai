import { Solution, Client, CaseStudy, TeamMember } from './types'

export const solutions: Solution[] = [
  {
    id: 'api-integration',
    title: 'API-интеграция с государственными органами',
    description: 'Прямая интеграция с государственными информационными системами КР',
    icon: 'api',
    features: [
      'Интеграция с ЭСФ (электронные счета-фактуры)',
      'Подключение к ЭТТН (электронные товарно-транспортные накладные)', 
      'Интеграция с системами ККМ',
      'Доступ к государственным сервисам'
    ],
    color: 'blue'
  },
  {
    id: 'fintech-ecosystem',
    title: 'Экосистемы для финансового сектора',
    description: 'Комплексные решения для крупнейших банков страны',
    icon: 'bank',
    features: [
      'Интеграция госсервисов в банковские приложения',
      'Разработка смарт-контрактов',
      'Инновационные финансовые технологии',
      'Создание комплексных решений'
    ],
    color: 'green'
  },
  {
    id: 'corporate-systems',
    title: 'Корпоративные системы управления',
    description: 'Автоматизация бизнес-процессов с использованием ИИ',
    icon: 'building',
    features: [
      'Товароучетные системы',
      'HR-системы управления персоналом',
      'ERP-решения',
      'Интеграция бизнес-процессов'
    ],
    color: 'purple'
  },
  {
    id: 'industry-automation',
    title: 'Отраслевая автоматизация',
    description: 'Специализированные решения для различных отраслей',
    icon: 'cog',
    features: [
      'Решения для нефтебаз',
      'Автоматизация производства',
      'Цифровая трансформация',
      'Системы мониторинга и контроля'
    ],
    color: 'orange'
  }
]

export const clients: Client[] = [
  { id: 'bank1', name: 'Банк №1', logo: '/logos/bank1.svg', industry: 'banking' },
  { id: 'bank2', name: 'Банк №2', logo: '/logos/bank2.svg', industry: 'banking' },
  { id: 'oil1', name: 'НефтеКомпания', logo: '/logos/oil1.svg', industry: 'oil' },
  { id: 'gov1', name: 'Министерство', logo: '/logos/gov1.svg', industry: 'government' }
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'banking-integration',
    title: 'Интеграция ИИ-системы управления рисками',
    client: 'Крупнейший банк КР',
    industry: 'Банковский сектор',
    challenge: 'Необходимость автоматизации оценки кредитных рисков и интеграции с государственными базами данных',
    solution: 'Разработали ИИ-систему анализа кредитоспособности с интеграцией в государственные информационные системы',
    results: [
      { metric: 'Время обработки заявок', value: '-75%', description: 'Сокращение с 3 дней до 6 часов' },
      { metric: 'Точность оценки рисков', value: '+40%', description: 'Снижение просроченной задолженности' },
      { metric: 'Экономия на персонале', value: '$500K', description: 'Годовая экономия на операционных расходах' }
    ],
    image: '/cases/banking.jpg'
  },
  {
    id: 'oil-automation',
    title: 'ИИ-система управления нефтебазой',
    client: 'Нефтеперерабатывающая компания',
    industry: 'Нефтегазовая отрасль',
    challenge: 'Оптимизация логистических процессов и контроль качества продукции',
    solution: 'Внедрили комплексную ИИ-систему управления складскими операциями и контроля качества',
    results: [
      { metric: 'Эффективность логистики', value: '+60%', description: 'Оптимизация маршрутов и загрузки' },
      { metric: 'Контроль качества', value: '99.9%', description: 'Автоматическое выявление отклонений' },
      { metric: 'Экономия топлива', value: '-30%', description: 'За счет оптимизации маршрутов' }
    ],
    image: '/cases/oil.jpg'
  },
  {
    id: 'government-integration',
    title: 'Платформа электронного документооборота',
    client: 'Государственная организация',
    industry: 'Государственный сектор',
    challenge: 'Цифровизация документооборота и интеграция различных ведомств',
    solution: 'Создали ИИ-платформу обработки документов с интеграцией между государственными системами',
    results: [
      { metric: 'Скорость обработки', value: '+300%', description: 'Автоматическая обработка документов' },
      { metric: 'Снижение ошибок', value: '-90%', description: 'ИИ-валидация и проверка данных' },
      { metric: 'Экономия бюджета', value: '$2M', description: 'Годовая экономия на операционных расходах' }
    ],
    image: '/cases/government.jpg'
  }
]

export const teamMembers: TeamMember[] = [
  {
    id: 'cto',
    name: 'Вадим Беркович',
    position: 'CEO & AI Lead',
    expertise: ['Machine Learning', 'Computer Vision', 'NLP', 'System Architecture'],
    image: '/team/cto.jpg',
    linkedin: 'https://linkedin.com/in/vadim-berkovich'
  },
  {
    id: 'lead-dev',
    name: 'Мария Сидорова',
    position: 'Lead Backend Developer',
    expertise: ['Node.js', 'Python', 'Microservices', 'API Design'],
    image: '/team/lead-dev.jpg',
    linkedin: 'https://linkedin.com/in/maria-sidorova'
  },
  {
    id: 'ai-specialist',
    name: 'Дмитрий Козлов',
    position: 'AI Research Scientist',
    expertise: ['Deep Learning', 'Predictive Analytics', 'Data Science', 'MLOps'],
    image: '/team/ai-specialist.jpg',
    linkedin: 'https://linkedin.com/in/dmitry-kozlov'
  }
]

export const companyStats = {
  projectsCompleted: '50+',
  clientsSaved: '$10M+',
  uptime: '99.9%',
  teamSize: '25+'
}

export const competitiveAdvantages = [
  {
    title: 'ИИ-центричный подход',
    description: 'Искусственный интеллект в основе каждого решения',
    icon: 'brain'
  },
  {
    title: 'Экспертиза в госинтеграции',
    description: 'Уникальный опыт работы с государственными API',
    icon: 'government'
  },
  {
    title: 'Комплексный подход',
    description: 'От анализа до полного внедрения решений',
    icon: 'puzzle'
  },
  {
    title: 'Надежность',
    description: 'Работаем с крупнейшими финансовыми институтами страны',
    icon: 'shield'
  }
]
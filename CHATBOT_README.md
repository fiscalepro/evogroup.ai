# AI Chatbot - EvoGroup

## Описание

Интеллектуальный AI-чатбот с использованием DeepSeek API для естественного общения с посетителями сайта EvoGroup.

## Возможности

- **Персонализированные ответы** - чатбот знает о компании, продуктах и услугах
- **Контекстное понимание** - учитывает страницу, язык и предыдущую историю
- **Отраслевая экспертиза** - специализация на банках, нефтегазе и госсекторе
- **Многоязычность** - поддержка русского и кыргызского языков
- **24/7 доступность** - автоматические ответы в любое время

## Технический стек

- **AI модель**: DeepSeek Chat
- **Frontend**: React + Framer Motion
- **Backend**: Next.js API Routes
- **SDK**: OpenAI SDK (совместим с DeepSeek)

## Файлы компонентов

```
src/
├── app/api/chat/route.ts    # API endpoint для чата
├── components/ChatBot.tsx   # UI компонент чатбота
└── app/page.tsx            # Интеграция на главной странице
```

## API Endpoint

### POST /api/chat

**Request:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Ваш вопрос"
    }
  ],
  "userContext": {
    "page": "/",
    "language": "ru",
    "referrer": ""
  }
}
```

**Response:**
```json
{
  "message": "Ответ от AI",
  "usage": {
    "prompt_tokens": 498,
    "completion_tokens": 406,
    "total_tokens": 904
  }
}
```

## Использование

### 1. Запуск локально

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev

# Открыть http://localhost:3000
```

### 2. В браузере

1. Откройте сайт
2. Нажмите на кнопку чата в правом нижнем углу
3. Начните общение с AI

### 3. Тестовые вопросы

- "Расскажите о ваших AI решениях для банков"
- "Сколько стоят ваши услуги?"
- "Какие технологии вы используете?"
- "У вас есть опыт работы с госсектором?"
- "Можете помочь с миграцией в облако?"

## Конфигурация

### Переменные окружения (.env.local)

```env
DEEPSEEK_API_KEY=sk-8dc300d8eb824d2fb93787261bcc6766
NEXT_PUBLIC_SITE_URL=http://localhost:4599
```

### Настройка System Prompt

Отредактируйте `SYSTEM_PROMPT` в файле `src/app/api/chat/route.ts` для изменения:
- Информации о компании
- Стиля общения
- Специализации
- Продуктов и услуг

## Стоимость использования

DeepSeek API очень доступен:
- **Входящие токены**: ~$0.14 за 1M токенов
- **Исходящие токены**: ~$0.28 за 1M токенов

**Примерные расчеты:**
- Средний диалог: ~1000 токенов
- На $10 можно обработать: ~20,000+ диалогов
- Месячные расходы при 1000 пользователей/месяц: ~$0.50

## Мониторинг и аналитика

### Отслеживание использования

1. Заходите в личный кабинет DeepSeek
2. Проверяйте usage в ответах API
3. Логируйте запросы для аналитики

### Пример логирования

```typescript
console.log('Chat request:', {
  user: userContext,
  tokens: completion.usage,
  timestamp: new Date()
});
```

## Оптимизация

### 1. Кэширование

DeepSeek поддерживает prompt caching:
- `prompt_cache_hit_tokens` - кэшированные токены (дешевле)
- Повторные запросы используют кэш автоматически

### 2. Лимиты

Добавьте лимиты в `route.ts`:

```typescript
const MAX_MESSAGES = 20; // Максимум сообщений в истории
const MAX_TOKENS = 2000; // Максимум токенов в ответе
```

### 3. Rate Limiting

Защита от злоупотреблений:

```typescript
// TODO: Добавить rate limiting по IP
// Использовать upstash/ratelimit или аналог
```

## Продакшн деплой

### 1. Docker

```bash
docker-compose up -d --build
```

### 2. Environment Variables

Добавьте в production окружение:
```env
DEEPSEEK_API_KEY=your-production-key
NEXT_PUBLIC_SITE_URL=https://fiscalepro.kg
```

### 3. Мониторинг

- Настройте логирование ошибок (Sentry)
- Мониторьте расходы DeepSeek
- Анализируйте популярные вопросы

## Безопасность

### ⚠️ ВАЖНО

1. **НЕ коммитьте .env.local в Git**
   - Файл в .gitignore
   - API ключ должен быть секретным

2. **Rate Limiting**
   - Добавьте ограничения запросов
   - Защита от DDoS

3. **Валидация входных данных**
   - Проверяйте длину сообщений
   - Фильтруйте вредоносный контент

4. **CORS настройки**
   - Разрешайте только свой домен

## Расширенные возможности

### 1. Персонализация

Добавьте больше контекста:

```typescript
userContext: {
  page: window.location.pathname,
  industry: 'banking', // Определяйте из формы
  previousVisits: 5,
  referrer: document.referrer
}
```

### 2. Интеграция с CRM

```typescript
// После успешного диалога
await fetch('/api/crm/lead', {
  method: 'POST',
  body: JSON.stringify({
    messages,
    email: userEmail
  })
});
```

### 3. Analytics

```typescript
// Google Analytics событие
gtag('event', 'chat_message', {
  category: 'chatbot',
  label: 'user_question'
});
```

## FAQ

**Q: Можно ли использовать один API ключ для разных проектов?**
A: Да, API ключ привязан к аккаунту DeepSeek, не к проекту.

**Q: Как работает бюджет?**
A: Бюджет общий для всех проектов. $10 хватит на ~20,000+ диалогов.

**Q: Можно ли изменить язык ответов?**
A: Да, укажите в `userContext.language` или в System Prompt.

**Q: Как добавить новые продукты в базу знаний?**
A: Отредактируйте SYSTEM_PROMPT в `src/app/api/chat/route.ts`.

## Поддержка

- **Email**: dev@fiscalepro.kg
- **GitHub Issues**: [Create Issue](https://github.com/your-repo/issues)
- **DeepSeek Docs**: https://platform.deepseek.com/docs

## Лицензия

Proprietary - FiscalePro (EvoGroup)

---

**Версия**: 1.0.0
**Дата**: 24 декабря 2025
**Автор**: FiscalePro Development Team

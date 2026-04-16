 public/locales/kgz/aichatbot.json             |  80 ++++++++
 public/locales/kgz/calculator.json            |  40 ++--
 public/locales/kgz/common.json                |   6 +-
 public/locales/kgz/competitiveadvantages.json |  12 +-
 public/locales/kgz/contact.json               |  16 +-
 public/locales/kgz/footer.json                |  12 +-
 public/locales/kgz/hero.json                  |   4 +-
 public/locales/kgz/navigation.json            |   2 +-
 public/locales/kgz/solutions.json             |  12 +-
 public/locales/kgz/successstories.json        | 278 ++++++++++++++++++++++++++
 public/locales/kgz/team.json                  |  16 +-
 public/locales/kgz/technology.json            |   4 +-
 public/locales/kgz/testimonials.json          |  10 +-
 public/locales/kgz/trustsignal.json           |   8 +-
 14 files changed, 429 insertions(+), 71 deletions(-)
---
fix(i18n): углублённая проверка кыргызского — 8 дополнительных грамматических ошибок
- ИИнын → ИИнин (притяжательный после «и»)
- продуктуларды → продукттарды (стандартная форма множественного)
- номуринин → номеринин (основа слова «номер»)
- маяна → эмгек акы (общеупотребительная форма)
- Көзөмөлдөө → Сүрөттөрдү жана видеону талдоо (Computer Vision)
- проактивдүү → проактивдик (прилагательное от заимствования)
- ИИдә → ИИде (казахская форма → кыргызская)
- Демо сураныч → Демо суроо (корректная форма кнопки)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

Revert "fix(chat): исправить CSRF блокировку на test.evogroup.ai и добавить мультиязычность бота"
This reverts commit 5856c6eeb20b4774e84c2c2e43a00ee08bfce2a2.

fix(chat): исправить CSRF блокировку на test.evogroup.ai и добавить мультиязычность бота
- Добавлен test.evogroup.ai в ALLOWED_ORIGINS (CSRF блокировал все запросы)
- Передача locale из фронтенда в API для ответов на языке пользователя
- API добавляет языковую инструкцию в запрос к OpenClaw
- Фронтенд использует локализованные сообщения об ошибках вместо хардкод-русских

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>

fix(i18n): исправление кыргызской локализации — грамматика, брендинг, переводы
- Исправлен брендинг: ФискалеПро → Evolution Group (footer, testimonials, trustsignal, contact)
- Переведён calculator.json (был полностью на русском)
- Создан перевод aichatbot.json (был пустой)
- Создан перевод successstories.json (был пустой)
- Исправлены грамматические ошибки: салаттары→тармактары, жоптор→жооптор,
  карооонун→кароонун, сунушта→сунуштай, Компанияның→Компаниянын
- Исправлены казахизмы и руссизмы в тексте
- Унифицирована терминология: корпоративдик, Иштөө убактысы, адистешкен
- Исправлена должность CTO: Башкы директор → Техникалык директор
- Переведены непереведённые фрагменты: Pull Requests, продакшнде, Energy OS

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>


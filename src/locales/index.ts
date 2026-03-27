import { ru } from './ru'
import { en } from './en'
import { ky } from './ky'

export type Translations = typeof ru
export type LocaleKey = 'ru' | 'en' | 'ky'

export const locales: Record<LocaleKey, Translations> = {
    ru,
    en,
    ky,
}

export { ru, en, ky }

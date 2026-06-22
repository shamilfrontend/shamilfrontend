import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import ru from '../locales/ru.json';

export const LOCALE_STORAGE_KEY = 'locale';

export const SUPPORTED_LOCALES = ['ru', 'en'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'ru';

function getStoredLocale(): AppLocale | null {
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (stored === 'ru' || stored === 'en') {
    return stored;
  }

  return null;
}

export function resolveLocale(): AppLocale {
  const storedLocale = getStoredLocale();

  if (storedLocale) {
    return storedLocale;
  }

  localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE);
  return DEFAULT_LOCALE;
}

export function applyDocumentLocale(locale: AppLocale): void {
  document.documentElement.lang = locale;
}

const initialLocale = resolveLocale();

applyDocumentLocale(initialLocale);

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    ru,
    en,
  },
});

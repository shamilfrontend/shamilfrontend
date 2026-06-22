import { createI18n } from 'vue-i18n';

export const LOCALE_STORAGE_KEY = 'locale';

export const SUPPORTED_LOCALES = ['ru', 'en'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'ru';

const localeLoaders: Record<AppLocale, () => Promise<{ default: Record<string, unknown> }>> = {
  ru: () => import('../locales/ru.json'),
  en: () => import('../locales/en.json'),
};

const loadedLocales = new Set<AppLocale>();

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

export async function loadLocaleMessages(locale: AppLocale): Promise<void> {
  if (loadedLocales.has(locale)) {
    return;
  }

  const messages = await localeLoaders[locale]();
  i18n.global.setLocaleMessage(locale, messages.default);
  loadedLocales.add(locale);
}

const initialLocale = resolveLocale();

applyDocumentLocale(initialLocale);

export const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {},
});

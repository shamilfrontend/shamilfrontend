import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { loadLatinFont } from '../fonts';
import {
  applyDocumentLocale,
  loadLocaleMessages,
  LOCALE_STORAGE_KEY,
  type AppLocale,
  SUPPORTED_LOCALES,
} from '../i18n';

export function useLocale() {
  const { locale } = useI18n();

  const currentLocale = computed(() => locale.value as AppLocale);

  async function setLocale(nextLocale: AppLocale): Promise<void> {
    if (nextLocale === 'en') {
      await loadLatinFont();
    }

    await loadLocaleMessages(nextLocale);
    locale.value = nextLocale;
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    applyDocumentLocale(nextLocale);
  }

  async function toggleLocale(): Promise<void> {
    const nextLocale: AppLocale = currentLocale.value === 'ru' ? 'en' : 'ru';
    await setLocale(nextLocale);
  }

  return {
    locale: currentLocale,
    supportedLocales: SUPPORTED_LOCALES,
    setLocale,
    toggleLocale,
  };
}

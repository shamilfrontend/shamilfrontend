import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import {
  applyDocumentLocale,
  LOCALE_STORAGE_KEY,
  type AppLocale,
  SUPPORTED_LOCALES,
} from '../i18n';

export function useLocale() {
  const { locale } = useI18n();

  const currentLocale = computed(() => locale.value as AppLocale);

  function setLocale(nextLocale: AppLocale): void {
    locale.value = nextLocale;
    localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    applyDocumentLocale(nextLocale);
  }

  function toggleLocale(): void {
    const nextLocale: AppLocale = currentLocale.value === 'ru' ? 'en' : 'ru';
    setLocale(nextLocale);
  }

  return {
    locale: currentLocale,
    supportedLocales: SUPPORTED_LOCALES,
    setLocale,
    toggleLocale,
  };
}

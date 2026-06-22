<script setup lang="ts">
import type { AppLocale } from '../i18n';
import { useLocale } from '../composables/use-locale';
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useLocale();
const { t } = useI18n();

const locales: AppLocale[] = ['ru', 'en'];

function getAriaLabel(nextLocale: AppLocale): string {
  return nextLocale === 'ru' ? t('locale.switchToRu') : t('locale.switchToEn');
}
</script>

<template>
  <div class="locale-switcher" role="group" :aria-label="t('locale.group')">
    <button
      v-for="item in locales"
      :key="item"
      type="button"
      class="locale-switcher__button"
      :class="{ 'locale-switcher__button--active': locale === item }"
      :aria-label="getAriaLabel(item)"
      :aria-pressed="locale === item"
      @click="setLocale(item)"
    >
      {{ t(`locale.${item}`) }}
    </button>
  </div>
</template>

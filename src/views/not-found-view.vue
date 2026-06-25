<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

import ContentShell from '../components/content-shell.vue';

const { t } = useI18n();
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>{{ t('notFound.title') }}</h2>
      <span class="page-head__line" />
    </section>

    <p class="not-found__message">{{ t('notFound.message') }}</p>

    <RouterLink class="not-found__link" to="/">
      {{ t('notFound.backHome') }}
    </RouterLink>
  </ContentShell>
</template>

<style scoped lang="scss">
.not-found__message {
  margin: 0;
  color: var(--text-secondary);
  font-size: 15px;
}

.not-found__link {
  display: inline-block;
  margin-top: 20px;
  color: var(--accent);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

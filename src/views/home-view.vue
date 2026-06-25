<script setup lang="ts">
import AppIcon from '../components/app-icon.vue';
import ContentShell from '../components/content-shell.vue';
import { useProfileContent } from '../composables/use-profile-content';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const { profileInfo, services } = useProfileContent();
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>{{ t('about.title') }}</h2>
      <span class="page-head__line" />
    </section>

    <div class="about-text">
      <p v-for="paragraph in profileInfo.aboutParagraphs" :key="paragraph">
        {{ paragraph }}
      </p>
    </div>

    <h3 class="section-title">{{ t('about.servicesTitle') }}</h3>

    <div class="service-grid">
      <article
        v-for="service in services"
        :key="service.title"
        class="service-card"
        :class="`service-card--${service.tone}`"
      >
        <h4>
          <span class="service-card__icon" aria-hidden="true">
            <AppIcon :name="service.icon" />
          </span>
          {{ service.title }}
        </h4>
        <p>{{ service.description }}</p>
      </article>
    </div>

  </ContentShell>
</template>

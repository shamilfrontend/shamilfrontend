<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import AppIcon from '../components/app-icon.vue';
import ContentShell from '../components/content-shell.vue';
import PortfolioSlider from '../components/portfolio-slider.vue';
import { usePortfolioContent } from '../composables/use-portfolio-content';
import type { PortfolioItem } from '../data/profile-core';

const { t } = useI18n();
const { portfolioItems } = usePortfolioContent();

const activePortfolioItem = ref<PortfolioItem | null>(null);

function openPortfolioModal(item: PortfolioItem): void {
  activePortfolioItem.value = item;
}

function closePortfolioModal(): void {
  activePortfolioItem.value = null;
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    closePortfolioModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
});

watch(activePortfolioItem, (value) => {
  document.body.style.overflow = value ? 'hidden' : '';
});
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>{{ t('portfolio.title') }}</h2>
      <span class="page-head__line" />
    </section>

    <div class="portfolio-grid">
      <article
        v-for="item in portfolioItems"
        :key="item.title"
        class="portfolio-card portfolio-card--clickable"
        @click="openPortfolioModal(item)"
      >
        <div
          class="portfolio-card__image"
          :class="{ 'portfolio-card__image--placeholder': !item.coverImage }"
        >
          <img
            v-if="item.coverImage"
            :src="item.coverImage"
            :alt="item.title"
            width="400"
            height="138"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p class="portfolio-card__category">{{ item.category }}</p>
        <h3>{{ item.title }}</h3>
      </article>
    </div>
  </ContentShell>

  <div
    v-if="activePortfolioItem"
    class="portfolio-modal-backdrop"
    role="dialog"
    aria-modal="true"
    @click="closePortfolioModal"
  >
    <article class="portfolio-modal" @click.stop>
      <button
        type="button"
        class="portfolio-modal__close"
        :aria-label="t('portfolio.close')"
        @click="closePortfolioModal"
      >
        ×
      </button>

      <h2 class="portfolio-modal__title">{{ activePortfolioItem.title }}</h2>

      <div class="portfolio-modal__meta">
        <p>
          <AppIcon name="file" />
          <strong>{{ t('portfolio.project') }}:</strong> {{ activePortfolioItem.project }}
        </p>
        <p>
          <AppIcon name="user" />
          <strong>{{ t('portfolio.client') }}:</strong> {{ activePortfolioItem.client }}
        </p>
        <p>
          <AppIcon name="code" />
          <strong>{{ t('portfolio.technologies') }}:</strong> {{ activePortfolioItem.languages }}
        </p>
        <p>
          <AppIcon name="external" />
          <strong>{{ t('portfolio.link') }}:</strong>
          <a
            :href="activePortfolioItem.preview"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-modal__link"
            @click.stop
          >
            {{ activePortfolioItem.preview }}
          </a>
        </p>
        <p v-if="activePortfolioItem.repositoryUrl">
          <AppIcon name="github" />
          <strong>{{ t('portfolio.repository') }}:</strong>
          <a
            :href="activePortfolioItem.repositoryUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="portfolio-modal__link"
            @click.stop
          >
            {{ activePortfolioItem.repositoryUrl }}
          </a>
        </p>
      </div>

      <div class="portfolio-modal__text">
        <p
          v-for="(paragraph, index) in activePortfolioItem.description"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </div>

      <PortfolioSlider
        v-if="activePortfolioItem.galleryImages?.length"
        :images="activePortfolioItem.galleryImages"
        :alt="activePortfolioItem.title"
      />
    </article>
  </div>
</template>

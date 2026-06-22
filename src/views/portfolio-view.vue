<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import AppIcon from '../components/app-icon.vue';
import ContentShell from '../components/content-shell.vue';
import PortfolioSlider from '../components/portfolio-slider.vue';
import {
  bindFocusTrap,
  rememberFocus,
  restoreFocus,
} from '../composables/use-focus-trap';
import { usePortfolioContent } from '../composables/use-portfolio-content';
import type { PortfolioItem } from '../data/profile-core';

const { t } = useI18n();
const { portfolioItems } = usePortfolioContent();

const activePortfolioItem = ref<PortfolioItem | null>(null);
const modalRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);
const previousFocus = ref<HTMLElement | null>(null);
let unbindFocusTrap: (() => void) | null = null;

function openPortfolioModal(item: PortfolioItem): void {
  previousFocus.value = rememberFocus();
  activePortfolioItem.value = item;
}

function closePortfolioModal(): void {
  activePortfolioItem.value = null;
  void restoreFocus(previousFocus.value);
  previousFocus.value = null;
}

function handleModalKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && activePortfolioItem.value) {
    closePortfolioModal();
  }
}

function handleCardKeydown(event: KeyboardEvent, item: PortfolioItem): void {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openPortfolioModal(item);
  }
}

onMounted(() => {
  unbindFocusTrap = bindFocusTrap(modalRef, handleModalKeydown);
});

onBeforeUnmount(() => {
  unbindFocusTrap?.();
  document.body.style.overflow = '';
});

watch(activePortfolioItem, async (value) => {
  document.body.style.overflow = value ? 'hidden' : '';

  if (value) {
    await nextTick();
    closeButtonRef.value?.focus();
  }
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
        role="button"
        tabindex="0"
        :aria-label="t('portfolio.openProject', { title: item.title })"
        @click="openPortfolioModal(item)"
        @keydown="handleCardKeydown($event, item)"
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
    ref="modalRef"
    class="portfolio-modal-backdrop"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="'portfolio-modal-title'"
    @click="closePortfolioModal"
  >
    <article class="portfolio-modal" @click.stop>
      <button
        ref="closeButtonRef"
        type="button"
        class="portfolio-modal__close"
        :aria-label="t('portfolio.close')"
        @click="closePortfolioModal"
      >
        ×
      </button>

      <h2 id="portfolio-modal-title" class="portfolio-modal__title">
        {{ activePortfolioItem.title }}
      </h2>

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

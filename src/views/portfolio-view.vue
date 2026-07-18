<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import AppIcon from '../components/app-icon.vue';
import ContentShell from '../components/content-shell.vue';
import PortfolioSlider from '../components/portfolio-slider.vue';
import { bindFocusTrapWhen, rememberFocus, restoreFocus } from '../composables/use-focus-trap';
import { lockBodyScroll, unlockBodyScroll } from '../composables/use-body-scroll-lock';
import { usePortfolioContent } from '../composables/use-portfolio-content';
import type { PortfolioItem } from '../data/profile-core';

const { t } = useI18n();
const { portfolioItems } = usePortfolioContent();

const ALL_CATEGORIES = null;
const selectedCategory = ref<string | null>(ALL_CATEGORIES);

const portfolioCategories = computed(() => {
  const categories = new Set<string>();

  for (const item of portfolioItems.value) {
    categories.add(item.category);
  }

  return [...categories];
});

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value === ALL_CATEGORIES) {
    return portfolioItems.value;
  }

  return portfolioItems.value.filter((item) => item.category === selectedCategory.value);
});

watch(portfolioCategories, (categories) => {
  if (
    selectedCategory.value !== ALL_CATEGORIES &&
    !categories.includes(selectedCategory.value)
  ) {
    selectedCategory.value = ALL_CATEGORIES;
  }
});

function selectCategory(category: string | null): void {
  selectedCategory.value = category;
}

const activePortfolioItem = ref<PortfolioItem | null>(null);
const isModalOpen = computed(() => activePortfolioItem.value !== null);
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
  unbindFocusTrap = bindFocusTrapWhen(isModalOpen, modalRef, handleModalKeydown);
});

onBeforeUnmount(() => {
  unbindFocusTrap?.();
  unlockBodyScroll();
});

watch(activePortfolioItem, async (value) => {
  if (value) {
    lockBodyScroll();
    await nextTick();
    closeButtonRef.value?.focus();
    return;
  }

  unlockBodyScroll();
});
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>{{ t('portfolio.title') }}</h2>
      <span class="page-head__line" />
    </section>

    <div
      class="portfolio-filters"
      role="group"
      :aria-label="t('portfolio.filters')"
    >
      <button
        type="button"
        class="portfolio-filters__button"
        :class="{ 'portfolio-filters__button--active': selectedCategory === ALL_CATEGORIES }"
        :aria-pressed="selectedCategory === ALL_CATEGORIES"
        @click="selectCategory(ALL_CATEGORIES)"
      >
        {{ t('portfolio.filterAll') }}
      </button>
      <button
        v-for="category in portfolioCategories"
        :key="category"
        type="button"
        class="portfolio-filters__button"
        :class="{ 'portfolio-filters__button--active': selectedCategory === category }"
        :aria-pressed="selectedCategory === category"
        @click="selectCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <div class="portfolio-grid">
      <article
        v-for="item in filteredPortfolioItems"
        :key="item.id"
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
        <p class="portfolio-modal__meta-item">
          <span class="portfolio-modal__meta-label">
            <AppIcon name="file" />
            <strong>{{ t('portfolio.project') }}</strong>
          </span>
          <span class="portfolio-modal__meta-value">{{ activePortfolioItem.project }}</span>
        </p>
        <p class="portfolio-modal__meta-item">
          <span class="portfolio-modal__meta-label">
            <AppIcon name="user" />
            <strong>{{ t('portfolio.client') }}</strong>
          </span>
          <span class="portfolio-modal__meta-value">{{ activePortfolioItem.client }}</span>
        </p>
        <p class="portfolio-modal__meta-item">
          <span class="portfolio-modal__meta-label">
            <AppIcon name="code" />
            <strong>{{ t('portfolio.technologies') }}</strong>
          </span>
          <span class="portfolio-modal__meta-value">{{ activePortfolioItem.languages }}</span>
        </p>
        <p class="portfolio-modal__meta-item">
          <span class="portfolio-modal__meta-label">
            <AppIcon name="external" />
            <strong>{{ t('portfolio.link') }}</strong>
          </span>
          <span class="portfolio-modal__meta-value">
            <a
              :href="activePortfolioItem.preview"
              target="_blank"
              rel="noopener noreferrer"
              class="portfolio-modal__link"
              @click.stop
            >
              {{ activePortfolioItem.preview }}
            </a>
          </span>
        </p>
        <p v-if="activePortfolioItem.repositoryUrl" class="portfolio-modal__meta-item">
          <span class="portfolio-modal__meta-label">
            <AppIcon name="github" />
            <strong>{{ t('portfolio.repository') }}</strong>
          </span>
          <span class="portfolio-modal__meta-value">
            <a
              :href="activePortfolioItem.repositoryUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="portfolio-modal__link"
              @click.stop
            >
              {{ activePortfolioItem.repositoryUrl }}
            </a>
          </span>
        </p>
      </div>

      <div v-if="activePortfolioItem.description.length" class="portfolio-modal__text">
        <p v-for="(paragraph, index) in activePortfolioItem.description" :key="index">
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

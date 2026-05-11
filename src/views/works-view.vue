<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import AppIcon from '../components/app-icon.vue';
import ContentShell from '../components/content-shell.vue';
import { works } from '../data/profile';
import heroImage from '../assets/hero.png';

const activeWork = ref<(typeof works)[number] | null>(null);

function openWorkModal(work: (typeof works)[number]): void {
  activeWork.value = work;
}

function closeWorkModal(): void {
  activeWork.value = null;
}

function handleEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    closeWorkModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
});

watch(activeWork, (value) => {
  document.body.style.overflow = value ? 'hidden' : '';
});
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Работы</h2>
      <span class="page-head__line" />
    </section>

    <div class="works-grid">
      <article
        v-for="item in works"
        :key="item.title"
        class="work-card work-card--clickable"
        @click="openWorkModal(item)"
      >
        <div class="work-card__image" />
        <p class="work-card__category">{{ item.category }}</p>
        <h3>{{ item.title }}</h3>
      </article>
    </div>
  </ContentShell>

  <div
    v-if="activeWork"
    class="work-modal-backdrop"
    role="dialog"
    aria-modal="true"
    @click="closeWorkModal"
  >
    <article class="work-modal" @click.stop>
      <button
        type="button"
        class="work-modal__close"
        aria-label="Закрыть окно"
        @click="closeWorkModal"
      >
        ×
      </button>

      <h2 class="work-modal__title">{{ activeWork.title }}</h2>

      <div class="work-modal__meta">
        <p>
          <AppIcon name="file" />
          <strong>Проект:</strong> {{ activeWork.project }}
        </p>
        <p>
          <AppIcon name="user" />
          <strong>Клиент:</strong> {{ activeWork.client }}
        </p>
        <p>
          <AppIcon name="code" />
          <strong>Технологии:</strong> {{ activeWork.languages }}
        </p>
        <p>
          <AppIcon name="external" />
          <strong>Ссылка:</strong> {{ activeWork.preview }}
        </p>
      </div>

      <div class="work-modal__text">
        <p v-for="(paragraph, index) in activeWork.description" :key="index">
          {{ paragraph }}
        </p>
      </div>

      <figure class="work-modal__preview">
        <img :src="heroImage" :alt="activeWork.title" />
      </figure>
    </article>
  </div>
</template>

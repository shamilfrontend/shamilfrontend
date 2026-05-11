<script setup lang="ts">
import ContentShell from '../components/content-shell.vue';
import { works } from '../data/profile';
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Works</h2>
      <span class="page-head__line" />
    </section>

    <div class="works-grid">
      <article v-for="item in works" :key="item.title" class="work-card">
        <div class="work-card__image" />
        <p class="work-card__category">{{ item.category }}</p>
        <h3>{{ item.title }}</h3>
      </article>
    </div>
  </ContentShell>
</template>

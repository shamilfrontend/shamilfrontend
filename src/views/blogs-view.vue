<script setup lang="ts">
import ContentShell from '../components/content-shell.vue';
import { blogs } from '../data/profile';
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Blogs</h2>
      <span class="page-head__line" />
    </section>

    <div class="blogs-grid">
      <article v-for="item in blogs" :key="item.title" class="blog-card">
        <div class="blog-card__cover" />
        <p class="blog-card__meta">{{ item.date }} / {{ item.category }}</p>
        <h3>{{ item.title }}</h3>
      </article>
    </div>
  </ContentShell>
</template>

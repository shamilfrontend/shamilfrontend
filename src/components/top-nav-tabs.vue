<script setup lang="ts">
import AppIcon from './app-icon.vue';
import { RouterLink, useRoute } from 'vue-router';
import { navItems } from '../data/profile';

const route = useRoute();
</script>

<template>
  <nav class="top-tabs card" aria-label="Main navigation">
    <RouterLink
      v-for="item in navItems"
      :key="item.to"
      :to="item.to"
      class="top-tabs__item"
      :class="{ 'top-tabs__item--active': route.path === item.to }"
    >
      <span class="top-tabs__icon" aria-hidden="true">
        <AppIcon :name="item.icon" />
      </span>
      <span class="top-tabs__label">{{ item.label }}</span>
    </RouterLink>
  </nav>
</template>

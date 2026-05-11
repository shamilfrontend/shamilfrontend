<script setup lang="ts">
import PageFooter from './components/page-footer.vue';
import ProfileSidebar from './components/profile-sidebar.vue';
import TopNavTabs from './components/top-nav-tabs.vue';
import { profileInfo } from './data/profile';
</script>

<template>
  <div class="app-bg">
    <div class="app-shell">
      <header class="app-brand">{{ profileInfo.brand }}</header>
      <button class="theme-toggle" type="button" aria-label="Toggle theme">
        ☾
      </button>

      <ProfileSidebar />

      <div class="app-main">
        <TopNavTabs />
        <RouterView />
        <PageFooter />
      </div>
    </div>
  </div>
</template>

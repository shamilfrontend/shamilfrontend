<script setup lang="ts">
import AppIcon from './components/app-icon.vue';
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
        <AppIcon name="moon" />
      </button>

      <ProfileSidebar />

      <div class="app-main">
        <TopNavTabs />
        <div class="content-stack">
          <RouterView />
          <PageFooter />
        </div>
      </div>
    </div>
  </div>
</template>

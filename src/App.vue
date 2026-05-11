<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import AppIcon from './components/app-icon.vue';
import PageFooter from './components/page-footer.vue';
import ProfileSidebar from './components/profile-sidebar.vue';
import TopNavTabs from './components/top-nav-tabs.vue';
import { navItems, profileInfo } from './data/profile';

const isMobileMenuOpen = ref(false);
const route = useRoute();

function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false;
}

watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);

watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="app-bg">
    <div class="app-shell">
      <header class="app-header">
        <div class="app-header__brand-row">
          <h1 class="app-brand">{{ profileInfo.brand }}</h1>
          <button
            type="button"
            class="mobile-menu-trigger"
            @click="toggleMobileMenu"
          >
            <span v-if="!isMobileMenuOpen" class="mobile-menu-trigger__icon">
              ☰
            </span>
            <span v-else class="mobile-menu-trigger__icon">
              ×
            </span>
          </button>
        </div>

        <button class="theme-toggle" type="button">
          <AppIcon name="moon" />
        </button>
      </header>

      <Transition name="mobile-menu">
        <nav v-if="isMobileMenuOpen" id="mobile-menu-panel" class="mobile-menu-panel">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="mobile-menu-panel__link"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </Transition>

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

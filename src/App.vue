<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';

import AppIcon from './components/app-icon.vue';
import LocaleSwitcher from './components/locale-switcher.vue';
import PageFooter from './components/page-footer.vue';
import ProfileSidebar from './components/profile-sidebar.vue';
import TopNavTabs from './components/top-nav-tabs.vue';
import { usePageMeta } from './composables/use-page-meta';
import { useProfileContent } from './composables/use-profile-content';
import { useTheme } from './composables/use-theme';
import { profileInfo } from './data/profile';

usePageMeta();

const { isDark, toggleTheme } = useTheme();
const { t } = useI18n();
const { navItems } = useProfileContent();
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

onMounted(() => {
  document.getElementById('lcp-shell')?.remove();
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
          <p class="app-brand">{{ profileInfo.brand }}</p>

          <button
            type="button"
            class="mobile-menu-trigger"
            :aria-label="isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu-panel"
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

        <div class="header-controls">
          <LocaleSwitcher />

          <button
            class="theme-toggle"
            type="button"
            :aria-label="isDark ? t('theme.toLight') : t('theme.toDark')"
            @click="toggleTheme"
          >
            <AppIcon :name="isDark ? 'sun' : 'moon'" />
          </button>
        </div>
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

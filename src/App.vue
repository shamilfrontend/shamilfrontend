<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';

import AppIcon from './components/app-icon.vue';
import LocaleSwitcher from './components/locale-switcher.vue';
import PageFooter from './components/page-footer.vue';
import ProfileSidebar from './components/profile-sidebar.vue';
import TopNavTabs from './components/top-nav-tabs.vue';
import {
  bindFocusTrapWhen,
  getFocusableElements,
  rememberFocus,
  restoreFocus,
} from './composables/use-focus-trap';
import { lockBodyScroll, unlockBodyScroll } from './composables/use-body-scroll-lock';
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
const menuTriggerRef = ref<HTMLButtonElement | null>(null);
const mobileMenuRef = ref<HTMLElement | null>(null);
const menuFocusBeforeOpen = ref<HTMLElement | null>(null);
let unbindMenuFocusTrap: (() => void) | null = null;

function toggleMobileMenu(): void {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu(): void {
  isMobileMenuOpen.value = false;
}

function handleMenuKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
}

watch(
  () => route.path,
  () => {
    closeMobileMenu();
  },
);

watch(isMobileMenuOpen, async (isOpen) => {
  if (isOpen) {
    lockBodyScroll();
    menuFocusBeforeOpen.value = rememberFocus();
    await nextTick();
    const [firstLink] = getFocusableElements(mobileMenuRef.value!);
    firstLink?.focus();
    return;
  }

  unlockBodyScroll();
  await restoreFocus(menuFocusBeforeOpen.value ?? menuTriggerRef.value);
  menuFocusBeforeOpen.value = null;
});

async function revealApp(): Promise<void> {
  try {
    await document.fonts.ready;
  } catch {
    /* ignore */
  }

  document.body.classList.add('app-ready');

  requestAnimationFrame(() => {
    document.getElementById('lcp-shell')?.remove();
  });
}

onMounted(() => {
  unbindMenuFocusTrap = bindFocusTrapWhen(isMobileMenuOpen, mobileMenuRef, handleMenuKeydown);
  void revealApp();
});

onBeforeUnmount(() => {
  unbindMenuFocusTrap?.();
  unlockBodyScroll();
});
</script>

<template>
  <div class="app-bg">
    <div class="app-shell">
      <header class="app-header">
        <p class="app-brand">{{ profileInfo.brand }}</p>

        <div class="header-controls">
          <button
            ref="menuTriggerRef"
            type="button"
            class="mobile-menu-trigger"
            :aria-label="isMobileMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu-panel"
            @click="toggleMobileMenu"
          >
            <span v-if="!isMobileMenuOpen" class="mobile-menu-trigger__icon"> ☰ </span>
            <span v-else class="mobile-menu-trigger__icon"> × </span>
          </button>

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
        <nav
          v-if="isMobileMenuOpen"
          id="mobile-menu-panel"
          ref="mobileMenuRef"
          class="mobile-menu-panel"
          :aria-label="t('nav.mobileMenu')"
        >
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

      <main class="app-main">
        <TopNavTabs />
        <div class="content-stack">
          <RouterView />
          <PageFooter />
        </div>
      </main>
    </div>
  </div>
</template>

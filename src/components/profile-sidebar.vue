<script setup lang="ts">
import AppIcon from './app-icon.vue';
import { useProfileContent } from '../composables/use-profile-content';
import { socialLinks } from '../data/profile';

const { contactItems, profileInfo: localizedProfile } = useProfileContent();

const profileImageSrcset =
  '/images/shamil-164.webp 164w, /images/shamil-178.webp 178w, /images/shamil-356.webp 356w';
const profileImageSizes = '(min-width: 1025px) 178px, 164px';
</script>

<template>
  <aside class="profile-sidebar card">
    <div class="profile-sidebar__image-wrap">
      <img
        class="profile-sidebar__image"
        src="/images/shamil-178.webp"
        :srcset="profileImageSrcset"
        :sizes="profileImageSizes"
        :alt="localizedProfile.name"
        width="178"
        height="178"
        fetchpriority="high"
        decoding="async"
      />
    </div>

    <h1 class="profile-sidebar__name">{{ localizedProfile.name }}</h1>
    <p class="profile-sidebar__role">{{ localizedProfile.role }}</p>

    <div class="profile-sidebar__socials">
      <a
        v-for="social in socialLinks"
        :key="social.label"
        class="social-button"
        :class="`social-button--${social.icon}`"
        :aria-label="social.label"
        :href="social.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppIcon :name="social.icon" filled />
      </a>
    </div>

    <div class="profile-sidebar__contacts">
      <article
        v-for="item in contactItems"
        :key="item.icon"
        class="profile-sidebar__contact-item"
      >
        <p class="profile-sidebar__contact-label">
          <span class="profile-sidebar__contact-icon" aria-hidden="true">
            <AppIcon :name="item.icon" />
          </span>
          {{ item.label }}
        </p>
        <a
          v-if="item.href"
          class="profile-sidebar__contact-value profile-sidebar__contact-link"
          :href="item.href"
        >
          {{ item.value }}
        </a>
        <p v-else class="profile-sidebar__contact-value">{{ item.value }}</p>
      </article>
    </div>
  </aside>
</template>

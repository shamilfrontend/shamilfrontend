<script setup lang="ts">
import heroImage from '../assets/hero.png';
import { contactItems, profileInfo, socialLinks } from '../data/profile';
</script>

<template>
  <aside class="profile-sidebar card">
    <div class="profile-sidebar__image-wrap">
      <img
        class="profile-sidebar__image"
        :src="heroImage"
        :alt="profileInfo.name"
      />
    </div>

    <h1 class="profile-sidebar__name">{{ profileInfo.name }}</h1>
    <p class="profile-sidebar__role">{{ profileInfo.role }}</p>

    <div class="profile-sidebar__socials">
      <a
        v-for="social in socialLinks"
        :key="social.label"
        class="social-button"
        :aria-label="social.label"
        :href="social.url"
      >
        {{ social.short }}
      </a>
    </div>

    <div class="profile-sidebar__contacts">
      <article
        v-for="item in contactItems"
        :key="item.label"
        class="profile-sidebar__contact-item"
      >
        <p class="profile-sidebar__contact-label">
          <span class="profile-sidebar__contact-icon" aria-hidden="true">
            {{ item.icon }}
          </span>
          {{ item.label }}
        </p>
        <p class="profile-sidebar__contact-value">{{ item.value }}</p>
      </article>
    </div>

    <button class="download-button" type="button">Download CV</button>
  </aside>
</template>

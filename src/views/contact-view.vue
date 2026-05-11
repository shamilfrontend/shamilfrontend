<script setup lang="ts">
import ContentShell from '../components/content-shell.vue';
import { profileInfo } from '../data/profile';
</script>

<template>
  <ContentShell>
    <section class="page-head">
      <h2>Contact</h2>
      <span class="page-head__line" />
    </section>

    <p class="contact-text">{{ profileInfo.contactText }}</p>

    <form class="contact-form">
      <label>
        Name
        <input type="text" placeholder="Your full name" />
      </label>
      <label>
        Email
        <input type="email" placeholder="Your email address" />
      </label>
      <label>
        Message
        <textarea rows="4" placeholder="Write your message" />
      </label>
      <button type="submit">Send Message</button>
    </form>
  </ContentShell>
</template>

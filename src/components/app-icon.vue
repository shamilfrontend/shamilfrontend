<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  name: string;
}

const props = defineProps<Props>();

const paths = computed<Record<string, string[]>>(() => ({
  user: ['M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-8 9a8 8 0 0 1 16 0'],
  file: [
    'M8 3h6l4 4v14H8z',
    'M14 3v5h5',
  ],
  briefcase: [
    'M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2',
    'M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
    'M4 12h16',
  ],
  mail: ['M4 6h16v12H4z', 'm4 8 8 6 8-6'],
  external: ['M14 4h6v6', 'M10 14 20 4', 'M20 12v8H4V4h8'],
  phone: ['M16 20a16 16 0 0 1-12-12l3-2 3 4-2 2a10 10 0 0 0 6 6l2-2 4 3z'],
  pin: ['M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z', 'M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  calendar: ['M7 4v3', 'M17 4v3', 'M4 9h16', 'M5 6h14a1 1 0 0 1 1 1v12H4V7a1 1 0 0 1 1-1Z'],
  palette: ['M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a3 3 0 0 1 0-6h2a4 4 0 0 0 0-8z'],
  code: ['m9 18 6-12', 'M7 8 3 12l4 4', 'm17 8 4 4-4 4'],
  camera: ['M4 8h4l2-2h4l2 2h4v10H4z', 'M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6'],
  moon: ['M18 14a7 7 0 1 1-8-8 6 6 0 0 0 8 8Z'],
  telegram: ['M21 3 3 11l7 2 2 7 3-5 5-3z', 'm10 13 11-10'],
  vk: ['M4 7h3l2 4 2-4h3l-2 4 2 6h-3l-2-4-2 4H4l2-6z'],
  github: [
    'M9 18c-4 1.2-4-2-6-2',
    'M15 22v-3.1a3.3 3.3 0 0 0-1-2.5c3.3-.4 6.8-1.6 6.8-7.2a5.6 5.6 0 0 0-1.5-3.9 5.2 5.2 0 0 0-.1-3.8s-1.3-.4-4.1 1.5a14 14 0 0 0-7.2 0C5.1 1.1 3.8 1.5 3.8 1.5a5.2 5.2 0 0 0-.1 3.8 5.6 5.6 0 0 0-1.5 3.9c0 5.6 3.5 6.8 6.8 7.2a3.3 3.3 0 0 0-1 2.5V22',
  ],
  download: ['M12 4v10', 'm8 10 4 4 4-4', 'M5 20h14'],
}));

const iconPaths = computed(() => paths.value[props.name] ?? paths.value.user);
</script>

<template>
  <svg
    class="app-icon"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(d, idx) in iconPaths" :key="`${name}-${idx}`" :d="d" />
  </svg>
</template>

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
  book: ['M6 4h8a4 4 0 0 1 4 4v12H10a4 4 0 0 0-4 4z', 'M6 4h8v20H6z'],
  mail: ['M4 6h16v12H4z', 'm4 8 8 6 8-6'],
  external: ['M14 4h6v6', 'M10 14 20 4', 'M20 12v8H4V4h8'],
  phone: ['M16 20a16 16 0 0 1-12-12l3-2 3 4-2 2a10 10 0 0 0 6 6l2-2 4 3z'],
  pin: ['M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z', 'M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  calendar: ['M7 4v3', 'M17 4v3', 'M4 9h16', 'M5 6h14a1 1 0 0 1 1 1v12H4V7a1 1 0 0 1 1-1Z'],
  palette: ['M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 0-4h-1a3 3 0 0 1 0-6h2a4 4 0 0 0 0-8z'],
  code: ['m9 18 6-12', 'M7 8 3 12l4 4', 'm17 8 4 4-4 4'],
  camera: ['M4 8h4l2-2h4l2 2h4v10H4z', 'M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6'],
  moon: ['M18 14a7 7 0 1 1-8-8 6 6 0 0 0 8 8Z'],
  facebook: ['M14 7h2V4h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.2l.8-3H14V7a1 1 0 0 1 1-1Z'],
  twitter: ['M20 6.2a6 6 0 0 1-1.9.5 3.3 3.3 0 0 0 1.5-1.8 6.4 6.4 0 0 1-2.1.8 3.2 3.2 0 0 0-5.5 2.9A9.2 9.2 0 0 1 5 5.9a3.2 3.2 0 0 0 1 4.3 3.2 3.2 0 0 1-1.5-.4v.1a3.2 3.2 0 0 0 2.6 3.2 3.2 3.2 0 0 1-1.5.1 3.2 3.2 0 0 0 3 2.2A6.5 6.5 0 0 1 4 17a9.2 9.2 0 0 0 5 1.5c6 0 9.3-5 9.3-9.3v-.4A6.6 6.6 0 0 0 20 6.2Z'],
  instagram: ['M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M17.5 6.5h.01'],
  linkedin: ['M7 9v10', 'M7 6v.01', 'M12 19v-6a3 3 0 0 1 6 0v6', 'M12 13v-4'],
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

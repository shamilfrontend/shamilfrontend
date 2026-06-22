<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="page-footer">
    © {{ currentYear }} {{ t('footer.rights') }}
  </footer>
</template>

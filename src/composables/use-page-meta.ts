import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export function usePageMeta(): void {
  const route = useRoute();
  const { t } = useI18n();

  const pageTitle = computed(() => {
    const titleKey = route.meta.titleKey as string | undefined;
    return titleKey ? t(titleKey) : t('meta.defaultTitle');
  });

  const pageDescription = computed(() => {
    const descriptionKey = route.meta.descriptionKey as string | undefined;
    return descriptionKey ? t(descriptionKey) : t('meta.defaultDescription');
  });

  useHead({
    title: () => pageTitle.value,
    meta: [
      {
        name: 'description',
        content: () => pageDescription.value,
      },
    ],
  });
}

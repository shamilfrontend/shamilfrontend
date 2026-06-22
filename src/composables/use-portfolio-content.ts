import { computed, ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

import type { PortfolioItem } from '../data/profile-core';

interface LocalizedPortfolioItem {
  category: string;
  title: string;
  project: string;
  client: string;
  description: string[];
}

const portfolioMetaRef = shallowRef<Awaited<
  typeof import('../data/portfolio-assets')
>['portfolioMeta'] | null>(null);

let portfolioMetaPromise: Promise<void> | null = null;

function loadPortfolioMeta(): Promise<void> {
  if (portfolioMetaRef.value) {
    return Promise.resolve();
  }

  if (!portfolioMetaPromise) {
    portfolioMetaPromise = import('../data/portfolio-assets').then((module) => {
      portfolioMetaRef.value = module.portfolioMeta;
    });
  }

  return portfolioMetaPromise;
}

export function usePortfolioContent() {
  const { tm } = useI18n();
  const isLoading = ref(!portfolioMetaRef.value);

  if (!portfolioMetaRef.value) {
    loadPortfolioMeta().finally(() => {
      isLoading.value = false;
    });
  }

  const portfolioItems = computed<PortfolioItem[]>(() => {
    if (!portfolioMetaRef.value) {
      return [];
    }

    const localizedItems = tm('portfolioItems') as LocalizedPortfolioItem[];

    return localizedItems.map((item, index) => ({
      ...item,
      ...portfolioMetaRef.value![index],
    }));
  });

  return {
    isLoading,
    portfolioItems,
    ensureLoaded: loadPortfolioMeta,
  };
}

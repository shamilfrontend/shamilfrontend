import { computed, ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

import type { PortfolioItem } from '../data/profile-core';

interface LocalizedPortfolioItem {
  id: string;
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

function mergePortfolioItems(
  localizedItems: LocalizedPortfolioItem[],
  metaItems: NonNullable<typeof portfolioMetaRef.value>,
): PortfolioItem[] {
  if (import.meta.env.DEV && localizedItems.length !== metaItems.length) {
    console.error(
      `[portfolio] Mismatch: ${localizedItems.length} localized items vs ${metaItems.length} meta items`,
    );
  }

  const metaById = new Map(metaItems.map((item) => [item.id, item]));

  return localizedItems.flatMap((item) => {
    const meta = metaById.get(item.id);

    if (!meta) {
      if (import.meta.env.DEV) {
        console.error(`[portfolio] Missing meta for portfolio item "${item.id}"`);
      }

      return [];
    }

    return [{ ...item, ...meta }];
  });
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

    return mergePortfolioItems(localizedItems, portfolioMetaRef.value);
  });

  return {
    isLoading,
    portfolioItems,
    ensureLoaded: loadPortfolioMeta,
  };
}

export { mergePortfolioItems };

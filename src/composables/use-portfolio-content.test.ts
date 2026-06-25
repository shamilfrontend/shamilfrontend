import { describe, expect, it, vi } from 'vitest';

import { mergePortfolioItems } from '../composables/use-portfolio-content';
import type { PortfolioMetaItem } from '../data/profile-core';

describe('mergePortfolioItems', () => {
  it('merges localized items with meta by id', () => {
    const localizedItems = [
      {
        id: 'ppr-cabinet',
        category: 'Web Application',
        title: 'PPR Personal Account',
        project: 'Fleet management personal account',
        client: 'PPR',
        description: ['Personal account for fleet management'],
      },
    ];

    const metaItems: PortfolioMetaItem[] = [
      {
        id: 'ppr-cabinet',
        languages: 'Vue3, TypeScript',
        preview: 'https://example.com',
      },
    ];

    const result = mergePortfolioItems(localizedItems, metaItems);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      id: 'ppr-cabinet',
      title: 'PPR Personal Account',
      languages: 'Vue3, TypeScript',
      preview: 'https://example.com',
    });
  });

  it('skips items without matching meta and logs in dev', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const result = mergePortfolioItems(
      [
        {
          id: 'missing-item',
          category: 'Game',
          title: 'Missing',
          project: 'Missing',
          client: 'Missing',
          description: [],
        },
      ],
      [],
    );

    expect(result).toEqual([]);
    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });
});

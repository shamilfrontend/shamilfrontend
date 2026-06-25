import { describe, expect, it } from 'vitest';

import router from '../router/index';

describe('router', () => {
  it('resolves primary routes', () => {
    expect(router.resolve('/').name).toBe('home');
    expect(router.resolve('/resume').name).toBe('resume');
    expect(router.resolve('/portfolio').name).toBe('portfolio');
  });

  it('resolves unknown paths as not-found', () => {
    expect(router.resolve('/unknown-page').name).toBe('not-found');
  });
});

import type { OutputAsset } from 'rollup';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function fontPreloadPlugin(): Plugin {
  return {
    name: 'font-preload-inject',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) {
          return html;
        }

        const fontFile = Object.entries(ctx.bundle).find(
          ([fileName, chunk]) =>
            chunk.type === 'asset' &&
            fileName.includes('mulish-cyrillic-400') &&
            fileName.endsWith('.woff2'),
        );

        if (!fontFile) {
          return html;
        }

        const [fileName] = fontFile as [string, OutputAsset];
        const preloadTag = `<link rel="preload" href="/${fileName}" as="font" type="font/woff2" crossorigin>`;

        return html.replace('</head>', `    ${preloadTag}\n  </head>`);
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), fontPreloadPlugin()],
  build: {
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'vue-i18n'],
        },
      },
    },
  },
});

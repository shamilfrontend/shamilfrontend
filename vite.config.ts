import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

function findBundleAsset(
  bundle: Record<string, { type?: string }>,
  predicate: (fileName: string) => boolean,
): string | null {
  const entry = Object.entries(bundle).find(
    ([fileName, chunk]) =>
      chunk.type === 'asset' && predicate(fileName),
  );

  return entry ? entry[0] : null;
}

function criticalAssetsPlugin(): Plugin {
  return {
    name: 'critical-assets-inject',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) {
          return html;
        }

        const cssFile = findBundleAsset(
          ctx.bundle,
          (fileName) =>
            fileName.startsWith('assets/index-') && fileName.endsWith('.css'),
        );
        const cyrillicFont = findBundleAsset(
          ctx.bundle,
          (fileName) =>
            fileName.includes('mulish-cyrillic-400') && fileName.endsWith('.woff2'),
        );

        const headTags: string[] = [];

        if (cssFile) {
          headTags.push(
            `<link rel="preload" href="/${cssFile}" as="style">`,
            `<link rel="stylesheet" crossorigin href="/${cssFile}">`,
          );
        }

        if (cyrillicFont) {
          headTags.push(
            `<link rel="preload" href="/${cyrillicFont}" as="font" type="font/woff2" crossorigin>`,
          );
        }

        if (headTags.length === 0) {
          return html;
        }

        let result = html
          .replace(/<link rel="preload" href="[^"]+" as="style">\n?/g, '')
          .replace(/<link rel="stylesheet"[^>]*href="[^"]*index-[^"]+\.css"[^>]*>\n?/g, '')
          .replace(
            /<link rel="preload" href="[^"]*mulish-cyrillic[^"]*\.woff2"[^>]*>\n?/g,
            '',
          );

        const scriptTag = result.match(/<script type="module"[^>]*><\/script>/)?.[0];
        const modulePreloadTags = [
          ...result.matchAll(/<link rel="modulepreload"[^>]*>/g),
        ].map((match) => match[0]);

        if (scriptTag) {
          result = result.replace(scriptTag, '');
        }

        for (const tag of modulePreloadTags) {
          result = result.replace(`${tag}\n`, '');
        }

        const scriptBlock = [scriptTag, ...modulePreloadTags]
          .filter(Boolean)
          .join('\n    ');

        result = result.replace(
          '</title>',
          `</title>\n    ${headTags.join('\n    ')}`,
        );

        if (scriptBlock) {
          result = result.replace('</head>', `    ${scriptBlock}\n  </head>`);
        }

        return result;
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), criticalAssetsPlugin()],
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

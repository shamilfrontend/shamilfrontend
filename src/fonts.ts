import '@fontsource/mulish/cyrillic-400.css';

let latinFontPromise: Promise<void> | null = null;

export function loadLatinFont(): Promise<void> {
  if (!latinFontPromise) {
    latinFontPromise = import('@fontsource/mulish/latin-400.css').then(() => undefined);
  }

  return latinFontPromise;
}

import { readFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import opentype from 'opentype.js';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../public');
const fontPath = path.resolve(
  __dirname,
  '../node_modules/@fontsource/mulish/files/mulish-latin-700-normal.woff',
);

const pngOutputs = [
  { size: 16, fileName: 'favicon-16x16.png' },
  { size: 32, fileName: 'favicon-32x32.png' },
  { size: 180, fileName: 'apple-touch-icon.png' },
  { size: 192, fileName: 'android-chrome-192x192.png' },
  { size: 512, fileName: 'android-chrome-512x512.png' },
];

function getGlyphLayout(font, char, fontSize) {
  const glyph = font.charToGlyph(char);
  const glyphPath = glyph.getPath(0, 0, fontSize);
  const bbox = glyphPath.getBoundingBox();

  return {
    glyph,
    bbox,
    width: bbox.x2 - bbox.x1,
    height: bbox.y2 - bbox.y1,
    advance: glyph.advanceWidth * (fontSize / font.unitsPerEm),
  };
}

function getMonogramMetrics(font, text, fontSize, letterGap) {
  const glyphs = [...text].map((char) => getGlyphLayout(font, char, fontSize));
  const width =
    glyphs.reduce((sum, item) => sum + item.width, 0) +
    letterGap * (glyphs.length - 1);
  const height = Math.max(...glyphs.map((item) => item.height));

  return { glyphs, width, height };
}

function buildTextPath(font, glyphs, fontSize, canvasSize, startX, letterGap) {
  const pathParts = [];
  let x = startX;

  for (const [index, item] of glyphs.entries()) {
    const y = (canvasSize - item.height) / 2 - item.bbox.y1;
    const glyphPath = item.glyph.getPath(x - item.bbox.x1, y, fontSize);
    pathParts.push(glyphPath.toPathData(2));
    x += item.width + (index < glyphs.length - 1 ? letterGap : 0);
  }

  return pathParts.join(' ');
}

function buildIconSvg() {
  const font = opentype.parse(readFileSync(fontPath), { lowMemory: true });
  const text = 'SF';
  const canvasSize = 512;
  const padding = 100;
  const targetSize = canvasSize - padding * 2;
  const letterGap = 10;

  let fontSize = targetSize;
  let layout = getMonogramMetrics(font, text, fontSize, letterGap);
  const scale = Math.min(
    targetSize / layout.width,
    targetSize / layout.height,
  );

  fontSize = Math.floor(fontSize * scale);
  layout = getMonogramMetrics(font, text, fontSize, letterGap);

  const startX = (canvasSize - layout.width) / 2;
  const letterPath = buildTextPath(
    font,
    layout.glyphs,
    fontSize,
    canvasSize,
    startX,
    letterGap,
  );

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${canvasSize} ${canvasSize}" role="img" aria-label="SF">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2f8fff" />
      <stop offset="100%" stop-color="#1b74e4" />
    </linearGradient>
  </defs>
  <rect width="${canvasSize}" height="${canvasSize}" rx="102" fill="url(#bg)" />
  <path fill="#ffffff" d="${letterPath}" />
</svg>
`;
}

async function generateFavicons() {
  const svg = buildIconSvg();
  const svgBuffer = Buffer.from(svg);

  await writeFile(path.join(publicDir, 'icon.svg'), svg);
  await writeFile(path.join(publicDir, 'favicon.svg'), svg);
  console.log('Generated icon.svg and favicon.svg');

  const pngBuffers = new Map();

  for (const { size, fileName } of pngOutputs) {
    const pngBuffer = await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toBuffer();

    pngBuffers.set(size, pngBuffer);
    await writeFile(path.join(publicDir, fileName), pngBuffer);
    console.log(`Generated ${fileName}`);
  }

  const icoBuffer = await toIco([
    pngBuffers.get(16),
    pngBuffers.get(32),
  ]);

  await writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');
}

generateFavicons().catch((error) => {
  console.error('Failed to generate favicons:', error);
  process.exit(1);
});

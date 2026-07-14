import designSystemCover from '../assets/portfolio/design-system/cover.svg';
import pprCabinetAddCar from '../assets/portfolio/ppr-cabinet/add-car.webp';
import pprCabinetCarDetail from '../assets/portfolio/ppr-cabinet/car-detail.webp';
import pprCabinetCover from '../assets/portfolio/ppr-cabinet/cover.webp';
import pprCabinetDashboard from '../assets/portfolio/ppr-cabinet/dashboard.webp';
import pprCabinetMileageLog from '../assets/portfolio/ppr-cabinet/mileage-log.webp';
import pprCover from '../assets/portfolio/ppr/cover.webp';
import shootoutCover from '../assets/portfolio/shootout/cover.webp';
import shootoutGameplay from '../assets/portfolio/shootout/gameplay.webp';
import shootoutShop from '../assets/portfolio/shootout/shop.webp';
import coverImage from '../assets/portfolio/flappy-petya/cover.webp';
import gameOverImage from '../assets/portfolio/flappy-petya/game-over.webp';
import gameplayImage from '../assets/portfolio/flappy-petya/gameplay.webp';
import recordsImage from '../assets/portfolio/flappy-petya/records.webp';
import settingsImage from '../assets/portfolio/flappy-petya/settings.webp';
import menuMobileImage from '../assets/portfolio/flappy-petya/menu-mobile.webp';
import swaggerViewerCover from '../assets/portfolio/swagger-viewer/cover.webp';
import zaykaCover from '../assets/portfolio/zayka-chitayka/cover.webp';
import zaykaLetters from '../assets/portfolio/zayka-chitayka/letters.webp';
import zaykaSyllables from '../assets/portfolio/zayka-chitayka/syllables.webp';
import zaykaWords from '../assets/portfolio/zayka-chitayka/words.webp';

import type { PortfolioMetaItem } from './profile-core';

export const portfolioMeta: PortfolioMetaItem[] = [
  {
    id: 'zayka-chitayka',
    languages: 'Vue3, TypeScript, Vite, SCSS',
    preview: 'https://zayka-chitayka.ru/',
    coverImage: zaykaCover,
    galleryImages: [zaykaCover, zaykaLetters, zaykaSyllables, zaykaWords],
  },
  {
    id: 'ppr-cabinet',
    languages: 'Vue3, TypeScript, Vite, Vitest, SCSS',
    preview: 'https://online.petrolplus.ru',
    coverImage: pprCabinetCover,
    galleryImages: [
      pprCabinetCover,
      pprCabinetDashboard,
      pprCabinetCarDetail,
      pprCabinetMileageLog,
      pprCabinetAddCar,
    ],
  },
  {
    id: 'ppr-site',
    languages: 'Nuxt, TypeScript, Vue3, Vite, SCSS, Tailwind',
    preview: 'https://www.petrolplus.ru/',
    coverImage: pprCover,
  },
  {
    id: 'shootout',
    languages: 'NodeJS, ExpressJS, WebSockets, TypeScript, Vue3, Vite, SCSS',
    preview: 'https://93.189.228.148/',
    coverImage: shootoutCover,
    galleryImages: [shootoutCover, shootoutGameplay, shootoutShop],
  },
  {
    id: 'flappy-petya',
    languages: 'JavaScript, HTML5 Canvas',
    preview: 'https://shamilfrontend.github.io/flappy-petya/',
    coverImage,
    galleryImages: [
      coverImage,
      gameOverImage,
      gameplayImage,
      recordsImage,
      settingsImage,
      menuMobileImage,
    ],
  },
  {
    id: 'design-system',
    languages: 'NodeJS, TypeScript, Vue3, Vite, SCSS, Storybook, Vitest',
    preview: 'https://shamilfrontend.github.io/design-system/',
    repositoryUrl: 'https://github.com/shamilfrontend/design-system',
    coverImage: designSystemCover,
  },
  {
    id: 'swagger-viewer',
    languages: 'Vue3, TypeScript, Vite, Vitest, SCSS',
    preview: 'https://shamilfrontend.github.io/swagger-viewer/',
    coverImage: swaggerViewerCover,
  },
];

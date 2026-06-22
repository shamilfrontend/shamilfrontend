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

import type { PortfolioMetaItem } from './profile-core';

export const portfolioMeta: PortfolioMetaItem[] = [
  {
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
    languages: 'Nuxt, TypeScript, Vue3, Vite, SCSS, Tailwind',
    preview: 'https://www.petrolplus.ru/',
    coverImage: pprCover,
  },
  {
    languages: 'NodeJS, ExpressJS, WebSockets, TypeScript, Vue3, Vite, SCSS',
    preview: 'http://93.189.228.148/',
    coverImage: shootoutCover,
    galleryImages: [shootoutCover, shootoutGameplay, shootoutShop],
  },
  {
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
    languages: 'NodeJS, TypeScript, Vue3, Vite, SCSS, Storybook, Vitest',
    preview: 'https://shamilfrontend.github.io/design-system/',
    repositoryUrl: 'https://github.com/shamilfrontend/design-system',
  },
];

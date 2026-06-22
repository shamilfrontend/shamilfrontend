import shootoutCover from '../assets/portfolio/shootout/cover.png';
import shootoutGameplay from '../assets/portfolio/shootout/gameplay.png';
import shootoutShop from '../assets/portfolio/shootout/shop.png';
import coverImage from '../assets/portfolio/flappy-petya/cover.png';
import gameOverImage from '../assets/portfolio/flappy-petya/game-over.png';
import gameplayImage from '../assets/portfolio/flappy-petya/gameplay.png';
import recordsImage from '../assets/portfolio/flappy-petya/records.png';
import settingsImage from '../assets/portfolio/flappy-petya/settings.png';
import menuMobileImage from '../assets/portfolio/flappy-petya/menu-mobile.png';

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tone: 'pink' | 'blue';
  icon: string;
}

export interface ResumeItem {
  period: string;
  title: string;
  place: string;
}

export interface SkillItem {
  title: string;
}

export interface PortfolioItem {
  category: string;
  title: string;
  project: string;
  client: string;
  languages: string;
  preview: string;
  description: string[];
  coverImage: string;
  galleryImages: string[];
}

export interface NavItem {
  to: string;
  label: string;
  icon: string;
}

export const profileInfo = {
  brand: 'ShamilFrontend',
  phone: '+7 960 5056089',
  email: 'shoma.alisultanov@yandex.ru',
};

export const socialLinks: SocialLink[] = [
  { label: 'Telegram', icon: 'telegram', url: 'https://t.me/shamilfrontend' },
  { label: 'VK', icon: 'vk', url: 'https://vk.com/shamilfrontend' },
  { label: 'GitHub', icon: 'github', url: 'https://github.com/shamilfrontend' },
];

export const navMeta = [
  { to: '/', labelKey: 'nav.home', icon: 'user' },
  { to: '/resume', labelKey: 'nav.resume', icon: 'file' },
  { to: '/portfolio', labelKey: 'nav.portfolio', icon: 'briefcase' },
] as const;

export const serviceMeta = [
  { tone: 'pink' as const, icon: 'code' },
  { tone: 'blue' as const, icon: 'code' },
  { tone: 'blue' as const, icon: 'code' },
  { tone: 'pink' as const, icon: 'code' },
];

export const portfolioMeta = [
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
];

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: string;
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

export interface WorkItem {
  category: string;
  title: string;
  project: string;
  client: string;
  languages: string;
  preview: string;
  description: string[];
}

export interface NavItem {
  to: string;
  label: string;
  icon: string;
}

export const profileInfo = {
  brand: 'ShamilFrontend',
  name: 'Shamil Alisultanov',
  role: 'Фулстек-разработчик',
  phone: '+7 960 5056089',
  email: 'shoma.alisultanov@yandex.ru',
  location: 'Россия, Республика Дагестан',
  birthday: '22 апреля 1992',
  aboutParagraphs: [
    'Я веб-разработчик, который любит превращать сложные задачи в понятные и удобные решения. Работаю с интерфейсами, архитектурой и фронтенд-разработкой.',
    'Мне важно, чтобы продукт был не только красивым, но и полезным: быстрым, логичным и комфортным для пользователя.',
  ],
  contactText:
    'Я всегда открыт к обсуждению новых проектов и сотрудничества.',
};

export const navItems: NavItem[] = [
  { to: '/about', label: 'Обо мне', icon: 'user' },
  { to: '/resume', label: 'Резюме', icon: 'file' },
  { to: '/works', label: 'Работы', icon: 'briefcase' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Telegram', icon: 'telegram', url: 'https://t.me/shamilfrontend' },
  { label: 'VK', icon: 'vk', url: 'https://vk.com/shamilfrontend' },
  { label: 'GitHub', icon: 'github', url: 'https://github.com/shamilfrontend' },
];

export const contactItems: ContactItem[] = [
  { label: 'Телефон', value: profileInfo.phone, icon: 'phone' },
  { label: 'Почта', value: profileInfo.email, icon: 'mail' },
  { label: 'Локация', value: profileInfo.location, icon: 'pin' },
  { label: 'Дата рождения', value: profileInfo.birthday, icon: 'calendar' },
];

export const services: ServiceItem[] = [
  {
    title: 'Frontend-разработка',
    description:
      'Разрабатываю быстрые и масштабируемые интерфейсы на Vue 3, TypeScript и современном стеке.',
    tone: 'pink',
    icon: 'code',
  },
  {
    title: 'Разработка приложений',
    description:
      'Создание современных веб-приложений с продуманной архитектурой и высокой производительностью.',
    tone: 'blue',
    icon: 'code',
  },
  {
    title: 'Backend и API',
    description:
      'Проектирую и реализую серверную часть, API и интеграции для полноценных веб-продуктов.',
    tone: 'blue',
    icon: 'code',
  },
  {
    title: 'Веб-разработка',
    description:
      'Разработка сайтов и интерфейсов с адаптивностью, чистым кодом и удобной поддержкой.',
    tone: 'pink',
    icon: 'code',
  },
];

export const educationItems: ResumeItem[] = [
  {
    period: 'Специалист при МГТУ им. Баумана',
    title: 'HTML/CSS, JS, React, PHP',
    place: 'Кроссбраузерная верстка, HTML5/CSS3, основы юзабилити',
  },
  {
    period: 'Дополнительное обучение',
    title: 'CS50, Udemy, Loftschool, ITVDN',
    place: 'Docker, Express, NestJS, современный JavaScript и Vue',
  },
];

export const experienceItems: ResumeItem[] = [
  {
    period: '2024 - настоящее время',
    title: 'FrontEnd Lead — Передовые Платежные Решения',
    place: 'Nuxt 3, Vue 3, TypeScript, SCSS; архитектура, код-ревью, командная работа',
  },
  {
    period: '2021 - 2024',
    title: 'Senior Frontend Developer — Газпром ID',
    place: 'Vue 3, TypeScript, дизайн-системы, продуктовая разработка',
  },
  {
    period: '2019 - 2022',
    title: 'Frontend Developer — МТ-Технологии',
    place: 'Vue 3, TypeScript, дизайн-системы, продуктовая разработка',
  },
  {
    period: '2018 - 2019',
    title: 'Frontend Developer — МТ-Интеграция',
    place: 'Vue 3, TypeScript, дизайн-системы, продуктовая разработка',
  },
  {
    period: '2016 - 2018',
    title: 'Frontend Developer — LEOMAX',
    place: 'Vue 3, TypeScript, дизайн-системы, продуктовая разработка',
  },
];

export const skills: SkillItem[] = [
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'SCSS' },
  { title: 'Адаптивная верстка' },
  { title: 'JavaScript' },
  { title: 'TypeScript' },
  { title: 'Vite' },
  { title: 'Vue.js' },
  { title: 'Nuxt.js' },
  { title: 'Node.js' },
  { title: 'Express.js' },
  { title: 'REST' },
  { title: 'MongoDB' },
  { title: 'Docker' },
  { title: 'Docker Compose' },
  { title: 'Git' },
  { title: 'Figma' },
  { title: 'PhotoShop' },
];

export const works: WorkItem[] = [
  {
    category: 'UI/UX',
    title: 'Chul Urina',
    project: 'Сайт',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    description: [
      'Полноценный дизайн-проект с акцентом на чистую типографику, удобные пользовательские сценарии и визуальную целостность.',
      'Основной фокус был на ясной структуре интерфейса и улучшении пользовательского пути от первого экрана до целевого действия.',
    ],
  },
  {
    category: 'Брендинг',
    title: 'Aura Dione',
    project: 'Айдентика бренда',
    client: 'ThemeForest',
    languages: 'Illustrator, Photoshop',
    preview: 'www.themeforest.net',
    description: [
      'Комплексная визуальная система бренда с единым языком графики для цифровых и печатных носителей.',
      'Проект объединяет типографику, иконографику и коммуникацию бренда для цельного восприятия во всех каналах.',
    ],
  },
  {
    category: 'Веб-приложение',
    title: 'T-Shirt Mockup',
    project: 'Панель управления',
    client: 'Creative Studio',
    languages: 'Vue, TypeScript, SCSS',
    preview: 'www.creative-studio.com',
    description: [
      'Веб-приложение с модульным подходом, переиспользуемыми компонентами и быстрым циклом разработки.',
      'Особое внимание уделено адаптивности, визуальной иерархии и корректной обратной связи в интеракциях.',
    ],
  },
  {
    category: 'Фотография',
    title: 'Modern Balloon',
    project: 'Фотосерия',
    client: 'Behance',
    languages: 'Lightroom, Photoshop',
    preview: 'www.behance.net',
    description: [
      'Визуальный проект о цвете, форме и движении с постобработкой, оптимизированной для digital-публикаций.',
      'Серия выполнена с упором на атмосферу и единый стиль во всех материалах.',
    ],
  },
];

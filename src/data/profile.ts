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
  level: number;
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

export interface BlogItem {
  date: string;
  category: string;
  title: string;
}

export interface NavItem {
  to: string;
  label: string;
  icon: string;
}

export const profileInfo = {
  brand: 'Bostami',
  name: 'Monalisa Ashley',
  role: 'Ui/Ux Designer',
  phone: '+123 456 7890',
  email: 'example@mail.com',
  location: 'Hong Kong China',
  birthday: 'May 27, 1990',
  aboutParagraphs: [
    "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
    'My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.',
  ],
  contactText:
    'I am always open to discussing product design work or partnership opportunities.',
};

export const navItems: NavItem[] = [
  { to: '/about', label: 'About', icon: 'user' },
  { to: '/resume', label: 'Resume', icon: 'file' },
  { to: '/works', label: 'Works', icon: 'briefcase' },
  { to: '/blogs', label: 'Blogs', icon: 'book' },
  { to: '/contact', label: 'Contact', icon: 'mail' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', icon: 'facebook', url: '#' },
  { label: 'Twitter', icon: 'twitter', url: '#' },
  { label: 'Instagram', icon: 'instagram', url: '#' },
  { label: 'LinkedIn', icon: 'linkedin', url: '#' },
];

export const contactItems: ContactItem[] = [
  { label: 'Phone', value: profileInfo.phone, icon: 'phone' },
  { label: 'Email', value: profileInfo.email, icon: 'mail' },
  { label: 'Location', value: profileInfo.location, icon: 'pin' },
  { label: 'Birthday', value: profileInfo.birthday, icon: 'calendar' },
];

export const services: ServiceItem[] = [
  {
    title: 'Ui/Ux Design',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'pink',
    icon: 'palette',
  },
  {
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'blue',
    icon: 'code',
  },
  {
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'blue',
    icon: 'camera',
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'pink',
    icon: 'code',
  },
];

export const educationItems: ResumeItem[] = [
  { period: '2021 - Present', title: 'Ph.D in Horriblensess', place: 'Harvard University, Cambridge' },
  { period: '2018 - 2020', title: 'Computer Science', place: 'Imperialize Technical Institute' },
];

export const experienceItems: ResumeItem[] = [
  { period: '2022 - Present', title: 'Senior Product Designer', place: 'Creative Studio Inc.' },
  { period: '2019 - 2022', title: 'UI/UX Designer', place: 'Theme Junction Ltd.' },
];

export const skills: SkillItem[] = [
  { title: 'Web Design', level: 92 },
  { title: 'Mobile App', level: 84 },
  { title: 'Illustrator', level: 77 },
  { title: 'Photoshop', level: 81 },
];

export const works: WorkItem[] = [
  {
    category: 'UI/UX',
    title: 'Chul Urina',
    project: 'Website',
    client: 'Envato',
    languages: 'Photoshop, Figma',
    preview: 'www.envato.com',
    description: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequr quo obcaecati rerum sit non.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequr quo obcaecati rerum sit non.',
    ],
  },
  {
    category: 'Branding',
    title: 'Aura Dione',
    project: 'Brand Identity',
    client: 'ThemeForest',
    languages: 'Illustrator, Photoshop',
    preview: 'www.themeforest.net',
    description: [
      'A complete branding package focused on modern visual language and reusable design patterns for digital and print products.',
      'The project combines typography, icon systems, and product storytelling for consistent customer perception across channels.',
    ],
  },
  {
    category: 'Web App',
    title: 'T-Shirt Mockup',
    project: 'Dashboard App',
    client: 'Creative Studio',
    languages: 'Vue, TypeScript, SCSS',
    preview: 'www.creative-studio.com',
    description: [
      'This web app demonstrates a modular design system with highly reusable components and rapid iteration workflows.',
      'Special attention was given to responsive behavior, hierarchy of content, and interaction feedback during user actions.',
    ],
  },
  {
    category: 'Photography',
    title: 'Modern Balloon',
    project: 'Photography Set',
    client: 'Behance',
    languages: 'Lightroom, Photoshop',
    preview: 'www.behance.net',
    description: [
      'A visual exploration around color, shape and movement with post-production workflow optimized for social media.',
      'The set was crafted to preserve cinematic mood and maintain clear style consistency across all publications.',
    ],
  },
];

export const blogs: BlogItem[] = [
  {
    date: '18 Apr, 2024',
    category: 'Design',
    title: 'How to Make Better UI Decisions in Complex Products',
  },
  {
    date: '02 Apr, 2024',
    category: 'Productivity',
    title: 'Top 7 Habits of Productive Designers Working Remote',
  },
  {
    date: '20 Mar, 2024',
    category: 'Career',
    title: 'Building a Personal Brand as a UI/UX Professional',
  },
];

export const footerText = '© 2024 All Rights Reserved by elite-themes24.';

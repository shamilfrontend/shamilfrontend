export interface SocialLink {
  label: string;
  url: string;
  short: string;
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
  { to: '/about', label: 'About', icon: '👤' },
  { to: '/resume', label: 'Resume', icon: '📄' },
  { to: '/works', label: 'Works', icon: '💼' },
  { to: '/blogs', label: 'Blogs', icon: '📝' },
  { to: '/contact', label: 'Contact', icon: '✉' },
];

export const socialLinks: SocialLink[] = [
  { label: 'Facebook', short: 'f', icon: 'f', url: '#' },
  { label: 'Twitter', short: 't', icon: 't', url: '#' },
  { label: 'Instagram', short: 'ig', icon: 'ig', url: '#' },
  { label: 'LinkedIn', short: 'in', icon: 'in', url: '#' },
];

export const contactItems: ContactItem[] = [
  { label: 'Phone', value: profileInfo.phone, icon: '📞' },
  { label: 'Email', value: profileInfo.email, icon: '✉' },
  { label: 'Location', value: profileInfo.location, icon: '📍' },
  { label: 'Birthday', value: profileInfo.birthday, icon: '📅' },
];

export const services: ServiceItem[] = [
  {
    title: 'Ui/Ux Design',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'pink',
    icon: '✎',
  },
  {
    title: 'App Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'blue',
    icon: '⌘',
  },
  {
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'blue',
    icon: '◉',
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
    tone: 'pink',
    icon: '</>',
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
  { category: 'UI/UX', title: 'Bostami Product Dashboard' },
  { category: 'Branding', title: 'Cheryl Clothing Campaign' },
  { category: 'Web App', title: 'Creative Portfolio Website' },
  { category: 'Photography', title: 'Urban Story Album' },
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

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import {
  navMeta,
  portfolioMeta,
  profileInfo,
  serviceMeta,
  type ContactItem,
  type NavItem,
  type PortfolioItem,
  type ResumeItem,
  type ServiceItem,
  type SkillItem,
} from '../data/profile';

interface LocalizedService {
  title: string;
  description: string;
}

interface LocalizedResumeItem {
  period: string;
  title: string;
  place: string;
}

interface LocalizedSkill {
  title: string;
}

interface LocalizedPortfolioItem {
  category: string;
  title: string;
  project: string;
  client: string;
  description: string[];
}

export function useProfileContent() {
  const { t, tm } = useI18n();

  const localizedProfile = computed(() => ({
    ...profileInfo,
    name: t('profile.name'),
    role: t('profile.role'),
    location: t('profile.location'),
    aboutParagraphs: tm('profile.about') as string[],
    contactText: t('profile.contactText'),
  }));

  const navItems = computed<NavItem[]>(() =>
    navMeta.map((item) => ({
      to: item.to,
      label: t(item.labelKey),
      icon: item.icon,
    })),
  );

  const contactItems = computed<ContactItem[]>(() => [
    {
      label: t('contacts.phone'),
      value: profileInfo.phone,
      icon: 'phone',
      href: `tel:${profileInfo.phone.replace(/\s/g, '')}`,
    },
    {
      label: t('contacts.email'),
      value: profileInfo.email,
      icon: 'mail',
      href: `mailto:${profileInfo.email}`,
    },
    {
      label: t('contacts.location'),
      value: t('profile.location'),
      icon: 'pin',
    },
  ]);

  const services = computed<ServiceItem[]>(() => {
    const localizedServices = tm('services') as LocalizedService[];

    return localizedServices.map((service, index) => ({
      ...service,
      ...serviceMeta[index],
    }));
  });

  const educationItems = computed<ResumeItem[]>(
    () => tm('education') as LocalizedResumeItem[],
  );

  const experienceItems = computed<ResumeItem[]>(
    () => tm('experience') as LocalizedResumeItem[],
  );

  const skills = computed<SkillItem[]>(
    () => tm('skills') as LocalizedSkill[],
  );

  const portfolioItems = computed<PortfolioItem[]>(() => {
    const localizedItems = tm('portfolioItems') as LocalizedPortfolioItem[];

    return localizedItems.map((item, index) => ({
      ...item,
      ...portfolioMeta[index],
    }));
  });

  return {
    profileInfo: localizedProfile,
    navItems,
    contactItems,
    services,
    educationItems,
    experienceItems,
    skills,
    portfolioItems,
  };
}

import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import {
  navMeta,
  profileInfo,
  serviceMeta,
  type ContactItem,
  type NavItem,
  type ResumeItem,
  type ServiceItem,
  type SkillItem,
} from '../data/profile-core';

interface LocalizedService {
  title: string;
  description: string;
}

interface LocalizedResumeItem {
  period: string;
  title: string;
  place: string;
  description?: string;
}

interface LocalizedSkill {
  title: string;
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

  const higherEducationItems = computed<ResumeItem[]>(
    () => tm('higherEducation') as LocalizedResumeItem[],
  );

  const additionalEducationItems = computed<ResumeItem[]>(
    () => tm('additionalEducation') as LocalizedResumeItem[],
  );

  const experienceItems = computed<ResumeItem[]>(() => tm('experience') as LocalizedResumeItem[]);

  const skills = computed<SkillItem[]>(() => tm('skills') as LocalizedSkill[]);

  return {
    profileInfo: localizedProfile,
    navItems,
    contactItems,
    services,
    higherEducationItems,
    additionalEducationItems,
    experienceItems,
    skills,
  };
}

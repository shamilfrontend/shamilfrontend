import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/about-view.vue'),
      meta: {
        titleKey: 'meta.homeTitle',
        descriptionKey: 'meta.homeDescription',
      },
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/resume-view.vue'),
      meta: {
        titleKey: 'meta.resumeTitle',
        descriptionKey: 'meta.resumeDescription',
      },
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio-view.vue'),
      meta: {
        titleKey: 'meta.portfolioTitle',
        descriptionKey: 'meta.portfolioDescription',
      },
    },
  ],
});

export default router;

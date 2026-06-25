import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/home-view.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/not-found-view.vue'),
      meta: {
        titleKey: 'meta.notFoundTitle',
        descriptionKey: 'meta.notFoundDescription',
      },
    },
  ],
});

export default router;

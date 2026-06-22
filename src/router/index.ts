import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/about-view.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/resume-view.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio-view.vue'),
    },
  ],
});

export default router;

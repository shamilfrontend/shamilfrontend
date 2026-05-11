import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/about',
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about-view.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/resume-view.vue'),
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/works-view.vue'),
    },
  ],
});

export default router;

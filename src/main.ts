import { createHead } from '@unhead/vue/client';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { i18n, loadLocaleMessages, resolveLocale } from './i18n';
import router from './router';
import './style.scss';

async function bootstrap(): Promise<void> {
  await loadLocaleMessages(resolveLocale());

  const app = createApp(App);
  const pinia = createPinia();
  const head = createHead();

  app.use(pinia);
  app.use(router);
  app.use(i18n);
  app.use(head);
  app.mount('#app');
}

bootstrap();

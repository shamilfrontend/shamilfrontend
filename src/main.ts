import { createHead } from '@unhead/vue/client';
import { createApp } from 'vue';

import App from './App.vue';
import { loadLatinFont } from './fonts';
import { i18n, loadLocaleMessages, resolveLocale } from './i18n';
import router from './router';
import './style.scss';

function bootstrap(): void {
  const app = createApp(App);
  const head = createHead();

  app.use(router);
  app.use(i18n);
  app.use(head);
  app.mount('#app');

  const locale = resolveLocale();
  if (locale === 'en') {
    void Promise.all([loadLatinFont(), loadLocaleMessages('en')]);
  }
}

bootstrap();

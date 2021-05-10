import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang/index';
// import ElementLocale from 'element-plus/lib/locale'; 
// ElementLocale.i18n((key, value) => i18n.global.t(key, value));
createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount('#app');

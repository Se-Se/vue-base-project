import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang/index';
import api from '@/api';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const theVue = createApp(App);
theVue.config.globalProperties.$api = api;
theVue.use(ElementPlus, {
  i18n: i18n.global.t
});
theVue
  .use(store)
  .use(router)
  .use(i18n)
  .use(api)
  .mount('#app');

import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/lang/index';
import api from '@/api';
// css
require('@/assets/scss/index.scss');

// import ElementLocale from 'element-plus/lib/locale';
// ElementLocale.i18n((key, value) => i18n.global.t(key, value));
const theVue = createApp(App);
theVue.config.globalProperties.$api = api;

theVue.use(store).use(router).use(i18n).use(api).mount('#app');

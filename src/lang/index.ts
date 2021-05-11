import enLocales from './en/index';
import zhLocales from './zh/index';

import {createI18n} from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from 'element-plus/lib/locale/lang/en';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';


const messages: any = {
  en: {
    // el 这个属性很关键，一定要保证有这个属性，
    el: enLocale.el,
    // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
    message: {...enLocales}
  },
  zh: {
    el: zhLocale.el,
    // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
    message: {...zhLocales}
  },
  testLocale: {
    el: {}
    // 没有定义 message 字段，会 fallback 回到 en 去, fallbackLocale 的定义在下方 👇
  }
};
export function defaultLangeuse() {
  const langs = ['en', 'zh-cn'];
  const navigatorLan = navigator.language || (navigator as any).userLanguage;
  const lang = navigatorLan.substring(0, 2);
  const lan = langs.indexOf(lang) >= 0 ? lang : 'en';
  return lan;
}

const i18n = createI18n({
  locale: Cookies.get('lang') || defaultLangeuse(),
  fallbackLocale: enLocale.name,
  messages
});
export default i18n;

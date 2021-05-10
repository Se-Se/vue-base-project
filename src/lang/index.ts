import enLocales from './en/index';
import zhLocales from './zh/index';

import {createI18n} from 'vue-i18n';
import Cookies from 'js-cookie';

const messages = {
  zh: {
    ...zhLocales
  },
  en: {
    ...enLocales
  }
};

export function defaultLangeuse() {
  const langs = ['en', 'zh-cn'];
  const navigatorLan = navigator.language || (navigator as any).userLanguage;
  const lang = navigatorLan.substring(0, 2);
  const lan = langs.indexOf(lang) >= 0 ? lang : 'en';
  console.log(lan);
  return lan;
}

const i18n = createI18n({
  locale: Cookies.get('lang') || defaultLangeuse(),
  messages
});
export default i18n;

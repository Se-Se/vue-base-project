import {ActionContext} from 'vuex';
import Cookies from 'js-cookie';
export default {
  namespaced: true,
  state: {
    lang: Cookies.get('lang')||'en'
  },
  mutations: {
    SET_LANG(state: LangTypes, lang: any) {
      state.lang = lang;
    }
  },
  actions:{
      setLang:({commit}:ActionContext<LangTypes,any>,lang:any):any=>{
        commit('SET_LANG',lang);
        Cookies.set('lang',lang)
      }
  }
};
interface LangTypes {
  lang: string | null;
}

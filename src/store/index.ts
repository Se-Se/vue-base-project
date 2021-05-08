// import Vue from 'vue';
import Vuex, { ModuleTree } from "vuex";
import * as root from "./root";

// Vue.use(Vuex);

const requireModules = require.context("./modules", false, /\.ts$/);

const modules = requireModules
  .keys() // eslint-disable-next-line
  .reduce((modules: ModuleTree<any>, fileName): any => {
    const name = (fileName.match(/([^./]+)\.ts$/) as RegExpMatchArray)[1];
    modules[name] = requireModules(fileName).default;
    return modules;
  }, {});

export default new Vuex.Store({
  strict: process.env.VUE_APP_NODE_ENV === "development",
  plugins: [],
  modules,
  ...root,
});

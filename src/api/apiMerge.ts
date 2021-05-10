import {AxiosInstance} from 'axios';
import * as modules from './modules';

export default (axios: AxiosInstance) => {
  const fns: any = {};
  Object.keys(modules).forEach(module => {
    const moduleFn = (modules as any)[module](axios);
    Object.keys(moduleFn).forEach(fnName => {
      fns[fnName] = moduleFn[fnName];
    });
  });
  return fns;
};

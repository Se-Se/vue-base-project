import {createAdminApi} from './createApi';
import {ACCESS_TOKEN} from './cookieWord';
import store from '@/store';
import {closeLoading} from '@/utils/apiUtils';
import {XhrErrorCode} from './axiosError';
import {refreshToken} from '@/utils/apiUtils';
import router from '@/router';

let API_URL = 'http://base.com/';
if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://development.com/';
} else if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://production.com/';
}
const api = createAdminApi(API_URL, ACCESS_TOKEN);

let loadingCount = 0;

api.axios.interceptors.request.use(
  (config: any) => {
    const prePath = store.getters.getPreviousPath;
    config.headers.ClientReferer = prePath === '/' ? document.referrer || window.location.origin : window.location.origin + prePath;
    config.headers.ClientLocation = window.location.href;
    return config;
  },
  (error: any) => {
    closeLoading(loadingCount);
    return Promise.reject(error);
  }
);

api.axios.interceptors.response.use(
  (response: any): any => {
    closeLoading(loadingCount);
    return response;
  },
  async (error: any): Promise<any> => {
    closeLoading(loadingCount);
    if (error.code === XhrErrorCode.TOKEN_ERROR) {
      refreshToken().then(res => {
        if (res) {
          location.reload();
        } else {
          window.location.href = '/login';
        }
      });
    }

    if (error.code === XhrErrorCode.NOTFOUND_ERROR) {
      // window.location.href = '/PageNotFound';
    }

    if (error.code === XhrErrorCode.TIMEOUT_ERROR || error.code === XhrErrorCode.NETWORK_ERROR) {
    }

    if (error.code === XhrErrorCode.SERVER_ERROR) {
      // window.location.href = '/errordata';
      alert('서버접속이 원할하지 않습니다. 잠시 후 재시도 해주세요.');
    }

    if (error.code === XhrErrorCode.CLIENT_ERROR) {
      const {
        data: {path, errors}
      } = error;
      if (path === '/admins/service' && errors.length) {
        alert(errors[0].reason);
        return;
      }

      const noalert = [];
      const routerName = (router.currentRoute as any)._value.name;
      if (routerName === 'Login') {
        noalert.push('99999');
      }
      if (error.data.message && !noalert.some((item: any): boolean => item === error.data.code)) {
        alert(error.data.message);
      }
    }

    return Promise.reject(error);
  }
);

export default api;

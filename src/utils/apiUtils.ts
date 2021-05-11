import api from '@/api';
import store from '@/store';
import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';

export function addLoading(count: any) {
  if (store.getters.getRootShowLoading) {
    return;
  }
  store.commit('SET_SHOW_LOADING', true);
  count++;
}
export function closeLoading(count: any) {
  if (!store.getters.getRootShowLoading) {
    return;
  }
  count--;
  if (count === 0) {
    store.commit('SET_SHOW_LOADING', false);
  }
}

export function setToken(accessToken: any, refreshToken: any) {
  api.axios.defaults.headers.accessToken = accessToken;

  const admin = JwtDecode(accessToken);
  Cookies.set('Albert_ACCESSTOKEN', accessToken, {expires: 1.0 / 24 / 2});
  Cookies.set('Albert_REFRESHTOKEN', refreshToken);

  // admin
  Cookies.set('adminInfo', JSON.stringify(admin));
  sessionStorage.setItem('admin', JSON.stringify(admin));
  store.commit('admin/SET_ADMIN', admin);
}

export async function refreshToken() {
  let refreshToken = Cookies.get('Albert_REFRESTOKEN');
  if (refreshToken && refreshToken.length) {
    const request: any = {
      data: {
        adminType: 'Albert',
        grantType: 'REFRESH_TOKEN',
        refreshToken
      }
    };

    try {
      const {data} = await api.postAuthToken(request);
      setToken(data.accessToken, data.refreshToken);
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
}

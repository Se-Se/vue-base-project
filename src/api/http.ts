import axios from 'axios';

axios.defaults.timeout = 5000;

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://development.com/';
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://production.com/';
}

const theConfig = (config: any): any => {
  config.header = {
    DeviceType: 'H5'
  };
  return config;
};

axios.interceptors.request.use(theConfig);

export function get(url: string, params?: any) {
  return new Promise((reslove, reject) => {
    axios
      .get(url, params)
      .then(res => {
        reslove(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(url:string, params?:any) {
  return new Promise((reslove, reject) => {
    axios
      .post(url, params)
      .then(res => {
        reslove(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

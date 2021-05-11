
import {AxiosPromise, AxiosInstance} from 'axios';
export const example = (axios: AxiosInstance) => {
  return {
    postExample(data:any): any{
      return axios.post('/orders/specifications', data.data);
    },
    getExample(data: any): any {
      return axios.get('/orders/searchTypes', data);
    },
    getWithParameExample(data: any): any{
      return axios.get(`/orders/${data.params.orderNo}`, data);
    }
  };
};
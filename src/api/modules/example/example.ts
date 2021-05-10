
import {AxiosPromise, AxiosInstance} from 'axios';
export const example = (axios: AxiosInstance) => {
  return {
    postOrdersSpecifications(data:any): any{
      return axios.post('/orders/specifications', data.data);
    },
    getOrdersSearchTypes(data: any): any {
      return axios.get('/orders/searchTypes', data);
    },
    getOrdersByOrderNo(data: any): any{
      return axios.get(`/orders/${data.params.orderNo}`, data);
    }
  };
};
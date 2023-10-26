import axiosClient from './axiosClient';

const customersApi = {
  getAll() {
    const url = '/api/v1/getall/customer';
    return axiosClient.get(url);
  },
};
export default customersApi;

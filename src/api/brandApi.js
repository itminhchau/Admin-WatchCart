import axiosClient from './axiosClient';

const brandApi = {
  getAll() {
    const url = '/api/v1/getall/brand';
    return axiosClient.get(url);
  },
};

export default brandApi;

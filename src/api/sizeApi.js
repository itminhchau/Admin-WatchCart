import axiosClient from './axiosClient';

const sizeApi = {
  getAll() {
    const url = '/api/v1/get/size';
    return axiosClient.get(url);
  },
};

export default sizeApi;

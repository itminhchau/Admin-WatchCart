import axiosClient from './axiosClient';

const CategorizeApi = {
  getAll() {
    const url = '/api/v1/get/categorize';
    return axiosClient.get(url);
  },
};

export default CategorizeApi;

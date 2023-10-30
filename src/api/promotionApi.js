import axiosClient from './axiosClient';

const promotionApi = {
  createPromotion(data) {
    const url = '/api/v1/create/promotion';
    return axiosClient.post(url, data);
  },
  updatePromotion(data) {
    const url = `/api/v1/update/promotion`;
    return axiosClient.put(url, data);
  },
  getAll() {
    const url = '/api/v1/getall/promotion';
    return axiosClient.get(url);
  },
};

export default promotionApi;

import axiosClient from './axiosClient';

const imageProductApi = {
  getAll() {
    const url = '/api/v1/get/colors';
    return axiosClient.get(url);
  },
  getImageProduct(id) {
    const url = `/xxxx/${id}`;
    return axiosClient.get(url);
  },
  createImageProduct(data) {
    const url = '/api/v1/create/image-product';
    return axiosClient.post(url, data);
  },
  updateImageProduct(data) {
    const url = `/xxx/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteImageProduct(id) {
    const url = `/xxx/${id}`;
    return axiosClient.delete(url);
  },
};

export default imageProductApi;

import axiosClient from './axiosClient';

const productsApi = {
  getAll(params) {
    const url = '/api/v1/get/filter/all/product';
    return axiosClient.get(url, {
      params: params,
    });
  },
  getProduct(id) {
    const url = `/api/v1/get-single/product/${id}`;
    return axiosClient.get(url);
  },
  createProduct(data) {
    const url = '/api/v1/create/product';
    return axiosClient.post(url, data);
  },
  updateProduct(data) {
    const url = `/api/v1/update/product`;
    return axiosClient.put(url, data);
  },
  deleteProduct(id) {
    const url = `/api/v1/delete/product/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;

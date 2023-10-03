import axiosClient from './axiosClient';

const colorApi = {
  getAll() {
    const url = '';
    return axiosClient.get(url);
  },
  getColor(id) {
    const url = `/xxxx/${id}`;
    return axiosClient.get(url);
  },
  createColor(data) {
    const url = '/api/v1/create/color';
    return axiosClient.post(url, data);
  },
  updateColor(data) {
    const url = `/xxx/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteColor(id) {
    const url = `/xxx/${id}`;
    return axiosClient.delete(url);
  },
};

export default colorApi;

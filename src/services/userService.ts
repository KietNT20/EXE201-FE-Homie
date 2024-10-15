import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';

export const userService = {
  getUserList() {
    return axiosInstance.get(API.USER_API.GET_ALL);
  },
  getUserById(id: number) {
    return axiosInstance.get(`${API.USER_API.GET_BY_ID}/${id}`);
  },
  createUser(payload: User) {
    return axiosInstance.post(API.USER_API.CREATE, payload);
  },
  updateUser(id: number, payload: User) {
    return axiosInstance.put(`${API.USER_API.UPDATE}/${id}`, payload);
  },
};

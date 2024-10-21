import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';

export const userService = {
  getUserList() {
    return axiosInstance.get(API.USER_API.GET_ALL);
  },
  getUserById(userId: number) {
    return axiosInstance.get(`${API.USER_API.GET_BY_ID}/${userId}`);
  },
  createUser(payload: User) {
    return axiosInstance.post(API.USER_API.CREATE, payload);
  },
  updateUser(payload: User) {
    return axiosInstance.put(`${API.USER_API.UPDATE}/${payload.id}`, payload);
  },
};

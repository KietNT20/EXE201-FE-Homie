import { API } from '@/api/apiUrl';
import { UserUpdatePayload } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const userService = {
  getUserList(query = '') {
    return axiosInstance.get(`${API.USER_API.GET_ALL}${query}`);
  },
  getUserById(userId: number) {
    return axiosInstance.get(`${API.USER_API.GET_BY_ID}?id=${userId}`);
  },
  createUser(payload: UserUpdatePayload) {
    return axiosInstance.post(API.USER_API.CREATE, payload);
  },
  updateUser(userId: number, payload: UserUpdatePayload) {
    return axiosInstance.put(`${API.USER_API.UPDATE}/${userId}`, payload);
  },
};

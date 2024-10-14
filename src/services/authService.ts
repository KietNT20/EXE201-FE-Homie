import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';

export const authService = {
  login(payload: { email: string; password: string }) {
    console.log(payload);
    return axiosInstance.post(API.AUTH_API.LOGIN, payload);
  },
  getUserByToken(payload: string) {
    return axiosInstance.get(API.AUTH_API.GET_USER_BY_TOKEN + payload);
  },
};

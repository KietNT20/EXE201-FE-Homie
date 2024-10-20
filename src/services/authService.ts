import { API } from '@/api/apiUrl';
import { TokenResponse } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const authService = {
  login(payload: { email: string; password: string }) {
    console.log(payload);
    return axiosInstance.post(API.AUTH_API.LOGIN, payload);
  },
  getUserByToken(token: TokenResponse) {
    return axiosInstance.get(API.AUTH_API.GET_USER_BY_TOKEN + token);
  },
};

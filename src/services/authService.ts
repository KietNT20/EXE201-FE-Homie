import { API } from '@/api/apiUrl';
import { UserProfile } from '@/types/reduxStateType';
import { TokenResponse } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const authService = {
  login(payload: { email: string; password: string }) {
    return axiosInstance.post(API.AUTH_API.LOGIN, payload);
  },
  getUserByToken(token: TokenResponse): Promise<UserProfile> {
    return axiosInstance.get(API.AUTH_API.GET_USER_BY_TOKEN + token);
  },
};

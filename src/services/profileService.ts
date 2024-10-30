import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';

export const profileService = {
  getProfiles(userId: number) {
    return axiosInstance.get(API.PROFILES_API.GET_PROFILES + userId);
  },
  updateProfiles(payload: any) {
    return axiosInstance.put(API.PROFILES_API.UPDATE + payload.id, payload);
  },
  createProfiles(payload: any) {
    return axiosInstance.post(API.PROFILES_API.CREATE, payload);
  },
  
};

import { API } from '@/api/apiUrl';
import { ProfilesPayload } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const profileService = {
  getProfiles(userId: number) {
    return axiosInstance.get(API.PROFILES_API.GET_PROFILES + userId);
  },
  updateProfiles(payload: ProfilesPayload, profileID: number) {
    return axiosInstance.put(API.PROFILES_API.UPDATE + profileID, payload);
  },
  createProfiles(payload: ProfilesPayload) {
    return axiosInstance.post(API.PROFILES_API.CREATE, payload);
  },
};

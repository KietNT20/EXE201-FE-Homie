import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';
import { ApplicationPayload } from './../types/types';

export const applicationService = {
  createApplication(payload: ApplicationPayload) {
    return axiosInstance.post(API.APPLICATION_API.CREATE, payload);
  },
  updateStatus(payload: { applicationId: number; status: string }) {
    return axiosInstance.put(
      API.APPLICATION_API.UPDATE_STATUS + payload.applicationId,
      payload,
    );
  },
  getAllApplications() {
    return axiosInstance.get(API.APPLICATION_API.GET_ALL);
  },
  getApplicationById(id: number) {
    return axiosInstance.get(API.APPLICATION_API.GET_BY_ID + id);
  },
};

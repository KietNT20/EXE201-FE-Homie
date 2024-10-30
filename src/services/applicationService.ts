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
};

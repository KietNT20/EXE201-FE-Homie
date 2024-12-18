import { API } from '@/api/apiUrl';
import { JobPostPayload } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const jobPostService = {
  getJobPosts: (query = '') => {
    return axiosInstance.get(`${API.JOB_POST_API.GET_ALL}${query}`);
  },
  getJobPostById(jobPostId: number) {
    return axiosInstance.get(API.JOB_POST_API.GET_BY_ID + jobPostId);
  },
  getJobPostByUserId(userId: number) {
    return axiosInstance.get(API.JOB_POST_API.GET_BY_USER_ID + userId);
  },
  createJobPost(payload: JobPostPayload) {
    return axiosInstance.post(API.JOB_POST_API.CREATE, payload);
  },
};

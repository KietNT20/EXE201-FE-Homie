import { API } from '@/api/apiUrl';
import { JobPost } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const jobpostService = {
  getJobPosts() {
    return axiosInstance.get(API.JOB_POST_API.GET_ALL);
  },
  getJobPostById(jobPostId: number) {
    return axiosInstance.get(API.JOB_POST_API.GET_BY_ID + jobPostId);
  },
  createJobPost(payload: JobPost) {
    return axiosInstance.post(API.JOB_POST_API.CREATE, payload);
  },
};

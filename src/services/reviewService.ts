import { API } from '@/api/apiUrl';
import axiosInstance from '@/util/axiosInstance';

export const reviewService = {
  getReviewByJobId(jobPostId: number) {
    return axiosInstance.get(API.REVIEW_API.GET_BY_JOB_ID + jobPostId);
  },
  createReview(payload: any) {
    return axiosInstance.post(API.REVIEW_API.CREATE, payload);
  },
};

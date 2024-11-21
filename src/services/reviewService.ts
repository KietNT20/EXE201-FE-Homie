import { API } from '@/api/apiUrl';
import { ReviewPayload } from '@/types/types';
import axiosInstance from '@/util/axiosInstance';

export const reviewService = {
  getReviewByJobId(jobPostId: number) {
    return axiosInstance.get(API.REVIEW_API.GET_BY_JOB_ID + jobPostId);
  },
  createReview({ reviewerId, rating, comment }: ReviewPayload) {
    return axiosInstance.post(API.REVIEW_API.CREATE, {
      reviewerId,
      rating,
      comment,
    });
  },
};

import { reviewService } from '@/services/reviewService';
import { ReviewPayload } from '@/types/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const useCreateReview = () => {
  const queryClient = useQueryClient();
  const { mutate: createReview, ...rest } = useMutation({
    mutationKey: ['createReview'],
    mutationFn: ({ reviewerId, jobId, rating, comment }: ReviewPayload) =>
      reviewService.createReview({ reviewerId, jobId, rating, comment }),
    onError: (error: AxiosError) => {
      toast.dismiss();
      console.error('Error:', error);
      toast.error('Đánh giá thất bại');
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Đánh giá thành công');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['reviews'],
      });
    },
  });

  return { createReview, ...rest };
};

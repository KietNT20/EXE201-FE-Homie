import { applicationService } from '@/services/applicationService';
import {
  ApplicationPayload,
  ApplicationUpdateStatusPayload,
} from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({ jobId, workerId, message }: ApplicationPayload) =>
      applicationService.createApplication({ jobId, workerId, message }),
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Giao dịch thất bại');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['jobPosts', 'applications'],
      });
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Yêu cầu của bạn đã được nhận');
    },
  });
  return { mutate, ...rest };
};

export const useGetApplicationById = (applicationId?: number | null) => {
  const { data, ...rest } = useQuery({
    queryKey: ['applicationDetails', { applicationId }],
    queryFn: () => applicationService.getApplicationById(applicationId!),
    enabled: !!applicationId,
    throwOnError: false,
  });
  return { data, ...rest };
};

export const useGetApplicationByUserId = (userId?: number | null) => {
  const { data, ...rest } = useQuery({
    queryKey: ['applicationByUser'],
    queryFn: () => applicationService.getApplicationByUserId(userId!),
    enabled: !!userId,
  });
  return { data, ...rest };
};

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: ({
      applicationId,
      status,
      reason,
    }: ApplicationUpdateStatusPayload) =>
      applicationService.updateStatus({ applicationId, status, reason }),
    onMutate: async ({ applicationId, status }) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ['applicationByUser'],
      });

      // Snapshot previous value
      const previousData = queryClient.getQueryData(['applicationByUser']);
      // Optimistically update
      queryClient.setQueryData(['applicationByUser'], (old: any) => {
        if (!old?.data) return old;
        return {
          ...old,
          data: old.data.map((item: any) =>
            item.id === applicationId ? { ...item, status } : item,
          ),
        };
      });

      return { previousData };
    },

    onError: (error: AxiosError<{ message: string }>, _, context) => {
      toast.dismiss();
      console.error('Error:', error);
      // Rollback to previous value
      if (context?.previousData) {
        queryClient.setQueryData(['applicationByUser'], context.previousData);
      }
      if (error.response?.data.message === 'This Application done') {
        toast.error('Bài đăng đã được hoàn thành');
      } else {
        toast.error('Cập nhật trạng thái thất bại');
      }
    },

    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['applicationByUser'],
      });
    },

    onSuccess: () => {
      toast.dismiss();
      toast.success('Cập nhật trạng thái thành công');
    },
  });
  return { mutate, ...rest };
};

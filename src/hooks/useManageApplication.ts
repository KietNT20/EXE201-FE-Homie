import { applicationService } from '@/services/applicationService';
import { ApplicationPayload } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({ jobId, workerId, message }: ApplicationPayload) =>
      applicationService.createApplication({ jobId, workerId, message }),
    onSuccess: async () => {
      toast.dismiss();
      // console.log('Create Application Successfully:', response);
      // Invalidate both the specific job post and the job posts list queries
      await queryClient.invalidateQueries({
        queryKey: ['jobPosts', 'applications'],
      }); // Invalidate job list
      toast.success('Yêu cầu của bạn đã được nhận');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Giao dịch thất bại');
    },
  });
  return { mutate, ...rest };
};

export const useGetAllApplication = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['applications'],
    queryFn: () => applicationService.getAllApplications(),
    throwOnError: true,
  });
  return { data, ...rest };
};

export const useGetApplicationById = (applicationId?: number | null) => {
  const { data, ...rest } = useQuery({
    queryKey: ['applicationDetails', applicationId],
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
    throwOnError: false,
  });
  return { data, ...rest };
};

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: ({
      applicationId,
      status,
    }: {
      applicationId: number;
      status: string;
    }) => {
      return applicationService.updateStatus(applicationId, status);
    },

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

    onError: (err, _, context) => {
      toast.dismiss();
      console.error('Error:', err);
      // Rollback to previous value
      if (context?.previousData) {
        queryClient.setQueryData(['applicationByUser'], context.previousData);
      }
      toast.error('Cập nhật trạng thái thất bại');
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

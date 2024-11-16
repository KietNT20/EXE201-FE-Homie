import { applicationService } from '@/services/applicationService';
import { ApplicationPayload } from '@/types/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const useCreateApplication = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({ jobId, workerId, message }: ApplicationPayload) =>
      applicationService.createApplication({ jobId, workerId, message }),
    onSuccess: (response) => {
      toast.dismiss();
      console.log('Create Application Successfully:', response);
      // Invalidate both the specific job post and the job posts list queries
      queryClient.invalidateQueries({
        queryKey: ['jobPosts', 'applications', id],
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
    queryKey: ['applicationByUser', userId],
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
    }) => applicationService.updateStatus(applicationId, status),

    onSuccess: async (response, variables) => {
      toast.dismiss();
      console.log('Update Application Status Successfully:', response);

      // Invalidate chính xác queryKey
      await queryClient.invalidateQueries({
        queryKey: ['applicationByUser'],
      });

      // Hoặc nếu bạn muốn cập nhật ngay lập tức mà không cần đợi refetch
      queryClient.setQueryData(['applicationByUser'], (oldData: any) => {
        if (!oldData?.data) return oldData;

        return {
          ...oldData,
          data: oldData.data.map((item: any) =>
            item.id === variables.applicationId
              ? { ...item, status: variables.status }
              : item,
          ),
        };
      });

      toast.success('Cập nhật trạng thái thành công');
    },

    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Cập nhật trạng thái thất bại');
    },
  });

  return { mutate, ...rest };
};

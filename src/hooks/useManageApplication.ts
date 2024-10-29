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
      queryClient.invalidateQueries({ queryKey: ['jobPost', id] }); // Invalidate specific job
      queryClient.invalidateQueries({ queryKey: ['jobPosts'] }); // Invalidate job list
      queryClient.invalidateQueries({ queryKey: ['applications'] });
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
    queryKey: ['application', applicationId],
    queryFn: () => applicationService.getApplicationById(applicationId!),
    enabled: !!applicationId,
    throwOnError: false,
    retry: 1,
  });
  return { data, ...rest };
};

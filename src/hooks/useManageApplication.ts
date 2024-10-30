import { applicationService } from '@/services/applicationService';
import { ApplicationPayload } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreateApplication = () => {
  const { mutate, ...rest } = useMutation({
    mutationKey: ['createApplication'],
    mutationFn: ({ jobId, workerId, message }: ApplicationPayload) =>
      applicationService.createApplication({ jobId, workerId, message }),
    onSuccess: (response) => {
      toast.dismiss();
      console.log('Create Application Successfully:', response);
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

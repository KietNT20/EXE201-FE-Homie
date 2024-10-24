import { applicationService } from '@/services/applicationService';
import { ApplicationPayload } from '@/types/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useCreateApplication = () => {
  const { mutate, ...rest } = useMutation({
    mutationKey: ['createApplication'],
    mutationFn: (applicationPayload: ApplicationPayload) =>
      applicationService.createApplication(applicationPayload),
    onSuccess: (response) => {
      toast.dismiss();
      console.log('Create Application Successfully:', response);
      toast.success('Xác nhận giao dịch thành công');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Giao dịch thất bại');
    },
  });
  return { mutate, ...rest };
};

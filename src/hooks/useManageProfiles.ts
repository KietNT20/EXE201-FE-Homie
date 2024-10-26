import { queryClient } from '@/App';
import { profileService } from '@/services/profileService';
import { Profiles } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetProfiles = (profilesId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['profiles', profilesId],
    queryFn: () => profileService.getProfiles(profilesId),
    enabled: !!profilesId,
    throwOnError: false,
    retry: 1,
    staleTime: 1 * 30 * 1000, // 1 minutes
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateProfiles = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: (payload: Profiles) => profileService.createProfiles(payload),
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
        queryKey: ['profiles'],
      });
      toast.success('Create Profiles Successfully!!');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Create Profiles Failed');
    },
  });

  return { mutate, ...rest };
};
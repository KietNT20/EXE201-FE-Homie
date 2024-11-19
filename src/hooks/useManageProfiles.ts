import { queryClient } from '@/App';
import { profileService } from '@/services/profileService';
import { Profiles } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetProfiles = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['profiles', userId],
    queryFn: async () => {
      const response = await profileService.getProfiles(userId);
      return response.data;
    },
    enabled: !!userId,
    throwOnError: false,
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateProfiles = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: (payload: Profiles) => {
      return profileService.createProfiles(payload);
    },
    onSuccess: async () => {
      toast.dismiss();
      await queryClient.invalidateQueries({
        queryKey: ['profiles'],
      });
      toast.success('Create Profiles Successfully!!');
    },
    onError: err => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Create Profiles Failed');
    },
  });

  return { mutate, ...rest };
};

export const useUpdateProfiles = (profileId: number) => {
  const { mutate, ...rest } = useMutation({
    mutationFn: (payload: Profiles) => {
      console.log(payload, 'profiles');
      return profileService.updateProfiles(payload, profileId);
    },
    onSuccess: payload => {
      toast.dismiss();
      queryClient.setQueryData(['profiles', profileId], payload);
      toast.success('Update Profiles Successfully!!');
    },
    onError: err => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Update Profiles Failed');
    },
  });

  return { mutate, ...rest };
};

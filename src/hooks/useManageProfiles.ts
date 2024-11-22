import { queryClient } from '@/App';
import { profileService } from '@/services/profileService';
import { ProfilesPayload } from '@/types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const useGetProfiles = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['profilesByUserId', { userId }],
    queryFn: async () => await profileService.getProfiles(userId),
    enabled: !!userId,
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateProfiles = () => {
  const { mutate, ...rest } = useMutation({
    mutationFn: ({
      userId,
      bio,
      skills,
      availability,
      experience,
    }: ProfilesPayload) => {
      return profileService.createProfiles({
        userId,
        bio,
        skills,
        availability,
        experience,
        ratingAvg: 5,
      });
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Tạo hồ sơ công việc thành công');
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.dismiss();
      console.error('Error:', err.response?.data.message);
      if (err.response?.data.message === 'This user has Profiles') {
        toast.error('Người dùng đã tạo hồ sơ thì sẽ không thể tạo lại');
      } else {
        toast.error('Tạo hồ sơ công việc thất bại');
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profilesByUserId'],
      });
    },
  });

  return { mutate, ...rest };
};

export const useUpdateProfiles = (profileId: number) => {
  const { mutate, ...rest } = useMutation({
    mutationFn: (payload: ProfilesPayload) => {
      // console.log(payload, 'profiles');
      return profileService.updateProfiles(profileId, payload);
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Cập nhật hồ sơ công việc thành công');
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.dismiss();
      console.error('Error:', err.response?.data.message);
      toast.error('Cập nhật hồ sơ công việc thất bại');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['profilesByUserId'],
      });
    },
  });

  return { mutate, ...rest };
};

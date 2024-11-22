import { userService } from '@/services/userService';
import { UserUpdatePayload } from '@/types/types';
import { User } from '@/types/types.common';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useGetApiUsers = () => {
  const { data, ...rest } = useQuery({
    queryKey: ['users'],
    queryFn: () => userService.getUserList(),
    throwOnError: true,
  });

  return {
    data,
    ...rest,
  };
};

export const useGetUserById = (userId: number) => {
  const { data, ...rest } = useQuery({
    queryKey: ['userDetail', userId],
    queryFn: () => userService.getUserById(userId),
    enabled: !!userId,
    throwOnError: false,
  });

  return {
    data,
    ...rest,
  };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({
      name,
      email,
      password,
      phone,
      dateOfBirth,
      gender,
      roleId,
    }: User) =>
      userService.createUser({
        name,
        email,
        password,
        phone,
        dateOfBirth,
        gender,
        roleId,
      }),
    onSuccess: async () => {
      toast.dismiss();
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      toast.success('Create User Successfully!!');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Create User Failed');
    },
  });
  return { mutate, ...rest };
};

export const useUpdateUser = (userId: number) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({
      name,
      email,
      password,
      phone,
      dateOfBirth,
      gender,
    }: UserUpdatePayload) =>
      userService.updateUser(userId, {
        name,
        email,
        password,
        phone,
        dateOfBirth,
        gender,
      }),
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Update User Failed');
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Update User Successfully!!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['userDetail', { userId }],
      });
    },
  });

  return { mutate, ...rest };
};

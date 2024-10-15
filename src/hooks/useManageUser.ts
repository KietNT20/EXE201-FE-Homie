import { userService } from '@/services/userService';
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
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
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

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: ({ email, name }) => {
      return axiosInstance.put(API.USERS, {
        email,
        name,
      });
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
      toast.success('Update User Successfully!!');
    },
    onError: (err) => {
      toast.dismiss();
      console.error('Error:', err);
      toast.error('Update User Failed');
    },
  });
  return { mutate, ...rest };
};

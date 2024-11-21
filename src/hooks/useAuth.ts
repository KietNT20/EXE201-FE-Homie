import { PATH } from '@/constant/path';
import { InputLoginTypes } from '@/pages/LoginPage/schemas/type';
import { authService } from '@/services/authService';
import { userService } from '@/services/userService';
import { setUserProfile } from '@/store/actions/userProfileAction';
import { User } from '@/types/types.common';
import tokenMethod from '@/util/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './reudxHook';

/*
 * useLogin hook
 * @description
 * This hook is used to login user
 */
export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate: login, ...rest } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: InputLoginTypes) =>
      authService.login({ email, password }),
    onSuccess: async (response) => {
      toast.dismiss();
      await queryClient.setQueryData(['loginAccount'], response);
      // console.log('Login success', response);
      if (response.data) {
        tokenMethod.set({ token: response.data.tokenString });
        dispatch(setUserProfile(tokenMethod.get()?.token));
        toast.success('Đăng nhập thành công');
        navigate(PATH.HOME, { replace: true });
      }
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.dismiss();
      console.log('Login failed', error);
      if (
        error.response?.data.message === 'Thông tin đăng nhập không đúng!!!'
      ) {
        toast.error('Vui lòng kiểm tra lại email hoặc mật khẩu');
      } else if (
        error.response?.data.message === 'This account has been blocked!!!'
      ) {
        toast.error('Tài khoản của bạn đã bị khóa');
      }
    },
  });

  return { login, ...rest };
};

/*
 * useLogout hook
 * @description
 * This hook is used to register user has  role id is customer
 */
export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: registerUser, ...rest } = useMutation({
    mutationKey: ['register'],
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
    onSuccess: async (response) => {
      toast.dismiss();
      await queryClient.setQueryData(['registerAccount'], response);
      if (response.data) {
        toast.success('Đăng ký tài khoản thành công');
        navigate(PATH.LOGIN, { replace: true });
      }
    },
    onError: (error: AxiosError) => {
      toast.dismiss();
      console.error('Error:', error);
      if (error.status === 400) {
        toast.error('Email hoặc điện thoại đã tồn tại');
      }
      toast.error('Đăng ký tài khoản thất bại');
    },
  });

  return { registerUser, ...rest };
};

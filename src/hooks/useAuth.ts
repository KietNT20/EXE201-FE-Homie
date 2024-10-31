import { PATH } from '@/constant/path';
import { InputLoginTypes } from '@/pages/LoginPage/schemas/type';
import { authService } from '@/services/authService';
import { userService } from '@/services/userService';
import { setUserProfile } from '@/store/actions/userProfileAction';
import tokenMethod from '@/util/token';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
    onSuccess: (response) => {
      toast.dismiss();
      queryClient.setQueryData(['account'], response);
      // console.log('Login success', response);
      tokenMethod.set({ token: response.data.tokenString });
      dispatch<any>(setUserProfile(tokenMethod.get()?.token));
      toast.success('Đăng nhập thành công');
      navigate(PATH.HOME, { replace: true });
    },
    onError: (error) => {
      toast.dismiss();
      console.log('Login failed', error);
      toast.error('Vui lòng kiểm tra lại email hoặc mật khẩu');
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
    onSuccess: () => {
      toast.dismiss();
      toast.success('Đăng ký tài khoản thành công');
      navigate(PATH.LOGIN, { replace: true });
    },
    onError: (err: any) => {
      toast.dismiss();
      console.error('Error:', err.response?.data?.message);
      toast.error('Đăng ký tài khoản thất bại');
    },
  });

  return { registerUser, ...rest };
};

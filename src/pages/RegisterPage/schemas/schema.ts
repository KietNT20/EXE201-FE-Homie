import { REGEX } from '@/constant/regex';
import dayjs from 'dayjs';
import * as yup from 'yup';

export const registerSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Yêu cầu nhập email hợp lệ')
      .required('Yêu cầu nhập email'),
    name: yup.string().required('Username is required'),
    password: yup
      .string()
      .min(5, 'Mật khaẩu phải có ít nhất 5 ký tự')
      .matches(
        REGEX.PASSWORD,
        'Mật khẩu phải chứa ít nhất 1 ký tự hoa, 1 ký tự thường và 1 ký tự số',
      )
      .required('Password is required'),
    phone: yup
      .string()
      .matches(REGEX.PHONE_NUMBER, 'Số điện thoại không hợp lệ')
      .required('Yêu cầu nhập số điện thoại'),
    dateOfBirth: yup.string().required('Yêu cầu chọn ngày sinh'),
    gender: yup.string().required('Yêu cầu chọn giới tính'),
  })
  .required();

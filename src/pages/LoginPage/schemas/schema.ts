import * as yup from 'yup';

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Vui lòng nhập email hợp lệ')
      .required('Yêu cầu nhập email'),
    password: yup
      .string()
      .required('Yêu cầu nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  })
  .required();

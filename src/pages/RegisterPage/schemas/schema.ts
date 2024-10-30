import { REGEX } from '@/constant/regex';
import dayjs from 'dayjs';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup.string().required('Họ và tên là bắt buộc'),
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(REGEX.PHONE_NUMBER, 'Số điện thoại không hợp lệ'),
  email: yup.string().required('Email là bắt buộc').email('Email không hợp lệ'),
  gender: yup.string().required('Giới tính là bắt buộc'),
  dateOfBirth: yup
    .date()
    .nullable()
    .required('Ngày sinh là bắt buộc')
    .max(dayjs().subtract(15, 'year').toDate(), 'Bạn phải trên 15 tuổi'),
  password: yup
    .string()
    .required('Mật khẩu là bắt buộc')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

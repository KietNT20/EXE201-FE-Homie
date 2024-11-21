// schema.ts
import dayjs, { Dayjs } from 'dayjs';
import * as yup from 'yup';

export interface District {
  id: number;
  district: string;
}

export interface JobPostFormData {
  userId: number;
  title: string;
  description: string;
  location?: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: Dayjs;
  endDate: Dayjs;
  status: string;
  createDate: Dayjs;
  categorys: {
    categoryId: number;
  }[];
}

export interface ExtendedJobPostFormData
  extends Omit<JobPostFormData, 'location'> {
  district: District;
  streetAddress: string;
}

export const jobPostSchema = yup.object().shape({
  userId: yup.number().required('UserId is required'),
  title: yup
    .string()
    .required('Vui lòng nhập tiêu đề')
    .min(3, 'Tiêu đề phải có ít nhất 3 ký tự'),
  description: yup.string().min(10, 'Mô tả phải có ít nhất 10 ký tự'),
  // location: yup.string().required('Vui lòng nhập địa chỉ chi tiết'),
  squareMeters: yup
    .number()
    .required('Vui lòng nhập diện tích')
    .positive('Diện tích phải lớn hơn 0')
    .typeError('Diện tích phải là số'),
  numberOfFloors: yup.number().typeError('Số tầng phải là số'),
  startDate: yup
    .mixed<Dayjs>()
    .required('Vui lòng chọn ngày bắt đầu')
    .test('isAfterToday', 'Ngày bắt đầu phải từ ngày hôm nay', (value) => {
      return dayjs(value).isAfter(dayjs().subtract(1, 'day'));
    }),
  endDate: yup
    .mixed<Dayjs>()
    .required('Vui lòng chọn ngày kết thúc')
    .test(
      'isAfterStartDate',
      'Ngày kết thúc phải sau ngày bắt đầu',
      function (value) {
        const { startDate } = this.parent;
        return dayjs(value).isAfter(startDate);
      },
    ),
  status: yup.string().required('Vui lòng chọn trạng thái'),
  createDate: yup.mixed<Dayjs>().required('CreateDate is required'),
  categorys: yup
    .array()
    .of(
      yup.object({
        categoryId: yup.number().required('Category ID is required'),
      }),
    )
    .min(1, 'Vui lòng chọn ít nhất một danh mục')
    .required('Vui lòng chọn danh mục'),
  district: yup.object().required('Vui lòng chọn quận/huyện'),
  streetAddress: yup.string().required('Vui lòng nhập địa chỉ chi tiết'),
});

import { JobPostStatus } from '@/types/types';
import {
  Check,
  Close,
  HourglassEmpty,
  HourglassFull,
} from '@mui/icons-material';

export const getStatusConfig = (status: JobPostStatus) => {
  switch (status) {
    case 'Done':
      return {
        color: 'success' as 'success',
        icon: Check,
        label: 'Hoàn thành',
      };
    case 'Cancel':
      return {
        color: 'error' as 'error',
        icon: Close,
        label: 'Đã hủy',
      };
    case 'Application':
      return {
        color: 'info' as 'info',
        icon: HourglassFull,
        label: 'Đã nhận',
      };
    default:
      return {
        color: 'default' as 'default',
        icon: HourglassEmpty,
        label: 'Đang chờ',
      };
  }
};

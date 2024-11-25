import { ApplicationStatus, JobPostStatus } from '@/types/types';
import {
  Check,
  Close,
  HourglassEmpty,
  HourglassFull,
} from '@mui/icons-material';

export const getStatusConfig = (status: JobPostStatus | ApplicationStatus) => {
  switch (status) {
    case 'Done' as JobPostStatus.DONE | ApplicationStatus.DONE:
      return {
        color: 'success' as const,
        icon: Check,
        label: 'Hoàn thành',
      };
    case 'Cancel' as JobPostStatus.CANCEL | ApplicationStatus.CANCEL:
      return {
        color: 'error' as const,
        icon: Close,
        label: 'Đã hủy',
      };
    case 'Application' as JobPostStatus.RECEIVED:
    case 'Received' as ApplicationStatus.RECEIVED:
      return {
        color: 'info' as const,
        icon: HourglassFull,
        label: 'Đã nhận',
      };
    default:
      return {
        color: 'default' as const,
        icon: HourglassEmpty,
        label: 'Đang chờ',
      };
  }
};

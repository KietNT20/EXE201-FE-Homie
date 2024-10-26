import { JobPostStatus } from '@/types/types';

export const getStatusConfig = (status: JobPostStatus) => {
  switch (status) {
    case 'Done':
      return {
        color: 'success' as 'success',
        icon: '✓',
        label: 'Hoàn thành',
      };
    case 'Cancel':
      return {
        color: 'error' as 'error',
        icon: '✕',
        label: 'Đã hủy',
      };
    default:
      return {
        color: 'default' as 'default',
        icon: '',
        label: 'Đang chờ',
      };
  }
};

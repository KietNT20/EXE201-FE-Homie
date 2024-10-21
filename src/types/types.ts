export type TokenResponse = string;

export interface InputProps {
  label?: string;
  type: string;
  disabled?: boolean;
  placeholder: string;
  size: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  [key: string]: any;
}

export interface CategoryService {
  categoryId: number;
}

export enum JobPostStatus {
  DONE = 'Done',
  CANCELLED = 'Cancelled',
}

export interface JobPost {
  id?: number;
  userId: number;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  price: number;
  status: JobPostStatus;
  createDate?: string;
  categorys: CategoryService[];
}

export interface ServiceCardProps {
  onClick: () => void;
  jobPost: JobPost;
  [key: string]: any;
}

export interface ApplicationPayload {
  jobId: number;
  workerId: number;
  message: string;
}

export interface ApplicationStatus extends ApplicationPayload {
  id: number;
  status: string;
}

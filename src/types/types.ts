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
/*
 * Category Type
 */
export interface Category {
  id?: number;
  categoryName?: string;
  price?: number;
}

export interface CategoryService {
  categoriesId: number;
}

/*
 * JobPost Type
 */
export enum JobPostStatus {
  DONE = 'Done',
  CANCELLED = 'Cancelled',
}

export interface JobPost {
  jobId?: number;
  employerId: number;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: Date | string;
  endDate: Date | string;
  price: number;
  status: JobPostStatus;
  createDate: Date | string;
  jobType: number;
  categoryJobPost: CategoryService[];
}
/*
  ! This is the type of the data that the API returns
*/
export interface JobPostResponse {
  data: JobPost[];
  message?: string;
  tolalItems?: number;
  totalPage?: number;
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

export interface Profiles {
  userId: number;
  bio: string;
  skills: string;
  experience: string;
  availability: string;
  ratingAvg: number;
}

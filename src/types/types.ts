import {
  District,
  ExtendedJobPostFormData,
} from '@/pages/ServicePage/schemas/schema';
import { Category, JobPost, User } from './types.common';

export type TokenResponse = string;

/*
 * JobPost Type
 */
export enum JobPostStatus {
  DONE = 'Done',
  CANCEL = 'Cancel',
  PENDING = 'Waiting',
  RECEIVED = 'Application',
}

export enum ApplicationStatus {
  DONE = 'Done',
  CANCEL = 'Cancel',
  PENDING = 'Pending',
  RECEIVED = 'Received',
}

/*
 * Category Type
 */
export interface CategoriesId {
  categoriesId: number;
}

export interface CategoryPayload {
  categoryId: number;
}

export interface JobPostPayload {
  userId: number;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: string;
  endDate: string;
  status: string;
  createDate: string;
  categorys: CategoryPayload[];
}

export interface JobPostDetail {
  data: JobPost;
  message?: string;
}

export interface ApplicationPayload {
  jobId: number;
  workerId: number;
  message?: string;
}

export interface ApplicationUpdateStatusPayload {
  applicationId: number;
  status: string;
  reason?: string | null;
}

export interface Application {
  id: number;
  jobId?: number;
  workerId?: number;
  message: string | null;
  status: ApplicationStatus;
  appliedAt: string;
  typeJobPost?: number;
  jobPost?: any;
  worker?: any;
}

export interface Profiles {
  profileId: number;
  userId: number;
  bio: string;
  skills: string;
  experience: string;
  availability: string;
  ratingAvg?: number;
}

export type ProfilesPayload = Omit<Profiles, 'profileId'>;

export interface Transaction {
  transactionId: number;
  walletId: number;
  userId: number;
  transactionType: string;
  amount: number;
  transactionDate: number;
  description: string;
  eWallet: string;
}

export interface FilterState {
  categories: number[];
  priceRange: [number, number];
  searchTerm: string;
}

export interface ExtendedFilterState extends FilterState {
  searchTerm: string;
}

/*
 * Props Type
 */
export interface ServiceFilterProps {
  categories?: Category[];
  onFilterChange: (filters: ExtendedFilterState) => void;
  minPrice?: number;
  maxPrice?: number;
}

export interface ServiceCardProps {
  jobPost: JobPost;
  onClick: () => void;
  categories?: Category[];
  [key: string]: any;
}
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
export interface ApplicationModalProps {
  open: boolean;
  isSubmitting: boolean;
  message: string;
  onClose: () => void;
  onSubmit: () => void;
  onMessageChange: (message: string) => void;
}

export interface JobPostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: JobPostPayload) => void;
  categories: Category[];
  initialData?: Partial<ExtendedJobPostFormData>;
  error: Error | null;
  districts: District[];
  isPending?: boolean;
}

export type UserUpdatePayload = Omit<User, 'id'>;

export interface ReviewByJobId {
  reviewId: number;
  reviewedId: number;
  reviewerName: string;
  jobId: number;
  rating: number;
  comment: string | null;
}

export interface ReviewPayload {
  reviewerId: number;
  jobId: number;
  rating: number;
  comment?: string | null;
}

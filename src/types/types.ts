export type TokenResponse = string;
/*
 * Category Type
 */
export interface CategoryService {
  categoriesId: number;
}
/*
 * JobPost Type
 */
export enum JobPostStatus {
  DONE = 'Done',
  CANCEL = 'Cancel',
  PENDING = 'Pending',
}

export interface JobPost {
  jobId?: number;
  employerId: number;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: Date | null | undefined | string;
  endDate: Date | null | undefined | string;
  status: JobPostStatus;
  createDate: Date | null | undefined | string;
  jobType: number;
  categoryJobPost: CategoryService[];
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

export interface JobPostResponse {
  data: JobPost[];
  tolalItems?: number;
  totalPage?: number;
}

export interface ApplicationPayload {
  jobId: number;
  workerId: number;
  message?: string;
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
  categoryPrices: Record<number, number>;
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
  initialData?: Partial<JobPostPayload>;
  error: Error | null;
}

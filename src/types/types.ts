export type TokenResponse = string;

export interface UserPayload {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date | null;
  gender?: string;
  roleId?: RoleUser;
}

export interface InputProps {
  label?: string;
  type: string;
  disabled?: boolean;
  placeholder: string;
  size: 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  [key: string]: any;
}

export interface CategoryService {
  categoryId: number;
}

export interface JobPost {
  userId: number;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  price: number;
  status: string;
  createDate?: string;
  categorys: CategoryService[];
}

export interface ServiceCardProps {
  onClick: () => void;
  jobPost: JobPost;
  [key: string]: any;
}

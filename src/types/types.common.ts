import { CategoriesId, JobPostStatus } from './types';

export enum RoleUser {
  ADMIN = 1,
  CUSTOMER = 2,
  EMPLOYEE = 3,
  STAFF = 4,
}

export interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date | null;
  gender?: 'Male' | 'Female';
  roleId?: RoleUser;
}

export interface Transaction {
  transactionId?: number;
  walletId?: number;
  userId?: number;
  transactionType?: string;
  amount?: number;
  transactionDate?: number;
  description?: string;
  eWallet?: string;
}
export interface Category {
  id?: number;
  categoryName?: string;
  hours?: string;
  price?: number;
}

export interface JobPost {
  jobId?: number;
  employerId: number;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  price?: number;
  startDate: Date | null | undefined | string;
  endDate: Date | null | undefined | string;
  status: JobPostStatus;
  createDate: Date | null | undefined | string;
  jobType: number;
  categoryJobPost: CategoriesId[];
}

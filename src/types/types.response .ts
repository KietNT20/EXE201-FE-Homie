import { UserProfile } from './reduxStateType';
import { Application } from './types';
import { JobPost } from './types.common';

export interface UserProfileResponse {
  data: UserProfile;
}

export interface JobPostResponse {
  data: JobPost[];
  tolalItems?: number;
  totalPage?: number;
}

export interface ApplicationResponse {
  data: Application[];
  message?: string;
}

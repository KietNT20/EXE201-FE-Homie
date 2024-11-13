export type UserProfile = {
  address?: string | null;
  avatarUrl?: string;
  dateOfBirth?: string;
  email?: string;
  gender?: string;
  id?: number;
  name?: string;
  phone?: string;
  roleId?: number;
  status?: boolean;
};

export type UserProfileState = {
  userProfile: UserProfile;
};

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female";
  roleId?: number;
}

type UserProfileState = {
  userProfile: User;
};

type UserProfileAction = {
  type: string;
  payload?: any;
};

type DispatchUserProfileType = (args: UserProfileAction) => UserProfileAction;

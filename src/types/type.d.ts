enum RoleUser {
  ADMIN = 1,
  USER = 2,
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date;
  gender?: 'male' | 'female';
  roleId?: RoleUser;
}

type UserProfileState = {
  userProfile: User;
};

type ActionReduxType = {
  type: string;
  payload?: any;
};

type DispatchType<T> = (args: T) => T;

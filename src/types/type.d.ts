enum RoleUser {
  ADMIN = 1,
  USER = 2,
  EMPLOYEE = 3,
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female';
  roleId?: RoleUser;
}

type ActionReduxType = {
  type: string;
  payload?: any;
};

type DispatchType<T> = (args: T) => T;

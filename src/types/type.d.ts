enum RoleUser {
  ADMIN = 1,
  CUSTOMER = 2,
  EMPLOYEE = 3,
  STAFF = 4,
}

interface User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date | null;
  gender?: 'male' | 'female';
  roleId?: RoleUser;
}

type ActionReduxType = {
  type: string;
  payload?: any;
};

type DispatchType<T> = (args: T) => T;

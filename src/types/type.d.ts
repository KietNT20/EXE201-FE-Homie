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

interface Profile {
  userID?: number;
  bio?: string;
  skill?: string;
  experience?: string;
  availability?: string;
  ratingAvg?: number;
}

interface Transaction {
  transactionId?: number;
  walletId?: number;
  userId?: number;
  transactionType?: string;
  amount?: number;
  transactionDate?: number;
  description?: string;
  eWallet?: string;
}
interface Category {
  id?: number;
  categoryName?: string;
  price?: number;
}

type ActionReduxType = {
  type: string;
  payload?: any;
};

type DispatchType<T> = (args: T) => T;

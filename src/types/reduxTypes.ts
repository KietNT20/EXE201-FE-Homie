export interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth: Date;
  gender: "male" | "female";
  roleId: number;
}

export interface UserState {
  users: User[];
  user: User | null;
}

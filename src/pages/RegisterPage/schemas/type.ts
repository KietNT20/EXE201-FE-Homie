export type InputRegisterTypes = {
  name: string;
  phone?: string;
  email?: string;
  gender?: string | undefined;
  dateOfBirth?: Date | string | null;
  password?: string;
  roleId?: number | string;
};

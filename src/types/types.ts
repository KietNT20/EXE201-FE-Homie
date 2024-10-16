export interface TokenResponse {
  token?: string;
}

export interface UserPayload {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  dateOfBirth?: Date | null;
  gender?: string;
  roleId?: RoleUser;
}

export interface InputProps {
  label?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: 'small' | 'medium';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  [key: string]: any;
}

export interface ServiceCardData {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
  time: string;
  userAddress: string;
  categories: Array<
    | 'Dọn dẹp nhà cửa'
    | 'Giặt giũ, ủi đồ'
    | 'Nấu ăn'
    | 'Chăm sóc trẻ em'
    | 'Sửa chữa nhà cửa'
    | 'Chăm sóc thú cưng'
    | 'Dạy học'
    | 'Làm vườn'
  >;
  serviceDescription: string;
  joinDate: string;
}

export interface ServiceCardProps {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
  time: string;
  status: string;
  userAddress: string;
  categories: Array<
    | 'Dọn dẹp nhà cửa'
    | 'Giặt giũ, ủi đồ'
    | 'Nấu ăn'
    | 'Chăm sóc trẻ em'
    | 'Sửa chữa nhà cửa'
    | 'Chăm sóc thú cưng'
    | 'Dạy học'
    | 'Làm vườn'
  >;
  onClick: () => void;
}

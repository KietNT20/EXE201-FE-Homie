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
    | "Dọn dẹp nhà cửa"
    | "Giặt giũ, ủi đồ"
    | "Nấu ăn"
    | "Chăm sóc trẻ em"
    | "Sửa chữa nhà cửa"
    | "Chăm sóc thú cưng"
    | "Dạy học"
    | "Làm vườn"
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
  userAddress: string;
  categories: Array<
    | "Dọn dẹp nhà cửa"
    | "Giặt giũ, ủi đồ"
    | "Nấu ăn"
    | "Chăm sóc trẻ em"
    | "Sửa chữa nhà cửa"
    | "Chăm sóc thú cưng"
    | "Dạy học"
    | "Làm vườn"
  >;
  onClick: () => void;
}

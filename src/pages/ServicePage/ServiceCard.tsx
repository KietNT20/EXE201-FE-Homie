import React from "react";
import { AccountCircle, Star } from "@mui/icons-material";

interface ServiceCardProps {
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

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  job,
  price,
  rating,
  reviewCount,
  avatar,
  time,
  userAddress,
  categories,
  onClick,
}) => {
  const status = "Đang sẵn sàng";
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">
        {avatar ? (
          <img src={avatar} alt={name} className="avatar" />
        ) : (
          <AccountCircle sx={{ fontSize: 60, color: "white" }} />
        )}
        <div className="price-tag">{price}</div>
      </div>
      <div className="card-body">
        <div className="name-container">
          <h4>{name}</h4>
        </div>
        <div className="service-status">
          {status === "Đang sẵn sàng" ? (
            <div className="status-available">
              <span className="status-indicator-available"></span>
              <span className="status-text-available">{status}</span>
            </div>
          ) : (
            <div className="status-unavailable">
              <span className="status-indicator-unavailable"></span>
              <span className="status-text-unavailable">Không sẵn sàng</span>
            </div>
          )}
        </div>
        <p>{job}</p>
        <div className="rating">
          <Star sx={{ color: "gold" }} />
          <span>
            {rating} ({reviewCount})
          </span>
          {/* </div>
        <p>Thời gian: {time}</p>
        <p>Địa chỉ: {userAddress}</p>
        <div className="categories"> */}
          {/* {categories.map((category, index) => (
            <span key={index} className="category-tag">{category}</span>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

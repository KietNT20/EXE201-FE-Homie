import React, { useState } from 'react';
import { Star, AccountCircle, ExpandMore, ExpandLess } from '@mui/icons-material';

interface ServiceCardData {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
}

interface ServiceDetailsProps {
  service: ServiceCardData;
  onClose: () => void;
}

const initialCategories = [
  "Dọn dẹp nhà cửa",
  "Giặt giũ, ủi đồ",
  "Nấu ăn",
  "Chăm sóc trẻ em",
];

const additionalCategories = [
  "Sửa chữa nhà cửa",
  "Chăm sóc thú cưng",
  "Dạy học",
  "Làm vườn",
];

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onClose }) => {
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState(initialCategories);

  const completionRate = "89.65%";
  const status = "Đang sẵn sàng";
  const joinDate = "16/6/2024";
  const serviceDescription = "Thông tin chi tiết về dịch vụ sẽ được hiển thị ở đây.";

  const toggleExpand = () => {
    if (expanded) {
      setCategories(initialCategories);
    } else {
      setCategories([...initialCategories, ...additionalCategories]);
    }
    setExpanded(!expanded);
  };

   return (
    <div className="service-details">
      <div className="service-avatar-section">
        <div className="service-avatar">
          {service.avatar ? (
            <img src={service.avatar} alt={service.name} />
          ) : (
            <AccountCircle sx={{ fontSize: 200, color: "#3498db" }} />
          )}
        </div>
        <div className="service-status">
          <span className="status-indicator"></span>
          {status}
        </div>
        <p>Ngày tham gia: {joinDate}</p>
      </div>
      <div className="service-info">
        <h2>{service.name}</h2>
        <div className="service-stats">
          <span>Đã được thuê {service.reviewCount} giờ</span>
          <span>Tỷ lệ hoàn thành {completionRate}</span>
        </div>
        <div className="service-price">
          {service.price}
          <span className="rating">
            <Star sx={{ color: "gold" }} />
            {service.rating} sao
          </span>
        </div>
        <div className="service-tags">
          <span>{service.job}</span>
          {categories.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
          <span className="more" onClick={toggleExpand}>
            {expanded ? 'Thu gọn' : 'Thêm'} {expanded ? <ExpandLess /> : <ExpandMore />}
          </span>
        </div>
        <h3>Thông tin</h3>
        <div className="service-description">
          <p>{serviceDescription}</p>
        </div>
        <div className="service-actions">
          <button className="hire-button">THUÊ</button>
          <button className="chat-button">CHAT</button>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  );
};
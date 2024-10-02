import React, { useState } from "react";
import {
  Star,
  AccountCircle,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { ServiceCardData } from "types/types";

interface ServiceDetailsProps {
  service: ServiceCardData;
  onClose: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  onClose,
}) => {
  const [expanded, setExpanded] = useState(false);

  const completionRate = "89.65%"; // This is still hardcoded as it's not in the ServiceCardData
  const status = "Đang sẵn sàng"; // This is still hardcoded as it's not in the ServiceCardData

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="service-details">
      <div className="service-avatar-section">
        <div className="service-avatar">
          {service.avatar ? (
            <img src={service.avatar} alt={service.name} />
          ) : (
            <AccountCircle sx={{ fontSize: 200, color: "#3498db" }} />
          )}
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

        <p>Ngày tham gia: {service.joinDate}</p>
      </div>
      <div className="service-info">
        <h2>{service.name}</h2>
        <div className="service-stats">
          <span>Đã được thuê:</span>
          <span style={{ color: "green" }}>{service.reviewCount} giờ</span>
          <span>Tỷ lệ hoàn thành: </span>
          <span style={{ color: "green" }}>{completionRate}</span>
        </div>
        <div className="service-price">
          {service.price}
          <span className="rating">
            <Star sx={{ color: "gold" }} />
            {service.rating} sao
          </span>
        </div>
        <div className="service-tags">
          <span>Công việc: {service.job}</span>

          <span>
            Việc đang làm:{" "}
            {service.categories
              .slice(0, expanded ? undefined : 3)
              .map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
          </span>

          {service.categories.length > 3 && (
            <span className="more" onClick={toggleExpand}>
              {expanded ? "Thu gọn" : "Thêm"}{" "}
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </span>
          )}
        </div>
        <h3>Thông tin</h3>
        <div className="service-description">
          <p>{service.serviceDescription}</p>
        </div>
        <div className="service-additional-info">
          <p>Thời gian: {service.time}</p>
          <p>Địa chỉ: {service.userAddress}</p>
        </div>
        <div className="service-actions">
          <button className="hire-button">THUÊ</button>
          <button className="chat-button">CHAT</button>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </section>
  );
};

import React from 'react';
import { AccountCircle, Star } from '@mui/icons-material';

interface ServiceCardProps {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, job, price, rating, reviewCount, onClick }) => {
  const status = "Đang sẵn sàng";
  return (
    <div className="card" onClick={onClick}>
      <div className="card-header">
        <AccountCircle sx={{ fontSize: 60, color: "white" }} />
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
        </div>
        <p>{job}</p>
        <div className="rating">
          <Star sx={{ color: "gold" }} />
          <span>{rating} ({reviewCount})</span>
        </div>
      </div>
    );
  };

export default ServiceCard;
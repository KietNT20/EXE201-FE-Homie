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

const ServiceCard: React.FC<ServiceCardProps> = ({ name, job, price, rating, reviewCount, onClick }) => (
  <div className="card" onClick={onClick}>
    <div className="card-header">
      <AccountCircle sx={{ fontSize: 60, color: "white" }} />
      <div className="price-tag">{price}</div>
    </div>
    <div className="card-body">
      <div className="name-container">
        <h4>{name}</h4>
        <label className="toggle">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <p>{job}</p>
      <div className="rating">
        <Star sx={{ color: "gold" }} />
        <span>{rating} ({reviewCount})</span>
      </div>
    </div>
  </div>
);

export default ServiceCard;
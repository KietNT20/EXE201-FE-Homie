import React, { useState, useMemo } from 'react';
import { 
  Star, 
  AttachMoney, 
  AccessTime, 
  LocationOn,
  FilterList
} from '@mui/icons-material';
import bannerImage from "../../../public/submarine.jpg";
import CategoryList from './CategoryList';
import ServiceCard from './ServiceCard';
import { ServiceDetails } from './ServiceDetails.tsx';

interface ServiceCardData {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
  time: string;
}

const ServicePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState(50);
  const [timeFilter, setTimeFilter] = useState(6);
  const [userAddress] = useState('123 Main St, City');
  const [newAddress, setNewAddress] = useState('');
  const [additionalAddresses, setAdditionalAddresses] = useState<string[]>([]);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  const cardsPerPage = 12;

  const serviceCards: ServiceCardData[] = useMemo(() => [
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 1,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h"
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 2,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "3h"
    },
  
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 3,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "4h"
    },
  
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "40,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "5h"
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "50,000 đ/h",
      rating: 5,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "6h"
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 1,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "7h"
    },
    {
      name: "John Doe",
      job: "Nấu ăn",
      price: "60,000 đ/h",
      rating: 2,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "8h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 3,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "9h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "40,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "10h"
    },
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "50,000 đ/h",
      rating: 5,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "11h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 1,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "12h"
    },
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 2,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "1h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 3,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "2h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "40,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "3h"
    },
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "50,000 đ/h",
      rating: 5,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "4h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 1,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "5h"
    },
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 2,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "6h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "60,000 đ/h",
      rating: 3,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "7h"
    },
  
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "40,000 đ/h",
      rating: 4,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "8h"
    },
    {
      name: "John Doe",
      job: "Massage Therapist",
      price: "50,000 đ/h",
      rating: 5,
      reviewCount: 45,
      avatar: "https://example.com/john-doe-avatar.jpg",
      time: "9h"
    },
  ], []);

  const filteredCards = useMemo(() => {
    return serviceCards.filter(card => {
      // Convert price string to number for comparison
      const cardPrice = parseInt(card.price.replace(/[^0-9]/g, ''));
      
      // Convert time string to number for comparison
      const cardTime = parseInt(card.time);
  
      return (
        card.rating >= ratingFilter &&
        cardPrice <= priceFilter * 900 && // Assuming priceFilter ranges from 0-100 and max price is 90,000
        cardTime <= timeFilter
      );
    });
  }, [serviceCards, ratingFilter, priceFilter, timeFilter]);

  const totalCards = filteredCards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const currentCards = useMemo(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    return filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  }, [currentPage, filteredCards, cardsPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      setAdditionalAddresses([...additionalAddresses, newAddress.trim()]);
      setNewAddress('');
      setShowAddAddress(false);
    }
  };

  const handleCardClick = (card: ServiceCardData) => {
    setSelectedService(card);
  };

  return (
    <div className="service-page">
      <div className="banner">
        <img src={bannerImage} alt="Service Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Chi Tiết Dịch Vụ</h1>
          <p>Home / Services</p>
        </div>
      </div>

      <div className="main-container">
        {selectedService ? (
          <ServiceDetails service={selectedService} onClose={() => setSelectedService(null)} />
        ) : (
          <>
            <aside className="filter-section">
              <div className="filter-header">
                <FilterList className="filter-icon" />
                <h3>Bộ lọc</h3>
              </div>
              <div className="filter">  
                <span><AttachMoney className="filter-icon" />LỌC THEO GIÁ</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(Number(e.target.value))}
                />
                <span>{priceFilter}   Giá: 0đ - 90.000đ</span>
              </div>
              <div className="filter">
                <div className="filter-icon-container">
                  <span><AccessTime className="filter-icon" />LỌC THEO THỜI GIAN</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="12" 
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(Number(e.target.value))}
                  />
                  <span>{timeFilter}   Thời gian: 1h - 12h</span>
                </div>
              </div>
              <CategoryList />
              <div className="filter">
                <h3><LocationOn className="filter-icon" />Vị trí</h3>
              </div>
              <div>
                <input type="checkbox" id="userAddress" />
                <label htmlFor="userAddress">Địa chỉ của bạn: {userAddress}</label>
              </div>
              {additionalAddresses.map((address, index) => (
                <div key={index}>
                  <input type="checkbox" id={`address-${index}`} />
                  <label htmlFor={`address-${index}`}>{address}</label>
                </div>
              ))}
              {showAddAddress ? (
                <div>
                  <input
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    placeholder="Nhập địa chỉ mới"
                  />
                  <button onClick={handleAddAddress}>Thêm</button>
                </div>
              ) : (
                <button onClick={() => setShowAddAddress(true)}>Thêm địa chỉ</button>
              )}
              <div className="filter">
                <h3><Star className="filter-icon" /> Đánh giá</h3>
                <div className="star-rating" style={{ display: 'flex', alignItems: 'center' }}>
                  {[...Array(5)].map((_, index) => {
                    const star = index + 1;
                    return (
                      <Star
                        key={star}
                        sx={{ 
                          color: star <= ratingFilter ? "gold" : "gray",
                          cursor: 'pointer', 
                          marginRight: '5px'
                        }}
                        onClick={() => setRatingFilter(star)}
                      />
                    );
                  })}
                  <span style={{ marginLeft: '10px' }}>
                    {ratingFilter === 0 ? "All ratings" : `${ratingFilter} sao trở lên`}
                  </span>
                </div>
              </div>
            </aside>

            <div className="service-cards">
              {currentCards.map((card, index) => (
                <ServiceCard
                  key={index}
                  name={card.name}
                  job={card.job}
                  price={card.price}
                  rating={card.rating}
                  reviewCount={card.reviewCount}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {!selectedService && (
        <div className="pagination">
          <button onClick={() => paginate(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
            &lt; Prev
          </button>
          {currentPage > Math.floor(maxVisiblePages / 2) + 1 && (
            <>
              <span onClick={() => paginate(1)}>1</span>
              {currentPage > Math.floor(maxVisiblePages / 2) + 2 && <span className="ellipsis">...</span>}
            </>
          )}
          {getPageNumbers().map((number) => (
            <span
              key={number}
              onClick={() => paginate(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </span>
          ))}
          {currentPage < totalPages - Math.floor(maxVisiblePages / 2) && (
            <>
              {currentPage < totalPages - Math.floor(maxVisiblePages / 2) - 1 && <span className="ellipsis">...</span>}
              <span onClick={() => paginate(totalPages)}>{totalPages}</span>
            </>
          )}
          <button onClick={() => paginate(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages}>
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
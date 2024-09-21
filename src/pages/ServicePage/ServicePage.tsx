import React, { useState, useMemo } from "react";
import {
  FaUserCircle,
  FaStar,
  FaMoneyBillWave,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AiOutlineFilter } from "react-icons/ai";
import bannerImage from "../../assets/submarine.jpg";
import CategoryList from "./CategoryList";

interface ServiceCard {
  name: string;
  job: string;
  price: string;
  rating: number;
  reviewCount: number;
  avatar?: string;
}

const ServicePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState(50);
  const [timeFilter, setTimeFilter] = useState(6);
  const [userAddress] = useState("123 Main St, City");
  const [newAddress, setNewAddress] = useState("");
  const [additionalAddresses, setAdditionalAddresses] = useState<string[]>([]);
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [ratingFilter, setRatingFilter] = useState(5);

  const cardsPerPage = 12;

  const serviceCards: ServiceCard[] = useMemo(
    () => [
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },

      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },

      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
      {
        name: "John Doe",
        job: "Massage Therapist",
        price: "60,000 đ/h",
        rating: 5,
        reviewCount: 45,
        avatar: "https://example.com/john-doe-avatar.jpg",
      },
    ],
    [],
  );

  const totalCards = serviceCards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const currentCards = useMemo(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    return serviceCards.slice(indexOfFirstCard, indexOfLastCard);
  }, [currentPage, serviceCards, cardsPerPage]);

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
      setNewAddress("");
      setShowAddAddress(false);
    }
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
        <aside className="filter-section">
          <div className="filter-header">
            <AiOutlineFilter className="filter-icon" />
            <h3>Bộ lọc</h3>
          </div>
          <div className="filter"></div>
          <div className="filter">
            <span>
              <FaMoneyBillWave className="filter-icon" />
              LỌC THEO GIÁ
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
            />
            <span>{priceFilter} Giá: 0đ - 90.000đ</span>
          </div>
          <div className="filter">
            <div className="filter-icon-container">
              <span>
                <FaClock className="filter-icon" />
                LỌC THEO THỜI GIAN
              </span>
              <input
                type="range"
                min="0"
                max="12"
                value={timeFilter}
                onChange={(e) => setTimeFilter(Number(e.target.value))}
              />
              <span>{timeFilter} Thời gian: 1h - 12h</span>
              <span></span>
            </div>
          </div>
          <CategoryList />
          <div className="filter">
            <h3>
              <FaMapMarkerAlt className="filter-icon" />
              Vị trí
            </h3>
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
            <button onClick={() => setShowAddAddress(true)}>
              Thêm địa chỉ
            </button>
          )}
          <div className="filter">
            <h3>
              <FaStar className="filter-icon" /> Đánh giá
            </h3>
            <div
              className="star-rating"
              style={{ display: "flex", alignItems: "center" }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  color={star <= ratingFilter ? "gold" : "gray"}
                  onClick={() => setRatingFilter(star)}
                  style={{ cursor: "pointer", marginRight: "5px" }}
                />
              ))}
              <span style={{ marginLeft: "10px" }}>
                {ratingFilter} sao trở lên
              </span>
            </div>
          </div>
        </aside>

        <div className="service-cards">
          {currentCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <FaUserCircle size={60} color="white" />
                <div className="price-tag">{card.price}</div>
              </div>
              <div className="card-body">
                <div className="name-container">
                  <h4>{card.name}</h4>
                  <label className="toggle">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
                <p>{card.job}</p>
                <div className="rating">
                  <FaStar color="gold" />
                  <span>
                    {card.rating} ({card.reviewCount})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        <button
          onClick={() => paginate(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt; Prev
        </button>
        {currentPage > Math.floor(maxVisiblePages / 2) + 1 && (
          <>
            <span onClick={() => paginate(1)}>1</span>
            {currentPage > Math.floor(maxVisiblePages / 2) + 2 && (
              <span className="ellipsis">...</span>
            )}
          </>
        )}
        {getPageNumbers().map((number) => (
          <span
            key={number}
            onClick={() => paginate(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </span>
        ))}
        {currentPage < totalPages - Math.floor(maxVisiblePages / 2) && (
          <>
            {currentPage < totalPages - Math.floor(maxVisiblePages / 2) - 1 && (
              <span className="ellipsis">...</span>
            )}
            <span onClick={() => paginate(totalPages)}>{totalPages}</span>
          </>
        )}
        <button
          onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ServicePage;

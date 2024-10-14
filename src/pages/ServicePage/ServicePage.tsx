import bannerImage from '@/assets/img/submarine.jpg';
import {
  AccessTime,
  AttachMoney,
  FilterList,
  LocationOn,
  Star,
} from '@mui/icons-material';
import React, { useEffect, useMemo, useState } from 'react';
import CategoryList from './CategoryList';
import ServiceCard from './ServiceCard';
import { ServiceDetails } from './ServiceDetails';

interface ServiceCardData {
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

const ServicePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState(50);
  const [timeFilter, setTimeFilter] = useState(6);
  const [userAddresses, setUserAddresses] = useState<string[]>([]);
  const [selectedAddresses, setSelectedAddresses] = useState<string[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedService, setSelectedService] =
    useState<ServiceCardData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    ServiceCardData['categories'][number] | null
  >(null);

  const cardsPerPage = 9;

  const serviceCards: ServiceCardData[] = useMemo(
    () => [
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
      {
        name: 'John Doe',
        job: 'Nấu ăn',
        price: '60,000 đ/h',
        rating: 4,
        reviewCount: 45,
        avatar: 'https://example.com/john-doe-avatar.jpg',
        time: '2h',
        userAddress: '123 Main St, City',
        categories: ['Nấu ăn'],
        serviceDescription:
          'Chuyên nấu ăn tại gia, phục vụ các bữa ăn gia đình hoặc tiệc nhỏ.',
        joinDate: '2022-01-15',
      },
      {
        name: 'Jane Smith',
        job: 'Dọn dẹp nhà cửa',
        price: '55,000 đ/h',
        rating: 5,
        reviewCount: 60,
        avatar: 'https://example.com/jane-smith-avatar.jpg',
        time: '3h',
        userAddress: '456 Elm St, Town',
        categories: ['Dọn dẹp nhà cửa'],
        serviceDescription:
          'Dọn dẹp nhà cửa chuyên nghiệp, tận tâm và sạch sẽ.',
        joinDate: '2021-12-10',
      },
      {
        name: 'Mike Johnson',
        job: 'Sửa chữa nhà cửa',
        price: '75,000 đ/h',
        rating: 4,
        reviewCount: 30,
        avatar: 'https://example.com/mike-johnson-avatar.jpg',
        time: '4h',
        userAddress: '789 Oak St, Village',
        categories: ['Sửa chữa nhà cửa'],
        serviceDescription:
          'Chuyên sửa chữa nhà cửa, bảo trì hệ thống điện nước.',
        joinDate: '2020-11-05',
      },
    ],
    [],
  );

  useEffect(() => {
    const uniqueAddresses = Array.from(
      new Set(serviceCards.map((card) => card.userAddress)),
    );
    setUserAddresses(uniqueAddresses);
  }, [serviceCards]);

  const filteredCards = useMemo(() => {
    return serviceCards.filter((card) => {
      const cardPrice = parseInt(card.price.replace(/[^0-9]/g, ''));
      const cardTime = parseInt(card.time);
      const addressMatch =
        selectedAddresses.length === 0 ||
        selectedAddresses.includes(card.userAddress);
      const categoryMatch = selectedCategory
        ? card.categories.includes(selectedCategory)
        : true;

      return (
        card.rating >= ratingFilter &&
        cardPrice <= priceFilter * 900 &&
        cardTime <= timeFilter &&
        addressMatch &&
        categoryMatch
      );
    });
  }, [
    serviceCards,
    ratingFilter,
    priceFilter,
    timeFilter,
    selectedAddresses,
    selectedCategory,
  ]);

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
          <ServiceDetails
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        ) : (
          <>
            <aside className="filter-section">
              <div className="filter-header">
                <FilterList className="filter-icon" />
                <h3>Bộ lọc</h3>
              </div>
              <div className="filter">
                <span>
                  <AttachMoney className="filter-icon" />
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
                    <AccessTime className="filter-icon" />
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
                </div>
              </div>
              <CategoryList
                onCategorySelect={(category) =>
                  setSelectedCategory(
                    category as ServiceCardData['categories'][number] | null,
                  )
                }
              />

              <div className="filter">
                <h3>
                  <LocationOn className="filter-icon" />
                  Vị trí
                </h3>
              </div>
              {selectedAddresses.map((address, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`address-${index}`}
                    checked={true}
                    onChange={() => {
                      setSelectedAddresses(
                        selectedAddresses.filter((a) => a !== address),
                      );
                    }}
                  />
                  <label htmlFor={`address-${index}`}>{address}</label>
                </div>
              ))}
              <div>
                <select
                  className="address-select"
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                >
                  <option value="">Chọn địa chỉ</option>
                  {userAddresses
                    .filter((address) => !selectedAddresses.includes(address))
                    .map((address, index) => (
                      <option key={index} value={address}>
                        {address}
                      </option>
                    ))}
                </select>
                <button
                  onClick={() => {
                    if (
                      selectedAddress &&
                      !selectedAddresses.includes(selectedAddress)
                    ) {
                      setSelectedAddresses([
                        ...selectedAddresses,
                        selectedAddress,
                      ]);
                      setSelectedAddress('');
                    }
                  }}
                >
                  Thêm
                </button>
              </div>

              <div className="filter">
                <h3>
                  <Star className="filter-icon" /> Đánh giá
                </h3>
                <div
                  className="star-rating"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {[...Array(5)].map((_, index) => {
                    const star = index + 1;
                    return (
                      <Star
                        key={star}
                        sx={{
                          color: star <= ratingFilter ? 'gold' : 'gray',
                          cursor: 'pointer',
                          marginRight: '5px',
                        }}
                        onClick={() => setRatingFilter(star)}
                      />
                    );
                  })}
                  <span style={{ marginLeft: '10px' }}>
                    {ratingFilter === 0
                      ? 'Tất cả sao'
                      : `${ratingFilter} sao trở lên`}
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
                  avatar={card.avatar}
                  time={card.time}
                  userAddress={card.userAddress}
                  categories={card.categories}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {!selectedService && (
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
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </span>
          ))}
          {currentPage < totalPages - Math.floor(maxVisiblePages / 2) && (
            <>
              {currentPage <
                totalPages - Math.floor(maxVisiblePages / 2) - 1 && (
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
      )}
    </div>
  );
};

export default ServicePage;

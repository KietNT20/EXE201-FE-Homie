import bannerImage from "@/assets/img/submarine.jpg";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      image: "/images/cleaning-service.jpg",
      date: "Tháng 12, 2023",
      title: "Ưu đãi 600K khi đặt Giúp Việc Định Kỳ",
      link: "#",
      content:
        "Chương trình ưu đãi đặc biệt dành cho khách hàng khi đặt dịch vụ giúp việc định kỳ tại Homie. Với mỗi đơn đặt hàng, bạn sẽ nhận ngay ưu đãi lên đến 600K. Đây là cơ hội tuyệt vời để bạn trải nghiệm dịch vụ chuyên nghiệp, tận tâm và đáng tin cậy từ đội ngũ nhân viên của chúng tôi. Không chỉ giúp bạn tiết kiệm chi phí, chương trình còn mang lại sự tiện lợi và thoải mái cho cuộc sống hàng ngày của bạn. Hãy nhanh tay đặt dịch vụ để không bỏ lỡ cơ hội này!",
    },
    {
      id: 2,
      image: "/images/cleaning-supplies.jpg",
      date: "Tháng 12, 2023",
      title: "Thông 6 lên Deal – Sẵn sàng SALE lớn",
      link: "#",
      content:
        "Chương trình khuyến mãi lớn nhất trong năm với nhiều ưu đãi hấp dẫn. Đừng bỏ lỡ cơ hội sở hữu những sản phẩm chất lượng với giá cực kỳ ưu đãi. Hãy nhanh tay đặt hàng để nhận ngay những ưu đãi đặc biệt từ chúng tôi.",
    },
    {
      id: 3,
      image: "/images/momo-logo.png",
      date: "Tháng 12, 2023",
      title: "Bùng nổ ưu đãi tháng 6: MoMo x Homie",
      link: "#",
      content:
        "Hợp tác đặc biệt giữa MoMo và Homie mang đến cho bạn những ưu đãi không thể bỏ qua. Thanh toán qua MoMo để nhận ngay những phần quà hấp dẫn và giảm giá đặc biệt. Hãy trải nghiệm ngay dịch vụ của chúng tôi với những ưu đãi tuyệt vời này.",
    },
    {
      id: 4,
      image: "/images/vnpay-logo.png",
      date: "Tháng 12, 2023",
      title: "Bùng nổ ưu đãi tháng 6: VNPay x Homie",
      link: "#",
      content:
        "VNPay và Homie cùng nhau mang đến cho bạn những ưu đãi đặc biệt trong tháng 6. Thanh toán qua VNPay để nhận ngay những phần quà hấp dẫn và giảm giá đặc biệt. Đừng bỏ lỡ cơ hội này để trải nghiệm dịch vụ của chúng tôi với giá ưu đãi.",
    },
    {
      id: 5,
      image: "/images/laundry.jpg",
      date: "Tháng 12, 2023",
      title: "Ưu đãi 600K khi đặt Giúp Việc Định Kỳ",
      link: "#",
      content:
        "Chương trình ưu đãi đặc biệt dành cho khách hàng khi đặt dịch vụ giúp việc định kỳ tại Homie. Với mỗi đơn đặt hàng, bạn sẽ nhận ngay ưu đãi lên đến 600K. Đây là cơ hội tuyệt vời để bạn trải nghiệm dịch vụ chuyên nghiệp, tận tâm và đáng tin cậy từ đội ngũ nhân viên của chúng tôi. Không chỉ giúp bạn tiết kiệm chi phí, chương trình còn mang lại sự tiện lợi và thoải mái cho cuộc sống hàng ngày của bạn. Hãy nhanh tay đặt dịch vụ để không bỏ lỡ cơ hội này!",
    },
    {
      id: 6,
      image: "/images/washing-machine.jpg",
      date: "Tháng 12, 2023",
      title: "Ưu đãi 600K khi đặt Giúp Việc Định Kỳ",
      link: "#",
      content:
        "Chương trình ưu đãi đặc biệt dành cho khách hàng khi đặt dịch vụ giúp việc định kỳ tại Homie. Với mỗi đơn đặt hàng, bạn sẽ nhận ngay ưu đãi lên đến 600K. Đây là cơ hội tuyệt vời để bạn trải nghiệm dịch vụ chuyên nghiệp, tận tâm và đáng tin cậy từ đội ngũ nhân viên của chúng tôi. Không chỉ giúp bạn tiết kiệm chi phí, chương trình còn mang lại sự tiện lợi và thoải mái cho cuộc sống hàng ngày của bạn. Hãy nhanh tay đặt dịch vụ để không bỏ lỡ cơ hội này!",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  interface NewsItem {
    id: number;
    image: string;
    date: string;
    title: string;
    link: string;
    content: string;
  }

  const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
  const maxVisiblePages = 5;

  useEffect(() => {
    setTotalPages(Math.ceil(newsItems.length / itemsPerPage));
  }, [newsItems, itemsPerPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="news-page">
      <div className="banner">
        <img src={bannerImage} alt="Service Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Tin Tức Mới</h1>
          <p>Home / News</p>
        </div>
      </div>

      <main>
        <div className="news-grid">
          {currentItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.image} alt={item.title} />
              <div className="date">{item.date}</div>
              <h3>{item.title}</h3>
              <button onClick={() => setSelectedItem(item)}>Đọc Thêm</button>
            </div>
          ))}
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

        {selectedItem && (
          <div className="modal">
            <div className="modal-content">
              <button
                className="close-button"
                onClick={() => setSelectedItem(null)}
              >
                ×
              </button>
              <h2>{selectedItem.title}</h2>
              <img src={selectedItem.image} alt={selectedItem.title} />
              <p className="date">{selectedItem.date}</p>
              <p className="content">{selectedItem.content}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default NewsPage;

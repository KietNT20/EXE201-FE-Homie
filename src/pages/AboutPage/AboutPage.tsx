import React from "react";
import homieLogoSrc from "../../assets/logo-homie.png";
import bannerImageSrc from "../../assets/submarine.jpg";

const AboutPage: React.FC = () => {
  return (
    <div className="home-page">
      <header
        className="banner"
        style={{ backgroundImage: `url(${bannerImageSrc})` }}
      >
        <h1>Về Homie</h1>
        <p>Home / About</p>
      </header>

      <main className="main-content">
        <div className="logo-section">
          <img src={homieLogoSrc} alt="Homie Logo" className="logo" />

          <button className="cta-button">Nhận Voucher ngay</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card users">
            <h3>12000+</h3>
            <p>Người sử dụng mỗi ngày</p>
            <div className="graph"></div>
          </div>
          <div className="stat-card savings">
            <div className="icon"></div>
            <h3>Tiết Kiệm</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="stat-card rating">
            <div className="circle-progress">92%</div>
            <h3>Đánh Giá</h3>
            <p>Đánh giá tốt từ người dùng</p>
          </div>
          <div className="stat-card tasks">
            <h3>Công việc mới</h3>
            <ul>
              <li>Dọn dẹp nhà cửa</li>
              <li>Giặt giũ, ủi đồ</li>
              <li>Nấu ăn</li>
              <li>Chăm sóc trẻ em</li>
            </ul>
          </div>
        </div>
      </main>

      <section className="testimonials">
        <h2>Khách hàng của chúng tôi nói gì ?</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <div className="avatar"></div>
            <h3>Eugene Freeman</h3>
            <p className="job">Designer</p>
            <p className="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              velit ipsum. Proin varius suscipit mi.
            </p>
          </div>
          <div className="testimonial">
            <div className="avatar"></div>
            <h3>Eugene Freeman</h3>
            <p className="job">Lawyer</p>
            <p className="quote">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
              velit ipsum. Proin varius suscipit mi.
            </p>
          </div>
        </div>
        <div className="chat-icon"></div>
      </section>
    </div>
  );
};

export default AboutPage;

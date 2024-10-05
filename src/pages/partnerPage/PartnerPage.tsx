import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const PartnerPage =() => {
  return (
    <section className="Partner">
      <div className="partner-container">
        <div className="partner-image">
          <div className="partner-overlay">
            <h1>Cam Kết Của Homie</h1>
            <p className="breadcrumb">Trang chủ / Trở thành đối tác</p>
          </div>
        </div>
      </div>
      <div className="container1">
        {/* Left section (Form) */}
        <div className="form-section">
          <form className="form">
            <div className="form-group">
              <label htmlFor="name">Họ và Tên</label>
              <input type="text" id="name" placeholder="Nhập tên" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Nhập Email của bạn" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Số Điện Thoại</label>
              <input type="text" id="phone" placeholder="Nhập Số Điện Thoại" />
            </div>

            <div className="form-group">
              <label htmlFor="job">Công Việc Đăng Ký</label>
              <input
                type="text"
                id="job"
                placeholder="Nhập Công Việc Bạn Muốn Đăng Ký"
              />
            </div>

            <button type="submit" className="submit-btn">
              Gửi Tin Nhắn Của Bạn
            </button>
          </form>
        </div>

        {/* Right section (Contact Details) */}
        <div className="contact-section">
          <div className="contact-item">
            <span className="icon">📧</span>
            <p>Email: support@homie.com</p>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <p>1900 0933</p>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <p>Địa chỉ</p>
          </div>
          <div className="contact-item">
            <span className="icon">🔗</span>
            <p>Social Profiles</p>
            <div className="social-icons"></div>
          </div>
          <div className="icon-partner">
            <FacebookIcon className="icon1" />
            <TwitterIcon className="icon1" />
            <LinkedInIcon className="icon1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnerPage;

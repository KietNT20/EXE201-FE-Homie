import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <figure className="footer__content-logo">
            <img
              src="/api/placeholder/150/50"
              alt="Homie logo"
              className="footer__img"
            />
          </figure>
          <p className="footer__content-company">Công Ty TNHH Homie</p>
          <p className="footer__content-email">email: support@homie.com</p>
          <p className="footer__content-hotline">Hotline: 1900 0933</p>
        </div>
        <div className="footer__company">
          <h3 className="footer__company-title">Công ty</h3>
          <ul className="footer__company-list">
            <li>Giới thiệu</li>
            <li>Homie</li>
            <li>
              Tuyển dụng{" "}
              <span className="bg-white text-navy-900 text-xs px-1 rounded">
                Mới
              </span>
            </li>
            <li>Chi nhánh</li>
            <li>Kinh nghiệm</li>
            <li>Khuyến mãi</li>
          </ul>
        </div>
        <div className="footer__socials">
          {" "}
          <h3 className="footer__socials-title">Xã hội</h3>
          <ul className="footer__socials-list">
            <li>Tiktok</li>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__services">
          {" "}
          <h3 className="footer__services-title">Dịch vụ</h3>
          <ul className="footer__services-list">
            <li>Giúp việc nhà theo giờ</li>
            <li>Chăm sóc người bệnh</li>
            <li>Giặt giũ</li>
            <li>Nấu ăn gia đình</li>
            <li>Chăm sóc trẻ em</li>
            <li>Chăm sóc thú cưng</li>
          </ul>
        </div>
        <div className="footer__linksocials">
          <SocialIcon url="https://www.instagram.com/homie.vn" />
          <SocialIcon url="https://www.tiktok.com/homie.vn" />
          <SocialIcon url="https://www.youtube.com/homie.vn" />
          <SocialIcon url="https://www.facebook.com/homie.vn" />
        </div>
        <div className="footer__copyright">
          <p>© 2024 Homie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { logoFooter } from '@/constant/image';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="footer pt-3 pb-2 sm:pt-6 sm:pb-5">
      <div className="container">
        <div className="footer__top grid gap-4 mb-2 md:grid-cols-2 md:gap-6 md:mb-4 lg:flex lg:justify-around h-full">
          <div className="footer__top-content">
            <figure className="footer__thumb rounded-xl h-8 w-10 md:h-12 md:w-20 mb-6">
              <img
                src={logoFooter}
                alt="Homie logo"
                className="footer__thumb-img"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <div className="footer__info">
              <p className="footer__info-company mb-3">Công Ty TNHH Homie</p>
              <p className="footer__info-email mb-3">
                email: thucnvse140242@fpt.edu.vn
              </p>
              <p className="footer__info-hotline">Hotline: 0386 275 334</p>
            </div>
          </div>
          <div className="footer__top-company">
            <h3 className="footer__title">Công ty</h3>
            <ul className="footer__list">
              <li>
                <a href="#">Giới thiệu Homie</a>
              </li>
              <li>
                <a href="#">Tuyển dụng</a>
                <span className="footer-news">Mới</span>
              </li>
              <li>
                <a href="#">Chi nhánh</a>
              </li>
              <li>
                <a href="#">Kinh nghiệm</a>
              </li>
              <li>
                <a href="#">Khuyến mãi</a>
              </li>
            </ul>
          </div>
          <div className="footer__top-socials">
            {' '}
            <h3 className="footer__title">Xã hội</h3>
            <ul className="footer__list">
              <li>
                <a href="#" target="_blank">
                  Tiktok
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__top-services">
            {' '}
            <h3 className="footer__title">Dịch vụ</h3>
            <ul className="footer__list">
              <li>
                <a href="#">Giúp việc nhà theo giờ</a>
              </li>
              <li>
                <a href="#">Chăm sóc người bệnh</a>
              </li>
              <li>
                <a href="#">Giặt giũ</a>
              </li>
              <li>
                <a href="#">Nấu ăn gia đình</a>
              </li>
              <li>
                <a href="#">Chăm sóc trẻ em</a>
              </li>
              <li>
                <a href="#">Chăm sóc thú cưng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom md:flex md:items-center md:justify-center md:flex-col">
          <div className="footer__bottom-linksocials my-4 flex sm:flex-row md:items-center gap-3">
            <SocialIcon url="https://www.instagram.com/homie.vn" />
            <SocialIcon url="https://www.tiktok.com/homie.vn" />
            <SocialIcon url="https://www.youtube.com/homie.vn" />
            <SocialIcon url="https://www.facebook.com/homie.vn" />
          </div>
          <p className="footer__bottom-copyright">
            © 2024 Homie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

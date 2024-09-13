import { PATH } from "@/constant/path";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__menu">
          <Link to={PATH.HOME} className="header__menu-logo">
            <img
              src="/logo-homie.png"
              alt="Homie Logo"
              className="header__img"
            />
          </Link>
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link to={PATH.HOME} className="header__link --active-menu">
                Trang chủ
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.ABOUT} className="header__link">
                Về Homie
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.SERVICE} className="header__link">
                Dịch vụ
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.NEWS} className="header__link">
                Tin tức
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.COMMITMENT} className="header__link">
                Cam kết
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.PAYMENT} className="header__link">
                Thanh toán
              </Link>
            </li>
            <li className="header__menu-item">
              <Link to={PATH.PARTNER} className="header__link">
                Trở thành đối tác
              </Link>
            </li>
          </ul>
          <div className="header__menu-actions">
            <button className="header__btn">
              <span>Đăng nhập</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

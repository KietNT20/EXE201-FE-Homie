import logo from "@/assets/logo-homie.png";
import { PATH } from "@/constant/path";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <nav className="header__menu">
          <Link to={PATH.HOME} className="header__menu-logo">
            <img src={logo} alt="Homie Logo" className="header__img" />
          </Link>
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <NavLink to={PATH.HOME} className="header__link">
                Trang chủ
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.ABOUT} className="header__link">
                Về Homie
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.SERVICE} className="header__link">
                Dịch vụ
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.NEWS} className="header__link">
                Tin tức
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.COMMITMENT} className="header__link">
                Cam kết
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.PAYMENT} className="header__link">
                Thanh toán
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to={PATH.PARTNER} className="header__link">
                Trở thành đối tác
              </NavLink>
            </li>
          </ul>
          <div className="header__menu-actions">
            <NavLink to={PATH.LOGIN} className="header__btn">
              Dang nhap
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

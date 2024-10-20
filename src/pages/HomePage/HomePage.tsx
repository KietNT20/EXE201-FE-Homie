import homieLogoSrc from "../../assets/logo-homie.png";
import SearchIcon from '@mui/icons-material/Search';
import ZaloIcon from '@mui/icons-material/Chat';
import { Button } from '@mui/material';
import bannerImageSrc from "../../assets/submarine.jpg";

const HomieComponent = () => {
  const services = [
    { label: 'Dọn dẹp nhà cửa', icon: '🧹' },
    { label: 'Giặt giũ, ủi đồ', icon: '🧺' },
    { label: 'Nấu ăn', icon: '🍳' },
    { label: 'Chăm sóc người bệnh', icon: '❤️' },
    { label: 'Chăm sóc thú cưng', icon: '🐾' },
    { label: 'Chăm sóc trẻ em', icon: '👶' }
  ];

  return (
    <div className="homie-component">

      <main>
        <section className="hero">
            <div className="hero-content">
            <img src={homieLogoSrc} alt="Homie logo" className="hero-logo" />
            <h1>Homie</h1>
            <p>Your Home's Guardian</p>
            <div className="search-container">
              <input type="text" placeholder="Tìm kiếm Phổ Biến: Dọn nhà, Giặt Giũ, Nấu Ăn" />
              <Button variant="contained" className="search-button">
              <SearchIcon /> Tìm kiếm
              </Button>
            </div>
            </div>
        </section>

        <section className="services">
          <h2>Dịch Vụ Của Homie</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Button key={index} variant="outlined" className="service-button">
                <span className="service-icon">{service.icon}</span>
                {service.label}
              </Button>
            ))}
          </div>
            <div className="service-illustration">
            <img src={bannerImageSrc} alt="Service workers" />
            </div>
        </section>
      </main>



      <Button className="zalo-button">
        <ZaloIcon />
      </Button>
    </div>
  );
};

export default HomieComponent;
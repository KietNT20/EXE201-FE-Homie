import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PartnerPage = () => {
  const navigate = useNavigate();

  const onRegister = () => {
    // Navigate to ProfileEmployee on registration
    navigate('/profile');
  };
  return (
    <section className="Partner">
      <div className="partner-container">
        <div className="partner-image">
          <div className="partner-overlay">
            <h1>Trở thành đối tác Của Homie</h1>
            <p className="breadcrumb">Trang chủ / Trở thành đối tác</p>
          </div>
        </div>
      </div>
      <div className="container1">
        {/* Left section (Form) */}
        <div className="form-section">
          <form className="form">
            <div className="input-group">
              <div className="text-1">
                <h3>Đăng kí trở thành đối tác</h3>
                <TextField
                  className={'inputNamePay'}
                  label="Họ và tên"
                  fullWidth
                  variant="outlined"
                  placeholder="Nhập tên"
                />
              </div>
            </div>

            <div className="input-group">
              <TextField
                label="Email"
                className={'inputNamePay'}
                fullWidth
                variant="outlined"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div className="input-group">
              <TextField
                label="Số điện thoại"
                className={'inputNamePay'}
                fullWidth
                variant="outlined"
                placeholder="Nhập số điện thoại"
              />
            </div>

            <div className="input-group">
              <TextField
                label="Dịch vụ"
                className={'inputNamePay'}
                fullWidth
                variant="outlined"
                placeholder="Dịch vụ bạn muốn"
              />
            </div>
          </form>
          <Button
            variant="contained"
            color="info"
            className="payment-button"
            onClick={onRegister}
          >
            Đăng kí
          </Button>
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
};

export default PartnerPage;

import logoMB from '@/assets/img/mbbank.png';
import logo from '@/assets/img/momo.png';
import logoCash from '@/assets/img/money-cash-wealth-payment-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg';
import Button from '@mui/material/Button'; // MUI Button component for better styling
import TextField from '@mui/material/TextField';

const PaymentPage = () => {
  return (
    <section className="paymentPage">
      <div className="payment-container">
        {/* Payment Info Section */}
        <div className="payment-info">
          <h2>Thông tin thanh toán</h2>
          <div className="input-group">
            <h3>Họ và tên</h3>
            <div className="text-1">
              <TextField
                className={'inputNamePay'}
                fullWidth
                variant="outlined"
                placeholder="Nhập tên"
              />
            </div>
          </div>

          <div className="input-group">
            <h3>Email</h3>
            <TextField
              className={'inputNamePay'}
              fullWidth
              variant="outlined"
              placeholder="Nhập email của bạn"
            />
          </div>

          <div className="input-group">
            <h3>Số điện thoại</h3>
            <TextField
              className={'inputNamePay'}
              fullWidth
              variant="outlined"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="input-group">
            <h3>Dịch vụ</h3>
            <TextField
              className={'inputNamePay'}
              fullWidth
              variant="outlined"
              placeholder="Dịch vụ bạn muốn"
            />
          </div>

          <div className="payment-button1">
            <Button
              variant="contained"
              color="primary"
              className="payment-button"
            >
              Thanh Toán
            </Button>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="payment-methods">
          <h3>Phương thức thanh toán</h3>
          <div className="logos">
            <img src={logo} alt="logo" />
            <img src={logoMB} alt="logoMB" />
            <img src={logoCash} alt="logoCash" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;

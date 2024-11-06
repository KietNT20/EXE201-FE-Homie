import React from 'react';
import { Box, Typography, Divider, TextField } from '@mui/material';
import imgQR from '@/assets/img/QR.jpg';

const PaymentPage: React.FC = () => {
  return (
    <Box className="recharge-page">
      <Box className="recharge-container">
        <Box className="account-info">
          <Typography variant="h5" fontWeight="bold" className="title">
            Tài khoản tiếp nhận
          </Typography>
          <Typography className="info">
            <strong>CHỦ TÀI KHOẢN:</strong> NGUYỄN VIỆT THỨC
          </Typography>
          <Typography className="info">
            <strong>SỐ TK:</strong> <span className="highlight">386275234</span>
          </Typography>
          <Typography className="info">
            <strong>NGÂN HÀNG:</strong> VIB
          </Typography>
          <Typography className="info">
            <strong>NỘI DUNG CHUYỂN KHOẢN:</strong>{' '}
            <span className="highlight">Điền Email của bạn</span>
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography className="instructions">
            Vui lòng chuyển đúng nội dung chuyển tiền để tránh trường hợp không
            nhận được nếu chuyển sai nội dung vui lòng liên hệ với{' '}
            <strong>NGUYỄN VIỆT THỨC (0386275234)</strong>
          </Typography>
          <Typography className="instructions">
            Sau khi chuyển tiền thành công, vui lòng chờ ít nhất 5-10 phút để hệ
            thống xử lý.
          </Typography>
        </Box>

        <Box className="qr-code-section">
          <Box className="qr-image">
            <img src={imgQR} alt="QR Code" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPage;

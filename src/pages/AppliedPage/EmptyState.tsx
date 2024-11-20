import { PATH } from '@/constant/path';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const EmptyState = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 2,
        textAlign: 'center',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" color="text.secondary">
        Chưa có đơn ứng tuyển nào
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Các đơn ứng tuyển của bạn sẽ xuất hiện ở đây
      </Typography>
      <Button className="mt-6" variant="text">
        <Link to={PATH.SERVICE}>Đi tìm việc ngay</Link>
      </Button>
    </Box>
  );
};

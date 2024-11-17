import { Box, Typography } from '@mui/material';

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
    </Box>
  );
};

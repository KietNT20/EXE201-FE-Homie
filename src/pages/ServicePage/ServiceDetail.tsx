import { PATH } from '@/constant/path';
import { useGetCategoryById } from '@/hooks/useManageCategory';
import { useGetUserById } from '@/hooks/useManageUser';
import { useGetJobPostById } from '@/hooks/useMangeJobPost';
import { JobPostStatus } from '@/types/types';
import { formatDate, formatPrice } from '@/util/format';
import {
  ArrowBack,
  AttachMoney,
  CalendarToday,
  Category as CategoryIcon,
  Email,
  Layers,
  LocationOn,
  Phone,
  SquareFoot,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid2,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: jobPost,
    isLoading: isLoadingJob,
    error: jobError,
  } = useGetJobPostById(id);

  const { data: categoryDetail } = useGetCategoryById(
    jobPost?.data?.categoryJobPost[0]?.categoriesId,
  );

  const { data: userInfo } = useGetUserById(jobPost?.data?.employerId);

  const getStatusConfig = (status: JobPostStatus) => {
    switch (status) {
      case 'Done':
        return {
          color: 'success' as 'success',
          icon: '✓',
          label: 'Hoàn thành',
        };
      case 'Cancelled':
        return {
          color: 'error' as 'error',
          icon: '✕',
          label: 'Đã hủy',
        };
      default:
        return {
          color: 'default' as 'default',
          icon: '',
          label: 'Đang chờ',
        };
    }
  };

  if (isLoadingJob) {
    return (
      <Box className="h-screen flex items-center justify-center">
        <CircularProgress />
      </Box>
    );
  }

  if (jobError || !jobPost?.data) {
    return (
      <Container maxWidth="lg" className="py-8">
        <Paper elevation={0} className="p-6 text-center">
          <Typography variant="h6" color="error" className="mb-4">
            Không thể tải thông tin dịch vụ
          </Typography>
          <IconButton onClick={() => navigate(PATH.SERVICE)} color="primary">
            <ArrowBack /> <span className="ml-2">Quay lại danh sách</span>
          </IconButton>
        </Paper>
      </Container>
    );
  }

  const statusConfig = getStatusConfig(jobPost.data.status);

  return (
    <Container maxWidth="lg" className="py-8">
      {/* Navigation */}
      <Box className="flex items-center mb-6">
        <IconButton
          onClick={() => navigate(PATH.SERVICE)}
          className="mr-4"
          color="primary"
        >
          <ArrowBack />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          Dịch vụ / Chi tiết
        </Typography>
      </Box>

      {/* Header Section */}
      <Paper elevation={0} className="p-6 mb-6">
        <Box className="flex justify-between items-start mb-4">
          <Typography variant="h4" component="h1" className="font-bold">
            {jobPost.data.title}
          </Typography>
          <Chip
            label={statusConfig.label}
            color={statusConfig.color}
            icon={<span className="text-sm">{statusConfig.icon}</span>}
            className="ml-2 font-medium"
            sx={{
              '& .MuiChip-icon': {
                marginLeft: '8px',
                order: -1,
              },
            }}
          />
        </Box>
        <Typography variant="body1" color="text.secondary" className="mb-4">
          {jobPost.data.description}
        </Typography>
        <Chip
          label={formatPrice(jobPost.data.price)}
          color="primary"
          className="font-medium"
          icon={<AttachMoney />}
        />
      </Paper>

      <Grid2 container spacing={4}>
        {/* Left Column - Property Details */}
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Paper elevation={0} className="p-6">
            <Typography variant="h6" className="font-bold mb-4">
              Thông tin chi tiết
            </Typography>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" className="h-full">
                  <CardContent>
                    <Stack spacing={3}>
                      <Box className="flex items-center gap-2">
                        <LocationOn color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Địa điểm
                          </Typography>
                          <Typography color="text.secondary">
                            {jobPost.data.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-2">
                        <SquareFoot color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Diện tích
                          </Typography>
                          <Typography color="text.secondary">
                            {jobPost.data.squareMeters} m²
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-2">
                        <Layers color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Số tầng
                          </Typography>
                          <Typography color="text.secondary">
                            {jobPost.data.numberOfFloors} tầng
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid2>

              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" className="h-full">
                  <CardContent>
                    <Stack spacing={3}>
                      <Box className="flex items-center gap-2">
                        <CalendarToday color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Thời gian thực hiện
                          </Typography>
                          <Typography color="text.secondary">
                            {formatDate(jobPost.data.startDate)} -{' '}
                            {formatDate(jobPost.data.endDate)}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-2">
                        <CategoryIcon color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Dịch vụ
                          </Typography>
                          {categoryDetail?.data && (
                            <Tooltip
                              title={
                                categoryDetail.data.price
                                  ? `Giá: ${formatPrice(categoryDetail.data.price)}`
                                  : ''
                              }
                            >
                              <Chip
                                label={
                                  categoryDetail.data.categoryName ||
                                  'Chưa xác định'
                                }
                                size="small"
                                color="primary"
                                variant="outlined"
                                className="mt-1"
                              />
                            </Tooltip>
                          )}
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-2">
                        <AttachMoney color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Tổng chi phí
                          </Typography>
                          <Typography color="primary" className="font-medium">
                            {formatPrice(jobPost.data.price)}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>

        {/* Right Column - User Info */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} className="p-6">
            <Typography variant="h6" className="font-bold mb-4">
              Thông tin người đăng
            </Typography>
            {userInfo?.data ? (
              <Stack spacing={3}>
                <Box className="flex items-center gap-3">
                  <Avatar
                    src={userInfo.data.avatarUrl}
                    alt={userInfo.data.name}
                    className="w-16 h-16"
                  />
                  <Box>
                    <Typography variant="h6" className="font-medium">
                      {userInfo.data.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ngày sinh: {formatDate(userInfo.data.dateOfBirth)}
                    </Typography>
                  </Box>
                </Box>

                <Divider />

                <Box className="flex items-center gap-2">
                  <Email color="action" />
                  <Typography>{userInfo.data.email}</Typography>
                </Box>

                <Box className="flex items-center gap-2">
                  <Phone color="action" />
                  <Typography>{userInfo.data.phone}</Typography>
                </Box>
              </Stack>
            ) : (
              <Typography color="text.secondary">
                Đang tải thông tin người dùng...
              </Typography>
            )}
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ServiceDetail;

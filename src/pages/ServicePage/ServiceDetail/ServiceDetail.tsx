import NavigationHeader from '@/components/NavigationHeader/NavigationHeader';
import { breadcrumbItemsService } from '@/constant/breadcrumbItems';
import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { useCreateApplication } from '@/hooks/useManageApplication';
import { useGetCategoryById } from '@/hooks/useManageCategory';
import { useGetUserById } from '@/hooks/useManageUser';
import { useGetJobPostById } from '@/hooks/useMangeJobPost';
import { formatDate, formatPrice } from '@/util/format';
import { getStatusConfig } from '@/util/getStatusConfig';
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
  Work,
} from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Box,
  Button,
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
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApplicationModal from './ApplicationModal';

const ServiceDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { userProfile } = useAppSelector((state) => state.profile);

  const { mutate: createApplication } = useCreateApplication();

  const {
    data: jobPost,
    isLoading: isLoadingJob,
    error: jobError,
  } = useGetJobPostById(id);

  const { data: categoryDetail } = useGetCategoryById(
    jobPost?.data?.categoryJobPost[0]?.categoriesId,
  );

  const { data: userInfo } = useGetUserById(jobPost?.data?.employerId);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setMessage('');
  };

  const handleSubmitApplication = () => {
    if (!id || !userProfile?.id || !jobPost?.data?.jobId) return;
    setIsSubmitting(true);
    createApplication(
      {
        jobId: jobPost.data.jobId,
        workerId: userProfile.id,
        message: message.trim() || 'Không có tin nhắn',
      },
      {
        onSettled: () => {
          setIsSubmitting(false);
          handleCloseModal();
        },
      },
    );
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
          <Alert severity="error" className="mb-4">
            Không thể tải thông tin dịch vụ
          </Alert>
          <IconButton onClick={() => navigate(PATH.SERVICE)} color="primary">
            <ArrowBack /> <span className="ml-2">Quay lại danh sách</span>
          </IconButton>
        </Paper>
      </Container>
    );
  }

  const statusConfig = getStatusConfig(jobPost.data.status);
  const canApply =
    jobPost.data.status !== 'Done' && jobPost.data.status !== 'Cancel';

  return (
    <Container maxWidth="lg" className="pb-8 pt-5">
      {/* Navigation */}
      <NavigationHeader
        items={breadcrumbItemsService}
        backPath={PATH.SERVICE}
      />
      {/* Header Section */}
      <Paper elevation={0} className="p-6 mb-6">
        <Box className="flex justify-between items-start mb-4">
          <Typography variant="h4" component="h1" className="font-bold">
            {jobPost.data.title}
          </Typography>
          <Box className="flex items-center gap-2">
            {canApply &&
              userProfile?.id &&
              userProfile.id !== jobPost.data.employerId && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Work />}
                  onClick={handleOpenModal}
                  className="mr-2"
                >
                  Nhận việc
                </Button>
              )}
            <Chip
              label={statusConfig.label}
              color={statusConfig.color}
              icon={<span className="text-sm">{statusConfig.icon}</span>}
              className="font-medium"
              sx={{
                '& .MuiChip-icon': {
                  marginLeft: '8px',
                  order: -1,
                },
              }}
            />
          </Box>
        </Box>
        <Typography
          variant="body1"
          color="text.secondary"
          className="mb-4 text-lg"
        >
          {jobPost.data.description}
        </Typography>
        <Chip
          label={formatPrice(jobPost.data.price)}
          color="primary"
          className="font-medium text-lg"
          icon={<AttachMoney />}
        />
      </Paper>

      <Grid2 container spacing={4}>
        {/* Left Column - User Info */}
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={0} className="p-6">
            <Typography variant="h6" className="font-bold mb-4 text-[1.5rem]">
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
                <Box className="flex items-center gap-2 text-blue-600">
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
        {/* Right Column - Property Details */}
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Paper elevation={0} className="p-6">
            <Typography variant="h6" className="font-bold mb-4 text-[1.5rem]">
              Thông tin chi tiết
            </Typography>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Card variant="outlined" className="h-full">
                  <CardContent>
                    <Stack spacing={3}>
                      <Box className="flex items-center gap-3">
                        <LocationOn color="action" />
                        <Box>
                          <Typography
                            variant="subtitle2"
                            className="font-medium"
                          >
                            Địa điểm:
                          </Typography>
                          <Typography color="text.secondary">
                            {jobPost.data.location}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-3">
                        <SquareFoot color="action" />
                        <Box
                          component={'div'}
                          className="flex items-center gap-2"
                        >
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

                      <Box className="flex items-center gap-3">
                        <Layers color="action" />
                        <Box
                          component={'div'}
                          className="flex items-center gap-2"
                        >
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
                      <Box className="flex items-center gap-3">
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

                      <Box className="flex items-center gap-3">
                        <CategoryIcon color="action" />
                        <Box
                          component={'div'}
                          className="flex items-center gap-4"
                        >
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
                                size="medium"
                                color="primary"
                                variant="outlined"
                              />
                            </Tooltip>
                          )}
                        </Box>
                      </Box>

                      <Box className="flex items-center gap-3">
                        <AttachMoney color="action" />
                        <Box
                          component={'div'}
                          className="flex items-center gap-2"
                        >
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
      </Grid2>

      {/* Application Modal */}
      <ApplicationModal
        open={openModal}
        isSubmitting={isSubmitting}
        message={message}
        onClose={handleCloseModal}
        onSubmit={handleSubmitApplication}
        onMessageChange={setMessage}
      />
    </Container>
  );
};

export default ServiceDetail;

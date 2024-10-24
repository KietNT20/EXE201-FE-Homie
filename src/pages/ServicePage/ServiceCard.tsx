import { useGetCategoryById } from '@/hooks/useManageCategory';
import { useGetUserById } from '@/hooks/useManageUser';
import { JobPostStatus, ServiceCardProps } from '@/types/types';
import { formatDate, formatPrice } from '@/util/format';
import {
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
  CardActionArea,
  CardContent,
  Chip,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

const ServiceCard = ({ onClick, jobPost, ...restProps }: ServiceCardProps) => {
  const { data: categoryDetail } = useGetCategoryById(
    jobPost.categoryJobPost[0]?.categoriesId,
  );

  const { data: userInfo } = useGetUserById(jobPost.employerId);

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

  const statusConfig = getStatusConfig(jobPost.status);

  return (
    <Card
      className="max-w-[350px] hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
      {...restProps}
    >
      <CardActionArea onClick={onClick}>
        <CardContent>
          {/* Title and Status Section */}
          <Box className="flex justify-between items-center mb-4">
            <Typography
              variant="h5"
              component="div"
              className="truncate flex-1"
            >
              {jobPost.title}
            </Typography>
            <Chip
              label={statusConfig.label}
              color={statusConfig.color}
              size="small"
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

          {/* User Info Section */}
          {userInfo && (
            <>
              <Box className="flex items-center gap-3 mb-4">
                <Avatar
                  src={userInfo.data.avatarUrl}
                  alt={userInfo.data.name}
                  className="w-10 h-10"
                />
                <Box className="flex-1">
                  <Typography variant="subtitle2" className="font-medium">
                    {userInfo.data.name}
                  </Typography>
                  <Stack direction="row" spacing={2} className="mt-1">
                    <Tooltip title={userInfo.data.email}>
                      <>
                        <Email
                          color="action"
                          fontSize="small"
                          className="cursor-pointer"
                        />
                        <Typography variant="body2" color="text.secondary">
                          {userInfo.data.email}
                        </Typography>
                      </>
                    </Tooltip>
                    <Tooltip title={userInfo.data.phone}>
                      <>
                        <Phone
                          color="action"
                          fontSize="small"
                          className="cursor-pointer"
                        />
                        <Typography variant="body2" color="text.secondary">
                          {userInfo.data.phone}
                        </Typography>
                      </>
                    </Tooltip>
                  </Stack>
                </Box>
              </Box>
              <Divider className="mb-4" />
            </>
          )}

          {/* Description Section */}
          <Typography
            variant="body2"
            color="text.secondary"
            className="mb-4 line-clamp-2"
          >
            {jobPost.description}
          </Typography>

          {/* Details Section */}
          <Stack spacing={2}>
            <Box className="flex items-center gap-2">
              <LocationOn color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {jobPost.location}
              </Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <SquareFoot color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {jobPost.squareMeters} m²
              </Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <Layers color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {jobPost.numberOfFloors} tầng
              </Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <CalendarToday color="action" fontSize="small" />
              <Typography variant="body2" color="text.secondary">
                {formatDate(jobPost.startDate)} - {formatDate(jobPost.endDate)}
              </Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <AttachMoney color="action" fontSize="small" />
              <Typography variant="body2" className="font-medium text-primary">
                {formatPrice(jobPost.price)}
              </Typography>
            </Box>

            {/* Category Section */}
            <Box>
              <Box className="flex items-center gap-2 mb-2">
                <CategoryIcon color="action" fontSize="small" />
                <Typography variant="body2" color="text.secondary">
                  Dịch vụ:
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={1}
                className="flex-wrap gap-2 pl-6"
              >
                {categoryDetail && (
                  <Tooltip
                    title={
                      categoryDetail.data.price
                        ? `Giá: ${formatPrice(categoryDetail.data.price)}`
                        : ''
                    }
                    placement="top"
                  >
                    <Chip
                      label={
                        categoryDetail.data.categoryName || 'Chưa xác định'
                      }
                      size="small"
                      color="primary"
                      variant="outlined"
                      className="hover:bg-primary/10"
                    />
                  </Tooltip>
                )}
              </Stack>
            </Box>
            {/* Create Date Post */}
            <Box className="flex items-center gap-2">
              <Typography variant="body2" color="text.secondary">
                Được tạo lúc: {formatDate(jobPost.createDate)}
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ServiceCard;

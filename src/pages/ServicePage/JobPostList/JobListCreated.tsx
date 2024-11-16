import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { useGetJobPostByUserId } from '@/hooks/useMangeJobPost';
import { JobPostStatus } from '@/types/types';
import { getStatusConfig } from '@/util/getStatusConfig';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid2,
  Pagination,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface JobPostUserResponse {
  jobId: string;
  title: string;
  description: string;
  location: string;
  squareMeters: number;
  numberOfFloors: number;
  startDate: string;
  endDate: string;
  price: number;
  status: JobPostStatus;
  createDate: string;
}

const PAGE_SIZE = 6;

const JobListCreated = () => {
  const [page, setPage] = useState(1);

  const { userProfile } = useAppSelector((state) => state.profile);
  const { jobPostUserData } = useGetJobPostByUserId(userProfile?.id!);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Tính toán số trang
  const totalPages = Math.ceil(
    (jobPostUserData?.data?.length || 0) / PAGE_SIZE,
  );

  // Lấy dữ liệu cho trang hiện tại
  const getCurrentPageData = () => {
    if (!jobPostUserData?.data) return [];
    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    return jobPostUserData.data.slice(startIndex, endIndex);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className="py-8">
      <Typography variant="h4" className="mb-6">
        Các công việc đã tạo
      </Typography>

      <Grid2 container spacing={3}>
        {getCurrentPageData()?.map((job: JobPostUserResponse) => (
          <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} key={job.jobId}>
            <Card className="h-full">
              <CardContent>
                <Box className="flex justify-between items-start mb-4">
                  <Typography variant="h6">{job.title}</Typography>
                  <Chip
                    label={getStatusConfig(job.status).label}
                    color={getStatusConfig(job.status).color}
                    icon={
                      <span className="text-sm">
                        {getStatusConfig(job.status).icon}
                      </span>
                    }
                    size="small"
                  />
                </Box>

                <Typography color="text.secondary" className="mb-4">
                  {job.description}
                </Typography>

                <Box className="space-y-2">
                  <Box className="flex items-center gap-2">
                    <LocationOnIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      Địa chỉ: {job.location}
                    </Typography>
                  </Box>

                  <Box className="flex items-center gap-2">
                    <SquareFootIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      Diện tích: {job.squareMeters} m²
                    </Typography>
                  </Box>

                  <Box className="flex items-center gap-2">
                    <ApartmentIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      {job.numberOfFloors} lầu
                    </Typography>
                  </Box>

                  <Box className="flex items-center gap-2">
                    <CalendarTodayIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      Ngày: {formatDate(job.startDate)} -{' '}
                      {formatDate(job.endDate)}
                    </Typography>
                  </Box>

                  <Box className="flex items-center gap-2">
                    <AttachMoneyIcon fontSize="small" color="action" />
                    <Typography variant="body2">Giá: ${job.price}</Typography>
                  </Box>
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  className="mt-4 block"
                >
                  Ngày tạo: {formatDate(job.createDate)}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {jobPostUserData?.data && jobPostUserData.data.length > 0 ? (
        <Box className="flex justify-center mt-6">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      ) : (
        <Box className="text-center py-12">
          <Typography color="text.secondary">Chưa tạo công việc</Typography>
          <Button
            LinkComponent={Link}
            href={PATH.SERVICE}
            variant="contained"
            color="info"
            className="mt-4"
            size="medium"
          >
            Tạo công việc
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default JobListCreated;

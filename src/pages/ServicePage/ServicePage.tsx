import banner from '@/assets/img/submarine.jpg';
import { PATH } from '@/constant/path';
import { useGetAllJobPosts } from '@/hooks/useMangeJobPost';
import { JobPost } from '@/types/types';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  Skeleton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';

// Skeleton component for a single card using MUI components
const ServiceCardSkeleton = () => (
  <Card sx={{ height: '100%' }}>
    <Skeleton variant="rectangular" height={200} animation="wave" />
    <CardContent>
      <Box sx={{ pt: 0.5 }}>
        <Skeleton animation="wave" height={32} width="60%" />
        <Skeleton animation="wave" height={20} sx={{ my: 1 }} />
        <Skeleton animation="wave" height={20} width="80%" />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton animation="wave" height={36} width={100} />
          <Skeleton animation="wave" height={36} width={100} />
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const ServicePage = () => {
  const { data: jobPostDataList, isLoading, isPending } = useGetAllJobPosts();
  const navigate = useNavigate();

  const handleCardClick = (jobId: number | undefined) => {
    navigate(`${PATH.SERVICE}/${jobId}`);
  };

  // Create an array of 6 skeleton cards for loading state
  const skeletonCards = Array(6).fill(null);

  return (
    <div className="service-page">
      <Container>
        <div className="banner">
          <img src={banner} alt="Service Banner" className="banner-image" />
          <div className="banner-text">
            <h1>Chi Tiết Dịch Vụ</h1>
            <p>Home / Services</p>
          </div>
        </div>
        <Box sx={{ py: 4, px: { xs: 2, md: 3 } }}>
          <h2 className="text-2xl font-bold mb-6">Danh sách dịch vụ</h2>
          <Grid2 container spacing={4}>
            {isLoading || isPending ? (
              <>
                {skeletonCards.map((_, index) => (
                  <Grid2 size={{ xs: 12, md: 6 }} key={`skeleton-${index}`}>
                    <ServiceCardSkeleton />
                  </Grid2>
                ))}
              </>
            ) : (
              <>
                {jobPostDataList?.data?.map(
                  (jobPost: JobPost, index: number) => (
                    <Grid2 size={{ xs: 12, md: 6 }} key={jobPost.jobId || index}>
                      <ServiceCard
                        jobPost={jobPost}
                        onClick={() => handleCardClick(jobPost.jobId)}
                      />
                    </Grid2>
                  ),
                )}
              </>
            )}
          </Grid2>
        </Box>
      </Container>
    </div>
  );
};

export default ServicePage;

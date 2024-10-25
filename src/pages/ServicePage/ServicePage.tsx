import banner from '@/assets/img/submarine.jpg';
import { PATH } from '@/constant/path';
import { useGetAllJobPosts } from '@/hooks/useMangeJobPost';
import { JobPost } from '@/types/types';
import { Box, Container, Grid2, Pagination } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import ServiceCardSkeleton from './ServiceCardSkeleton';

const ServicePage = () => {
  const navigate = useNavigate();

  // Pagination state
  const [page, setPage] = useState(1);
  const pageSize = 4;

  // Update the query to include pagination params
  const {
    data: jobPostResponse,
    isLoading,
    isPending,
  } = useGetAllJobPosts({
    pageNumber: page,
    pageSize,
  });

  console.log('jobPostResponse', jobPostResponse);

  const handleCardClick = (jobId: number | undefined) => {
    navigate(`${PATH.SERVICE}/${jobId}`);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get total pages from API response
  const totalPages = jobPostResponse?.totalPage || 1;

  // Create skeleton cards for loading state
  const skeletonCards = Array(pageSize).fill(null);

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
                {jobPostResponse?.data?.map(
                  (jobPost: JobPost, index: number) => (
                    <Grid2
                      size={{ xs: 12, md: 6 }}
                      key={jobPost.jobId || index}
                    >
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

          {/* Pagination component */}
          {!isLoading && !isPending && jobPostResponse?.data?.length > 0 && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
                mb: 2,
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                variant="outlined"
                shape="rounded"
              />
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ServicePage;

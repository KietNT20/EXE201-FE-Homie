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
  const { data: jobPostDataList, isLoading, isPending } = useGetAllJobPosts();
  const navigate = useNavigate();

  // Pagination state
  const [page, setPage] = useState(1);
  const cardsPerPage = 4;

  const handleCardClick = (jobId: number | undefined) => {
    navigate(`${PATH.SERVICE}/${jobId}`);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate pagination
  const totalItems = jobPostDataList?.data?.length || 0;
  const totalPages = Math.ceil(totalItems / cardsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return jobPostDataList?.data?.slice(startIndex, endIndex) || [];
  };

  // Create skeleton cards for loading state
  const skeletonCards = Array(cardsPerPage).fill(null);

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
                {getCurrentPageItems().map(
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
          {!isLoading && !isPending && totalItems > 0 && (
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

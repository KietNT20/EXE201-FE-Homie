import { PATH } from '@/constant/path';
import { useGetAllCategories } from '@/hooks/useManageCategory';
import { useGetAllJobPosts } from '@/hooks/useMangeJobPost';
import { FilterState, JobPost } from '@/types/types';
import {
  Alert,
  Box,
  Container,
  Divider,
  Pagination,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { Suspense, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterLoadingFallback from './FilterLoadingFallback';
import ServiceCard from './ServiceCard';
import ServiceCardSkeleton from './ServiceCardSkeleton';
import ServiceSort, { SortOption } from './ServiceSort';

const ServiceFilter = React.lazy(() => import('./ServiceFilter'));
const pageSize = 6;
// Move skeletonCards array outside component to prevent recreation
const skeletonCards = Array(pageSize).fill(null);

const ServicePage = () => {
  const [page, setPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>({
    value: 'newest',
    label: 'Mới nhất',
    compareFn: (a, b) =>
      new Date(b.createDate).getTime() - new Date(a.createDate).getTime(),
  });
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 10000000],
  });
  const navigate = useNavigate();

  const {
    data: jobPostResponse,
    isLoading,
    isPending,
  } = useGetAllJobPosts({
    pageNumber: page,
    pageSize: pageSize,
  });

  const { data: categoriesData } = useGetAllCategories();

  // Memoize handlers to prevent unnecessary re-renders
  const handleFilterChange = useCallback((newFilters: FilterState): void => {
    setFilters(newFilters);
    setPage(1);
  }, []);

  const handleSortChange = useCallback((newSortOption: SortOption): void => {
    setSortOption(newSortOption);
  }, []);

  const handleCardClick = useCallback(
    (jobId: number | undefined): void => {
      if (jobId) {
        navigate(`${PATH.SERVICE}/${jobId}`);
      }
    },
    [navigate],
  );

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number): void => {
      event.preventDefault();
      setPage(value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [],
  );

  // Memoize filtered and sorted job posts
  const filteredJobPosts = useMemo(() => {
    if (!jobPostResponse?.data) return [];

    return jobPostResponse.data
      .filter((jobPost: JobPost) => {
        // Early return for no filters
        if (
          filters.categories.length === 0 &&
          filters.priceRange[0] === 0 &&
          filters.priceRange[1] === 10000000
        ) {
          return true;
        }

        const matchesCategory =
          filters.categories.length === 0 ||
          jobPost.categoryJobPost.some((category) =>
            filters.categories.includes(category.categoriesId),
          );

        const matchesPrice =
          jobPost.price >= filters.priceRange[0] &&
          jobPost.price <= filters.priceRange[1];

        return matchesCategory && matchesPrice;
      })
      .sort(sortOption.compareFn);
  }, [jobPostResponse?.data, filters, sortOption.compareFn]);

  // Memoize loading state
  const isLoadingState = isLoading || isPending;

  // Memoize total pages calculation
  const totalPages = useMemo(
    () => jobPostResponse?.totalPage || 1,
    [jobPostResponse?.totalPage],
  );

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Container>
        <Box sx={{ py: 4 }}>
          <Typography variant="h4" fontWeight="bold" className="mb-4">
            Danh sách dịch vụ
          </Typography>
          <Grid container spacing={3}>
            {/* Filter Column */}
            <Grid size={{ xs: 12, lg: 3 }}>
              <ServiceSort
                value={sortOption.value}
                onChange={handleSortChange}
              />
              <Divider sx={{ my: 2 }} />
              <Suspense fallback={<FilterLoadingFallback />}>
                <ServiceFilter
                  categories={categoriesData?.data ?? []}
                  onFilterChange={handleFilterChange}
                />
              </Suspense>
            </Grid>

            {/* Content Column */}
            <Grid size={{ xs: 12, lg: 9 }}>
              <Grid container spacing={2}>
                {isLoadingState ? (
                  <>
                    {skeletonCards.map((_, index) => (
                      <Grid size={{ xs: 12, md: 6 }} key={`skeleton-${index}`}>
                        <ServiceCardSkeleton />
                      </Grid>
                    ))}
                  </>
                ) : (
                  <>
                    {filteredJobPosts.map((jobPost: JobPost) => (
                      <Grid
                        size={{ xs: 12, md: 6 }}
                        key={jobPost.jobId}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ServiceCard
                          jobPost={jobPost}
                          onClick={() => handleCardClick(jobPost.jobId)}
                        />
                      </Grid>
                    ))}
                  </>
                )}
              </Grid>

              {/* No Results Message */}
              {!isLoadingState && filteredJobPosts.length === 0 && (
                <Box sx={{ mt: 4 }}>
                  <Alert severity="info">
                    Không tìm thấy dịch vụ nào phù hợp với bộ lọc đã chọn
                  </Alert>
                </Box>
              )}
            </Grid>
          </Grid>

          {/* Pagination */}
          {!isLoadingState && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 4,
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
    </Box>
  );
};

export default React.memo(ServicePage);

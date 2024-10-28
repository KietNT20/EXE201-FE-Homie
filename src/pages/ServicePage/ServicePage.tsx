import { priceFilter } from '@/constant/priceFilter';
import { useGetAllCategories } from '@/hooks/useManageCategory';
import { useGetAllJobPosts } from '@/hooks/useMangeJobPost';
import { JobPost } from '@/types/types';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React, { useMemo } from 'react';
import ServiceContent from './ServiceContent';
import ServiceFilterColumn from './ServiceFilterColumn';
import ServiceHeader from './ServiceHeader';
import ServicePagination from './ServicePagination';
import { useServiceLogic } from './useServiceLogic';

const pageSize = 6;
const skeletonCards = Array(pageSize).fill(null);

const ServicePage = () => {
  // Get current state from custom hook first
  const {
    page,
    sortOption,
    filters,
    handleFilterChange,
    handleSortChange,
    handleCardClick,
    handlePageChange,
  } = useServiceLogic();

  // Then use the page state in data fetching
  const {
    data: jobPostResponse,
    isLoading,
    isPending,
  } = useGetAllJobPosts({
    pageNumber: page,
    pageSize,
  });

  const { data: categoriesData } = useGetAllCategories();

  // Memoize category prices
  const categoryPrices = useMemo(() => {
    if (!categoriesData?.data) return {};
    return categoriesData.data.reduce(
      (acc: any, category: Category) => {
        if (category.id !== undefined) {
          acc[category.id] = category.price || 0;
        }
        return acc;
      },
      {} as Record<number, number>,
    );
  }, [categoriesData?.data]);

  // Memoize filtered job posts
  const filteredJobPosts = useMemo(() => {
    if (!jobPostResponse?.data) return [];

    return jobPostResponse.data
      .filter((jobPost: JobPost) => {
        const matchesCategory =
          filters.categories.length === 0 ||
          jobPost.categoryJobPost.some((category) =>
            filters.categories.includes(category.categoriesId),
          );

        const totalPrice = jobPost.categoryJobPost.reduce(
          (sum, category) => sum + (categoryPrices[category.categoriesId] || 0),
          0,
        );
        const matchesPrice =
          totalPrice >= filters.priceRange[0] &&
          totalPrice <= filters.priceRange[1];

        const matchesSearch =
          !filters.searchTerm ||
          jobPost.categoryJobPost.some((category) => {
            const categoryData = categoriesData?.data?.find(
              (cat: Category) => cat.id === category.categoriesId,
            );
            return categoryData?.categoryName
              ?.toLowerCase()
              .includes(filters.searchTerm.toLowerCase());
          });

        return matchesCategory && matchesPrice && matchesSearch;
      })
      .sort((a, b) => sortOption.compareFn(a, b, categoryPrices));
  }, [
    jobPostResponse?.data,
    filters,
    sortOption.compareFn,
    categoryPrices,
    categoriesData?.data,
  ]);

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
          <ServiceHeader />

          <Grid container spacing={3}>
            <ServiceFilterColumn
              sortOption={sortOption}
              onSortChange={handleSortChange}
              categories={categoriesData?.data ?? []}
              onFilterChange={handleFilterChange}
              minPrice={priceFilter.min}
              maxPrice={priceFilter.max}
            />

            <ServiceContent
              isLoading={isLoadingState}
              jobPosts={filteredJobPosts}
              onCardClick={handleCardClick}
              categoryPrices={categoryPrices}
              categories={categoriesData?.data ?? []}
              skeletonCards={skeletonCards}
            />
          </Grid>

          <ServicePagination
            isLoading={isLoadingState}
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default React.memo(ServicePage);

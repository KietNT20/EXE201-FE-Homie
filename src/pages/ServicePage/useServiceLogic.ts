import { PATH } from '@/constant/path';
import { priceFilter } from '@/constant/priceFilter';
import { ExtendedFilterState } from '@/types/types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SortOption, sortOptions } from './ServiceSort';

export const useServiceLogic = () => {
  const [page, setPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);
  const [filters, setFilters] = useState<ExtendedFilterState>({
    categories: [],
    priceRange: [priceFilter.min, priceFilter.max],
    searchTerm: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [filters]);

  const handleFilterChange = useCallback(
    (newFilters: ExtendedFilterState): void => {
      setFilters(newFilters);
    },
    [],
  );

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

  // Get API filter and OrderBy based on sort option
  const getApiParams = useCallback(() => {
    switch (sortOption.value) {
      case 'newest':
        return {
          filter: 'createDate',
          OrderBy: 'desc',
        };
      case 'priceDesc':
        return {
          filter: 'price',
          OrderBy: 'desc',
        };
      case 'priceAsc':
        return {
          filter: 'price',
          OrderBy: 'asc',
        };
      default:
        return {
          filter: 'createDate',
          OrderBy: 'desc',
        };
    }
  }, [sortOption]);

  const { filter, OrderBy } = getApiParams();

  return {
    page,
    sortOption,
    filters,
    filter,
    OrderBy,
    handleFilterChange,
    handleSortChange,
    handleCardClick,
    handlePageChange,
  };
};

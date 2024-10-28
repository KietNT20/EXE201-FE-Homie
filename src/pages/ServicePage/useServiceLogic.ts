import { PATH } from '@/constant/path';
import { priceFilter } from '@/constant/priceFilter';
import { ExtendedFilterState } from '@/types/types';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SortOption } from './ServiceSort';

export const useServiceLogic = () => {
  const [page, setPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<SortOption>({
    value: 'newest',
    label: 'Mới nhất',
    compareFn: (a, b) =>
      new Date(b.createDate ?? '').getTime() -
      new Date(a.createDate ?? '').getTime(),
  });
  const [filters, setFilters] = useState<ExtendedFilterState>({
    categories: [],
    priceRange: [priceFilter.min, priceFilter.max],
    searchTerm: '',
  });

  const navigate = useNavigate();

  // Reset page when filters change
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

  return {
    page,
    sortOption,
    filters,
    handleFilterChange,
    handleSortChange,
    handleCardClick,
    handlePageChange,
  };
};

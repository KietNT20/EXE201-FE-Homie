import { ExtendedFilterState } from '@/types/types';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Suspense } from 'react';
import FilterLoadingFallback from './FilterLoadingFallback';
import ServiceFilter from './ServiceFilter';
import ServiceSort, { SortOption } from './ServiceSort';

interface ServiceFilterColumnProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  categories: Category[];
  onFilterChange: (filters: ExtendedFilterState) => void;
  minPrice: number;
  maxPrice: number;
}

const ServiceFilterColumn = ({
  sortOption,
  onSortChange,
  categories,
  onFilterChange,
  minPrice,
  maxPrice,
}: ServiceFilterColumnProps) => (
  <Grid size={{ xs: 12, lg: 3 }}>
    <ServiceSort value={sortOption.value} onChange={onSortChange} />
    <Divider sx={{ my: 2 }} />
    <Suspense fallback={<FilterLoadingFallback />}>
      <ServiceFilter
        categories={categories}
        onFilterChange={onFilterChange}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </Suspense>
  </Grid>
);

export default ServiceFilterColumn;

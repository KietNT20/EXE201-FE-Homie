import { Paper, Skeleton } from '@mui/material';

const FilterLoadingFallback = () => (
  <Paper className="p-4">
    <Skeleton variant="text" width="60%" height={32} className="mb-4" />
    <Skeleton variant="rectangular" height={120} className="mb-3" />
    <Skeleton variant="rectangular" height={80} />
  </Paper>
);

export default FilterLoadingFallback;

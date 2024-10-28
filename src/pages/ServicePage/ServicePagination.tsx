import { Box, Pagination } from '@mui/material';

interface ServicePaginationProps {
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const ServicePagination = ({
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
}: ServicePaginationProps) => {
  if (isLoading) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        size="large"
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};

export default ServicePagination;

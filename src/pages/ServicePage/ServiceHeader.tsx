// components/service/ServiceHeader.tsx
import { useGetAllCategories } from '@/hooks/useManageCategory';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CreateJobButton from './CreateJobButton';

interface ServiceHeaderProps {
  onJobCreated?: () => void;
}

const ServiceHeader = ({ onJobCreated }: ServiceHeaderProps) => {
  const { data: categoriesData } = useGetAllCategories();

  return (
    <Grid container alignItems="center" justifyContent="space-between" mb={3}>
      <Grid size={{ xs: 'auto' }}>
        <Typography variant="h4" fontWeight="bold">
          Danh sách dịch vụ
        </Typography>
      </Grid>
      <Grid size={{ xs: 'auto' }}>
        <CreateJobButton
          variant="contained"
          size="medium"
          categories={categoriesData?.data ?? []}
          onSuccess={onJobCreated}
        />
      </Grid>
    </Grid>
  );
};

export default ServiceHeader;

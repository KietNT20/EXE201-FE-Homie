// components/service/ServiceHeader.tsx
import { useGetAllCategories } from '@/hooks/useManageCategory';
import { Typography } from '@mui/material';
import CreateJobButton from './CreateJobButton';

interface ServiceHeaderProps {
  onJobCreated?: () => void;
}

const ServiceHeader = ({ onJobCreated }: ServiceHeaderProps) => {
  const { data: categoriesData } = useGetAllCategories();

  return (
    <div className="md:flex items-center justify-between mb-6">
      <div className="mb-3 md:mb-0 flex items-center">
        <Typography variant="h4" fontWeight="bold">
          Danh sách dịch vụ
        </Typography>
      </div>
      <div className="flex items-center">
        <CreateJobButton
          variant="contained"
          size="medium"
          categories={categoriesData?.data ?? []}
          onSuccess={onJobCreated}
        />
      </div>
    </div>
  );
};

export default ServiceHeader;

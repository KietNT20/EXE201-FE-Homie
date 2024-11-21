import { useGetCategoryById } from '@/hooks/useManageCategory';
import { formatPrice } from '@/util/format';
import { Chip, Tooltip } from '@mui/material';

const CategoryChip = ({ categoryId }: { categoryId: string | number }) => {
  const { data: categoryDetail } = useGetCategoryById(Number(categoryId));

  return (
    <Tooltip
      className=""
      title={
        categoryDetail?.data?.price
          ? `Giá: ${formatPrice(categoryDetail?.data.price)}`
          : ''
      }
    >
      <Chip
        label={categoryDetail?.data?.categoryName || 'Chưa xác định'}
        size="medium"
        color="primary"
        variant="outlined"
      />
    </Tooltip>
  );
};

export default CategoryChip;

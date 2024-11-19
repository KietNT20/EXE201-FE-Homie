import { JobPost } from '@/types/types.common';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export type SortOption = {
  value: string;
  label: string;
  compareFn: (
    a: JobPost,
    b: JobPost,
    categoryPrices: Record<number, number>,
  ) => number;
};

export const sortOptions: SortOption[] = [
  {
    value: 'newest',
    label: 'Mới nhất',
    compareFn: (a, b) => {
      const dateA = new Date(a.createDate || 0).getTime();
      const dateB = new Date(b.createDate || 0).getTime();
      return dateB - dateA;
    },
  },
  {
    value: 'priceDesc',
    label: 'Giá cao đến thấp',
    compareFn: (a, b, categoryPrices) => {
      const priceA = a.categoryJobPost.reduce(
        (sum, cat) => sum + (categoryPrices[cat.categoriesId] || 0),
        0,
      );
      const priceB = b.categoryJobPost.reduce(
        (sum, cat) => sum + (categoryPrices[cat.categoriesId] || 0),
        0,
      );
      return priceB - priceA;
    },
  },
  {
    value: 'priceAsc',
    label: 'Giá thấp đến cao',
    compareFn: (a, b, categoryPrices) => {
      const priceA = a.categoryJobPost.reduce(
        (sum, cat) => sum + (categoryPrices[cat.categoriesId] || 0),
        0,
      );
      const priceB = b.categoryJobPost.reduce(
        (sum, cat) => sum + (categoryPrices[cat.categoriesId] || 0),
        0,
      );
      return priceA - priceB;
    },
  },
];

interface ServiceSortProps {
  value: string;
  onChange: (option: SortOption) => void;
}

const ServiceSort = ({ value, onChange }: ServiceSortProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = sortOptions.find(
      option => option.value === event.target.value,
    );
    if (selectedOption) {
      onChange(selectedOption);
    }
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="sort-select-label">Sắp xếp theo</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={value}
        label="Sắp xếp theo"
        onChange={handleChange}
      >
        {sortOptions.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceSort;

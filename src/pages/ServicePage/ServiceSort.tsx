import { JobPost } from '@/types/types';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

export type SortOption = {
  value: string;
  label: string;
  compareFn: (a: JobPost, b: JobPost) => number;
};

const sortOptions: SortOption[] = [
  {
    value: 'newest',
    label: 'Mới nhất',
    compareFn: (a, b) =>
      new Date(b.createDate).getTime() - new Date(a.createDate).getTime(),
  },
  {
    value: 'priceDesc',
    label: 'Giá cao đến thấp',
    compareFn: (a, b) => b.price - a.price,
  },
  {
    value: 'priceAsc',
    label: 'Giá thấp đến cao',
    compareFn: (a, b) => a.price - b.price,
  },
];

interface ServiceSortProps {
  value: string;
  onChange: (option: SortOption) => void;
}

const ServiceSort: React.FC<ServiceSortProps> = ({ value, onChange }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = sortOptions.find(
      (option) => option.value === event.target.value,
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
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceSort;

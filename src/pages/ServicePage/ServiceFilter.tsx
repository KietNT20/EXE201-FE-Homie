import { FilterState, ServiceFilterProps } from '@/types/types';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import PriceRangeSlider from './PriceRangeSlider';

const ServiceFilter = ({
  categories,
  onFilterChange,
  minPrice = 0,
  maxPrice = 3000000,
}: ServiceFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice,
    maxPrice,
  ]);

  const handleCategoryChange = (categoryId: number): void => {
    setSelectedCategories((prev) => {
      const isSelected = prev.includes(categoryId);
      if (isSelected) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handlePriceChange = (
    event: Event,
    newValue: number | number[],
  ): void => {
    setPriceRange(newValue as [number, number]);
  };

  const handleApplyFilter = (): void => {
    const filters: FilterState = {
      categories: selectedCategories,
      priceRange: priceRange,
    };
    onFilterChange(filters);
  };

  const handleResetFilter = (): void => {
    setSelectedCategories([]);
    setPriceRange([minPrice, maxPrice]);
    onFilterChange({
      categories: [],
      priceRange: [minPrice, maxPrice],
    });
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Bộ lọc tìm kiếm
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Categories Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
            Danh mục
          </Typography>
          <FormGroup>
            {categories?.map((category) => (
              <FormControlLabel
                key={category.id}
                control={
                  <Checkbox
                    checked={selectedCategories.includes(category.id ?? -1)}
                    onChange={() => handleCategoryChange(category.id ?? -1)}
                    size="small"
                  />
                }
                label={
                  <Typography variant="body2">
                    {category.categoryName}
                    {category.price && (
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ ml: 1 }}
                      >
                        ({category.price.toLocaleString('vi-VN')}đ)
                      </Typography>
                    )}
                  </Typography>
                }
              />
            ))}
          </FormGroup>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* Price Range Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
            Khoảng giá
          </Typography>
          <PriceRangeSlider
            value={priceRange}
            onChange={handlePriceChange}
            min={minPrice}
            max={maxPrice}
          />
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" fullWidth onClick={handleApplyFilter}>
            Áp dụng
          </Button>
          <Button variant="outlined" fullWidth onClick={handleResetFilter}>
            Đặt lại
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceFilter;

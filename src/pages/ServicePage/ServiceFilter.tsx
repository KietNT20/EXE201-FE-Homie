import { priceFilter } from '@/constant/priceFilter';
import { FilterState, ServiceFilterProps } from '@/types/types';
import { Category } from '@/types/types.common';
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

interface FilterValues {
  selectedCategories: number[];
  searchTerm: string;
  priceRange: [number, number];
}

const ServiceFilter = ({
  categories = [],
  onFilterChange,
  minPrice = priceFilter.min,
  maxPrice = priceFilter.max,
}: ServiceFilterProps) => {
  // State for filter values
  const [filterValues, setFilterValues] = useState<FilterValues>({
    selectedCategories: [],
    searchTerm: '',
    priceRange: [minPrice, maxPrice],
  });

  // Memoize filtered categories based on search term
  const filteredCategories = categories.filter(category =>
    category.categoryName
      ?.toLowerCase()
      .includes(filterValues.searchTerm.toLowerCase()),
  );

  // Handle category selection
  const handleCategoryChange = (categoryId: number): void => {
    setFilterValues(prev => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(categoryId)
        ? prev.selectedCategories.filter(id => id !== categoryId)
        : [...prev.selectedCategories, categoryId],
    }));
  };

  // Handle search input change
  // const handleSearchChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ): void => {
  //   setFilterValues((prev) => ({
  //     ...prev,
  //     searchTerm: event.target.value,
  //   }));
  // };

  // Handle price range change
  const handlePriceChange = (
    event: Event,
    newValue: number | number[],
  ): void => {
    event.preventDefault();
    setFilterValues(prev => ({
      ...prev,
      priceRange: newValue as [number, number],
    }));
  };

  // Apply filters
  const handleApplyFilter = (): void => {
    const filters: FilterState = {
      categories: filterValues.selectedCategories,
      priceRange: filterValues.priceRange,
      searchTerm: filterValues.searchTerm.trim(),
    };
    onFilterChange(filters);
  };

  // Reset filters
  const handleResetFilter = (): void => {
    const initialValues: FilterValues = {
      selectedCategories: [],
      searchTerm: '',
      priceRange: [minPrice, maxPrice],
    };
    setFilterValues(initialValues);
    onFilterChange({
      categories: [],
      priceRange: [minPrice, maxPrice],
      searchTerm: '',
    });
  };

  // Group categories by price ranges for better organization
  const groupedCategories: Record<number, Category[]> =
    filteredCategories.reduce(
      (acc, category) => {
        if (category.price === undefined) return acc;

        // Create price range groups
        const priceRange = Math.floor(category.price / 1000000) * 1000000;
        if (!acc[priceRange]) {
          acc[priceRange] = [];
        }
        acc[priceRange].push(category);
        return acc;
      },
      {} as Record<number, Category[]>,
    );

  return (
    <Card elevation={2}>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Bộ lọc tìm kiếm
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Categories Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
            Danh mục
          </Typography>

          <FormGroup>
            {Object.entries(groupedCategories)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([priceRange, categoriesInRange]) => (
                <Box key={priceRange} sx={{}}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{}}
                  >
                    {Number(priceRange).toLocaleString('vi-VN')}đ -{' '}
                    {(Number(priceRange) + 500000).toLocaleString('vi-VN')}đ
                  </Typography>
                  {categoriesInRange?.map((category: Category) => (
                    <FormControlLabel
                      key={category.id}
                      className="m-2 lg:ml-0"
                      control={
                        <Checkbox
                          checked={filterValues.selectedCategories.includes(
                            category.id ?? -1,
                          )}
                          onChange={() =>
                            handleCategoryChange(category.id ?? -1)
                          }
                          size="small"
                        />
                      }
                      label={
                        <Box sx={{}}>
                          <Typography variant="body2">
                            {category.categoryName}
                          </Typography>
                          {category.price && (
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{}}
                            >
                              ({category.price.toLocaleString('vi-VN')}đ)
                            </Typography>
                          )}
                        </Box>
                      }
                    />
                  ))}
                </Box>
              ))}
          </FormGroup>

          {filteredCategories.length === 0 && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: 'center', mt: 2 }}
            >
              Không tìm thấy danh mục phù hợp
            </Typography>
          )}
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Price Range Section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="medium">
            Khoảng giá
          </Typography>
          <PriceRangeSlider
            value={filterValues.priceRange}
            onChange={handlePriceChange}
            min={minPrice}
            max={maxPrice}
          />
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleApplyFilter}
            color="info"
          >
            Áp dụng
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleResetFilter}
            color="info"
          >
            Đặt lại
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceFilter;

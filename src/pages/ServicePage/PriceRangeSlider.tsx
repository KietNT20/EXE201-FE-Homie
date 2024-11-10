import { Box, Slider, Typography } from '@mui/material';

interface PriceRangeSliderProps {
  value: [number, number];
  onChange: (event: Event, newValue: number | number[]) => void;
  min: number;
  max: number;
  step?: number;
}

const PriceRangeSlider = ({
  value,
  onChange,
  min,
  max,
  step = 50000,
}: PriceRangeSliderProps) => {
  const formatPrice = (value: number) => `${value.toLocaleString('vi-VN')}đ`;

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ px: 2 }}>
        <Slider
          value={value}
          onChange={onChange}
          valueLabelDisplay="auto"
          min={min}
          max={max}
          step={step}
          getAriaValueText={formatPrice}
          valueLabelFormat={formatPrice}
          color="info"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {formatPrice(value[0])}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatPrice(value[1])}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;

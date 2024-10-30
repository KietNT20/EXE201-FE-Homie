import { InputProps } from '@/types/types';
import { InputAdornment, TextField } from '@mui/material';
import { forwardRef } from 'react';

const InputText = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type,
      disabled,
      placeholder,
      size,
      startIcon,
      endIcon,
      sx,
      ...restProps
    },
    ref,
  ) => (
    <TextField
      fullWidth
      label={label}
      type={type}
      placeholder={placeholder}
      variant="outlined"
      size={size}
      sx={sx}
      disabled={disabled}
      ref={ref}
      slotProps={{
        input: {
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
        },
      }}
      {...restProps}
    />
  ),
);

export default InputText;

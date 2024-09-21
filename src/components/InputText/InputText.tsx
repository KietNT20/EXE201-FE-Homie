import { InputAdornment, TextField } from "@mui/material";
import { forwardRef, Ref } from "react";

interface Props {
  label?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "small" | "medium";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
}

const InputText = (
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
  }: Props,
  ref: Ref<HTMLInputElement>,
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
);
export default forwardRef(InputText);

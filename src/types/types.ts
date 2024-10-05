export interface TokenResponse {
  access_token?: string;
  refresh_token?: string;
}
export interface InputProps {
  label?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  size?: "small" | "medium";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
}

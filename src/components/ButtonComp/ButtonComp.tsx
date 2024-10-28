import { Button } from '@mui/material';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  [key: string]: any;
}

const ButtonComp = ({
  children,
  onClick,
  variant,
  type,
  size,
  ...restProps
}: Props) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      type={type}
      size={size}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default ButtonComp;

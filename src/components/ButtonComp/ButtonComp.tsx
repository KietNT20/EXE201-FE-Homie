import { Button } from '@mui/material';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  type?: 'button' | 'submit' | 'reset';
  [key: string]: any;
}

const ButtonComp = ({
  children,
  onClick,
  variant,
  type,
  ...restProps
}: Props) => {
  return (
    <Button onClick={onClick} variant={variant} type={type} {...restProps}>
      {children}
    </Button>
  );
};

export default ButtonComp;

import { Button } from "@mui/material";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant: "contained" | "outlined" | "text";
}

const ButtonComp = ({ children, onClick, variant, ...restProps }: Props) => {
  return (
    <Button onClick={onClick} variant={variant} {...restProps}>
      {children}
    </Button>
  );
};

export default ButtonComp;

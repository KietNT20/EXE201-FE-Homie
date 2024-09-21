import ButtonComp from "@/components/ButtonComp/ButtonComp";
import InputText from "@/components/InputText/InputText";
import { PATH } from "@/constant/path";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Container,
  Grid2,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/submarine.jpg";

const RegisterPage = () => {
  const [showPwd, setShowPwd] = useState(false);

  const handleClickShowPassword = () => {
    setShowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Container className="py-36 m-auto">
      <div className="loginForm border-2 border-sky-50">
        <div className="login-wrap">
          <div className="loginForm__left">
            <figure className="loginForm__left-img">
              <img src={imgLogo} alt="" />
            </figure>
          </div>
          <Card className="loginForm__right px-32 py-4">
            <CardContent>
              <div className="loginForm__right-content mb-8">
                <Typography variant="h3" className="text-center">
                  ĐĂNG KÝ
                </Typography>
              </div>
              <form action="#" className="loginForm__right-form">
                <Grid2 container spacing={1} gap={4}>
                  <Grid2 size={12}>
                    <InputText
                      type="text"
                      placeholder="Họ và tên"
                      size="medium"
                      sx={styles.inputStyles}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <InputText
                      type="text"
                      placeholder="Số điện thoại"
                      size="medium"
                      sx={styles.inputStyles}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <InputText
                      type="text"
                      placeholder="Email cá nhân"
                      size="medium"
                      sx={styles.inputStyles}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <InputText
                      type={showPwd ? "text" : "password"}
                      placeholder="Mật khẩu"
                      size="medium"
                      sx={styles.inputStyles}
                      endIcon={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword()}
                            onMouseDown={(event) =>
                              handleMouseDownPassword(event)
                            }
                          >
                            {showPwd ? (
                              <Visibility sx={{ fontSize: "2rem" }} />
                            ) : (
                              <VisibilityOff sx={{ fontSize: "2rem" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <ButtonComp
                      type="submit"
                      variant="contained"
                      className="btn"
                      fullWidth
                    >
                      Đăng ký
                    </ButtonComp>
                  </Grid2>
                  <div className="or-wrap">
                    <div className="line"></div>
                    <span className="or">Hoặc</span>
                    <div className="line"></div>
                  </div>
                  <Grid2 size={12}>
                    <ButtonComp
                      variant="contained"
                      className={"btn-google"}
                      fullWidth
                    >
                      <span className="text">Google</span>{" "}
                      <i className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          />
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                        </svg>
                      </i>
                    </ButtonComp>
                  </Grid2>
                </Grid2>
              </form>
              <div className="text-bottom mt-11 text-center">
                <div className="policy-content mb-10">
                  <p className="text">
                    Bằng việc đăng kí, bạn đã đồng ý với Homie về{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Điều khoản dịch vụ
                    </a>{" "}
                    &{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Chính sách bảo mật
                    </a>
                  </p>
                </div>
                <span className="text">Đã có tài khoản?</span>{" "}
                <Link to={PATH.LOGIN} className="link-regis">
                  Đăng nhập
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default RegisterPage;

export const styles = {
  inputStyles: {
    "& .MuiInputBase-input": {
      fontSize: "1.4rem",
    },
    "& .MuiInputLabel-root": {
      fontSize: "1.4rem",
    },
    "& .MuiFormHelperText-root": {
      fontSize: "1.2rem",
      marginTop: "8px",
      fontWeight: 500,
    },
  },
};

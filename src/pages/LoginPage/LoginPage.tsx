import ButtonComp from '@/components/ButtonComp/ButtonComp';
import InputText from '@/components/InputText/InputText';
import { submarine } from '@/constant/image';
import { PATH } from '@/constant/path';
import { useLogin } from '@/hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid2,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { MouseEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { loginSchema } from './schemas/schema';
import { InputLoginTypes } from './schemas/type';

const LoginPage = () => {
  const [showPwd, setShowPwd] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputLoginTypes>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { login, isPending: loginLoading } = useLogin();

  const _onSubmit = (data: InputLoginTypes) => {
    const { email, password } = data;
    login({ email, password });
  };

  const handleClickShowPassword = () => {
    setShowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container className="py-12 m-auto px-40">
      <div className="loginForm border-2 border-sky-50">
        <div className="login-wrap">
          <div className="loginForm__left">
            <figure className="loginForm__left-img w-full h-full aspect-video">
              <img
                className="w-full h-full object-cover"
                src={submarine}
                alt="Ảnh máy hút bụi"
              />
            </figure>
          </div>
          <Card className="loginForm__right">
            <CardContent className="p-8">
              <div className="loginForm__right-content mb-8">
                <Typography variant="h5" className="text-center">
                  ĐĂNG NHẬP
                </Typography>
              </div>
              <Box
                component={'form'}
                className="loginForm__right-form"
                onSubmit={handleSubmit(_onSubmit)}
              >
                <Grid2 container spacing={1} gap={4}>
                  <Grid2 size={12}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type="text"
                          label="Email đăng nhập"
                          size="medium"
                          error={errors.email}
                          helperText={errors.email?.message}
                          disabled={loginLoading}
                        />
                      )}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type={showPwd ? 'text' : 'password'}
                          label="Mật khẩu"
                          size="medium"
                          error={errors.password}
                          helperText={errors.password?.message}
                          disabled={loginLoading}
                          endIcon={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleClickShowPassword()}
                                onMouseDown={(event) =>
                                  handleMouseDownPassword(event)
                                }
                              >
                                {showPwd ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      )}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <ButtonComp
                      type="submit"
                      variant="contained"
                      size="small"
                      className="btn"
                      fullWidth
                      disabled={loginLoading}
                    >
                      Đăng nhập
                    </ButtonComp>
                  </Grid2>
                </Grid2>
              </Box>
              <div className="text-bottom mt-4 text-center">
                <div className="text-signup mb-2">
                  <span className="text">Chưa đăng ký tài khoản?</span>{' '}
                  <Link to={PATH.REGISTER} className="link-regis">
                    Đăng ký
                  </Link>
                </div>
                <span className="forgotPassword">
                  Quên mật khẩu? <a href="#">Nhấn vào đây</a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;

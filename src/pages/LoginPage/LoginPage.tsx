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
    <Container maxWidth="lg" className="py-8 px-4 md:py-12 md:px-40">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg border border-sky-500">
        {/* Image section - hidden on mobile/tablet */}
        <div className="hidden lg:block lg:w-1/2">
          <figure className="w-full h-full aspect-square">
            <img
              className="w-full h-full object-cover"
              src={submarine}
              alt="Ảnh máy hút bụi"
            />
          </figure>
        </div>

        {/* Login form section - full width on mobile/tablet */}
        <div className="w-full lg:w-1/2">
          <Card className="w-full h-full shadow-none">
            <CardContent className="p-6 md:p-8">
              <div className="mb-6 md:mb-8">
                <Typography variant="h4" className="text-center font-semibold">
                  ĐĂNG NHẬP
                </Typography>
              </div>
              <Box
                component="form"
                className="w-full"
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
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                      size="medium"
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      disabled={loginLoading}
                    >
                      Đăng nhập
                    </ButtonComp>
                  </Grid2>
                </Grid2>
              </Box>
              <div className="mt-4 text-center">
                <p className="mb-2">
                  <span className="text-gray-600 text-sm">
                    Chưa đăng ký tài khoản?
                  </span>{' '}
                  <Link
                    to={PATH.REGISTER}
                    className="text-blue-400 hover:text-blue-600 hover:underline duration-200 text-sm md:text-base"
                  >
                    Đăng ký
                  </Link>
                </p>
                <p className="text-gray-600 text-sm">
                  Quên mật khẩu?{' '}
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-600 hover:underline duration-200"
                  >
                    Nhấn vào đây
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;

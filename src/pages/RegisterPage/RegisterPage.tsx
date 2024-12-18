import ButtonComp from '@/components/ButtonComp/ButtonComp';
import InputText from '@/components/InputText/InputText';
import { cleaner, logo } from '@/constant/image';
import { PATH } from '@/constant/path';
import { useRegister } from '@/hooks/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MouseEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { registerSchema } from './schemas/schema';

const RegisterPage = () => {
  const [showPwd, setShowPwd] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      gender: '',
      dateOfBirth: null,
      roleId: '',
    },
  });

  const { registerUser, isPending: registerLoading } = useRegister();

  const _onSubmit = (data: any) => {
    registerUser(data);
  };

  const handleClickShowPassword = () => {
    setShowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg" className="py-8 md:py-12 md:px-32">
      <div className="flex flex-col md:flex-row border border-sky-500 rounded-xl overflow-hidden">
        <div className="hidden lg:block lg:w-1/2">
          <figure className="w-full h-full overflow-hidden relative flex flex-col items-center justify-evenly">
            <div className="flex items-center justify-center">
              <img
                className="outline-none border-none"
                src={logo}
                alt="Logo Homie"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <img
                className="outline-none border-none"
                src={cleaner}
                alt="Banner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>
        </div>
        <div className="w-full lg:w-1/2">
          <Card className="w-full h-full shadow-none">
            <CardContent className="p-6">
              <div className="mb-6 md:mb-8">
                <Typography variant="h4" className="text-center font-semibold">
                  ĐĂNG KÝ
                </Typography>
              </div>
              <Box
                component="form"
                className=""
                onSubmit={handleSubmit(_onSubmit)}
              >
                <Grid2 container spacing={1} gap={4}>
                  <Grid2 size={12}>
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type="text"
                          label="Họ và tên"
                          size="medium"
                          error={!!errors.name}
                          helperText={errors.name?.message}
                        />
                      )}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type="text"
                          label="Số điện thoại"
                          size="medium"
                          error={!!errors.phone}
                          helperText={errors.phone?.message}
                        />
                      )}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type="text"
                          label="Email cá nhân"
                          size="medium"
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      )}
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box sx={{ width: '56%' }}>
                        <Controller
                          name="dateOfBirth"
                          control={control}
                          render={({ field }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                {...field}
                                label="Ngày sinh"
                                format="DD/MM/YYYY"
                                className="date-picker w-full"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                yearsOrder="desc"
                                slotProps={{
                                  textField: {
                                    error: !!errors.dateOfBirth,
                                    helperText:
                                      errors.dateOfBirth?.message?.toString(),
                                  },
                                }}
                              />
                            </LocalizationProvider>
                          )}
                        />
                      </Box>
                      <Box sx={{ width: '40%' }}>
                        <Controller
                          name="gender"
                          control={control}
                          render={({ field }) => (
                            <FormControl fullWidth error={!!errors.gender}>
                              <InputLabel id="gender-label">
                                Giới tính
                              </InputLabel>
                              <Select
                                {...field}
                                labelId="gender-label"
                                label="Giới tính"
                              >
                                <MenuItem value="">
                                  <em>--- Chọn giới tính ---</em>
                                </MenuItem>
                                <MenuItem value="Male">Nam</MenuItem>
                                <MenuItem value="Female">Nữ</MenuItem>
                              </Select>
                              {errors.gender && (
                                <FormHelperText>
                                  {errors.gender.message?.toString()}
                                </FormHelperText>
                              )}
                            </FormControl>
                          )}
                        />
                      </Box>
                    </Box>
                  </Grid2>
                  <Grid2 size={12}>
                    <Controller
                      name="roleId"
                      control={control}
                      render={({ field }) => (
                        <FormControl fullWidth error={!!errors.roleId}>
                          <InputLabel id="role-label">
                            Đăng ký vai trò
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="role-label"
                            label="Đăng ký vai trò"
                          >
                            <MenuItem value="">
                              <em>--- Chọn vai trò ---</em>
                            </MenuItem>
                            <MenuItem value="2">Người dùng</MenuItem>
                            <MenuItem value="3">Người giúp việc</MenuItem>
                          </Select>
                          {errors.roleId && (
                            <FormHelperText>
                              {errors.roleId.message?.toString()}
                            </FormHelperText>
                          )}
                        </FormControl>
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
                          error={!!errors.password}
                          helperText={errors.password?.message}
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
                      className="w-full bg-blue-500 hover:bg-blue-600"
                      size="medium"
                      fullWidth
                      disabled={registerLoading}
                    >
                      {registerLoading ? 'Đang đăng ký...' : 'Đăng ký'}
                    </ButtonComp>
                  </Grid2>
                </Grid2>
              </Box>
              <div className="text-bottom mt-4 text-center">
                <div className="policy-content mb-2">
                  <p className="text-sm text-gray-600">
                    Bằng việc đăng kí, bạn đã đồng ý với Homie về{' '}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 hover:underline duration-200"
                    >
                      Điều khoản dịch vụ
                    </a>{' '}
                    &{' '}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 hover:underline duration-200"
                    >
                      Chính sách bảo mật
                    </a>
                  </p>
                </div>
                <span className="text-sm text-gray-600">Đã có tài khoản?</span>{' '}
                <Link
                  to={PATH.LOGIN}
                  className="text-sm md:text-base text-blue-400 hover:text-blue-600 hover:underline duration-200"
                >
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

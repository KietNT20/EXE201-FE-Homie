import imgLogo from '@/assets/img/submarine.jpg';
import ButtonComp from '@/components/ButtonComp/ButtonComp';
import IconGoogle from '@/components/IconGoogle/IconGoogle';
import InputText from '@/components/InputText/InputText';
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
import { InputRegisterTypes } from './schemas/type';

const RegisterPage = () => {
  const [showPwd, setShowPwd] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InputRegisterTypes>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      gender: '',
      password: '',
    },
  });

  const { registerUser, isPending: registerLoading } = useRegister();

  const _onSubmit = (data: InputRegisterTypes) => {
    registerUser(data);
  };

  const handleClickShowPassword = () => {
    setShowPwd(!showPwd);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Container className="py-36 m-auto">
      <div className="loginForm border-2 border-sky-50">
        <div className="login-wrap">
          <div className="loginForm__left">
            <figure className="loginForm__left-img">
              <img src={imgLogo} alt="Logo" />
            </figure>
          </div>
          <Card className="loginForm__right px-32 py-4">
            <CardContent>
              <div className="loginForm__right-content mb-8">
                <Typography variant="h3" className="text-center">
                  ĐĂNG KÝ
                </Typography>
              </div>
              <Box
                component="form"
                className="loginForm__right-form"
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
                          placeholder="Họ và tên"
                          size="medium"
                          sx={styles.inputStyles}
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
                          placeholder="Số điện thoại"
                          size="medium"
                          sx={styles.inputStyles}
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
                          placeholder="Email cá nhân"
                          size="medium"
                          sx={styles.inputStyles}
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
                                    helperText: errors.dateOfBirth?.message,
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
                                <MenuItem value="male">Nam</MenuItem>
                                <MenuItem value="female">Nữ</MenuItem>
                              </Select>
                              {errors.gender && (
                                <FormHelperText>
                                  {errors.gender.message}
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
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <InputText
                          {...field}
                          type={showPwd ? 'text' : 'password'}
                          placeholder="Mật khẩu"
                          size="medium"
                          sx={styles.inputStyles}
                          error={!!errors.password}
                          helperText={errors.password?.message}
                          endIcon={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPwd ? (
                                  <Visibility sx={{ fontSize: '2rem' }} />
                                ) : (
                                  <VisibilityOff sx={{ fontSize: '2rem' }} />
                                )}
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
                      className="btn"
                      fullWidth
                      disabled={registerLoading}
                    >
                      {registerLoading ? 'Đang đăng ký...' : 'Đăng ký'}
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
                      className={'btn-google'}
                      fullWidth
                    >
                      <span className="text">Google</span> <IconGoogle />
                    </ButtonComp>
                  </Grid2>
                </Grid2>
              </Box>
              <div className="text-bottom mt-11 text-center">
                <div className="policy-content mb-10">
                  <p className="text">
                    Bằng việc đăng kí, bạn đã đồng ý với Homie về{' '}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Điều khoản dịch vụ
                    </a>{' '}
                    &{' '}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Chính sách bảo mật
                    </a>
                  </p>
                </div>
                <span className="text">Đã có tài khoản?</span>{' '}
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

const styles = {
  inputStyles: {
    '& .MuiInputBase-input': {
      fontSize: '1.4rem',
    },
    '& .MuiInputLabel-root': {
      fontSize: '1.4rem',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '1.2rem',
      marginTop: '8px',
      fontWeight: 500,
    },
  },
};

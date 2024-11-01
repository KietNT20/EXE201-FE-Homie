import { useAppSelector } from '@/hooks/reudxHook';
import { JobPostModalProps } from '@/types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  District,
  ExtendedJobPostFormData,
  jobPostSchema,
} from './schemas/schema';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '95vh',
  overflow: 'auto',
};

const JobPostModal = ({
  open,
  onClose,
  onSubmit,
  categories = [],
  initialData = {},
  error,
  districts = [],
}: JobPostModalProps & { districts: District[] }) => {
  const { userProfile } = useAppSelector((state) => state.profile);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({
    resolver: yupResolver(jobPostSchema),
    defaultValues: {
      userId: userProfile?.id || 0,
      title: initialData.title || '',
      description: initialData.description || '',
      squareMeters: initialData.squareMeters || 0,
      numberOfFloors: initialData.numberOfFloors || 0,
      startDate: initialData.startDate ? dayjs(initialData.startDate) : dayjs(),
      endDate: initialData.endDate ? dayjs(initialData.endDate) : dayjs(),
      status: initialData.status || 'PENDING',
      createDate: initialData.createDate
        ? dayjs(initialData.createDate)
        : dayjs(),
      categorys: initialData.categorys || [],
      streetAddress: '',
      district: initialData.district || { id: 0, district: '' },
    },
  });

  const onSubmitHandler = (data: ExtendedJobPostFormData) => {
    // Tạo địa chỉ đầy đủ
    const fullAddress = `${data.streetAddress}, ${data.district?.district || ''}, TP. HCM`;
    const formattedData = {
      ...data,
      location: fullAddress,
      startDate: data.startDate.toISOString(),
      endDate: data.endDate.toISOString(),
      createDate: data.createDate.toISOString(),
      categorys: data.categorys.map((cat) => ({
        categoryId: cat.categoryId,
      })),
    };
    onSubmit(formattedData);
  };

  React.useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);
  const errorMessage = React.useMemo(() => {
    if (error) {
      return 'Vui lòng kiểm tra lại thông tin, số dư tài khoản, hoặc liên hệ với hỗ trợ nếu cần trợ giúp';
    }
  }, [error]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="job-post-modal"
      aria-describedby="job-post-modal-description"
    >
      <Box sx={style}>
        {/* Error Alert */}
        {error && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}
        <Typography id="job-post-modal" variant="h6" component="h2" mb={3}>
          Tạo công việc mới
        </Typography>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Tiêu đề"
                    error={!!errors.title}
                    helperText={errors.title?.message?.toString()}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Mô tả"
                    multiline
                    rows={4}
                    error={!!errors.description}
                    helperText={errors?.description?.message?.toString()}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="streetAddress"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Địa chỉ chi tiết"
                    error={!!errors.streetAddress}
                    helperText={errors.streetAddress?.message?.toString()}
                    placeholder="Nhập số nhà, tên đường, Phường/xã..."
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="district"
                control={control}
                render={({ field: { onChange, value, ...field } }) => (
                  <Autocomplete
                    {...field}
                    options={districts}
                    getOptionLabel={(option) => option.district}
                    value={value}
                    onChange={(_, newValue) => {
                      onChange(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Quận/Huyện"
                        error={!!errors.district}
                        helperText={errors.district?.message?.toString()}
                        placeholder="Nhập tên quận/huyện..."
                      />
                    )}
                    isOptionEqualToValue={(option, value) =>
                      option.id === value?.id
                    }
                    renderOption={(props, option) => (
                      <li {...props} key={option.id}>
                        {option.district}
                      </li>
                    )}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Controller
                name="squareMeters"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label="Diện tích (m²)"
                    error={!!errors.squareMeters}
                    helperText={errors.squareMeters?.message?.toString()}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <Controller
                name="numberOfFloors"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="number"
                    label="Số tầng"
                    error={!!errors.numberOfFloors}
                    helperText={errors.numberOfFloors?.message?.toString()}
                  />
                )}
              />
            </Grid>

            <Grid size={{ xs: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="startDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label="Ngày bắt đầu"
                      format="DD/MM/YYYY"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.startDate,
                          helperText: errors.startDate?.message?.toString(),
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid size={{ xs: 6 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="endDate"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label="Ngày kết thúc"
                      format="DD/MM/YYYY"
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          error: !!errors.endDate,
                          helperText: errors.endDate?.message?.toString(),
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Controller
                name="categorys"
                control={control}
                render={({ field }) => (
                  <FormControl fullWidth error={!!errors.categorys}>
                    <InputLabel>Danh mục</InputLabel>
                    <Select
                      {...field}
                      multiple
                      value={field.value?.map(
                        (cat: { categoryId: number }) => cat.categoryId,
                      )}
                      onChange={(e) => {
                        const selectedIds = e.target.value as number[];
                        field.onChange(
                          selectedIds.map((id) => ({ categoryId: id })),
                        );
                      }}
                      input={<OutlinedInput label="Danh mục" />}
                    >
                      {categories.map((category) => (
                        <MenuItem key={category.id} value={category.id}>
                          {category.categoryName}{' '}
                          {category.price &&
                            `(${category.price.toLocaleString('vi-VN')}đ)`}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.categorys && (
                      <FormHelperText>
                        {errors.categorys.message?.toString()}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Box display="flex" justifyContent="flex-end" gap={2}>
                <Button onClick={onClose}>Hủy</Button>
                <Button type="submit" variant="contained">
                  Tạo mới
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default JobPostModal;

// UpdateProfileModal.tsx
import { User } from '@/types/types.common';
import {
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

interface UpdateProfileModalProps {
  open: boolean;
  onClose: () => void;
  userDetails: User | undefined;
  onUpdateUser: (data: any) => void;
  disabled?: boolean;
}

const UpdateUserModal = ({
  open,
  onClose,
  userDetails,
  onUpdateUser,
  disabled,
}: UpdateProfileModalProps) => {
  const [formData, setFormData] = useState({
    name: userDetails?.name,
    email: userDetails?.email,
    password: userDetails?.password,
    phone: userDetails?.phone,
    dateOfBirth: userDetails?.dateOfBirth
      ? dayjs(userDetails.dateOfBirth)
      : null,
    gender: userDetails?.gender,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateUser({
      ...formData,
      dateOfBirth: formData.dateOfBirth?.format('YYYY-MM-DD'),
    });
    onClose();
  };

  useEffect(() => {
    if (userDetails) {
      setFormData({
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
        phone: userDetails.phone,
        dateOfBirth: userDetails.dateOfBirth
          ? dayjs(userDetails.dateOfBirth)
          : null,
        gender: userDetails.gender,
      });
    }
  }, [userDetails]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="update-profile-modal"
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 relative">
        <IconButton
          onClick={onClose}
          className="absolute right-4 top-4"
          size="small"
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" className="mb-6">
          Cập nhật thông tin cá nhân
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              fullWidth
              label="Họ và tên"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={disabled}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={disabled}
            />

            <TextField
              fullWidth
              label="Mật khẩu mới"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              disabled={disabled}
              placeholder="Để trống nếu không muốn thay đổi"
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        className="focus:outline-none"
                      >
                        {showPassword ? (
                          <VisibilityOff className="text-gray-600" />
                        ) : (
                          <Visibility className="text-gray-600" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              label="Số điện thoại"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={disabled}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Ngày sinh"
                value={formData.dateOfBirth}
                disabled={disabled}
                onChange={(newValue) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfBirth: newValue,
                  }))
                }
                className="w-full"
              />
            </LocalizationProvider>

            <FormControl fullWidth disabled={disabled}>
              <InputLabel>Giới tính</InputLabel>
              <Select
                value={formData.gender}
                label="Giới tính"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    gender: e.target.value as 'Male' | 'Female',
                  }))
                }
                required
              >
                <MenuItem value="Male">Nam</MenuItem>
                <MenuItem value="Female">Nữ</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button
              variant="text"
              onClick={onClose}
              className="min-w-[100px]"
              color="error"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="min-w-[100px]"
              disabled={disabled}
            >
              Cập nhật
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateUserModal;

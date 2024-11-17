import { JobPostStatus } from '@/types/types';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';

interface StatusUpdateModalProps {
  open: boolean;
  status: JobPostStatus | '';
  onClose: () => void;
  onStatusChange: (event: SelectChangeEvent<JobPostStatus>) => void;
  onSubmit: () => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const STATUS_OPTIONS = [
  { value: JobPostStatus.PENDING, label: 'Đang chờ' },
  { value: JobPostStatus.DONE, label: 'Hoàn thành' },
  { value: JobPostStatus.CANCEL, label: 'Hủy bỏ' },
];

export const StatusUpdateModal = ({
  open,
  status,
  onClose,
  onStatusChange,
  onSubmit,
}: StatusUpdateModalProps) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="status-update-modal">
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2" gutterBottom>
          Cập nhật trạng thái
        </Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="status-select-label">Trạng thái</InputLabel>
          <Select
            labelId="status-select-label"
            value={status}
            label="Trạng thái"
            onChange={onStatusChange}
          >
            {STATUS_OPTIONS.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box
          sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}
        >
          <Button onClick={onClose} color="inherit">
            Hủy
          </Button>
          <Button onClick={onSubmit} variant="contained" disabled={!status}>
            Cập nhật
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

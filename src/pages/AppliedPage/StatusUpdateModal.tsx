import { ApplicationStatus } from '@/types/types';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';

interface StatusUpdateModalProps {
  open: boolean;
  status: ApplicationStatus | '';
  cancelReason: string;
  onClose: () => void;
  onStatusChange: (event: SelectChangeEvent<ApplicationStatus>) => void;
  onReasonChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const STATUS_OPTIONS = [
  { value: ApplicationStatus.PENDING, label: 'Đang chờ' },
  { value: ApplicationStatus.DONE, label: 'Hoàn thành' },
  { value: ApplicationStatus.CANCEL, label: 'Hủy bỏ' },
];

export const StatusUpdateModal = ({
  open,
  status,
  cancelReason,
  onClose,
  onStatusChange,
  onReasonChange,
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
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.value === ApplicationStatus.PENDING}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* Show text input when employee cancel */}
        {status === ApplicationStatus.CANCEL && (
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Lý do hủy"
            value={cancelReason}
            onChange={onReasonChange}
            margin="normal"
            required
            error={!cancelReason}
            helperText={!cancelReason && 'Vui lòng nhập lý do hủy'}
          />
        )}
        <Box
          sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 1 }}
        >
          <Button
            onClick={onClose}
            color="error"
            className="md:min-w-[100px]"
            variant="outlined"
          >
            Hủy
          </Button>
          <Button
            onClick={onSubmit}
            variant="contained"
            disabled={!status}
            className="md:min-w-[100px]"
          >
            Cập nhật
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

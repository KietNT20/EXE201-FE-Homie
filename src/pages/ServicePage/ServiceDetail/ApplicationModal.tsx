import { ApplicationModalProps } from '@/types/types';
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';

const ApplicationModal = ({
  open,
  isSubmitting,
  message,
  onClose,
  onSubmit,
  onMessageChange,
}: ApplicationModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h6" className="font-bold">
          Đăng ký nhận việc
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box className="pt-2">
          <Typography variant="body2" color="text.secondary" className="mb-4">
            Hãy giới thiệu về bản thân và lý do bạn phù hợp với công việc này
          </Typography>
          <TextField
            autoFocus
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            placeholder="Nhập tin nhắn của bạn..."
            value={message}
            onChange={e => onMessageChange(e.target.value)}
            disabled={isSubmitting}
          />
        </Box>
      </DialogContent>
      <DialogActions className="p-4">
        <Button onClick={onClose} disabled={isSubmitting} color="inherit">
          Hủy
        </Button>
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!message.trim() || isSubmitting}
          startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
        >
          Gửi yêu cầu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationModal;

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface ConfirmCancelDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmCancelDialog = ({
  open,
  onClose,
  onConfirm,
}: ConfirmCancelDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Xác nhận hủy đơn ứng tuyển
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Bạn có chắc chắn muốn hủy đơn ứng tuyển này? Hành động này không thể
          hoàn tác.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Quay lại
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
          Xác nhận hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

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
  isCancel: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmCancelDialog = ({
  open,
  onClose,
  onConfirm,
  isCancel,
}: ConfirmCancelDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {isCancel
          ? 'Xác nhận hủy đơn ứng tuyển'
          : 'Xác nhận hoàn thành công việc'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {isCancel
            ? 'Bạn có chắc chắn muốn hủy đơn ứng tuyển này? Hành động này không thể hoàn tác.'
            : 'Bạn có chắc chắn công việc đã hoàn thành? Hành động này không thể hoàn tác.'}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Quay lại
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
          {isCancel ? 'Xác nhận hủy' : 'Xác nhận hoàn thành'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

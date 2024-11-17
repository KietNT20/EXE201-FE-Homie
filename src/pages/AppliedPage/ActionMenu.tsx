import { PATH } from '@/constant/path';
import { Application } from '@/types/types';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ActionMenuProps {
  anchorEl: HTMLElement | null;
  selectedApplication: Application | null;
  onClose: () => void;
  onUpdateStatus: () => void;
}

export const ActionMenu = ({
  anchorEl,
  selectedApplication,
  onClose,
  onUpdateStatus,
}: ActionMenuProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    if (selectedApplication) {
      navigate(`${PATH.SERVICE}/${selectedApplication.jobId}`);
    }
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={handleViewDetails}>
        <VisibilityIcon sx={{ mr: 1, fontSize: 20 }} />
        Xem chi tiết
      </MenuItem>
      <MenuItem onClick={onUpdateStatus}>
        <EditIcon sx={{ mr: 1, fontSize: 20 }} />
        Cập nhật trạng thái
      </MenuItem>
    </Menu>
  );
};

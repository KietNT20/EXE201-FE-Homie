import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import {
  useGetApplicationByUserId,
  useUpdateApplicationStatus,
} from '@/hooks/useManageApplication';
import { Application, JobPostStatus } from '@/types/types';
import { getStatusConfig } from '@/util/getStatusConfig';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STATUS_OPTIONS = [
  { value: JobPostStatus.DONE, label: 'Hoàn thành' },
  { value: JobPostStatus.CANCEL, label: 'Hủy bỏ' },
];

// Modal style
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

const AppliedPage = () => {
  const navigate = useNavigate();
  const { userProfile } = useAppSelector((state) => state.profile);
  const { data: appliedUserData } = useGetApplicationByUserId(userProfile?.id!);
  const { mutate: updateStatusApplied } = useUpdateApplicationStatus();

  // State for menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    application: Application,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedApplication(application);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedApplication(null);
  };

  const handleViewDetails = () => {
    if (selectedApplication) {
      navigate(`${PATH.SERVICE}/${selectedApplication.jobId}`);
    }
    handleMenuClose();
  };

  const handleUpdateStatus = () => {
    setIsModalOpen(true);
    if (selectedApplication) {
      setNewStatus(selectedApplication.status);
    }
    handleMenuClose();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewStatus('');
  };

  const handleStatusSubmit = () => {
    if (selectedApplication && newStatus) {
      updateStatusApplied({
        applicationId: selectedApplication.id,
        status: newStatus,
      });
      handleModalClose();
    }
  };

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD/MM/YYYY HH:mm A');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Danh sách đơn ứng tuyển
      </Typography>

      {appliedUserData?.data && appliedUserData.data.length > 0 ? (
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            '& .MuiTableCell-head': {
              backgroundColor: 'primary.light',
              color: 'primary.contrastText',
              fontWeight: 'bold',
            },
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" width="10%">
                  ID
                </TableCell>
                <TableCell align="center" width="15%">
                  Mã công việc
                </TableCell>
                <TableCell width="30%">Tin nhắn</TableCell>
                <TableCell align="center" width="20%">
                  Trạng thái
                </TableCell>
                <TableCell align="center" width="20%">
                  Thời gian ứng tuyển
                </TableCell>
                <TableCell align="center" width="5%">
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appliedUserData.data.map((application: Application) => {
                const statusConfig = getStatusConfig(application.status);
                return (
                  <TableRow
                    key={application.id}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <TableCell align="center">{application.id}</TableCell>
                    <TableCell align="center">{application.jobId}</TableCell>
                    <TableCell>{application.message}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 0.5,
                              px: 1,
                            }}
                          >
                            <span>{statusConfig.icon}</span>
                            <span>{statusConfig.label}</span>
                          </Box>
                        }
                        color={statusConfig.color}
                        size="small"
                        sx={{ minWidth: '100px' }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {formatDate(application.appliedAt)}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuOpen(e, application)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          sx={{
            py: 6,
            px: 2,
            textAlign: 'center',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" color="text.secondary">
            Chưa có đơn ứng tuyển nào
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Các đơn ứng tuyển của bạn sẽ xuất hiện ở đây
          </Typography>
        </Box>
      )}

      {/* Action Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
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
        <MenuItem onClick={handleUpdateStatus}>
          <EditIcon sx={{ mr: 1, fontSize: 20 }} />
          Cập nhật trạng thái
        </MenuItem>
      </Menu>

      {/* Status Update Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="status-update-modal"
      >
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Cập nhật trạng thái
          </Typography>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Trạng thái</InputLabel>
            <Select
              value={newStatus}
              label="Trạng thái"
              onChange={(e) => setNewStatus(e.target.value)}
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
            <Button onClick={handleModalClose} color="inherit">
              Hủy
            </Button>
            <Button onClick={handleStatusSubmit} variant="contained">
              Cập nhật
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default AppliedPage;

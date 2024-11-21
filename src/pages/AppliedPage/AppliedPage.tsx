import { ApplicationStatus } from '@/types/types';
import { Container, SelectChangeEvent, Typography } from '@mui/material';
import { ActionMenu } from './ActionMenu';
import { ApplicationTable } from './ApplicationTable';
import { ConfirmCancelDialog } from './ConfirmCancelDialog';
import { EmptyState } from './EmptyState';
import { StatusUpdateModal } from './StatusUpdateModal';
import { useApplicationTable } from './useApplicationTable';

const AppliedPage = () => {
  const {
    anchorEl,
    selectedApplication,
    isModalOpen,
    newStatus,
    isConfirmOpen,
    appliedUserData,
    cancelReason,
    setCancelReason,
    handleMenuOpen,
    handleMenuClose,
    handleModalClose,
    handleUpdateStatus,
    handleStatusSubmit,
    handleConfirmCancel,
    handleConfirmClose,
    formatDate,
    setNewStatus,
  } = useApplicationTable();

  const handleStatusChange = (event: SelectChangeEvent<ApplicationStatus>) => {
    setNewStatus(event.target.value as ApplicationStatus);
    if (event.target.value !== ApplicationStatus.CANCEL) {
      setCancelReason('');
    }
  };
  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCancelReason(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Danh sách đơn ứng tuyển
      </Typography>

      {appliedUserData?.data && appliedUserData.data.length > 0 ? (
        <ApplicationTable
          applications={appliedUserData.data}
          onMenuOpen={handleMenuOpen}
          formatDate={formatDate}
        />
      ) : (
        <EmptyState />
      )}

      <ActionMenu
        anchorEl={anchorEl}
        selectedApplication={selectedApplication}
        onClose={handleMenuClose}
        onUpdateStatus={handleUpdateStatus}
      />

      <StatusUpdateModal
        cancelReason={cancelReason}
        open={isModalOpen}
        status={newStatus}
        onClose={handleModalClose}
        onReasonChange={handleReasonChange}
        onStatusChange={handleStatusChange}
        onSubmit={handleStatusSubmit}
      />

      <ConfirmCancelDialog
        isCancel={newStatus === ApplicationStatus.CANCEL}
        open={isConfirmOpen}
        onClose={handleConfirmClose}
        onConfirm={handleConfirmCancel}
      />
    </Container>
  );
};

export default AppliedPage;

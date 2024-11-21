import { useAppSelector } from '@/hooks/reudxHook';
import {
  useGetApplicationByUserId,
  useUpdateApplicationStatus,
} from '@/hooks/useManageApplication';
import { Application, ApplicationStatus } from '@/types/types';
import dayjs from 'dayjs';
import { useState } from 'react';

export const useApplicationTable = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<ApplicationStatus | ''>('');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  const { userProfile } = useAppSelector((state) => state.profile);
  const { data: appliedUserData } = useGetApplicationByUserId(userProfile?.id!);
  const { mutate: updateStatusApplied } = useUpdateApplicationStatus();

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>,
    application: Application,
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedApplication(application);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setNewStatus('');
  };

  const handleUpdateStatus = () => {
    setIsModalOpen(true);
    if (selectedApplication) {
      setNewStatus(selectedApplication.status as ApplicationStatus);
    }
    handleMenuClose();
  };

  const handleStatusSubmit = () => {
    if (selectedApplication && newStatus) {
      if (newStatus === ApplicationStatus.CANCEL && !cancelReason) {
        return;
      }
      setIsConfirmOpen(true);
      setIsModalOpen(false);
    }
  };

  const handleConfirmCancel = () => {
    if (selectedApplication) {
      if (newStatus === ApplicationStatus.CANCEL) {
        updateStatusApplied({
          applicationId: selectedApplication.id,
          status: ApplicationStatus.CANCEL,
          reason: cancelReason,
        });
      } else if (newStatus === ApplicationStatus.DONE) {
        updateStatusApplied({
          applicationId: selectedApplication.id,
          status: ApplicationStatus.DONE,
          reason: null,
        });
      }
    }
    setIsConfirmOpen(false);
    setNewStatus('');
    setCancelReason('');
  };

  const handleConfirmClose = () => {
    setIsConfirmOpen(false);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('DD/MM/YYYY HH:mm A');
  };

  return {
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
  };
};

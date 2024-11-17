import { useAppSelector } from '@/hooks/reudxHook';
import {
  useGetApplicationByUserId,
  useUpdateApplicationStatus,
} from '@/hooks/useManageApplication';
import { Application, JobPostStatus } from '@/types/types';
import dayjs from 'dayjs';
import { useState } from 'react';

export const useApplicationTable = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<JobPostStatus | ''>('');
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

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
      setNewStatus(selectedApplication.status as JobPostStatus);
    }
    handleMenuClose();
  };

  const handleStatusSubmit = () => {
    if (selectedApplication && newStatus) {
      if (newStatus === JobPostStatus.CANCEL) {
        setIsConfirmOpen(true);
        setIsModalOpen(false);
      } else {
        updateStatusApplied({
          applicationId: selectedApplication.id,
          status: newStatus,
        });
        handleModalClose();
      }
    }
  };

  const handleConfirmCancel = () => {
    if (selectedApplication) {
      updateStatusApplied({
        applicationId: selectedApplication.id,
        status: JobPostStatus.CANCEL,
      });
    }
    setIsConfirmOpen(false);
    setNewStatus('');
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

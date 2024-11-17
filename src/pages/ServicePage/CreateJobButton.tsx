import { useCreateJobPost } from '@/hooks/useMangeJobPost';
import { JobPostPayload } from '@/types/types';
import { Category } from '@/types/types.common';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import React, { useCallback, useState } from 'react';
import JobPostModal from './JobPostModal';
import { dataDistrict } from './dataDistrict';

interface CreateJobButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onSuccess?: () => void;
  categories?: Category[];
}

const CreateJobButton = ({
  variant = 'contained',
  size = 'medium',
  className,
  onSuccess,
  categories = [],
}: CreateJobButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create job post mutation
  const {
    mutate: createJobPost,
    isPending: isCreating,
    error,
  } = useCreateJobPost();

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleSubmit = useCallback(
    (data: JobPostPayload) => {
      createJobPost(data, {
        onSuccess: () => {
          handleCloseModal();
          // onSuccess?.();
        },
      });
    },
    [createJobPost, handleCloseModal, onSuccess],
  );

  return (
    <>
      <Button
        variant={variant}
        size={size}
        startIcon={<AddIcon />}
        onClick={handleOpenModal}
        className={className}
        disabled={isCreating}
        color="info"
      >
        Tạo công việc mới
      </Button>

      {isModalOpen && (
        <JobPostModal
          open={isModalOpen}
          districts={dataDistrict}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          categories={categories}
          error={error}
          isPending={isCreating}
        />
      )}
    </>
  );
};

export default React.memo(CreateJobButton);

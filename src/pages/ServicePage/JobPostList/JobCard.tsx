import ChipComp from '@/components/ChipComp/ChipComp';
import { useAppSelector } from '@/hooks/reudxHook';
import { useCreateReview } from '@/hooks/useManageReview';
import { JobPostStatus } from '@/types/types';
import { formatPrice } from '@/util/format';
import { AttachMoney, LocationOn } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useState } from 'react';
import JobDetailModal from './JobDetailModal';
import { JobPostUserResponse } from './JobListCreated';
import ReviewModal from './ReviewModal';

interface JobCardProps {
  job: JobPostUserResponse;
}

const JobCard = ({ job }: JobCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const formatDate = (dateString: string | Date | null | undefined) => {
    return dateString ? new Date(dateString).toLocaleDateString() : '';
  };
  const { createReview } = useCreateReview();
  const { userProfile } = useAppSelector((state) => state.profile);

  const handleReviewSubmit = (rating: number, comment: string | null) => {
    createReview({
      reviewerId: userProfile?.id!,
      jobId: job.jobId,
      rating,
      comment,
    });
  };

  return (
    <>
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 flex flex-col">
          <Box className="flex justify-between items-start mb-3">
            <Typography variant="h6" className="line-clamp-1" title={job.title}>
              {job.title}
            </Typography>
            <ChipComp status={job.status} />
          </Box>

          <Typography
            color="text.secondary"
            className="mb-3 h-12 line-clamp-2"
            title={job.description}
          >
            {job.description}
          </Typography>

          <Box className="space-y-2 mb-3">
            <Box className="flex items-center gap-2">
              <LocationOn fontSize="small" color="action" />
              <Typography
                variant="body2"
                className="line-clamp-1"
                title={job.location}
              >
                {job.location}
              </Typography>
            </Box>
            <Box className="flex items-center gap-2">
              <AttachMoney fontSize="small" color="action" />
              <Typography
                variant="body2"
                className="text-red-500 font-semibold"
              >
                {formatPrice(job.price ?? 0)}
              </Typography>
            </Box>
          </Box>
          <Box className="flex items-center justify-between">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => setOpenModal(true)}
            >
              Xem chi tiết
            </Button>
            {job.status === JobPostStatus.DONE && (
              <Button
                variant="text"
                size="small"
                className="text-yellow-500 font-semibold"
                onClick={() => setOpenReviewModal(true)}
              >
                Đánh giá
              </Button>
            )}
          </Box>
          <Box className="mt-auto">
            <Typography variant="caption" color="text.secondary">
              Ngày tạo: {formatDate(job.createDate)}
            </Typography>
          </Box>
        </CardContent>
      </Card>

      <JobDetailModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        job={job}
      />
      <ReviewModal
        open={openReviewModal}
        onClose={() => setOpenReviewModal(false)}
        onSubmit={handleReviewSubmit}
      />
    </>
  );
};

export default JobCard;

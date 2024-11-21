// JobDetailModal.tsx
import ChipComp from '@/components/ChipComp/ChipComp';
import { formatPrice } from '@/util/format';
import {
  Apartment,
  AttachMoney,
  CalendarToday,
  CleaningServices,
  Close as CloseIcon,
  LocationOn,
  SquareFoot,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Modal, Typography } from '@mui/material';
import CategoryChip from '../CategoryChip';
import { JobPostUserResponse } from './JobListCreated';

interface JobDetailModalProps {
  open: boolean;
  onClose: () => void;
  job: JobPostUserResponse;
}

const JobDetailModal = ({ open, onClose, job }: JobDetailModalProps) => {
  const formatDate = (dateString?: string | Date | null) => {
    return dateString ? new Date(dateString).toLocaleDateString() : 'N/A';
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg w-full max-w-2xl mx-4 p-6 relative">
        <Box>
          <Typography
            variant="h5"
            component={'h3'}
            className="mb-6 font-semibold"
          >
            Chi tiết công việc
          </Typography>
          <IconButton
            onClick={onClose}
            className="absolute right-4 top-4"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className="mb-4">
          <ChipComp status={job.status} />
        </Box>
        <Box className="mb-4">
          <Typography variant="h6" className="">
            Tiêu đề: {job.title}
          </Typography>
        </Box>

        <Box className="space-y-4">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Box className="flex items-center gap-2">
              <LocationOn color="action" />
              <Typography>Địa chỉ: {job.location}</Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <SquareFoot color="action" />
              <Typography>Diện tích: {job.squareMeters} m²</Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <Apartment color="action" />
              <Typography>{job.numberOfFloors} lầu</Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <AttachMoney color="action" />
              <Typography>
                Giá:{' '}
                <span className="text-red-500 font-semibold">
                  {formatPrice(job.price ?? 0)}
                </span>
              </Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <CalendarToday color="action" />
              <Typography>Ngày bắt đầu: {formatDate(job.startDate)}</Typography>
            </Box>

            <Box className="flex items-center gap-2">
              <CalendarToday color="action" />
              <Typography>Ngày kết thúc: {formatDate(job.endDate)}</Typography>
            </Box>
          </Box>

          <Box className="space-y-2">
            <Box className="flex items-center gap-2">
              <CleaningServices color="action" />
              <Typography>Dịch vụ:</Typography>
            </Box>
            <Box className="flex flex-wrap gap-2">
              {job.categoryJobPost?.map((category) => (
                <CategoryChip
                  key={category.categoriesId}
                  categoryId={category.categoriesId}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" className="mb-2">
              Mô tả công việc:
            </Typography>
            <Typography variant="body1" className="whitespace-pre-line">
              {job.description}
            </Typography>
          </Box>

          <Divider />

          <Typography variant="body2" color="text.secondary">
            Ngày tạo: {formatDate(job.createDate)}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default JobDetailModal;

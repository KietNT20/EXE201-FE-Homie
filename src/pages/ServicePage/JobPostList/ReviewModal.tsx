import { Star } from '@mui/icons-material';
import {
  Box,
  Button,
  Modal,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (rating: number, comment: string) => void;
}

const ReviewModal = ({ open, onClose, onSubmit }: ReviewModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(rating, comment);
    onClose();
    setRating(0);
    setComment('');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        width={800}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl"
      >
        <Typography variant="h6" className="mb-4">
          Đánh giá chât lượng công việc
        </Typography>

        <Stack spacing={3}>
          <Box className="flex flex-col items-center">
            <Rating
              value={rating}
              onChange={(_, value) => setRating(value || 0)}
              precision={1}
              icon={<Star fontSize="large" />}
              emptyIcon={<Star fontSize="large" />}
            />
          </Box>

          <TextField
            multiline
            rows={4}
            placeholder="Đánh giá nhân viên bên Homie"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            fullWidth
          />

          <Typography component="legend" className="mb-2 text-yellow-400">
            Cảm ơn những sự đánh giá của bạn để giúp chúng tôi cải thiện dịch vụ
          </Typography>

          <Box className="flex justify-end gap-2">
            <Button variant="outlined" onClick={onClose}>
              Hủy
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!rating}
            >
              Gửi đánh giá
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ReviewModal;

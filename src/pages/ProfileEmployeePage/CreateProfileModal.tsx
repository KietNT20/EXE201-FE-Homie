import React, { useState } from 'react';
import { Button, TextField, Modal, Box } from '@mui/material';
import { Profiles } from '@/types/types';
import { useCreateProfiles } from '@/hooks/useManageProfiles';

interface CreateProfileModalProps {
  open: boolean;
  onClose: () => void;
  userId: number;
}

const CreateProfileModal: React.FC<CreateProfileModalProps> = ({
  open,
  onClose,
  userId,
}) => {
  const [profileData, setProfileData] = useState<Profiles>({
    userId: userId,
    bio: '',
    skills: '',
    experience: '',
    availability: '',
    ratingAvg: 0,
  });

  const { mutate: createProfile } = useCreateProfiles();

  const handleCreateProfile = () => {
    createProfile(profileData);
    handleClose();
  };

  const handleClose = () => {
    setProfileData({
      userId: userId,
      bio: '',
      skills: '',
      experience: '',
      availability: '',
      ratingAvg: 0,
    });
    onClose();
  };

  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: 600,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          margin: 0,
        }}
      >
        <h2>Đơn đăng kí trở thành đối tác</h2>
        <form>
          <TextField
            className="mt-6"
            label="Thông tin cá nhân"
            fullWidth
            variant="outlined"
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
          />
          <TextField
            className="mt-4"
            label="Kỹ năng"
            fullWidth
            variant="outlined"
            value={profileData.skills}
            onChange={(e) =>
              setProfileData({ ...profileData, skills: e.target.value })
            }
          />
          <TextField
            className="mt-4"
            label="Kinh nghiệm"
            fullWidth
            variant="outlined"
            value={profileData.experience}
            onChange={(e) =>
              setProfileData({ ...profileData, experience: e.target.value })
            }
          />
          <TextField
            className="mt-4"
            label="Thời gian có sẵn"
            fullWidth
            variant="outlined"
            value={profileData.availability}
            onChange={(e) =>
              setProfileData({ ...profileData, availability: e.target.value })
            }
          />
          <TextField
            className="mt-4"
            label="Đánh giá"
            fullWidth
            variant="outlined"
            type="number"
            value={profileData.ratingAvg}
            onChange={(e) =>
              setProfileData({
                ...profileData,
                ratingAvg: Number(e.target.value),
              })
            }
          />
        </form>
        <div className="mt-4">
          <Button
            className=" px-8"
            size="medium"
            variant="contained"
            color="primary"
            onClick={handleCreateProfile}
          >
            Tạo
          </Button>
          <Button
            className="ml-4 px-8"
            size="medium"
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            Hủy
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateProfileModal;

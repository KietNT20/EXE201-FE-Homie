import { useCreateProfiles } from '@/hooks/useManageProfiles';
import { ProfilesPayload } from '@/types/types';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

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
  const [profileData, setProfileData] = useState<ProfilesPayload>({
    userId: userId,
    bio: '',
    skills: '',
    experience: '',
    availability: '',
  });

  const { mutate: createProfile } = useCreateProfiles();

  const handleCreateProfile = () => {
    createProfile(profileData);
    handleClose();
  };

  const handleClose = () => {
    setProfileData({
      userId: userId!,
      bio: '',
      skills: '',
      experience: '',
      availability: '',
    });
    onClose();
  };

  return (
    <Modal
      className="flex items-center justify-center"
      open={open!}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: 800,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          margin: 0,
        }}
      >
        <Typography variant='h4'>Tạo hồ sơ công việc của bạn</Typography>
        <form>
          <TextField
            className="mt-4"
            label="Kỹ năng"
            fullWidth
            multiline
            variant="outlined"
            value={profileData.skills}
            onChange={(e) =>
              setProfileData({ ...profileData, skills: e.target.value })
            }
          />
          <TextField
            className="mt-4"
            label="Kinh nghiệm làm việc"
            fullWidth
            multiline
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
            multiline
            variant="outlined"
            value={profileData.availability}
            onChange={(e) =>
              setProfileData({ ...profileData, availability: e.target.value })
            }
          />
          <TextField
            className="mt-6"
            label="Miêu tả về bản thân"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
          />
        </form>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            className="px-8"
            size="medium"
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button
            className="px-8"
            size="medium"
            variant="outlined"
            color="info"
            onClick={handleCreateProfile}
          >
            Tạo
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CreateProfileModal;

import {
  useCreateProfiles,
  useUpdateProfiles,
} from '@/hooks/useManageProfiles';
import { Profiles, ProfilesPayload } from '@/types/types';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface CreateProfileModalProps {
  open: boolean;
  onClose: () => void;
  userId: number;
  isUpdate: boolean;
  profilesData?: Profiles;
}

const CreateProfileModal: React.FC<CreateProfileModalProps> = ({
  open,
  onClose,
  userId,
  isUpdate,
  profilesData,
}) => {
  const [profileData, setProfileData] = useState<ProfilesPayload>({
    userId: userId,
    bio: '',
    skills: '',
    experience: '',
    availability: '',
  });

  const { mutate: createProfiles, isPending: createProfilesPending } =
    useCreateProfiles();
  const { mutate: updateProfiles, isPending: updateProfilesPending } =
    useUpdateProfiles(profilesData?.profileId!);

  useEffect(() => {
    if (isUpdate && profilesData) {
      setProfileData({
        userId: userId,
        bio: profilesData.bio || '',
        skills: profilesData.skills || '',
        experience: profilesData.experience || '',
        availability: profilesData.availability || '',
      });
    } else {
      // Reset form khi mở modal tạo mới
      setProfileData({
        userId: userId,
        bio: '',
        skills: '',
        experience: '',
        availability: '',
      });
    }
  }, [isUpdate, profilesData, userId, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isUpdate) {
      updateProfiles(profileData);
    } else {
      createProfiles(profileData);
    }
    handleClose();
  };

  const handleClose = () => {
    setProfileData({
      userId: userId,
      bio: '',
      skills: '',
      experience: '',
      availability: '',
    });
    onClose();
  };

  const isFormValid = () => {
    return (
      profileData.skills.trim() !== '' &&
      profileData.experience.trim() !== '' &&
      profileData.availability.trim() !== '' &&
      profileData.bio.trim() !== ''
    );
  };

  const isPending = createProfilesPending || updateProfilesPending;

  return (
    <Modal
      className="flex items-center justify-center"
      open={open}
      onClose={handleClose}
    >
      <Box className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl mx-4">
        <Typography variant="h5" className="mb-6">
          {isUpdate ? 'Cập nhật hồ sơ' : 'Tạo hồ sơ công việc của bạn'}
        </Typography>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField
            label="Kỹ năng"
            fullWidth
            multiline
            required
            variant="outlined"
            value={profileData.skills}
            onChange={(e) =>
              setProfileData({ ...profileData, skills: e.target.value })
            }
            placeholder="Ví dụ: Lau dọn, nấu ăn, giặt ủi..."
            helperText="Liệt kê các kỹ năng của bạn"
          />

          <TextField
            label="Kinh nghiệm làm việc"
            fullWidth
            multiline
            required
            variant="outlined"
            value={profileData.experience}
            onChange={(e) =>
              setProfileData({ ...profileData, experience: e.target.value })
            }
            placeholder="Mô tả kinh nghiệm làm việc của bạn"
          />

          <TextField
            label="Thời gian có sẵn"
            fullWidth
            multiline
            required
            variant="outlined"
            value={profileData.availability}
            onChange={(e) =>
              setProfileData({ ...profileData, availability: e.target.value })
            }
            placeholder="Ví dụ: Thứ 2-6, 9h-17h"
          />

          <TextField
            label="Miêu tả về bản thân"
            fullWidth
            multiline
            required
            rows={4}
            variant="outlined"
            value={profileData.bio}
            onChange={(e) =>
              setProfileData({ ...profileData, bio: e.target.value })
            }
            placeholder="Giới thiệu ngắn gọn về bản thân..."
          />

          <Box className="flex justify-end gap-3 pt-4">
            <Button
              variant="outlined"
              color="error"
              onClick={handleClose}
              disabled={isPending}
              className="md:min-w-[100px]"
            >
              Hủy
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="md:min-w-[100px]"
              disabled={isPending || !isFormValid()}
            >
              {isPending
                ? 'Đang xử lý...'
                : isUpdate
                  ? 'Cập nhật'
                  : 'Tạo hồ sơ'}
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateProfileModal;

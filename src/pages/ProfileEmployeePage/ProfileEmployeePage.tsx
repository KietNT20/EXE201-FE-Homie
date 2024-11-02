import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '@/hooks/reudxHook';
import CreateProfileModal from './CreateProfileModal';
import ProfileDetails from './ProfileDetails';

const ProfileEmployee = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const userID = userProfile.id;
  const [open, setOpen] = useState(false);
  const roleID = userProfile.roleId;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="ProfileEmployee">
      <h1>Hồ Sơ Nhân Viên</h1>
      <ProfileDetails />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Cập nhật thông tin
      </Button>
      <CreateProfileModal open={open} onClose={handleClose} userId={userID} />
    </section>
  );
};

export default ProfileEmployee;

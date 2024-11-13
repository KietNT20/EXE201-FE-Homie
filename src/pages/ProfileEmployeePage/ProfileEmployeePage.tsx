import { useAppSelector } from '@/hooks/reudxHook';
import { Button } from '@mui/material';
import { useState } from 'react';
import CreateProfileModal from './CreateProfileModal';
import ProfileDetails from './ProfileDetails';

const ProfileEmployee = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const userID = userProfile.id;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="ProfileEmployee">
      <ProfileDetails />
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Cập nhật thông tin
      </Button>
      <CreateProfileModal open={open} onClose={handleClose} userId={userID} />
    </section>
  );
};

export default ProfileEmployee;
import { useAppSelector } from '@/hooks/reudxHook';
import { Button } from '@mui/material';
import { useState } from 'react';
import CreateProfileModal from './CreateProfileModal';
import ProfileDetails from './ProfileDetails';

const ProfileEmployee = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="ProfileEmployee">
      <div className="container py-6">
        <ProfileDetails />
        <div className="mt-3 flex flex-row-reverse">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Cập nhật thông tin
          </Button>
        </div>
        <CreateProfileModal
          open={open}
          onClose={handleClose}
          userId={userProfile?.id!}
        />
      </div>
    </section>
  );
};

export default ProfileEmployee;

import { useAppSelector } from '@/hooks/reudxHook';
import { useGetUserById, useUpdateUser } from '@/hooks/useManageUser';
import { Button, Container } from '@mui/material';
import { useState } from 'react';
import CreateProfileModal from './CreateProfileModal';
import ProfileDetails from './ProfileDetails';
import UpdateProfileModal from './UpdateProfileModal';

const ProfileEmployee = () => {
  const [openProfiles, setOpenProfiles] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const { userProfile } = useAppSelector((state) => state.profile);
  const { data: userDetails, isLoading: userDetailLoading } = useGetUserById(
    userProfile?.id ?? 0,
  );
  const { mutate: doUpdateUser } = useUpdateUser(userProfile?.id!);

  const handleOpenProfileModal = () => setOpenProfiles(true);
  const handleCloseProfileModal = () => setOpenProfiles(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  return (
    <section className="min-h-screen bg-gray-50">
      <Container maxWidth="lg" className="py-6">
        <ProfileDetails
          userDetails={userDetails?.data}
          profileLoading={userDetailLoading}
        />
        <div className="mt-3 flex flex-row-reverse gap-3">
          <Button
            variant="contained"
            color="info"
            onClick={handleOpenUpdateModal}
          >
            Cập nhật thông tin cá nhân
          </Button>
          {userProfile?.roleId === 3 && (
            <Button
              variant="contained"
              color="info"
              onClick={handleOpenProfileModal}
            >
              Tạo hồ sơ công việc
            </Button>
          )}
        </div>
        <CreateProfileModal
          open={openProfiles}
          onClose={handleCloseProfileModal}
          userId={userProfile?.id!}
        />
        <UpdateProfileModal
          open={openUpdateModal}
          onClose={handleCloseUpdateModal}
          userDetails={userDetails?.data}
          onUpdateUser={doUpdateUser}
        />
      </Container>
    </section>
  );
};

export default ProfileEmployee;

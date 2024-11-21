import { useAppSelector } from '@/hooks/reudxHook';
import { useGetProfiles } from '@/hooks/useManageProfiles';
import { useGetUserById, useUpdateUser } from '@/hooks/useManageUser';
import { Button, Container } from '@mui/material';
import { useState } from 'react';
import CreateProfileModal from './CreateProfileModal';
import ProfileDetails from './ProfileDetails';
import UpdateUserModal from './UpdateUserModal';

const ProfileEmployee = () => {
  const [openProfiles, setOpenProfiles] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const { userProfile } = useAppSelector((state) => state.profile);
  const { data: userDetails, isLoading: userDetailLoading } = useGetUserById(
    userProfile?.id ?? 0,
  );
  const { mutate: doUpdateUser, isPending: updateUserPending } = useUpdateUser(
    userProfile?.id!,
  );
  const userId = userProfile?.roleId === 3 ? userProfile.id : undefined;
  const { data: profilesData } = useGetProfiles(userId ?? 0);
  // Determine if profile exists
  const hasProfile = profilesData?.data !== undefined;
  const handleOpenProfileModal = () => setOpenProfiles(true);
  const handleCloseProfileModal = () => setOpenProfiles(false);
  const handleOpenUpdateModal = () => setOpenUpdateModal(true);
  const handleCloseUpdateModal = () => setOpenUpdateModal(false);

  return (
    <section className="min-h-screen bg-gray-50">
      <Container maxWidth="lg" className="py-6">
        <ProfileDetails
          profileUSerId={profilesData?.data}
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
              {hasProfile ? 'Cập nhật hồ sơ' : 'Tạo hồ sơ'}
            </Button>
          )}
        </div>
        <CreateProfileModal
          open={openProfiles}
          onClose={handleCloseProfileModal}
          userId={userProfile?.id!}
          isUpdate={hasProfile}
          profilesData={profilesData?.data}
        />
        <UpdateUserModal
          open={openUpdateModal}
          onClose={handleCloseUpdateModal}
          userDetails={userDetails?.data}
          onUpdateUser={doUpdateUser}
          disabled={updateUserPending}
        />
      </Container>
    </section>
  );
};

export default ProfileEmployee;

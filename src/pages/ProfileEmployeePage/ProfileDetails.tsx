import React from 'react';
import { Box, Typography, Avatar, CircularProgress } from '@mui/material';
import { useAppSelector } from '@/hooks/reudxHook';
import { useGetUserById } from '@/hooks/useManageUser';
import { formatDate } from '@/util/format';

const ProfileDetails: React.FC = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const profileId = userProfile.id;
  //   const { data, isLoading, isError } = useGetProfiles(profileId);
  const { data: userDetails } = useGetUserById(profileId);
  console.log(userDetails?.data, 'userDetails 111');
  //   if (isLoading) {
  //     return (
  //       <Box
  //         display="flex"
  //         justifyContent="center"
  //         alignItems="center"
  //         height="100vh"
  //       >
  //         <CircularProgress />
  //       </Box>
  //     );
  //   }

  //   if (isError || !data) {
  //     return <div>Không thể tải thông tin hồ sơ.</div>;
  //   }

  //   const profile = data.data;

  return (
    <Box padding={4}>
      <Typography variant="h4" gutterBottom>
        Thông Tin Chi Tiết Hồ Sơ
      </Typography>

      <Box display="flex" alignItems="center" marginBottom={3}>
        <Avatar
          src={userDetails?.data.avatarUrl}
          alt={userDetails?.data.name}
          sx={{ width: 100, height: 100, marginRight: 2 }}
        />
        <Box>
          <Typography variant="h6">{userDetails?.data.name}</Typography>
          <Typography variant="body1" color="textSecondary">
            {userDetails?.data.email}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {userDetails?.data.phone}
          </Typography>
        </Box>
      </Box>

      <Box marginBottom={3}>
        <Typography variant="h6">Thông Tin Khác</Typography>
        <Typography variant="body1">
          Ngày sinh: {formatDate(userDetails?.data.dateOfBirth)}
        </Typography>
        <Typography variant="body1">
          Giới tính: {userDetails?.data.gender === 'male' ? 'Nam' : 'Nữ'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileDetails;

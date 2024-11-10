import { useAppSelector } from '@/hooks/reudxHook';
import { useGetProfiles } from '@/hooks/useManageProfiles';
import { useGetUserById } from '@/hooks/useManageUser';
import { formatDate } from '@/util/format';
import {
  AccessTime,
  CalendarToday,
  Person,
  Star,
  Work,
} from '@mui/icons-material';
import { Avatar, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const ProfileDetails: React.FC = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const profileId = userProfile.id;
  const { data: profileUSerId, isLoading, isError } = useGetProfiles(profileId);
  const { data: userDetails } = useGetUserById(profileId);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (isError || !profileUSerId) {
    return (
      <div className="text-center text-red-600">
        Không thể tải thông tin hồ sơ.
      </div>
    );
  }

  const profileInfo = profileUSerId.data;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
      <Typography
        variant="h4"
        className="text-3xl font-bold text-center text-blue-600 mb-8"
      >
        Thông Tin Chi Tiết Hồ Sơ
      </Typography>

      <div className="flex items-center mb-8 space-x-4">
        <Avatar
          src={userDetails?.data.avatarUrl}
          alt={userDetails?.data.name}
          className="w-24 h-24 rounded-full shadow-lg border-4 border-blue-300"
        />
        <div>
          <Typography
            variant="h6"
            className="text-xl font-semibold text-gray-700"
          >
            {userDetails?.data.name}
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            {userDetails?.data.email}
          </Typography>
          <Typography variant="body1" className="text-gray-500">
            {userDetails?.data.phone}
          </Typography>
        </div>
      </div>

      {/* Information Card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <Typography
          variant="h6"
          className="text-lg font-semibold text-gray-700 mb-4"
        >
          Thông Tin Khác
        </Typography>

        {/* Date of Birth */}
        <div className="flex items-center space-x-2">
          <CalendarToday className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Ngày sinh: {formatDate(userDetails?.data.dateOfBirth)}
          </Typography>
        </div>

        {/* Gender */}
        <div className="flex items-center space-x-2">
          <Person className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Giới tính: {userDetails?.data.gender === 'male' ? 'Nam' : 'Nữ'}
          </Typography>
        </div>

        {/* Bio/Experience */}
        <div className="flex items-center space-x-2">
          <Work className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Kinh nghiệm: {profileInfo?.bio || 'Không có thông tin'}
          </Typography>
        </div>

        {/* Availability */}
        <div className="flex items-center space-x-2">
          <AccessTime className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Thời gian: {profileInfo?.availability || 'Không có thông tin'}
          </Typography>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <Star className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Đánh giá: {profileInfo?.ratingAvg || 'Không có thông tin'}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

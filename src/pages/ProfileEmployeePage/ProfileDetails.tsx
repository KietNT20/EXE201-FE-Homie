import { useAppSelector } from '@/hooks/reudxHook';
import { useGetProfiles } from '@/hooks/useManageProfiles';
import { useGetUserById } from '@/hooks/useManageUser';
import { formatDate } from '@/util/format';
import {
  AccessTime,
  CalendarToday,
  EmailOutlined,
  Person,
  Phone,
  Star,
  Work,
} from '@mui/icons-material';
import { Avatar, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const ProfileDetails: React.FC = () => {
  const { userProfile } = useAppSelector((state) => state.profile);
  // Check if user is employee
  const userId = userProfile?.roleId === 3 ? userProfile.id : undefined;
  // Get Profiles by User Id
  const { data: profileUSerId, isLoading: profileIsLoading } = useGetProfiles(
    userId ?? 0,
  );
  // Get User by Id
  const { data: userDetails, isLoading: userDetailLoading } = useGetUserById(
    userProfile?.id,
  );

  if (userDetailLoading || profileIsLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="text-center text-red-600">
        Không thể tải thông tin hồ sơ.
      </div>
    );
  }

  const profileInfo = profileUSerId?.data;

  return (
    <div className="profile-detail">
      <Typography
        variant="h4"
        className="text-3xl font-bold text-center text-blue-600 mb-6"
      >
        Thông Tin Chi Tiết Hồ Sơ
      </Typography>

      <div className="flex items-center mb-4 space-x-4">
        <Avatar
          src={userDetails?.data.avatarUrl}
          alt={userDetails?.data.name}
          className="w-24 h-24 rounded shadow-lg border-4 border-blue-300"
        />
        <div>
          <Typography
            variant="h6"
            className="text-xl font-semibold text-gray-700"
          >
            {userDetails?.data.name}
          </Typography>
        </div>
      </div>

      {/* Information Card */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
        <Typography
          variant="h6"
          className="text-lg font-semibold text-gray-700 mb-4"
        >
          Thông Tin Cá Nhân
        </Typography>
        {/* Email */}
        <div className="flex items-center space-x-2">
          <EmailOutlined className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Email: {userDetails?.data.email}
          </Typography>
        </div>
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <Phone className="text-blue-500" />
          <Typography variant="body1" className="text-gray-600">
            Số điện thoại: {userDetails?.data.phone}
          </Typography>
        </div>
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
        {profileInfo && (
          <div className="flex items-center space-x-2">
            <Work className="text-blue-500" />
            <Typography variant="body1" className="text-gray-600">
              Kinh nghiệm: {profileInfo?.bio || 'Không có thông tin'}
            </Typography>
          </div>
        )}
        {/* Availability */}
        {profileInfo && (
          <div className="flex items-center space-x-2">
            <AccessTime className="text-blue-500" />
            <Typography variant="body1" className="text-gray-600">
              Thời gian: {profileInfo?.availability || 'Không có thông tin'}
            </Typography>
          </div>
        )}
        {/* Rating */}
        {profileInfo && (
          <div className="flex items-center space-x-2">
            <Star className="text-blue-500" />
            <Typography variant="body1" className="text-gray-600">
              Đánh giá: {profileInfo?.ratingAvg || 'Không có thông tin'}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;

import { useAppSelector } from '@/hooks/reudxHook';
import { useGetProfiles } from '@/hooks/useManageProfiles';
import { UserProfile } from '@/types/reduxStateType';
import { formatDate } from '@/util/format';
import {
  AccessTime,
  AccountBox,
  CalendarToday,
  Description,
  EmailOutlined,
  Person,
  Phone,
  Star,
  Work,
} from '@mui/icons-material';
import { Avatar, CircularProgress } from '@mui/material';

interface ProfileDetailsProps {
  profileLoading: unknown;
  userDetails: UserProfile;
}

const ProfileDetails = ({
  profileLoading,
  userDetails,
}: ProfileDetailsProps) => {
  const { userProfile } = useAppSelector((state) => state.profile);
  const userId = userProfile?.roleId === 3 ? userProfile.id : undefined;
  const { data: profileUSerId, isLoading: profileIsLoading } = useGetProfiles(
    userId ?? 0,
  );

  if (profileLoading || profileIsLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <CircularProgress className="mb-4" />
          <p className="text-gray-600">Đang tải thông tin...</p>
        </div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <p className="text-red-600">Không thể tải thông tin hồ sơ.</p>
          <button className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700">
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  const InfoItem = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: React.ElementType;
    label: string;
    value: string | undefined;
  }) => (
    <div className="transform rounded-lg bg-white p-4 shadow-md border-2 border-sky-500">
      <div className="flex items-start space-x-3">
        <div className="rounded-full bg-blue-50 p-2">
          <Icon className="text-blue-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-1 text-gray-800">{value || 'Không có thông tin'}</p>
        </div>
      </div>
    </div>
  );

  return (
    <figure>
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-8 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 p-6 text-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Avatar
              src={userDetails.avatarUrl}
              alt={userDetails.name}
              className="h-32 w-32 border-4 border-white shadow-xl"
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold">{userDetails.name}</h2>
              <p className="mt-2 text-blue-100">Thông Tin Chi Tiết Hồ Sơ</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Personal Information Section */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="mb-6 text-xl font-semibold text-gray-800">
              Thông Tin Cá Nhân
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <InfoItem
                icon={EmailOutlined}
                label="Email"
                value={userDetails.email}
              />
              <InfoItem
                icon={Phone}
                label="Số điện thoại"
                value={userDetails.phone}
              />
              <InfoItem
                icon={CalendarToday}
                label="Ngày sinh"
                value={formatDate(userDetails.dateOfBirth)}
              />
              <InfoItem
                icon={Person}
                label="Giới tính"
                value={userDetails.gender === 'Male' ? 'Nam' : 'Nữ'}
              />
            </div>
          </div>

          {/* Professional Information Section */}
          {profileUSerId && (
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                Thông Tin Chuyên Môn
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <InfoItem
                  icon={AccountBox}
                  label="Kinh nghiệm làm việc"
                  value={profileUSerId?.experience}
                />
                <InfoItem
                  icon={Work}
                  label="Kỹ năng"
                  value={profileUSerId?.skills}
                />
                <InfoItem
                  icon={AccessTime}
                  label="Thời gian"
                  value={profileUSerId?.availability}
                />
                <InfoItem
                  icon={Star}
                  label="Đánh giá"
                  value={profileUSerId?.ratingAvg}
                />
              </div>
            </div>
          )}

          {/* Bio Section */}
          {profileUSerId?.bio && (
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Giới thiệu
              </h2>
              <div className="flex space-x-3">
                <Description className="text-blue-600" />
                <p className="text-gray-600">{profileUSerId.bio}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </figure>
  );
};

export default ProfileDetails;

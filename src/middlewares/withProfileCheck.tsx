import Loading from '@/components/Loading/Loading';
import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { useGetProfiles } from '@/hooks/useManageProfiles';
import WarningIcon from '@mui/icons-material/Warning';
import { Box, Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const WithProfileCheck = () => {
  const location = useLocation();
  const { userProfile } = useAppSelector((state) => state.profile);
  const userId = userProfile?.roleId === 3 ? userProfile.id : undefined;
  const { data: profilesData, isLoading, error } = useGetProfiles(userId ?? 0);

  // Kiểm tra có profile hay chưa
  const hasProfile = profilesData?.data !== undefined;

  // Bỏ qua check nếu:
  // 1. Không phải employee
  // 2. Đang ở trang profile
  if (
    userProfile?.roleId !== 3 ||
    location.pathname === PATH.PROFILE_EMPLOYEE
  ) {
    return <Outlet />;
  }

  if (isLoading) {
    return (
      <Box className="flex h-screen w-full items-center justify-center">
        <Loading />
      </Box>
    );
  }

  // Redirect to profile page if no profile exists
  if (!hasProfile) {
    toast.dismiss();
    toast('Vui lòng tạo hồ sơ công việc để tiếp tục');
    return <Navigate to={PATH.PROFILE_EMPLOYEE} replace />;
  }

  if (error) {
    return (
      <Box className="flex h-screen w-full flex-col items-center justify-center gap-4">
        <WarningIcon color="error" sx={{ fontSize: 48 }} />
        <Typography variant="h6" color="error">
          Đã có lỗi xảy ra khi kiểm tra thông tin profile
        </Typography>
      </Box>
    );
  }

  return <Outlet />;
};

export default WithProfileCheck;

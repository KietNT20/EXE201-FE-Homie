import { PATH } from '@/constant/path';
import { useGetEWalletByUserId } from '@/hooks/useManageWallet';
import { formatPrice } from '@/util/format';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface UserProfileMenuProps {
  userProfile: any;
  onLogout: () => void;
}

const UserProfileMenu = ({ userProfile, onLogout }: UserProfileMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data: EWalletUser, refetch: refetchWallet } = useGetEWalletByUserId(
    userProfile?.id,
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
  };

  useEffect(() => {
    refetchWallet();
  }, []);

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <AccountCircle fontSize="medium" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem>{userProfile?.email}</MenuItem>
        <MenuItem className="text-yellow-500">
          Số dư: {formatPrice(EWalletUser?.data.balance || 0)}
        </MenuItem>
        <MenuItem
          className="hover:text-blue-500 duration-200"
          component={NavLink}
          to={PATH.PROFILE_EMPLOYEE}
          onClick={handleMenuClose}
        >
          Thông tin cá nhân
        </MenuItem>
        <MenuItem
          className="hover:text-blue-500 duration-200"
          component={NavLink}
          to={PATH.JOB_USER}
          onClick={handleMenuClose}
        >
          Các nhiệm vụ đã tạo
        </MenuItem>
        {userProfile?.roleId === 3 && (
          <MenuItem
            className="hover:text-blue-500 duration-200"
            component={NavLink}
            to={PATH.APPLIED}
            onClick={handleMenuClose}
          >
            Các nhiệm vụ đã ứng tuyển
          </MenuItem>
        )}
        <MenuItem
          className="hover:text-blue-500 duration-200"
          component={NavLink}
          to={PATH.TRANSACTION}
          onClick={handleMenuClose}
        >
          Lịch sử giao dịch
        </MenuItem>
        <MenuItem
          className="hover:text-red-500 duration-200"
          onClick={handleLogout}
        >
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserProfileMenu;

import { PATH } from '@/constant/path';
import { useGetEWalletByUserId } from '@/hooks/useManageWallet';
import { formatPrice } from '@/util/format';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface UserProfileMenuProps {
  userProfile: any;
  onLogout: () => void;
}

const UserProfileMenu = ({ userProfile, onLogout }: UserProfileMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { data: EWalletUser } = useGetEWalletByUserId(userProfile?.id);

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
        <MenuItem>{formatPrice(EWalletUser?.data.balance)}</MenuItem>
        <MenuItem
          component={NavLink}
          to={PATH.PROFILE}
          onClick={handleMenuClose}
        >
          Thông tin cá nhân
        </MenuItem>
        <MenuItem
          component={NavLink}
          to={PATH.APPLIED}
          onClick={handleMenuClose}
        >
          Các nhiệm vụ đã ứng tuyển
        </MenuItem>
        <MenuItem
          component={NavLink}
          to={PATH.TRANSACTION}
          onClick={handleMenuClose}
        >
          Lịch sử giao dịch
        </MenuItem>
        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
      </Menu>
    </>
  );
};

export default UserProfileMenu;

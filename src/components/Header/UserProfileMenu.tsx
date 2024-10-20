import { PATH } from '@/constant/path';
import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface UserProfileMenuProps {
  userProfile: any;
  onLogout: () => void;
}

const UserProfileMenu = ({ userProfile, onLogout }: UserProfileMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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
      {!userProfile ? (
        <Button
          component={NavLink}
          to={PATH.LOGIN}
          className="header__toolbar-btn"
          variant="contained"
          color="primary"
        >
          Đăng nhập
        </Button>
      ) : (
        <>
          <div className="flex items-center">
            <IconButton onClick={handleMenuOpen}>
              <AccountCircle fontSize="large" />
            </IconButton>
            <Typography variant="body1">{userProfile.email}</Typography>
          </div>
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
            <MenuItem
              component={NavLink}
              to="/profile"
              onClick={handleMenuClose}
            >
              Thông tin cá nhân
            </MenuItem>
            <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserProfileMenu;

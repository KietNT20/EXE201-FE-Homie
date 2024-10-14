import logo from '@/assets/img/logo-homie.png';
import { PATH } from '@/constant/path';
import { useAppSelector } from '@/hooks/reudxHook';
import { RootState } from '@/store/store';
import tokenMethod from '@/util/token';
import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SvgIcon,
  Toolbar,
} from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import UserProfileMenu from './UserProfileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { userProfile } = useAppSelector((state: RootState) => state.profile);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const _onLogout = () => {
    toast.dismiss();
    localStorage.clear();
    toast.success('Đăng xuất thành công');
    navigate(PATH.HOME);
  };

  const menuItems = [
    { path: PATH.HOME, label: 'Trang chủ' },
    { path: PATH.ABOUT, label: 'Về Homie' },
    { path: PATH.SERVICE, label: 'Dịch vụ' },
    { path: PATH.NEWS, label: 'Tin tức' },
    { path: PATH.COMMITMENT, label: 'Cam kết' },
    { path: PATH.PAYMENT, label: 'Thanh toán' },
    { path: PATH.PARTNER, label: 'Trở thành đối tác' },
  ];

  return (
    <React.Fragment>
      <AppBar className="header" position="fixed" color="default">
        <div className="flex items-center justify-center bg-[#268bc7] w-full">
          <p className="text_normal text-white w-full h-full text-center py-3">
            Chào mừng đến với Homie - Dịch vụ giúp bạn kiếm người giúp việc tại
            nhà
          </p>
        </div>
        <Toolbar className="header__toolbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            className="header__toolbar-icon"
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link to={PATH.HOME} className="toolbar__img">
              <img src={logo} alt="Homie Logo" />
            </Link>
          </Box>
          {!tokenMethod.get()?.token ? (
            <Button
              component={NavLink}
              to="/login"
              className="header__toolbar-btn"
              variant="contained"
              color="primary"
            >
              Đăng nhập
            </Button>
          ) : (
            <UserProfileMenu userProfile={userProfile} onLogout={_onLogout} />
          )}
        </Toolbar>
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              <ListItem disablePadding sx={styles.closeButtonContainer}>
                <IconButton
                  onClick={toggleMenu}
                  sx={styles.closeButton}
                  className="close-button"
                >
                  <SvgIcon component={Close} sx={styles.closeIcon} />
                </IconButton>
              </ListItem>
              {menuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    sx={styles.item__button}
                    className="item__button"
                    component={NavLink}
                    to={item.path}
                    onClick={toggleMenu}
                  >
                    <ListItemText className="item__text" primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;

export const styles = {
  item__button: {
    padding: 0,
  },
  closeButtonContainer: {
    justifyContent: 'flex-end',
    padding: '8px 8px 8px 0',
  },
  closeButton: {
    padding: '8px',
    transition: 'all 0.3s',
    path: {
      transition: 'all 0.3s',
    },
    '&:hover': {
      backgroundColor: 'rgba(237, 64, 64, 0.951)',
      borderRadius: '50%',
      path: {
        fill: 'white',
      },
    },
  },
  closeIcon: {
    fontSize: '22px',
    transition: 'all 0.3s',
  },
};

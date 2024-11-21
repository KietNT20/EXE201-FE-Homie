import { logo } from '@/constant/image';
import { PATH } from '@/constant/path';
import { useAppDispatch, useAppSelector } from '@/hooks/reudxHook';
import { clearUserProfile } from '@/store/actions/userProfileAction';
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
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const _onLogout = () => {
    toast.dismiss();
    tokenMethod.remove();
    dispatch(clearUserProfile());
    toast.success('Đăng xuất thành công');
    navigate(PATH.HOME);
  };

  const menuItems = [
    { path: PATH.HOME, label: 'Trang chủ' },
    { path: PATH.ABOUT, label: 'Về Homie' },
    { path: PATH.SERVICE, label: 'Dịch vụ' },
    // { path: PATH.NEWS, label: 'Tin tức' },
    { path: PATH.PAYMENT, label: 'Thanh toán' },
    // { path: PATH.PARTNER, label: 'Trở thành đối tác' },
    { path: PATH.COMMITMENT, label: 'Cam kết' },
  ];

  return (
    <React.Fragment>
      <AppBar className="" position="fixed" color="default">
        <div className="flex items-center justify-center bg-blue-500 w-full">
          <p className="text_normal text-white w-full text-center py-4">
            Chào mừng đến với Homie - Dịch vụ giúp bạn kiếm người giúp việc tại
            nhà
          </p>
        </div>
        <Toolbar className="grid grid-cols-3 gap-14">
          <div className="text-left">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <MenuIcon className="text-2xl" />
            </IconButton>
          </div>
          <Box className="flex items-center justify-center">
            <Link to={PATH.HOME} className="">
              <img
                src={logo}
                alt="Homie Logo"
                className="h-12 sm:h-20 w-auto"
                loading="lazy"
                decoding="async"
              />
            </Link>
          </Box>
          <div className="text-right">
            {!tokenMethod.get()?.token ? (
              <Button
                component={Link}
                to={PATH.LOGIN}
                className="header__toolbar-btn flex-none"
                variant="text"
                color="info"
              >
                Đăng nhập
              </Button>
            ) : (
              <UserProfileMenu userProfile={userProfile} onLogout={_onLogout} />
            )}
          </div>
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
                    className="item__button duration-200"
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

const styles = {
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

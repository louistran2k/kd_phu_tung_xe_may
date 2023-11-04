import { MoreVert, Logout } from '@mui/icons-material';
import {
  AppBar,
  Typography,
  Link,
  Grid,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { LogoImg } from 'assets/images';
import { useStyles } from '../../style';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { getAdmin, getShipper, userInit, shipperLogout, adminLogout } from 'redux/user';
import { User } from 'types';

export const Header = () => {
  const classes = useStyles();
  const admin = useAppSelector(getAdmin);
  const shipper = useAppSelector(getShipper);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<User>(userInit);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (location.pathname.includes('shipper')) {
      dispatch(shipperLogout());
      navigate('/shipper/auth/login');
    } else {
      dispatch(adminLogout());
      navigate('/admin/auth/login');
    }
  };

  useEffect(() => {
    if (location.pathname.includes('shipper')) {
      setUser(shipper);
    } else {
      setUser(admin);
    }
  }, [location.pathname, shipper, admin]);

  return (
    <AppBar position="fixed" className={classes.header}>
      <Grid container>
        <Grid item flex={1}>
          <Link
            href="/app/home"
            onClick={(e) => e.preventDefault()}
            underline="none"
          >
            <img src={LogoImg} alt="logo" />
          </Link>
        </Grid>
        <Grid item>
          <Grid item container alignItems="center">
            <Avatar>{user.lastName.substring(0, 1)}</Avatar>
            <Typography
              style={{ marginLeft: 10 }}
            >{`${user.firstName} ${user.lastName}`}</Typography>
            <span onClick={handleClick}>
              <MoreVert />
            </span>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleLogout}>
                <Logout />
                Đăng xuất
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

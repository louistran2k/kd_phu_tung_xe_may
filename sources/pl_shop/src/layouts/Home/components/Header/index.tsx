import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState, MouseEvent } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useStyles } from './style';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import {
  Inventory,
  Logout,
  MoreVert,
  PersonOutline,
} from '@mui/icons-material';
import { ParentContainer } from 'GlobalStyle';
import { connect, ConnectedProps } from 'react-redux';
import { sGetUserDetails } from 'store/user/selectors';

import { AppDispatch, AppState } from 'store';
import { logout } from 'store/user';

const Header = ({ user, pLogout }: PropsFromStore) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    pLogout();
    navigate(0);
  };

  const handleShowInfo = () => {
    // dispatch(setIsShowInfo());
    handleClose();
  };

  const handleShowPurchaseHistory = () => {
    navigate('/my-order')
    handleClose();
  };

  return (
    <AppBar color="secondary" className={classes.header} position="static">
      <ParentContainer>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Typography>WELCOME TO SHARMA ONLINE SHOPPING STORE!</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            classes={{ root: classes.root }}
            alignItems="center"
          >
            <Typography>Theo dõi tại:</Typography>
            <Link href="https://www.facebook.com/profile.php?id=100007828847430">
              <FacebookOutlinedIcon />
            </Link>
            <Link href="https://www.google.com">
              <GoogleIcon />
            </Link>
          </Grid>
          {user?.id ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
              }}
            >
              <Avatar style={{ width: '30px', height: '30px' }}>
                {user.firstName.substring(0, 1)}
              </Avatar>
              <Typography
                style={{ marginLeft: 10 }}
              >{`${user.firstName} ${user.lastName}`}</Typography>
              <span onClick={handleClick}>
                <MoreVert />
              </span>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className={classes.dropdown}
              >
                <MenuItem onClick={handleShowInfo}>
                  <PersonOutline />
                  Thông tin của tôi
                </MenuItem>
                <MenuItem onClick={handleShowPurchaseHistory}>
                  <Inventory />
                  Lịch sử mua hàng
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Logout />
                  Đăng xuất
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Grid item className={classes.account}>
              <Button
                onClick={handleClick}
                startIcon={<PersonIcon />}
                endIcon={<KeyboardArrowDownOutlinedIcon />}
              >
                Tài khoản
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{ list: classes.list }}
              >
                <MenuItem onClick={handleClose}>
                  <RouterLink to="/sign-up">Đăng ký</RouterLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <RouterLink to="/sign-in">Đăng nhập</RouterLink>
                </MenuItem>
              </Menu>
            </Grid>
          )}
        </Grid>
      </ParentContainer>
    </AppBar>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: sGetUserDetails(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pLogout: () => dispatch(logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromStore = ConnectedProps<typeof connector>;

export default connector(Header);

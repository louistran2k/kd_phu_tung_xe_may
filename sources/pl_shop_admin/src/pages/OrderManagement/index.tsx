import {
  AppBar,
  Container,
  Tab,
  Tabs,
} from '@mui/material';
import { SyntheticEvent, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { useStyles } from './style';
import { getStatus, getIsShowDetail, setStatus, getCustomerOrdersAsync, setIsShowDetail } from 'redux/customerOrder';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getStaffsAsync } from 'redux/staff';
import { CustomerOrderStatus } from 'types';
import { TableOrder, OrderDetail } from './components';

const OrderManagement = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const status = useAppSelector(getStatus);
  const isShowDetail = useAppSelector(getIsShowDetail);

  const handleChange = (
    event: SyntheticEvent,
    newValue: CustomerOrderStatus
  ) => {
    dispatch(setStatus(newValue));
  };

  useEffect(() => {
    (async () => {
      await dispatch(getStaffsAsync());
      dispatch(getCustomerOrdersAsync(status));
    })()
  }, [status, dispatch]);

  return (
    <>
      <Container disableGutters>
        <AppBar position="static">
          <Tabs
            value={status}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab
              label="Chờ xác nhận"
              value={CustomerOrderStatus.WAIT_CONFIRM}
            />
            <Tab label="Đang giao" value={CustomerOrderStatus.DELIVERING} />
            <Tab label="Đã hoàn tất" value={CustomerOrderStatus.COMPLETED} />
            <Tab label="Đã hủy" value={CustomerOrderStatus.CANCELLED} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={status - 1}
          value={status}
          className={classes.container}
        >
          <div>
            {status === CustomerOrderStatus.WAIT_CONFIRM && <TableOrder />}
          </div>
          <div>
            {status === CustomerOrderStatus.DELIVERING && <TableOrder />}
          </div>
          <div>
            {status === CustomerOrderStatus.COMPLETED && <TableOrder />}
          </div>
          <div>
            {status === CustomerOrderStatus.CANCELLED && <TableOrder />}
          </div>
        </SwipeableViews>
      </Container>
      <OrderDetail openViewDetail={isShowDetail} handleClose={() => dispatch(setIsShowDetail())} />
    </>
  );
};

export default OrderManagement;

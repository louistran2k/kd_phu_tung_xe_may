import { AppBar, Container, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

import { useStyles } from '../OrderManagement/style';
import { getStatus, getIsShowDetail, setStatus, getDeliveryAsync, setIsShowDetail } from 'redux/customerOrder';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getStaffsForDeliveryAsync } from 'redux/staff';
import { getShipper } from 'redux/user';
import { CustomerOrderStatus, GetDeliveryRequest } from 'types';
import { TableOrder } from './components';
import { OrderDetail } from 'pages/OrderManagement/components';

const DeliveryManagement = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const status = useAppSelector(getStatus);
  const shipper = useAppSelector(getShipper);
  const isShowDetail = useAppSelector(getIsShowDetail);

  const handleChange = (
    event: SyntheticEvent,
    newValue: CustomerOrderStatus
  ) => {
    dispatch(setStatus(newValue));
  };

  useEffect(() => {
    (async () => {
      await dispatch(getStaffsForDeliveryAsync());
    })();
  }, [dispatch]);

  useEffect(() => {
    const req: GetDeliveryRequest = {
      deliveryStaffId: shipper.id.trim(),
      status,
    };
    (async () => {
      dispatch(getDeliveryAsync(req));
    })();
  }, [status, dispatch, shipper.id]);

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
              label="Được phân công"
              value={CustomerOrderStatus.DELIVERING}
            />
            <Tab label="Đã hoàn tất" value={CustomerOrderStatus.COMPLETED} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={status - 2}
          value={status}
          className={classes.container}
        >
          <div>
            {status === CustomerOrderStatus.DELIVERING && <TableOrder />}
          </div>
          <div>
            {status === CustomerOrderStatus.COMPLETED && <TableOrder />}
          </div>
        </SwipeableViews>
      </Container>
      <OrderDetail
        openViewDetail={isShowDetail}
        handleClose={() => dispatch(setIsShowDetail())}
      />
    </>
  );
};

export default DeliveryManagement;

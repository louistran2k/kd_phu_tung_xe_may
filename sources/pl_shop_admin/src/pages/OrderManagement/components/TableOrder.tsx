import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import { getCustomerOrders, getStatus } from 'redux/customerOrder';
import { useAppSelector } from 'redux/hooks';
import { CustomerOrderStatus } from 'types';
import { OrderItem } from './OrderItem';

export const TableOrder = () => {
  const list = useAppSelector(getCustomerOrders);
  const status = useAppSelector(getStatus);

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h3">Mã đơn đặt</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Tên khách hàng</Typography>
            </TableCell>
            {(status === CustomerOrderStatus.WAIT_CONFIRM ||
              status === CustomerOrderStatus.COMPLETED) && (
                <TableCell>
                  <Typography variant="h3">Ngày đặt</Typography>
                </TableCell>
              )}
            {(status === CustomerOrderStatus.WAIT_CONFIRM ||
              status === CustomerOrderStatus.DELIVERING ||
              status === CustomerOrderStatus.COMPLETED) && (
                <TableCell>
                  <Typography variant="h3">Ngày giao</Typography>
                </TableCell>
              )}
            <TableCell>
              <Typography variant="h3">Tổng tiền</Typography>
            </TableCell>
            {(status === CustomerOrderStatus.DELIVERING ||
              status === CustomerOrderStatus.COMPLETED) && (
                <TableCell>
                  <Typography variant="h3">Nhân viên duyệt</Typography>
                </TableCell>
              )}
            {(status === CustomerOrderStatus.COMPLETED) && (
              <TableCell>
                <Typography variant="h3">Nhân viên giao</Typography>
              </TableCell>
            )}
            {(status === CustomerOrderStatus.WAIT_CONFIRM ||
              status === CustomerOrderStatus.DELIVERING) && (
                <TableCell>
                  <Typography variant="h3">Nhân viên giao</Typography>
                </TableCell>
              )}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

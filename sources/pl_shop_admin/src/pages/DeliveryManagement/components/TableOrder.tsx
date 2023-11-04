import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { getCustomerOrders } from 'redux/customerOrder';
import { useAppSelector } from 'redux/hooks';
import { OrderItem } from './OrderItem';

export const TableOrder = () => {
  const list = useAppSelector(getCustomerOrders);

  return (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h3">Mã đơn đặt</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Người nhận</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Số ĐT NN</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Ngày giao</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h3">Địa chỉ</Typography>
            </TableCell>
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

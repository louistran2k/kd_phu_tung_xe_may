import { Navigate } from 'react-router-dom';
import { setStatus } from 'redux/customerOrder/slice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { shipperAccessTokenSelector } from 'redux/user/selectors';
import { CustomerOrderStatus } from 'types/customerOrder.type';

type Props = {
  children: JSX.Element;
};

const ProtectedShipper = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(shipperAccessTokenSelector);
  if (!accessToken) {
    return <Navigate to="/shipper/auth/login" />;
  }
  dispatch(setStatus(CustomerOrderStatus.DELIVERING));
  return children;
};

export default ProtectedShipper;

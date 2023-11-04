import { Outlet } from 'react-router-dom';

import CustomerLayout from 'layouts/Home';
import MyInformationDialog from './MyInformationDialog';
import { useCustomerSelector } from 'store/hooks';
import { isShowInfo, isShowPurchaseDetail } from 'store/selectors';

const Customer = () => {
  const showInfo = useCustomerSelector(isShowInfo);
  const showPurchaseHistory = useCustomerSelector(isShowPurchaseDetail);
  return (
    <CustomerLayout>
      <>
        <Outlet />
        {showInfo && <MyInformationDialog />}
      </>
    </CustomerLayout>
  );
};

export default Customer;

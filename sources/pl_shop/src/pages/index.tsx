import { Outlet } from 'react-router-dom';

import CustomerLayout from 'layouts/Home';
import MyInformationDialog from './MyInformationDialog';

const Customer = () => {
  // const showInfo = useCustomerSelector(isShowInfo);
  const showInfo = true;

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

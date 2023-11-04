import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { axiosClientWithToken } from 'api/axiosClient';

const Success = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await axiosClientWithToken.get('api/checkout/success', {
          params: {
            PayerID: searchParams.get('PayerID'),
            paymentId: searchParams.get('paymentId'),
          },
        });
        console.log(res);
        // navigate();
        // return res;
      } catch (error) {
        throw new Error(String(error));
      }
    })();
  }, []);

  return <Typography variant="h5">Thanh toán thành công</Typography>;
};

export default Success;

import { Button, Container, Divider, List, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { convertCurrency } from 'store/Home';
import { useCustomerSelector } from 'store/hooks';
import { getCart, getAccessTokenRedux } from 'store/selectors';
import { CartItemType } from 'types';
import { CartItem } from './components';


export const calcTotalPrices = (cart: CartItemType[]) =>
  cart.reduce((prev, current) => {
    if (current.product.discountPrice > 0) {
      return prev + current.quantity * current.product.discountPrice;
    }
    return prev + current.quantity * current.product.price;
  }, 0);

const Cart = () => {
  const cart = useCustomerSelector(getCart);
  const accessToken = useCustomerSelector(getAccessTokenRedux);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!!accessToken) {
      navigate('/checkout');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Container disableGutters className="content-block">
      <Typography variant="h2">Giỏ hàng</Typography>
      <Divider />
      {!!cart.length ? (
        <List>
          {cart.map((item: any, index: number) => (
            <CartItem key={index} cartItem={item} />
          ))}
        </List>
      ) : (
        <Typography variant="h5">
          Không có sản phẩm nào trong giỏ hàng
        </Typography>
      )}
      <Container disableGutters style={{ textAlign: 'right' }}>
        <Typography variant="h2">
          {convertCurrency(calcTotalPrices(cart))}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCheckout}
          disabled={!cart.length}
        >
          Thanh toán
        </Button>
      </Container>
    </Container>
  );
};

export default Cart;

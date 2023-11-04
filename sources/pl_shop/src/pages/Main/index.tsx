import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { ViewProduct } from 'common/components';
import { getPromotionalProductsAsync, getNewProductsAsync, getFeatureProductsAsync, getRandomProductsAsync } from 'store/Home';
import { useCustomerDispatch, useCustomerSelector } from 'store/hooks';
import { getNewProducts, getPromotionalProducts, getFeatureProducts, getProduct } from 'store/selectors';
import { ProductSectionProps, ProductSection, AnotherProducts } from './components';


function Main() {
  const dispatch = useCustomerDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getPromotionalProductsAsync(10));
    dispatch(getNewProductsAsync(10));
    dispatch(getFeatureProductsAsync(10));
    dispatch(getRandomProductsAsync());
  }, []);

  const newProducts = useCustomerSelector(getNewProducts);
  const promotionalProducts = useCustomerSelector(getPromotionalProducts);
  const featureProducts = useCustomerSelector(getFeatureProducts);
  const newProductsProps: ProductSectionProps = {
    title: 'Sản phẩm mới',
    link: '/new-products',
    list: newProducts,
    handleClickOpen: handleClickOpen,
  };
  const promotionalProductsProps: ProductSectionProps = {
    title: 'Sản phẩm khuyến mãi',
    link: '/promotional-products',
    list: promotionalProducts,
    handleClickOpen: handleClickOpen,
  };
  const featureProductsProps: ProductSectionProps = {
    title: 'Sản phẩm nổi bật',
    link: '/feature-products',
    list: featureProducts,
    handleClickOpen: handleClickOpen,
  };

  const product = useCustomerSelector(getProduct);

  return (
    <>
      {open && (
        <ViewProduct product={product} open={open} handleClose={handleClose} />
      )}
      <Container disableGutters>
        {!!newProducts.length && <ProductSection {...newProductsProps} />}
        {!!promotionalProducts.length && (
          <ProductSection {...promotionalProductsProps} />
        )}
        {!!featureProducts.length && (
          <ProductSection {...featureProductsProps} />
        )}
        <AnotherProducts handleClickOpen={handleClickOpen} />
      </Container>
    </>
  );
}

export default Main;

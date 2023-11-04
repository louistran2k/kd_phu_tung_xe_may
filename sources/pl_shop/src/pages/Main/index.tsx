import { Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { ProductSectionProps, ProductSection, AnotherProducts } from './components';


function Main() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newProducts = [] as any;
  const promotionalProducts = [] as any;
  const featureProducts = [] as any;
  const newProductsProps: ProductSectionProps = {
    title: 'Sản phẩm mới',
    link: '/new-products',
    list: newProducts as any,
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

  const product = {};

  return (
    <>
      {/* {open && (
        <ViewProduct product={product} open={open} handleClose={handleClose} />
      )} */}
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

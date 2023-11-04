import {
  Container,
  Grid,
  Divider,
  Typography,
  Button,
  Link,
} from '@mui/material';

import { useStyles } from '../ProductSection/style';
import { ProductItem } from 'common/components';

type Props = {
  handleClickOpen: () => void;
};

export const AnotherProducts = ({ handleClickOpen }: Props) => {
  const classes = useStyles();

  const anotherProducts = [] as any;
  // const anotherProducts = useCustomerSelector(getAnotherProducts);

  return (
    <Container component="div" disableGutters className={classes.section} style={{ paddingBottom: '20px' }}>
      <Grid
        container
        alignItems="center"
        columns={20}
        className={classes.header}
      >
        <Grid item xs={1}>
          <Divider />
        </Grid>
        <Typography variant="h2">Sản phẩm khác</Typography>
        <Divider />
      </Grid>
      <Divider />
      <Grid container>
        {anotherProducts.map((item: any, index: number) => (
          <Grid item xs={3} key={index}>
            <ProductItem product={item} handleClickOpen={handleClickOpen} />
          </Grid>
        ))}
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
        <Button variant="contained" color="secondary">
          <Link href="/products" underline="none">Xem thêm</Link>
        </Button>
      </Grid>
    </Container>
  );
};

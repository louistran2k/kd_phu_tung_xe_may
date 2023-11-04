import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import { globalTheme } from '../../themes/HomeTheme';
import { useStyles } from './style';
import { useCustomerDispatch } from 'store/hooks';
import {
  getAllProductGroupAsync,
  getAllProductTypeAsync,
} from 'store/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header, Logo, Navbar } from './components';

type Props = {
  children: JSX.Element;
};

function CustomerLayout({ children }: Props) {
  const classes = useStyles();

  const dispatch = useCustomerDispatch();

  useEffect(() => {
    dispatch(getAllProductGroupAsync());
    dispatch(getAllProductTypeAsync());
  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <div className={classes.main}>
        <Header />
        <Logo />
        <Navbar />
        <Container className={classes.content} disableGutters>
          {children}
        </Container>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={false}
        />
      </div>
    </ThemeProvider>
  );
}

export default CustomerLayout;

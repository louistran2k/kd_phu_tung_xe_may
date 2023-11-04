import { Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import { useStyles } from './style';

import 'react-toastify/dist/ReactToastify.css';
import { Header, Sidebar } from './components';

type Props = {
  children: JSX.Element;
};

const AdminLayout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Sidebar />
      <Container disableGutters className={classes.content}>
        {children}
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={false}
      />
    </>
  );
};

export default AdminLayout;

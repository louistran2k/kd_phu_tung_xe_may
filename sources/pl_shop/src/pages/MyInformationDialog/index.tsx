import {
  Button,
  Container,
  Dialog,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { Edit } from '@mui/icons-material';
import { useStyles } from './style';
import FormUserInformation from 'pages/FormUserInformation';
import { User } from 'types';
import { schemaUserInformation } from 'utils/schemas';

const MyInformationDialog = () => {
  const classes = useStyles();
  const showInfo = false;
  const user = {} as any;
  // const showInfo = useCustomerSelector(isShowInfo);
  // const user = useCustomerSelector(getUser);
  // const dispatch = useCustomerDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const handleClose = () => {
    // dispatch(setIsShowInfo());
  };

  const methods = useForm<User>({
    resolver: yupResolver(schemaUserInformation),
    mode: 'all',
    defaultValues: user,
  });

  const {
    formState: { isValid },
    handleSubmit,
  } = methods;

  const onSubmit = async (data: User) => {
    // const res: any = await dispatch(updateUserInformation(data));
    // if (res.payload.data) {
    //   handleEdit();
    // }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <Dialog open={showInfo} onClose={handleClose} className={classes.myInfo}>
      <Container>
        <Typography variant="h4">Thông tin của tôi</Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormUserInformation isEdit={isEdit} isUpdate={true} />
            {!isEdit ? (
              <Tooltip title="Chỉnh sửa thông tin">
                <IconButton
                  onClick={handleEdit}
                  className={classes.btnEdit}
                  color="primary"
                  style={{ position: 'absolute' }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
            ) : (
              <div
                style={{
                  textAlign: 'right',
                }}
              >
                <Button
                  type="button"
                  color="secondary"
                  variant="contained"
                  onClick={handleEdit}
                  style={{
                    marginRight: 10,
                  }}
                >
                  Hủy
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={!isValid}
                >
                  Lưu
                </Button>
              </div>
            )}
          </form>
        </FormProvider>
      </Container>
    </Dialog>
  );
};

export default MyInformationDialog;

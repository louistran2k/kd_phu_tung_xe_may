import {
  Typography,
  Grid,
  TextField,
  Button,
  InputAdornment,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { connect, ConnectedProps } from 'react-redux';

import { useStyles } from './style';
import { ISignUp, ISignUpReq } from 'types';
import { schemaSignUp } from 'utils/schemas';
import { AppState, AppDispatch } from 'store';
import { register } from 'store/user/thunkApi';
import { EStatusCode } from 'enums';

const SignUp = ({ pRegister }: PropsFromStore) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    register,
    formState: { isValid, errors },
    setError,
    handleSubmit,
  } = useForm<ISignUp>({
    resolver: yupResolver(schemaSignUp),
    mode: 'all',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmationPassword = () => {
    setShowConfirmationPassword(!showConfirmationPassword);
  };

  const onSubmit = async (data: ISignUp) => {
    delete data.passwordConfirmation;
    const res = await pRegister(data);
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/sign-in');
    }
    const payload: any = res.payload;
    if (payload?.statusCode === EStatusCode.BAD_REQUEST && payload?.message) {
      Object.entries(payload?.message).forEach(([key, value]) => {
        setError(key as keyof ISignUp, { message: value } as any)
      });
    }
  };

  return (
    <Grid
      container
      className={classes['sign-up-container']}
      justifyContent="center"
    >
      <Grid item xs={6} spacing={4}>
        <Typography variant="h2" sx={{ marginBottom: 5 }}>Đăng ký</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                type="text"
                variant="outlined"
                label="Họ"
                color="secondary"
                required
                fullWidth
                autoComplete="off"
                inputProps={{
                  maxLength: 50,
                }}
                {...register('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName?.message ?? ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                type="text"
                variant="outlined"
                label="Tên"
                color="secondary"
                required
                fullWidth
                autoComplete="off"
                inputProps={{
                  maxLength: 50,
                }}
                {...register('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName?.message ?? ''}
              />
            </Grid>
          </Grid>
          <TextField
            type="text"
            variant="outlined"
            label="Số điện thoại"
            color="secondary"
            fullWidth
            required
            autoComplete="off"
            inputProps={{
              maxLength: 10,
            }}
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message ?? ''}
          />
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            color="secondary"
            required
            fullWidth
            autoComplete="off"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message ?? ''}
          />
          <TextField
            type={showPassword ? 'type' : 'password'}
            variant="outlined"
            label="Mật khẩu"
            color="secondary"
            required
            fullWidth
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {showPassword ? (
                    <VisibilityOff onClick={handleShowPassword} />
                  ) : (
                    <Visibility onClick={handleShowPassword} />
                  )}
                </InputAdornment>
              ),
            }}
            inputProps={{
              minLength: 8,
              maxLength: 20,
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message ?? ''}
          />
          <TextField
            type={showConfirmationPassword ? 'type' : 'password'}
            variant="outlined"
            label="Nhập lại mật khẩu"
            color="secondary"
            required
            fullWidth
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {showConfirmationPassword ? (
                    <VisibilityOff onClick={handleShowConfirmationPassword} />
                  ) : (
                    <Visibility onClick={handleShowConfirmationPassword} />
                  )}
                </InputAdornment>
              ),
            }}
            inputProps={{
              minLength: 8,
              maxLength: 20,
            }}
            {...register('passwordConfirmation')}
            error={!!errors.passwordConfirmation}
            helperText={errors.passwordConfirmation?.message ?? ''}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!isValid}
            fullWidth
          >
            Đăng ký
          </Button>
        </form>

        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Đã có tài khoản?
          <Link to='/sign-in' style={{ marginLeft: 5, color: theme.palette.info.main }}>Đăng nhập</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({

});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pRegister: (params: ISignUpReq) => dispatch(register(params)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromStore = ConnectedProps<typeof connector>;

export default connector(SignUp);

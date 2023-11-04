import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

import { useStyles } from './style';
import { ISignIn } from 'types';
import { signInSchema } from 'utils/schemas';
import { connect, ConnectedProps } from 'react-redux';
import { AppState, AppDispatch } from 'store';
import { login } from 'store/user/thunkApi';
import { EStatusCode } from 'enums';

const SignIn = ({ pLogin }: PropsFromStore) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    register,
    formState: { isValid, errors },
    setError,
    handleSubmit,
  } = useForm<ISignIn>({
    resolver: yupResolver(signInSchema),
    mode: 'all',
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: ISignIn) => {
    const res = await pLogin(data);
    if (res.meta.requestStatus === 'fulfilled') {
      navigate('/');
    }
    const payload: any = res.payload;
    if (payload?.statusCode === EStatusCode.UNAUTHORIZED && payload?.message) {
      Object.entries(payload?.message).forEach(([key, value]) => {
        setError(key as keyof ISignIn, { message: value } as any)
      });
    }
  };

  return (
    <Grid
      container
      className={classes['sign-in-container']}
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Typography variant="h2">Đăng nhập</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            type="text"
            variant="outlined"
            label="Email"
            color="secondary"
            required
            fullWidth
            autoComplete="off"
            inputProps={{
              minLength: 6,
              maxLength: 20,
            }}
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
              minLength: 6,
              maxLength: 20,
            }}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message ?? ''}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            fullWidth
            disabled={!isValid}
          >
            Đăng nhập
          </Button>
        </form>
        <Typography variant="body1" sx={{ marginTop: 3 }}>
          Chưa có tài khoản?
          <Link to='/sign-in' style={{ marginLeft: 5, color: theme.palette.info.main }}>Đăng ký</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pLogin: (params: ISignIn) => dispatch(login(params)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromStore = ConnectedProps<typeof connector>;

export default connector(SignIn);

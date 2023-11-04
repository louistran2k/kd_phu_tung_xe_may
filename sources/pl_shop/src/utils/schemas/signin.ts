import { EErrorMessage } from 'enums';
import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .email(EErrorMessage.EMAIL_1),
  password: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .min(8, EErrorMessage.PASSWORD_1)
    .max(20, EErrorMessage.PASSWORD_1),
});
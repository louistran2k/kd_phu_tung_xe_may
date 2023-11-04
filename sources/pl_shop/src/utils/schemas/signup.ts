import * as yup from 'yup';
import { EErrorMessage } from 'enums';
import { digitsOnly } from 'utils/helper';

export const schemaSignUp = yup.object().shape({
  email: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .email(EErrorMessage.EMAIL_1),
  password: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .min(8, EErrorMessage.PASSWORD_1)
    .max(20, EErrorMessage.PASSWORD_1),
  passwordConfirmation: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .min(8, EErrorMessage.PASSWORD_1)
    .max(20, EErrorMessage.PASSWORD_1)
    .oneOf([yup.ref('password'), null], EErrorMessage.CONFIRM_PASSWORD),
  firstName: yup.string().required(EErrorMessage.REQUIRED),
  lastName: yup.string().required(EErrorMessage.REQUIRED),
  phoneNumber: yup
    .string()
    .required(EErrorMessage.REQUIRED)
    .length(10, EErrorMessage.PHONE_NUMBER)
    .test('Digits only', EErrorMessage.PHONE_NUMBER, digitsOnly),
});

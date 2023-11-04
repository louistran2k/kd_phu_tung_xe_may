import { User } from "./user";

export interface ISignUp {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export type ISignUpReq = Exclude<ISignUp, 'passwordConfirmation'>;

export interface ISignIn {
  email: string;
  password: string;
}

export interface ISignInRes {
  accessToken: string;
  refreshToken: string;
  user: User;
}

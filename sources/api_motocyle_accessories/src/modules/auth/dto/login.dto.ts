import { IsNotEmpty, IsEmail, IsString, Length } from "class-validator";
import { EErrorMessages } from "~enums";

export class LoginDto {
  @IsNotEmpty({ message: EErrorMessages.EMAIL_1 })
  @IsEmail({}, { message: EErrorMessages.EMAIL_2 })
  email: string;

  @IsNotEmpty({ message: EErrorMessages.PASSWORD_1 })
  @IsString()
  @Length(8, 20, { message: EErrorMessages.PASSWORD_2 })
  password: string;
}
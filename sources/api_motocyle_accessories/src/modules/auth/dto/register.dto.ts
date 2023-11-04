import { IsEmail, Length, IsPhoneNumber, IsEnum, IsString, MaxLength, } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { EErrorMessages, ERole } from '~enums';

export class RegisterDto {
  @IsNotEmpty({ message: EErrorMessages.EMAIL_1 })
  @IsEmail({}, { message: EErrorMessages.EMAIL_2 })
  email: string;

  @IsNotEmpty({ message: EErrorMessages.PASSWORD_1 })
  @IsString()
  @Length(8, 20, { message: EErrorMessages.PASSWORD_2 })
  password: string;

  @IsNotEmpty({ message: EErrorMessages.FIRST_NAME_1 })
  @IsString()
  @MaxLength(50, { message: EErrorMessages.FIRST_NAME_2 })
  firstName: string;

  @IsNotEmpty({ message: EErrorMessages.LAST_NAME_1 })
  @IsString()
  @MaxLength(50, { message: EErrorMessages.LAST_NAME_2 })
  lastName: string;

  @IsNotEmpty({ message: EErrorMessages.PHONE_NUMBER_1 })
  @IsString()
  @IsPhoneNumber('VN', { message: EErrorMessages.PHONE_NUMBER_2 })
  phoneNumber: string;

  @IsNotEmpty({ message: EErrorMessages.ROLE_1 })
  @IsEnum(ERole)
  role: ERole;
}
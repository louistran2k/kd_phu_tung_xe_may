import { IsEmail, Length, IsPhoneNumber, IsEnum, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { ERole } from '~enums';

export class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 20)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber('VN')
  phoneNumber: string;

  @IsNotEmpty()
  @IsEnum(ERole)
  role: ERole;
}
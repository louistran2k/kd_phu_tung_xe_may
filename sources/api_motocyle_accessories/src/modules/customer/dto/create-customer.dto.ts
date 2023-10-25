import { IsNotEmpty, Length } from 'class-validator';
export class CreateCustomerDto {
  @IsNotEmpty()
  @Length(0, 50)
  firstName: string;

  @IsNotEmpty()
  @Length(0, 50)
  lastName: string;
}

import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AccountEntity } from '~modules/account/entities/account.entity';
import { CustomerEntity } from '~modules/customer/entities/customer.entity';
import { StaffEntity } from '~modules/staff/entities/staff.entity';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<CustomerEntity | StaffEntity> {
    return this.authService.register(registerDto);
  }

  @Post('refresh-token')
  refreshToken(@Body() { refreshToken }): Promise<any> {
    return this.authService.refreshToken(refreshToken);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.login(loginDto);
  }
}

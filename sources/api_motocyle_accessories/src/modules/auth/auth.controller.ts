import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AccountEntity } from '~modules/account/entities/account.entity';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<AccountEntity> {
    console.log('log-register --- ', registerDto);
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<any> {
    console.log('log-Call-API: login');
    return this.authService.login(loginDto);
  }
}

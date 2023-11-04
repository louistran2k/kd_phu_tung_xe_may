import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { AccountEntity } from '~modules/account/entities/account.entity';
import { ConfigService } from '@nestjs/config';
import { CustomerEntity } from '~modules/customer/entities/customer.entity';
import { StaffEntity } from '~modules/staff/entities/staff.entity';
import { EErrorMessages, ERole } from '~enums';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccountEntity) private accountRepository: Repository<AccountEntity>,
    @InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>,
    @InjectRepository(StaffEntity) private staffRepository: Repository<StaffEntity>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }

  async register(registerAccountDto: RegisterDto): Promise<CustomerEntity | StaffEntity> {
    const existAccount = await this.accountRepository.findOneBy({ email: registerAccountDto.email });
    if (existAccount) {
      throw new HttpException(EErrorMessages.EMAIL_3, HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await this.hashPassword(registerAccountDto.password);
    const account = await this.accountRepository.save({
      email: registerAccountDto.email,
      password: hashPassword,
    });
    delete registerAccountDto.email;
    delete registerAccountDto.password;
    if (registerAccountDto.role === ERole.CUSTOMER) {
      return await this.customerRepository.save({
        ...registerAccountDto,
        account,
      });
    } else {
      return await this.staffRepository.save({
        ...registerAccountDto,
        account,
      });
    }
  }

  async refreshToken(refreshToken: string): Promise<any> {
    try {
      const verify = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.configService.get<string>('SECRET')
      });
      const checkExistToken = await this.accountRepository.findOneBy({ email: verify.email, refreshToken });
      if (checkExistToken) {
        return this.generateToken({ email: verify.email });
      } else {
        throw new HttpException(EErrorMessages.REFRESH_TOKEN_1, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(EErrorMessages.REFRESH_TOKEN_1, HttpStatus.BAD_REQUEST);
    }
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const account = await this.accountRepository.findOne({
      where: { email }
    });

    if (!account) {
      throw new HttpException(EErrorMessages.EMAIL_4, HttpStatus.UNAUTHORIZED);
    }

    const checkPass = bcrypt.compareSync(password, account.password);
    if (!checkPass) {
      throw new HttpException(EErrorMessages.PASSWORD_3, HttpStatus.UNAUTHORIZED);
    }

    // generate access token & refresh token
    const payload = {
      email: account.email,
    };
    return this.generateToken(payload);
  }

  private async generateToken(payload: { email: string }) {
    const accessToken = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('SECRET'),
      expiresIn: this.configService.get<string>('EXP_IN_REFRESH_TOKEN'),
    });

    await this.accountRepository.update(
      { email: payload.email },
      { refreshToken },
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  private async hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AccountEntity } from '~modules/account/entities/account.entity';

config();

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccountEntity) private accountRepository: Repository<AccountEntity>,
    private jwtService: JwtService,
  ) { }

  async register(registerAccountDto: RegisterDto): Promise<AccountEntity> {
    const hashPassword = await this.hashPassword(registerAccountDto.password);
    return await this.accountRepository.save({
      ...registerAccountDto,
      password: hashPassword,
    });
  }

  async login(loginDto: LoginDto): Promise<any> {
    const { email, password } = loginDto;
    const account = await this.accountRepository.findOne({
      where: { email }
    });

    if (!account) {
      throw new HttpException('Email is not exist', HttpStatus.UNAUTHORIZED);
    }

    const checkPass = bcrypt.compareSync(password, account.password);
    if (!checkPass) {
      throw new HttpException('Password is not correct', HttpStatus.UNAUTHORIZED);
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
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
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

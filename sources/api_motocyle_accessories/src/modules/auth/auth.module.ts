import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AccountEntity } from '~modules/account/entities/account.entity';
import { CustomerEntity } from '~modules/customer/entities/customer.entity';
import { StaffEntity } from '~modules/staff/entities/staff.entity';

config();

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, CustomerEntity, StaffEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }

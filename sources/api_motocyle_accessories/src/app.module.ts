import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { BaseModule } from '~modules/base/base.module';
import { AuthModule } from '~modules/auth/auth.module';
import { AccountModule } from '~modules/account/account.module';
import { CustomerModule } from '~modules/customer/customer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    BaseModule,
    AuthModule,
    AccountModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

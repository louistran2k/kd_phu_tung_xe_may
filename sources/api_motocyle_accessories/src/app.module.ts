import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { ProductGroupModule } from './product-group/product-group.module';
import { ProductTypeModule } from './product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { MotorcycleModule } from './motorcycle/motorcycle.module';
import { BaseModule } from './base/base.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    ProductGroupModule,
    ProductTypeModule,
    ProductModule,
    MotorcycleModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

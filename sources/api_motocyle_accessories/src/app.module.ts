import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db/data-source';
import { AuthModule } from '~modules/auth/auth.module';
import { AccountModule } from '~modules/account/account.module';
import { CustomerModule } from '~modules/customer/customer.module';
import { ProductGroupModule } from './modules/product-group/product-group.module';
import { ProductTypeModule } from './modules/product-type/product-type.module';
import { ProductModule } from './modules/product/product.module';
import { MotorcycleModule } from './modules/motorcycle/motorcycle.module';
import { ManufacturerModule } from './modules/manufacturer/manufacturer.module';
import { ManufacturerOrderModule } from './modules/manufacturer-order/manufacturer-order.module';
import { ImportCardModule } from './modules/import-card/import-card.module';
import { StaffModule } from './modules/staff/staff.module';
import { CustomerOrderModule } from './modules/customer-order/customer-order.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { ReturnCardModule } from './modules/return-card/return-card.module';
import { ProductCustomerOrderModule } from './modules/product-customer-order/product-customer-order.module';
import { ProductManufacturerOrderModule } from './modules/product-manufacturer-order/product-manufacturer-order.module';
import { ProductPromotionModule } from './modules/product-promotion/product-promotion.module';
import { ProductImportCardModule } from './modules/product-import-card/product-import-card.module';
import { ChangePriceModule } from './modules/change-price/change-price.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    AccountModule,
    CustomerModule,
    ProductGroupModule,
    ProductTypeModule,
    ProductModule,
    MotorcycleModule,
    ManufacturerModule,
    ManufacturerOrderModule,
    ImportCardModule,
    StaffModule,
    CustomerOrderModule,
    InvoiceModule,
    PromotionModule,
    ReturnCardModule,
    ProductCustomerOrderModule,
    ChangePriceModule,
    ProductImportCardModule,
    ProductPromotionModule,
    ProductManufacturerOrderModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

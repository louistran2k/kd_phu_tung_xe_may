import { Module } from '@nestjs/common';
import { ProductCustomerOrderService } from './product-customer-order.service';
import { ProductCustomerOrderController } from './product-customer-order.controller';

@Module({
  controllers: [ProductCustomerOrderController],
  providers: [ProductCustomerOrderService],
})
export class ProductCustomerOrderModule {}

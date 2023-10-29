import { Module } from '@nestjs/common';
import { ProductManufacturerOrderService } from './product-manufacturer-order.service';
import { ProductManufacturerOrderController } from './product-manufacturer-order.controller';

@Module({
  controllers: [ProductManufacturerOrderController],
  providers: [ProductManufacturerOrderService],
})
export class ProductManufacturerOrderModule {}

import { Module } from '@nestjs/common';
import { ManufacturerOrderService } from './manufacturer-order.service';
import { ManufacturerOrderController } from './manufacturer-order.controller';

@Module({
  controllers: [ManufacturerOrderController],
  providers: [ManufacturerOrderService],
})
export class ManufacturerOrderModule {}

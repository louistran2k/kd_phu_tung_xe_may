import { Module } from '@nestjs/common';
import { ChangePriceService } from './change-price.service';
import { ChangePriceController } from './change-price.controller';

@Module({
  controllers: [ChangePriceController],
  providers: [ChangePriceService],
})
export class ChangePriceModule {}

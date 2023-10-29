import { Controller } from '@nestjs/common';
import { ManufacturerOrderService } from './manufacturer-order.service';

@Controller('manufacturer-order')
export class ManufacturerOrderController {
  constructor(private readonly manufacturerOrderService: ManufacturerOrderService) {}
}

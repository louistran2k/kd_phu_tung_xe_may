import { Controller } from '@nestjs/common';
import { CustomerOrderService } from './customer-order.service';

@Controller('customer-order')
export class CustomerOrderController {
  constructor(private readonly customerOrderService: CustomerOrderService) {}
}

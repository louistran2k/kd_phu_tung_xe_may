import { Controller } from '@nestjs/common';
import { ProductCustomerOrderService } from './product-customer-order.service';

@Controller('product-customer-order')
export class ProductCustomerOrderController {
  constructor(private readonly productCustomerOrderService: ProductCustomerOrderService) {}
}

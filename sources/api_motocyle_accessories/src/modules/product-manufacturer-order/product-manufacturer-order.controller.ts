import { Controller } from '@nestjs/common';
import { ProductManufacturerOrderService } from './product-manufacturer-order.service';

@Controller('product-manufacturer-order')
export class ProductManufacturerOrderController {
  constructor(private readonly productManufacturerOrderService: ProductManufacturerOrderService) {}
}

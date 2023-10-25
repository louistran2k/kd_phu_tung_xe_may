import { Controller } from '@nestjs/common';
import { ProductGroupService } from './product-group.service';

@Controller('product-group')
export class ProductGroupController {
  constructor(private readonly productGroupService: ProductGroupService) {}
}

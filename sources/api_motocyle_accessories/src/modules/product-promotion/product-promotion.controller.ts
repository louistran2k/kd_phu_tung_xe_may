import { Controller } from '@nestjs/common';
import { ProductPromotionService } from './product-promotion.service';

@Controller('product-promotion')
export class ProductPromotionController {
  constructor(private readonly productPromotionService: ProductPromotionService) {}
}

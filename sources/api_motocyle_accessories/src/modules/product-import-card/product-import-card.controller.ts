import { Controller } from '@nestjs/common';
import { ProductImportCardService } from './product-import-card.service';

@Controller('product-import-card')
export class ProductImportCardController {
  constructor(private readonly productImportCardService: ProductImportCardService) {}
}

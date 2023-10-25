import { Module } from '@nestjs/common';
import { ProductImportCardService } from './product-import-card.service';
import { ProductImportCardController } from './product-import-card.controller';

@Module({
  controllers: [ProductImportCardController],
  providers: [ProductImportCardService],
})
export class ProductImportCardModule {}

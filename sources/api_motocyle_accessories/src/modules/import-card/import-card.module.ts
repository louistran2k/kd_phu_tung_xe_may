import { Module } from '@nestjs/common';
import { ImportCardService } from './import-card.service';
import { ImportCardController } from './import-card.controller';

@Module({
  controllers: [ImportCardController],
  providers: [ImportCardService],
})
export class ImportCardModule {}

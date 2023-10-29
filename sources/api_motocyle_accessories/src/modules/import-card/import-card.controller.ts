import { Controller } from '@nestjs/common';
import { ImportCardService } from './import-card.service';

@Controller('import-card')
export class ImportCardController {
  constructor(private readonly importCardService: ImportCardService) {}
}

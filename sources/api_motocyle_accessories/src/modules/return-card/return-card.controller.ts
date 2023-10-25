import { Controller } from '@nestjs/common';
import { ReturnCardService } from './return-card.service';

@Controller('return-card')
export class ReturnCardController {
  constructor(private readonly returnCardService: ReturnCardService) {}
}

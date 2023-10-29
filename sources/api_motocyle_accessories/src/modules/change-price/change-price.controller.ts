import { Controller } from '@nestjs/common';
import { ChangePriceService } from './change-price.service';

@Controller('change-price')
export class ChangePriceController {
  constructor(private readonly changePriceService: ChangePriceService) {}
}

import { Injectable } from '@nestjs/common';
import { AccountEntity } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity) private accountRepository: Repository<AccountEntity>
  ) { }

  async findAll() {
    return this.accountRepository.find();
  }
}

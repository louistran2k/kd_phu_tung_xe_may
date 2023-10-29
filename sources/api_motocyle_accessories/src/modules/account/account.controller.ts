import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthGuard } from '~modules/auth/auth.guard';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.accountService.findAll();
  }
}

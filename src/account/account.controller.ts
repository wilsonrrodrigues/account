import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './schema/account.schema';

@Controller('account')
export class AccountController {
    constructor(
        private readonly accountService: AccountService
    ) {}

    @Post()
    async create(@Body() account: Account): Promise<Account> {
        return this.accountService.create(account);
    }

    @Get(':id') 
    async findById(@Param('id') id: string): Promise<Account>{
        return this.accountService.findById(id);
    }
}

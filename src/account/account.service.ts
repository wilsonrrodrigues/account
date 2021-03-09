import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schema/account.schema';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name) private accountModel: Model<Account> 
    ) {}

    async create(account: Account): Promise<Account> {
        const createdAccount = new this.accountModel(account);
        return createdAccount.save();
    }

}

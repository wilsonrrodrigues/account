import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './schema/account.schema';

@Injectable()
export class AccountService {
    constructor(
        @InjectModel(Account.name) private accountModel: Model<AccountDocument> 
    ) {}

    async create(account: Account): Promise<Account> {
        const createdAccount = new this.accountModel(account);
        return createdAccount.save();
    }

    async findById(id: string): Promise<Account> {
        return this.accountModel.findById(id);       
    }

    async validateUser(email: string, pass : string): Promise<Account> {
        const account = await this.accountModel.findOne({email}).exec();       

        if(!account || account.password != pass)
            return null;

        const {password, ...rest} = account;

        return account;
    }

}
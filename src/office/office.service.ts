import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountType } from 'src/account/account-type.enum';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/schema/account.schema';
import { OnboardingNewOffice } from './dto/onboarding-new-office.dto';
import { Office, OfficeDocument } from './schema/office.schema';

@Injectable()
export class OfficeService {
    constructor( 
        private accountService : AccountService,
        @InjectModel(Office.name) private officeModel: Model<OfficeDocument>
    ) {}

    async create(office: Office): Promise<Office> {
        const createdOffice = new this.officeModel(office);
        return createdOffice.save();
    }

    async onboarding(officeOnboarding: OnboardingNewOffice) : Promise<Office>{

        const { name, email, password, officeName } = officeOnboarding;

        const account = await this.accountService.create({
            name, email,password, type: AccountType.OWNER
        });

        console.log(account._id);

        return this.create({officeName, owner: account, plan : 'Plano', status: 'active' });

    }

    async getAll() : Promise<Office[]>{
        return this.officeModel.find({}).populate({path: 'owner', select: '_id name email', model: Account.name}).exec();
    }
}

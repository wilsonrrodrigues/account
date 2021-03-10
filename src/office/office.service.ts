import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Office } from './schema/office.schema';

@Injectable()
export class OfficeService {
    constructor( 
        @InjectModel(Office.name) private officeModel: Model<Office>
    ) {}

    async create(office: Office): Promise<Office> {
        const createdOffice = new this.officeModel(office);
        return createdOffice.save();
    }
}

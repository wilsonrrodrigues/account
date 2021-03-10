import { Body, Controller, Post } from '@nestjs/common';
import { OfficeService } from './office.service';
import { Office } from './schema/office.schema';

@Controller('office')
export class OfficeController {
    constructor(
        private readonly officeService : OfficeService
    ) {}

    @Post()
    async create(@Body() office: Office): Promise<Office> {
        return this.officeService.create(office);
    }
}

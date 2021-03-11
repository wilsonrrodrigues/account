import { Body, Controller, Get, Post } from '@nestjs/common';
import { OnboardingNewOffice } from './dto/onboarding-new-office.dto';
import { OfficeService } from './office.service';
import { Office } from './schema/office.schema';

@Controller('office')
export class OfficeController {
    constructor(
        private readonly officeService : OfficeService
    ) {}

    @Post()
    async onboarding(@Body() office: OnboardingNewOffice): Promise<Office> {
        return this.officeService.onboarding(office);
    }

    @Get()
    async getAll() : Promise<Office[]> {
        return this.officeService.getAll();
    }
}

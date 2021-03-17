import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
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

    @UseGuards(JwtAuthGuard)
    @Get(':id') 
    async findById(@Param('id') id: string): Promise<Office>{
        return this.officeService.findById(id);
    } 
}

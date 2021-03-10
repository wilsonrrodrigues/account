import { Body, Controller, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { Plan } from './schema/plan.schema';

@Controller('plan')
export class PlanController {
    constructor(
        private readonly planservice : PlanService
    ) {}

    @Post()
    async create(@Body() plan: Plan): Promise<Plan> {
        return this.planservice.create(plan);
    }
}

import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Plan } from './schema/plan.schema';

@Injectable()
export class PlanService {
    constructor(
        @InjectModel(Plan.name) private planModel: Model<Plan>
    ) {}

    async create(plan: Plan): Promise<Plan> {
        const createdPlan = new this.planModel(plan);
        return createdPlan.save();
    }

}

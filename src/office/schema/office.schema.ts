import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Account } from "src/account/schema/account.schema";
import { Plan } from "src/plan/schema/plan.schema";
import { OfficeStatus } from "../office-status.enum";

export type OfficeDocument = Office & Document;

@Schema()
export class Office {

    @Prop()
    officeName: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: Account.name
    })
    owner: Account; // objectID

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: Plan.name
    })
    plan?: string; // objectID

    @Prop({
        type: String,
        enum: [OfficeStatus.TRIAL,'active','blocked_for_payment','canceled','inactive'],
        default: OfficeStatus.TRIAL
    })
    status?: string;
    
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
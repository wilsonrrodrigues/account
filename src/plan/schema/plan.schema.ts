import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PlanDocument = Plan & Document;

@Schema()
export class Plan {

    @Prop()
    name: string;

    @Prop()
    setting: string //{key: string; value: string};

    @Prop()
    resource: string[];

}

export const PlanSchema = SchemaFactory.createForClass(Plan);
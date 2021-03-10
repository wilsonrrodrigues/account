import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Plan extends Document {

    @Prop()
    name: string;

    @Prop()
    setting: string;

    @Prop()
    resource: string[];

}

export const PlanSchema = SchemaFactory.createForClass(Plan);
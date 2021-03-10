import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from 'mongoose';

@Schema()
export class Office extends Document {

    @Prop()
    officeName: string;

    @Prop()
    owner: string; // objectID

    @Prop()
    plan: string; // objectID

    @Prop()
    status: string;
    
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Account } from "src/account/schema/account.schema";

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

    @Prop()
    plan: string; // objectID

    @Prop()
    status: string;
    
}

export const OfficeSchema = SchemaFactory.createForClass(Office);
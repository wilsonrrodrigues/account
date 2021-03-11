import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

export type AccountDocument = Account & Document;

@Schema()
export class Account {

    _id?: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({
        type: String,
        enum: ['active','inactice','validation_email'],
        default: 'validation_email'
    })
    status?: string;

    @Prop({
        type: String,
        enum: ['admin','user','owner'],
        default: 'user'
    })
    type: string;

}

export const AccountSchema = SchemaFactory.createForClass(Account);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';

@Schema()
export class Account extends Document {

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    isActive: boolean;

}

export const AccountSchema = SchemaFactory.createForClass(Account);
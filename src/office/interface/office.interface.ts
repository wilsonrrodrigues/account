import { ObjectId } from "mongoose";

export class Office{
    officeName: string;
    owner: string; //objectID
    plan: string; //objectID
    status: string;
}
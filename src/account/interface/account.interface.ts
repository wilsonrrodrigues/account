import { Role } from "src/auth/guards/role.enum";

export class Account {
    name: string;
    email: string;
    password: string;
    status: string;
    //roles: Role[];
}
import { UserRolesEnum } from "../enums/user-roles.enum";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRolesEnum;
}
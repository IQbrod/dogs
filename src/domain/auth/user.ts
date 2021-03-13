import { encrypt } from "../../utils/authentication/auth-helper";
import { Role } from "../enum/role";

export class User {
    id: number;
    username: string;
    password: string;
    role: Role;

    static fromRequest(req: any, res: any): User {
        const user: User = new User();
        user.username = res.locals.username; // BasicAuth
        user.password = res.locals.password; // BasicAuth
        user.role = Role.VISITOR;
        return user;
    }

    static fromDatabase(row: any): User {
        const user: User = new User();
        user.username = row.username;
        user.role = row.role as Role;
        return user;
    }
}
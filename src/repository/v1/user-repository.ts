import { encode } from '../../utils/authentication/auth-helper';
import { User } from '../../domain/auth/user';
import { datasource } from '../../utils/database/database-service';
import { Consumer } from '../../utils/types';
import { InvalidLoginException } from '../../domain/exception/auth/invalid-login-exception';

class UserRepository {
    create(user: User, next: Consumer<string>) {
        const query: string = "INSERT INTO appuser VALUES (null,?,?,?);";

        datasource.query(query, [user.username, user.password, user.role], (err, rows, fields) => {
            if (err) { next(null, err); }
            user.id = rows.insertId;
            next(encode(user));
        });
    }

    login(user: User, next: Consumer<string>) {
        const query: string = "SELECT * FROM appuser WHERE username=? and password=?;";

        datasource.query(query, [user.username, user.password], (err, rows, fields) => {
            if (err) { next(null, err); }
            if (rows.length === 1) {
                next(encode(User.fromDatabase(rows[0])));
            } else {
                next(null, new InvalidLoginException());
            }
        })
    }
}

const instance: UserRepository = new UserRepository();
export { instance as userRepository };
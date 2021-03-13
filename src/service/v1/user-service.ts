import { User } from '../../domain/auth/user';
import { userRepository } from '../../repository/v1/user-repository';
import { Role } from '../../domain/enum/role';
import { AdminCreationException } from '../../domain/exception/auth/admin-creation-exception';
import { Consumer } from '../../utils/types';

class UserService {
    register(user: User, next: Consumer<string>) {
        if (user.role === Role.ADMIN) {
            next(null, new AdminCreationException());
        }
        userRepository.create(user, next);
    }

    login(user: User, next: Consumer<string>) {
        userRepository.login(user, next);
    }
}

const instance: UserService = new UserService();
export { instance as userService };
import express from 'express';
import { userService } from '../../service/v1/user-service';
import { User } from '../../domain/auth/user';
import { AdminCreationException } from '../../domain/exception/auth/admin-creation-exception';
import { ensureBasicAuth } from "../../utils/authentication/auth-helper";

const router = express.Router();

router.post('/v1/users', (req,res,next) => ensureBasicAuth(req,res,next), (req, res) => {
    const newUser: User = User.fromRequest(req, res);

    userService.register(newUser, (token: string, error: Error) => {
        if (error instanceof AdminCreationException) {
            res.status(403).json({ message: error.message });
        } else if (error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(201).json({ access_token: token });
        }
    })
});

router.get('/v1/users/login', (req,res,next) => ensureBasicAuth(req,res,next), (req, res) => {
    const newUser: User = User.fromRequest(req, res);

    userService.login(newUser, (token: string, error: Error) => {
        if (error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(200).json({ access_token: token });
        }
    })
})

export default router;
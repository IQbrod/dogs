import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Role } from '../../domain/enum/role';
import { User } from '../../domain/auth/user';
import { constants } from '../constants';

const ensureBasicAuth = (req: any, res: any, next: any) => {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        return res.status(401).json({ message: 'Missing Basic Authorization Header' });
    }

    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');
    if (!password) {
        return res.status(400).json({ message: 'Malformed token' })
    }
    res.locals.username = username;
    res.locals.password = encrypt(password);

    next();
}

const ensureToken = (req: any, res: any, next: any) => {
    const header = req?.headers?.authorization;

    if (typeof header !== "undefined") {
        req.token = header.split(" ")[1]; // Skip Bearer

        jwt.verify(req.token, constants.TKN_KEY, (err: any, data: any) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.locals.token = data;
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
}

const encode = (user: User): string => {
    return jwt.sign({id: user.id, username: user.username, role: Role[user.role]}, constants.TKN_KEY, {expiresIn: '2h'});
}

const encrypt = (secret: string): string => {
    return crypto.createHmac('sha256', constants.ENCRYPTION_KEY).update(secret).digest('hex');
}

export { ensureBasicAuth, ensureToken, encode, encrypt }
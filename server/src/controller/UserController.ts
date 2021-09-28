import { NextFunction, Request, Response } from 'express';
import { UserService } from '../service';
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: signUp :::');
    const email: string = req.body.email;
    const password: string = req.body.password;
    const nickname: string = req.body.nickname;
    const encryptPassword: string = bcrypt.hashSync(password, 10);

    try {
        await UserService.createUser(email, encryptPassword, nickname);
        console.log('sign up success');
        return res.json({ message: 'success' });
    } catch (e) {
        console.log(e);
    }
};

const login = async (req: any, res: Response, next: NextFunction) => {
    console.log('::: login :::');
    try {
        passport.authenticate('local', { session: false }, (err, user) => {
            if (err || !user) {
                console.log(err);
                return res.status(400).end();
            }
            req.login(user, { session: false }, err => {
                if (err) {
                    console.log(err);
                    return next(err);
                }
                const token = jwt.sign(
                    {
                        email: user.email,
                        nickname: user.nickname,
                    },
                    'jwt-secret-key',
                    { expiresIn: '7d' }, // The token expiration time.
                );
                console.log(user.nickname + ' is Logged In !!');
                return res.json({ token });
            });
        })(req, res);
    } catch (e) {
        console.error(e);
        return next(e);
    }
};

const modifyUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: modify user :::');
    try {
    } catch (e) {
        console.error(e);
    }
};

export default {
    signUp,
    login,
    modifyUser,
};

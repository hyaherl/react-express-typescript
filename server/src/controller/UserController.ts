import { NextFunction, Request, Response } from 'express';
import { UserService } from '../service';
const bcrypt = require('bcrypt');

const signUp = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: signUp :::');
    const email: string = req.body.email;
    const password: string = req.body.password;
    const encryptPassword: string = bcrypt.hashSync(password, 10);

    try {
        await UserService.createUser(email, encryptPassword);
    } catch (error) {
        console.log(error);
    }
};

const logIn = async (req: Request, res: Response, next: NextFunction) => {
    console.log('::: logIn :::');
    const email: string = req.body.email;
    const password: string = req.body.password;

    try {
        const user = await UserService.getUserByEmail(email);
        if (bcrypt.compareSync(password, user.password)) {
            console.log('login success');
        } else {
            console.log('login failed');
        }
    } catch (error) {
        console.log(error);
    }
};

export default {
    signUp,
    logIn,
};

import { User } from '../model/User';
import { UserService } from '../service';
const passport = require('passport');
const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const LocalStrategy = require('passport-local').Strategy;

// login
const LocalStrategyOption = {
    usernameField: 'email',
    passwordField: 'password',
};
const localVerify = async (email, password, done) => {
    try {
        const user: User = await UserService.getUserByEmail(email);
        if (!user) return done(null, false);

        const checkPassword = await bcrypt.compareSync(password, user.password);
        if (!checkPassword) return done(null, false);

        return done(null, user);
    } catch (e) {
        console.error(e);
        return done(e);
    }
};

// jwt
const jwtStrategyOption = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jwt-secret-key',
};
async function jwtVerift(payload, done) {
    try {
        const user: User = await UserService.getUserByEmail(payload.email);
        if (!user) return done(null, false);

        return done(null, user);
    } catch (e) {
        console.error(e);
        return done(e);
    }
}

module.exports = () => {
    passport.use(new LocalStrategy(LocalStrategyOption, localVerify));
    passport.use(new JWTStrategy(jwtStrategyOption, jwtVerift));
};

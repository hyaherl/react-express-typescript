import { Router } from 'express';
import { UserController } from '../controller';
const passport = require('passport');

const router = Router();

router.post('/signUp', UserController.signUp);
router.post('/login', UserController.login);
router.put('/modify', passport.authenticate('jwt', { session: false }), UserController.modifyUser);
router.get('/profile', passport.authenticate('jwt', { session: false }), UserController.getUser);

export default router;

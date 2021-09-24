import { Router } from 'express';
import { UserController } from '../controller';

const router = Router();

router.post('/signUp', UserController.signUp);
router.use('/login', UserController.login);

export default router;

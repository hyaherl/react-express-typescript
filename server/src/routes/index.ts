import { Router } from 'express';
import UserRouter from './UserRouter';
import BoardRouter from './BoardRouter';

const router = Router();

router.use('/user', UserRouter);
router.use('/board', BoardRouter);

export default router;

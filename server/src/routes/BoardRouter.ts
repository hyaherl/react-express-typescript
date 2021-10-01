import { Router } from 'express';
import { BoardController } from '../controller';
const passport = require('passport');

const router = Router();

router.post('/add', passport.authenticate('jwt', { session: false }), BoardController.addBoard);
router.put('/modify', passport.authenticate('jwt', { session: false }), BoardController.modifyBoard);
router.get('/list', BoardController.getBoardList);
router.get('/board', BoardController.getBoard);
router.delete('/board', passport.authenticate('jwt', { session: false }), BoardController.removeBoard);

export default router;

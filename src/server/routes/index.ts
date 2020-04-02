import * as express from 'express';
import chirpsRouter from './chirps';
import usersRouter from './users';

const router = express.Router();

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

export default router;
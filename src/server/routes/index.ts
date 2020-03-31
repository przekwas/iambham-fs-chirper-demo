import * as express from 'express';
import chirpsRouter from './chirps';

const router = express.Router();

router.use('/chirps', chirpsRouter);

export default router;
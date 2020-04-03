import * as express from 'express';
import db from '../db';
import logger from '../utils/logger';

const router = express.Router();

// GET /api/users/1 or GET /api/users
router.get('/:id?', async (req, res, next) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			logger.silly(`getting user id ${id}`);
			const [user] = await db.users.one(id);
			//DO NOT SEND A PASSWORD IN YOUR RESPONSE
			delete user.password;
			res.json(user);
		} catch (error) {
			logger.warn('get one user failed');
			next(error);
		}
	} else {
		try {
			logger.silly('getting all users');
			const users = await db.users.all();
			res.json(users);
		} catch (error) {
			logger.warn('get all users failed');
			next(error);
		}
	}
});

export default router;

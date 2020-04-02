import * as express from 'express';
import db from '../db';

const router = express.Router();

// GET /api/users/1 or GET /api/users
router.get('/:id?', async (req, res) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [user] = await db.users.one(id);
			//DO NOT SEND A PASSWORD IN YOUR RESPONSE
			delete user.password;
			res.json(user);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	} else {
		try {
			const users = await db.users.all();
			res.json(users);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	}
});

export default router;

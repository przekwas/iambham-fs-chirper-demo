import * as express from 'express';
import db from '../db';

const router = express.Router();

// GET /api/chirps/1 or GET /api/chirps
router.get('/:id?', async (req, res) => {
	const id = Number(req.params.id);
	if (id) {
		try {
			const [chirp] = await db.chirps.one(id);
			res.json(chirp);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	} else {
		try {
			const chirps = await db.chirps.all();
			res.json(chirps);
		} catch (error) {
			console.log(error);
			res.status(500).json('My code sucks.');
		}
	}
});

// POST /api/chirps/
router.post('/', async (req, res) => {
	const chirp = req.body;
	try {
		const result = await db.chirps.insert(chirp.userid, chirp.content);
		// sends { id: 1 } if it inserted chirp id 1
		res.json({ id: result.insertId });
	} catch (error) {
		console.log(error);
		res.status(500).json('My code sucks.');
	}
});

// PUT /api/chirps/1
router.put('/:id', async (req, res) => {
	const id = Number(req.params.id);
	const chirp = req.body;
	try {
		await db.chirps.update(id, chirp.content);
		res.json({ msg: 'edited', id });
	} catch (error) {
		console.log(error);
		res.status(500).json('My code sucks.');
	}
});

// DELETE /api/chirps/1
router.delete('/:id', async (req, res) => {
	const id = Number(req.params.id);
	try {
		await db.chirps.destroy(id);
		res.json({ msg: 'destroyed' });
	} catch (error) {
		console.log(error);
		res.status(500).json('My code sucks.');
	}
});

export default router;

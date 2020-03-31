import * as express from 'express';
import db from '../db';

const router = express.Router();

// GET /api/chirps
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const chirps = await db.chirps.all();
        res.json(chirps);
    } catch (error) {
        console.log(error);
        res.status(500).json('My code sucks.');
    }
});

export default router;
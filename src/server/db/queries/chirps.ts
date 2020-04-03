import { Query } from '../';
import type { TChirps, TUsers } from '../models';

const all = () =>
	Query<Array<TChirps | TUsers>>(`
    SELECT
        chirps.*,
        users.username
    FROM chirps
    JOIN users ON users.id = chirps.userid
    ORDER BY chirps.id DESC
`);

const one = (id: number) =>
	Query<Array<TChirps | TUsers>>(
		`
    SELECT
        chirps.*,
        users.username
    FROM chirps
    JOIN users ON users.id = chirps.userid
    WHERE chirps.id = ?
`,
		[id]
	);

const insert = (userid: number, content: string) =>
	Query<{ insertId: number }>(`INSERT INTO chirps (userid, content) VALUE (?)`, [[userid, content]]);

const update = (id: number, content: string) => Query(`UPDATE chirps SET content = ? WHERE id = ?`, [content, id]);

const destroy = (id: number) => Query(`DELETE FROM chirps WHERE id = ?`, [id]);

export default {
	all,
	one,
	insert,
	update,
	destroy
};

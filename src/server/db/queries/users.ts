import { Query } from '../';
import type { TUsers } from '../../utils/interfaces';

const all = () =>
	Query<Array<TUsers>>(`
    SELECT
        id,
        username,
        email,
        created_at
    FROM users
`);

const one = (id: number) =>
	Query<Array<TUsers>>(
		`
    SELECT
        *
    FROM users
    WHERE id = ?
`,
		[id]
	);

export default {
	all,
	one
};

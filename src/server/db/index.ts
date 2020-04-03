import * as mysql from 'mysql';
import config from '../config';
import logger from '../utils/logger';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
	const sql = mysql.format(query, values);
	logger.silly('executing query:');
	logger.debug(sql);

	return new Promise<T>((resolve, reject) => {
		pool.query(sql, (err, results) => {
			if (err) {
				logger.silly('query failed');
				reject(err);
			} else {
				logger.silly('query executed');
				resolve(results);
			}
		});
	});
};

import chirps from './queries/chirps';
import users from './queries/users';
export default {
	chirps,
	users
};

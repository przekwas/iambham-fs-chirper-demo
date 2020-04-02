import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {

    const sql = mysql.format(query, values);
    console.log('\n' + sql + '\n');

    return new Promise<T>((resolve, reject) => {
        pool.query(sql, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

import chirps from './queries/chirps';
import users from './queries/users';
export default {
    chirps,
    users
}
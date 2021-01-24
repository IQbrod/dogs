import mysql from 'mysql';
import { constants } from '../constants';

const datasource = mysql.createPool({
    host: constants.DB_HOST,
    user: constants.DB_USERNAME,
    password: constants.DB_PASSWORD,
    database: constants.DB_NAME,
    connectionLimit: 10
});

export { datasource };
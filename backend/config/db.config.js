import dotenv from 'dotenv';
dotenv.config();

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, DB_HOST, POSTGRES_PORT, DB_DIALECT } = process.env;

export {
    POSTGRES_DB as database,
    POSTGRES_USER as username,
    POSTGRES_PASSWORD as password,
    DB_HOST as host,
    POSTGRES_PORT as port,
    DB_DIALECT as dialect,
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    // connectionString: process.env.DATABASE_URL
    user: 'postgres',
    password: 'facilita',
    database: 'facilita',
    host: "postgres",
    port: 5432
});
pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});
exports.default = pool;

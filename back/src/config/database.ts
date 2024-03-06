import { Pool } from "pg";

const pool = new Pool({
    // connectionString: process.env.DATABASE_URL
    user: 'postgres',
    password: 'facilita',
    database: 'facilita',
    host: "localhost",
    port: 5432
})

pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
});

export default pool
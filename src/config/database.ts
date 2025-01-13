import pg from "pg";

const {Pool} = pg;

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// cambiar con los datos de docker-compose.yml:

const connectionString = 'postgresql://postgres:root@localhost:5434/db_hito'

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
});
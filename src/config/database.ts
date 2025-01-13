import "dotenv/config";
import pg from "pg";

const {Pool} = pg;

// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// cambiar con los datos de docker-compose.yml:

const connectionString = process.env.CONNECT_DB;

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
});
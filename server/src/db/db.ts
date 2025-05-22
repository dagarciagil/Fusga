import { Pool } from "pg";
import { config } from "../config/config";

const pool = new Pool({
  connectionString: config.databaseUrl,
  ssl: {
    rejectUnauthorized: false, // importante para conexiones con Neon o bases en la nube
  },
});

export default pool;

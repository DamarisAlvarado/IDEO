
import pkg from 'pg';
const { Pool } = pkg;

   const pool = new Pool({
       user: 'neondb_owner',
       password: 'npg_GOWTHxmuc14s',
       port: 5432,
       host: 'ep-wandering-thunder-agl4wq4s-pooler.c-2.eu-central-1.aws.neon.tech',
       database: 'neondb',
       ssl: {
        rejectUnauthorized: false, // Neon requiere SSL, esta línea es importante
  },
    });

export default pool;
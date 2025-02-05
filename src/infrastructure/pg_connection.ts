import { Pool } from 'pg';

// PostgreSQL infrastructure options
export const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'Purchase_System',
    password: process.env.DB_PASSWORD || '1234',
    port: Number(process.env.DB_PORT) || 5432, // Default PostgreSQL port
});

export async function connectToDatabase() {
    try {
        await pool.connect();
        // Always release the client back to the pool after use
        // client.release();
    } catch (error) {
        console.error('Failed to connect to the database.', error);
        process.exit(1); // Exit the process with failure
    }
}

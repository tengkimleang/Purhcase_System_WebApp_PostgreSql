import { Pool } from 'pg';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Purchase} from "../domain/Purchase";

// PostgreSQL infrastructure options
export const connectionString = {
    type: 'postgres',
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'Purchase_System',
    password: process.env.DB_PASSWORD || '1234',
    port: Number(process.env.DB_PORT) || 5432, // Default PostgreSQL port
};

export const typeOrmModule =  TypeOrmModule.forRoot({
    type: 'postgres',
    host:connectionString.host,
    port:connectionString.port,
    username:connectionString.user,
    password:connectionString.password,
    database:connectionString.database,
    synchronize:true,
    entities:[Purchase]
});

import { Injectable } from '@nestjs/common';
import {connectToDatabase} from "../infrastructure/pg_connection";

@Injectable()
export class PurchaseService {

    insert(): string {
        connectToDatabase();
        return "12345";
    }
}

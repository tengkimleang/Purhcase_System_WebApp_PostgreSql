import { Injectable } from '@nestjs/common';
import {connectToDatabase, pool} from "../infrastructure/pg_connection";
import {Purchase} from "../domain/Purchase";
import {ResponseData} from "../domain/response_data";

@Injectable()
export class PurchaseService {

    async insert(purchase:Purchase): Promise<ResponseData> {
        let client;
        try {
            client = await pool.connect();
            // Execute the insert query
            await pool.query(`
                INSERT INTO "Tbl_Purchases" (purchase_number, vendor_code, vendor_name, purchase_date, ship_to, remarks)
                VALUES ($1, $2, $3, $4, $5, $6);
            `, [
                purchase.purchase_number,
                purchase.vendor_code,
                purchase.vendor_name,
                purchase.purchase_date,
                purchase.ship_to,
                purchase.remarks]);
            const result=new ResponseData();
            result.errorCode="0";
            result.errorMessage="Success";
            return result;
        } catch (error) {
            const result=new ResponseData();
            result.errorCode="1";
            result.errorMessage='Error inserting record:' + error;
            // Return a meaningful error message
            // Avoid leaking sensitive information
            return result;
        }finally {
            if (client) {
                client.release();
            }
        }
    }

}

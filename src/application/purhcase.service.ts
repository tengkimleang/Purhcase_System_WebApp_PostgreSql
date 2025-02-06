import { Injectable } from '@nestjs/common';
import {Purchase} from "../domain/Purchase";
import {ResponseData} from "../dto/response_data";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private readonly purchaseRepository: Repository<Purchase>,
    ) {}
    async insert(purchase:Partial<Purchase>): Promise<ResponseData> {

        try {
            const newPurchase:Purchase=this.purchaseRepository.create(purchase);
            await this.purchaseRepository.save(newPurchase);
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
        }
    }

}

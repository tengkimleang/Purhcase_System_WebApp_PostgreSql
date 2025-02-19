import { Injectable } from '@nestjs/common';
import { Purchase } from "../domain/Purchase";
import { ResponseData } from "../dto/response_data";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository,DataSource } from "typeorm";
import { PurchaseRow } from "../domain/PurchaseRow";

@Injectable()
export class PurchaseService {
    constructor(
        @InjectRepository(Purchase)
        private readonly purchaseRepository: Repository<Purchase>,
        @InjectRepository(PurchaseRow)
        private readonly purchaseRowRepository: Repository<PurchaseRow>,
    ) {}

    async insert(purchase: Partial<Purchase>, purchaseRows: PurchaseRow[]): Promise<ResponseData> {
        const queryRunner = this.purchaseRepository.manager.connection.createQueryRunner(); // Create a new QueryRunner

        // Start transaction
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // Save purchase entity using the query runner
            const newPurchase = queryRunner.manager.create(Purchase, purchase);
            const savedPurchase = await queryRunner.manager.save(Purchase, newPurchase);

            // Save each purchase row using the query runner
            for (const [index, row] of purchaseRows.entries()) {
                const purchaseRow = queryRunner.manager.create(PurchaseRow, {
                    ...row,
                    DocEntry: savedPurchase.purchase_number,
                    LineId: index + 1,
                });
                await queryRunner.manager.save(PurchaseRow, purchaseRow);
            }

            // Commit the transaction if everything succeeds
            await queryRunner.commitTransaction();

            return this.createResponse('0', 'Success');
        } catch (error) {
            // Rollback transaction in case of an error
            await queryRunner.rollbackTransaction();

            return this.createResponse('1', `Error inserting record: ${error.message}`);
        } finally {
            // Release the query runner
            await queryRunner.release();
        }
    }

    private async createAndSavePurchaseRow(row: PurchaseRow, purchaseNumber: number, lineId: number): Promise<void> {

        const purchaseRow = this.purchaseRowRepository.create({
            ProductCode: row.ProductCode ?? null,
            ProductName: row.ProductName ?? null,
            Qty: row.Qty ?? 0,
            UnitPrice: row.UnitPrice ?? 0,
            DocEntry: purchaseNumber, // Explicitly set foreign key
            LineId: lineId,           // Explicitly set line number
        });
        await this.purchaseRowRepository.save(purchaseRow);

    }

    private createResponse(errorCode: string, errorMessage: string): ResponseData {
        return { id: 0, errorCode, errorMessage };
    }
}

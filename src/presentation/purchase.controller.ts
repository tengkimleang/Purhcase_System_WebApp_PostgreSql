import {Body, Controller, Post} from "@nestjs/common";
import {PurchaseService} from "../application/purhcase.service";
import {PurchaseDto} from "../dto/purchase.dto";
import {Purchase} from "../domain/Purchase";


@Controller("purchase")
export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService) {}

    @Post("insert")
    async insert(@Body() purchaseDto:PurchaseDto):Promise<any> {
        const purchase = new Purchase();
        purchase.purchase_number = purchaseDto.purchase_number;
        purchase.vendor_code = purchaseDto.vendor_code;
        purchase.vendor_name = purchaseDto.vendor_name;
        purchase.purchase_date = new Date(purchaseDto.purchase_date); // Convert string to Date
        purchase.ship_to = purchaseDto.ship_to;
        purchase.remarks = purchaseDto.remarks;
        return await this.purchaseService.insert(purchase);
    }
}

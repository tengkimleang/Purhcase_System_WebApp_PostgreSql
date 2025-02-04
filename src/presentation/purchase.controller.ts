import {Controller, Get} from "@nestjs/common";
import {PurchaseService} from "../application/purhcase.service";


@Controller("purchase")
export class PurchaseController {
    constructor(private readonly appService: PurchaseService) {}

    @Get("insert")
    insert():string {
        return this.appService.insert();
    }
}

import {Module} from "@nestjs/common";
import {PurchaseController} from "../presentation/purchase.controller";
import {PurchaseService} from "../application/purhcase.service";


@Module({
    imports: [],
    controllers: [PurchaseController],
    providers: [PurchaseService],
})
export class PurchaseModule {}

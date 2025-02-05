import {Module} from "@nestjs/common";
import {PurchaseController} from "../presentation/purchase.controller";
import {PurchaseService} from "../application/purhcase.service";
import {AppService} from "../application/app.service";


@Module({
    imports: [],
    controllers: [PurchaseController],
    providers: [PurchaseService,AppService],
})
export class PurchaseModule {}

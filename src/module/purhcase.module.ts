import {Module} from "@nestjs/common";
import {PurchaseController} from "../presentation/purchase.controller";
import {PurchaseService} from "../application/purhcase.service";
import {AppService} from "../application/app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmModule} from "../infrastructure/pg_connection";
import {Purchase} from "../domain/Purchase";
import {PurchaseRow} from "../domain/PurchaseRow";


@Module({
    imports: [
        typeOrmModule,
        TypeOrmModule.forFeature([Purchase,PurchaseRow])
    ],
    controllers: [PurchaseController],
    providers: [PurchaseService,AppService],
})
export class PurchaseModule {}

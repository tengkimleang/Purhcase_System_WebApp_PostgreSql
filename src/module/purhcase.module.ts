import {Module} from "@nestjs/common";
import {PurchaseController} from "../presentation/purchase.controller";
import {PurchaseService} from "../application/purhcase.service";
import {AppService} from "../application/app.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {typeOrmModule} from "../infrastructure/pg_connection";
import {Purchase} from "../domain/Purchase";


@Module({
    imports: [
        typeOrmModule,
        TypeOrmModule.forFeature([Purchase])
    ],
    controllers: [PurchaseController],
    providers: [PurchaseService,AppService],
})
export class PurchaseModule {}

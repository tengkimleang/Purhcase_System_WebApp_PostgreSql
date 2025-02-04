import {Module} from "@nestjs/common";
import {PurchaseModule} from "./module/purhcase.module";
import {AppModule} from "./module/app.module";

@Module({
    imports:[PurchaseModule,AppModule],
    controllers:[],
    providers:[],
})
export class FactoryModule {}

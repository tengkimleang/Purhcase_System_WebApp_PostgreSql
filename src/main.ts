import { NestFactory } from '@nestjs/core';
import {FactoryModule} from "./factory.module";

async function bootstrap() {
  const app = await NestFactory.create(FactoryModule);
  await app.listen(process.env.PORT ?? 3030);
}
bootstrap();

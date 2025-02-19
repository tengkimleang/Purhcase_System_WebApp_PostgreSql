import { NestFactory } from '@nestjs/core';
import {FactoryModule} from "./factory.module";

async function bootstrap() {
  const app = await NestFactory.create(FactoryModule);
  app.enableCors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
  });
  await app.listen(process.env.PORT ?? 3030);
}
bootstrap();

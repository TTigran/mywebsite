import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: any  = process.env.PORT
    await app.listen(port);
}
bootstrap();

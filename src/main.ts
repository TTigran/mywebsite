import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as process from 'process';


async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
    );


    const port: any = process.env.PORT
    await app.listen(port || 4000);
}

bootstrap();

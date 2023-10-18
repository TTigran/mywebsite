import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as process from 'process';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
    );

    app.register(require('@fastify/static'), {
        root: join(__dirname, '..', 'public'), // Root directory for static assets
        wildcard: false, // Disable wildcard support
    });

    app.setViewEngine({
        engine: {
            handlebars: require('handlebars'),
        },
        templates: join(__dirname, '..', 'views'),
    });

    const port: any = process.env.PORT
    await app.listen(port || 4000);
}

bootstrap();

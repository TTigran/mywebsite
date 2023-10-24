import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmailModule} from "./email/EmailModule";
import {CorsMiddleware} from "./middleware/CorsMiddleware";
import {ViewCountModule} from "./viewcount/ViewCountModule";

@Module({
  imports: [EmailModule, ViewCountModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {

    consumer.apply(CorsMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}

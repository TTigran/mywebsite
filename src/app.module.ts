import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmailModule} from "./email/EmailModule";
import {CorsMiddleware} from "./middleware/CorsMiddleware";
import {ViewCountModule} from "./viewcount/ViewCountModule";
import {MLModule} from "./ml/MLMddule";



@Module({
  imports: [EmailModule, ViewCountModule, MLModule],
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

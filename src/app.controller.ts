import {Controller, Get, Render, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello world!' };
  }
  @Get("/ping")
  getPong(): any {
    return { pong: "pong"};
  }


}

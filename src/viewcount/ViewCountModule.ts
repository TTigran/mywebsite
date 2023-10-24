import { Module } from '@nestjs/common';
import {ViewCountController} from "./ViewCountController";
import {ViewCountService} from "./ViewCountService";


@Module({
    controllers: [ViewCountController], // Add your EmailController to the controllers array
    providers: [ViewCountService],
    exports: [ViewCountService]
})

export class ViewCountModule {}
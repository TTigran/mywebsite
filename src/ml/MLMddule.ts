import { Module } from '@nestjs/common';
import {MLService} from "./MLService";
import {MLController} from "./MLController";


@Module({
    imports: [],
    controllers: [MLController],
    providers: [MLService],
})
export class MLModule {}
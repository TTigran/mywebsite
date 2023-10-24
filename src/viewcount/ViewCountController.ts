import {Controller, Post, Body, Get} from '@nestjs/common';
import {ViewCountService} from "./ViewCountService";



@Controller('view')
export class ViewCountController {
    constructor(private readonly viewCountService: ViewCountService) {}
    @Get('/count')
    async getCount(): Promise<any> {
        return await this.viewCountService.readFileSyncAndUpdate()
    }
}
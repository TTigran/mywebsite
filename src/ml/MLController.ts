import {Controller, Post, Body, Get} from '@nestjs/common';
import {MLService} from "./MLService";
;
@Controller('ml')
export class MLController {
    constructor(private readonly mlService: MLService) {}



    @Post('ask')
    async askChatbot(@Body() input: { text: string }): Promise<string> {
        const response = await this.mlService.generateResponse(input.text);
        return response;
    }
}
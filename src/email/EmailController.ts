import {Controller, Post, Body, Get} from '@nestjs/common';
import { EmailService } from "./EmailService";


@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Post('/send')
    async sendEmail(@Body() emailData: any) {
        try {
            await this.emailService.sendEmail(emailData);
            return { message: 'Email sent successfully' };
        } catch (error) {
            throw new Error('Failed to send email: ' + error.message);
        }
    }
}
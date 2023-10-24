import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class CorsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin as needed
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

        // Set credentials to true if you're using cookies or authentication headers
        res.header('Access-Control-Allow-Credentials', 'true');

        // Handle preflight requests (OPTIONS)
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
        } else {
            next();
        }
    }
}
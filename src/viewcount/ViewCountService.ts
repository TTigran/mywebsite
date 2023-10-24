import {Injectable} from '@nestjs/common';
import * as jsonData from './count.json';
import * as fs from "fs";

@Injectable()
export class ViewCountService {
   async readFileSyncAndUpdate() {
        const path = "src/viewcount/count.json"
        try {
            const data = fs.readFileSync(path, 'utf8');
            const parsedData = JSON.parse(data);
            const updatedData = { views: parsedData.views + 1 };
            const jsonData = JSON.stringify(updatedData, null, 2);
            fs.writeFileSync(path, jsonData, 'utf8');
            return parsedData; // Return the original data
        } catch (err) {
            console.error('Error:', err);
            throw err; // Propagate the error
        }
    }


}
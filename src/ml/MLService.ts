import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs-node';

@Injectable()
export class MLService {
    private model: tf.GraphModel;

    constructor() {
        (async function a(){
            this.model = await tf.loadGraphModel('src/ml/model.json');
        })()

    }

    async generateResponse(inputText: string): Promise<string> {
        const inputTensor = tf.tensor([inputText]);
        const outputTensor: any = this.model.predict(inputTensor);
        const response = outputTensor.dataSync()[0];

        return response;
    }
}

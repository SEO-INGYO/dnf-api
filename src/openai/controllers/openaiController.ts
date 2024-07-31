import * as OpenAiService from '../services/openaiService';
import {Request, Response} from "express";

export const getCreateCompletion = async (req: Request, res: Response):Promise<any> => {
    try {
        console.log("컨트롤러");
        const prompt = req.query.prompt as string;

        const result = await OpenAiService.createCompletion(prompt);
        console.log("result" + result);
        res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
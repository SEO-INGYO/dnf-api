import {Request, Response} from "express";
import * as DfService from '../services/dfService';
export const getDfCharacterInfo = async (req: Request, res: Response):Promise<any> => {
    try {
        const serverName = req.query.serverName as string;
        const characterName = req.query.characterName as string;

        const result = await DfService.getDfCharacter(serverName, characterName);
        res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
export const getDfInfo = async (req: Request, res: Response):Promise<any> => {
    try {
        const result = await DfService.getDfList();
        res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

export const getDfTest = async (req: Request, res: Response):Promise<any> => {
    try {
        const serverId = req.query.serverId as string;
        const characterId = req.query.characterId as string;

        const result = await DfService.getDfCharacterTest(serverId, characterId);
        res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}
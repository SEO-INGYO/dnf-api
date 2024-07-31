import * as DfApi from '../apis/dfApi';
import * as DfInterface from '../interfaces/dfInterface';
import {
    getDfCharacterAvatar,
    getDfCharacterBuffSkillAvatar,
    getDfCharacterBuffSkillCreature,
    getDfCharacterBuffSkillEquipment,
    getDfCharacterCreature,
    getDfCharacterEquipmentTrait,
    getDfCharacterFlag,
    getDfCharacterSkillStyle,
    getDfCharacterTalisman
} from "../apis/dfApi";

/**
 * 데이터 가공
 * @param serverName - 서버 이름
 * @param characterName - 캐릭터 이름
 */
export const getDfCharacter = async (serverName: string, characterName: string): Promise<any> => {
    let characterId: string | null = null;

    try {
        const serverId: string | null = await getDfServerId(serverName);

        if (serverId === null) {
            throw new Error(`Server with name ${serverName} not found`);
        }
        const response = await DfApi.getDfCharacterSearch(serverId, characterName);
        console.log(response);
        const character: DfInterface.apiResponseCharacter[] = response.rows;
        const parsedData = character[0];
        characterId = parsedData.characterId;
        return characterId
    } catch (error) {
        console.error('Error fetching servers:', error);
        throw error;
    }

};

/**
 * 서버 이름으로 서버 ID 가져오는 모듈
 * @param serverName - 서버 이름
 * @param characterName - 캐릭터 이름
 */
export const getDfServerId = async (serverName: string): Promise<any> => {
    let serverId: string | null = null;

    try {
        const response = await DfApi.getDfServers();
        const servers: DfInterface.apiResponseServer[] = response.rows;
        const server = servers.find(server => server.serverName === serverName);

        if (server) {
            serverId = server.serverId;
        } else {
            serverId = "all";
        }

        return serverId
    } catch (error) {
        console.error('Error fetching servers:', error);
    }

};

/**
 * 서버 ID 와 캐릭터 ID 로 장착 장비 조회
 * @param serverId - 서버 ID
 * @param characterId - 캐릭터 ID
 */
export const getDfCharacterEquipment = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const response = await DfApi.getDfCharacterEquipment(serverId, characterId);
        return response;
    } catch (error) {
        console.error('Error fetching servers:', error);
    }

};

/**
 * 서버 ID 와 캐릭터 ID 로 장착 장비 조회
 * @param serverId - 서버 ID
 * @param characterId - 캐릭터 ID
 */
export const getDfCharacterTest = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const response = await DfApi.getDfCharacterBuffSkillCreature(serverId, characterId);
        return response;
    } catch (error) {
        console.error('Error fetching servers:', error);
    }

};

/**
 * 메인 데이터 가공
 */
export const getDfList = async (): Promise<any> => {
    try {


        const responseServer = await DfApi.getDfServers(); // 1. getDfServers()로 서버 ID 리스트 파싱 및 가져오기
        const servers: DfInterface.apiResponseServer[] = responseServer.rows;

        for (const server of servers) {
            try {
                const serverId = server.serverId as string;
                const minFame = 30000;
                const maxFame = 34000;

                const responseCharacter = await DfApi.getDfCharacterFameSearch(serverId, minFame, maxFame);
                const characters: DfInterface.apiResponseCharacter[] = responseCharacter.rows;

                for (const character of characters) {
                    const serverId = character.serverId as string;
                    const characterId = character.characterId as string;
/*                    const responseEquipment = await DfApi.getDfCharacterEquipment(serverId, characterId);
                    const equipments: DfInterface.apiResponseCharacterEquipment[] = responseEquipment;
                    console.log(equipments);*/
/*                    const responseStatus = await DfApi.getDfCharacterStatus(serverId, characterId);
                    const status: DfInterface.apiResponseCharacterStatus[] =responseStatus;
                    console.log(status);*/

                    //const status: DfInterface.apiResponseCharacterEquipment[] = responseStatus;
                    //console.log(responseStatus);
                }
            } catch (error) {
                console.error('Error fetching servers:', error);
            }
        }

        return servers;
    } catch (error) {
        console.error('Error fetching servers:', error);
    }

};
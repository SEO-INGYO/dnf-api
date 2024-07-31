"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDfList = exports.getDfCharacterTest = exports.getDfCharacterEquipment = exports.getDfServerId = exports.getDfCharacter = void 0;
const DfApi = __importStar(require("../apis/dfApi"));
/**
 * 데이터 가공
 * @param serverName - 서버 이름
 * @param characterName - 캐릭터 이름
 */
const getDfCharacter = (serverName, characterName) => __awaiter(void 0, void 0, void 0, function* () {
    let characterId = null;
    try {
        const serverId = yield (0, exports.getDfServerId)(serverName);
        if (serverId === null) {
            throw new Error(`Server with name ${serverName} not found`);
        }
        const response = yield DfApi.getDfCharacterSearch(serverId, characterName);
        console.log(response);
        const character = response.rows;
        const parsedData = character[0];
        characterId = parsedData.characterId;
        return characterId;
    }
    catch (error) {
        console.error('Error fetching servers:', error);
        throw error;
    }
});
exports.getDfCharacter = getDfCharacter;
/**
 * 서버 이름으로 서버 ID 가져오는 모듈
 * @param serverName - 서버 이름
 * @param characterName - 캐릭터 이름
 */
const getDfServerId = (serverName) => __awaiter(void 0, void 0, void 0, function* () {
    let serverId = null;
    try {
        const response = yield DfApi.getDfServers();
        const servers = response.rows;
        const server = servers.find(server => server.serverName === serverName);
        if (server) {
            serverId = server.serverId;
        }
        else {
            serverId = "all";
        }
        return serverId;
    }
    catch (error) {
        console.error('Error fetching servers:', error);
    }
});
exports.getDfServerId = getDfServerId;
/**
 * 서버 ID 와 캐릭터 ID 로 장착 장비 조회
 * @param serverId - 서버 ID
 * @param characterId - 캐릭터 ID
 */
const getDfCharacterEquipment = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield DfApi.getDfCharacterEquipment(serverId, characterId);
        return response;
    }
    catch (error) {
        console.error('Error fetching servers:', error);
    }
});
exports.getDfCharacterEquipment = getDfCharacterEquipment;
/**
 * 서버 ID 와 캐릭터 ID 로 장착 장비 조회
 * @param serverId - 서버 ID
 * @param characterId - 캐릭터 ID
 */
const getDfCharacterTest = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield DfApi.getDfCharacterBuffSkillCreature(serverId, characterId);
        return response;
    }
    catch (error) {
        console.error('Error fetching servers:', error);
    }
});
exports.getDfCharacterTest = getDfCharacterTest;
/**
 * 메인 데이터 가공
 */
const getDfList = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseServer = yield DfApi.getDfServers(); // 1. getDfServers()로 서버 ID 리스트 파싱 및 가져오기
        const servers = responseServer.rows;
        for (const server of servers) {
            try {
                const serverId = server.serverId;
                const minFame = 30000;
                const maxFame = 34000;
                const responseCharacter = yield DfApi.getDfCharacterFameSearch(serverId, minFame, maxFame);
                const characters = responseCharacter.rows;
                for (const character of characters) {
                    const serverId = character.serverId;
                    const characterId = character.characterId;
                    /*                    const responseEquipment = await DfApi.getDfCharacterEquipment(serverId, characterId);
                                        const equipments: DfInterface.apiResponseCharacterEquipment[] = responseEquipment;
                                        console.log(equipments);*/
                    /*                    const responseStatus = await DfApi.getDfCharacterStatus(serverId, characterId);
                                        const status: DfInterface.apiResponseCharacterStatus[] =responseStatus;
                                        console.log(status);*/
                    //const status: DfInterface.apiResponseCharacterEquipment[] = responseStatus;
                    //console.log(responseStatus);
                }
            }
            catch (error) {
                console.error('Error fetching servers:', error);
            }
        }
        return servers;
    }
    catch (error) {
        console.error('Error fetching servers:', error);
    }
});
exports.getDfList = getDfList;

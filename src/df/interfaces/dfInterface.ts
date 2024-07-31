export * from "../interfaces/character/dfCharacterStatus";
export * from "../interfaces/character/dfCharacterEquipment";
export * from "../interfaces/character/dfCharacterAvatar";
export * from "../interfaces/character/dfCharacterCreature";
export * from "../interfaces/character/dfCharacterFlag";
export * from "../interfaces/character/dfCharacterTalisman";
export * from "../interfaces/character/dfCharacterEquipmentTrait";
export * from "../interfaces/character/dfCharacterSkillStyle";
export * from "../interfaces/character/dfCharacterBuffSkillEquipment";
export * from "../interfaces/character/dfCharacterBuffSkillAvatar";
export * from "../interfaces/character/dfCharacterBuffSkillCreature";

export interface apiResponseServer {
    serverId: string;
    serverName: string;
}

export interface apiResponseCharacter {
    serverId: string;
    characterId: string;
    characterName: string;
    level: number;
    jobId: string;
    jobName: string;
    jobGrowId: string;
    jobGrowName: string;
    fame: number;
}
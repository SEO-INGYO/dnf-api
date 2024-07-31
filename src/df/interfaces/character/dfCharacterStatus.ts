export interface apiResponseCharacterStatus {
    serverId: string,
    characterId: string,
    characterName: string,
    level: number,
    jobId: string,
    jobGrowId: string,
    jobName: string,
    jobGrowName: string,
    fame: number,
    adventureName: string,
    guildId: string,
    guildName: string,
    buff: BuffObject[],
    status: StatusObject[],
}
interface BuffObject {
    name: string,
    level?: number,
    status: StatusObject[],
}

interface StatusObject {
    name: string,
    value: string,
}
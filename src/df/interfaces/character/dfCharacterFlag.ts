
export interface apiResponseCharacterFlag {
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
    flag: FlagObject
}

interface FlagObject {
    itemId: string,
    itemName: string,
    itemRarity: string,
    reinforce: number,
    reinforceStatus: ReinforceStatusObject[],
    gems: GemsObject[]
}

interface ReinforceStatusObject {
    name: string,
    value: number
}

interface GemsObject {
    slotNo: number,
    itemId: string,
    itemName: string,
    itemRarity: string
}


export interface apiResponseCharacterTalisman {
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
    talismans: TalismansObject[]
}

interface TalismansObject {
    talisman: TalismanObject[],
    runes: RunesObject[]
}

interface TalismanObject {
    slotNo: number,
    itemId?: string,
    itemName?: string,
    runeTypes?: string[]
}

interface RunesObject {
    slotNo: number,
    itemId?: string,
    itemName?: string
}
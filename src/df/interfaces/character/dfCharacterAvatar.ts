export interface apiResponseCharacterAvatar {
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
    avatar: AvatarObject[]
}

interface AvatarObject {
    slotId: string,
    slotName: string,
    itemId: string,
    itemName: string,
    itemRarity: string,
    clone: CloneObject,
    optionAbility: string,
    emblems?: EmblemsObject[]
}

interface CloneObject {
    itemId?: string,
    itemName?: string,
}

interface EmblemsObject {
    slotNo: number,
    slotColor: string,
    itemId: string,
    itemName: string,
    itemRarity: string
}
export interface apiResponseCharacterCreature {
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
    creature: CreatureObject
}

interface CreatureObject {
    itemId: string,
    itemName: string,
    itemRarity: string,
    clone: CloneObject,
    artifact?: ArtifactObject[]
}

interface CloneObject {
    itemId?: string,
    itemName?: string
}

interface ArtifactObject {
    slotColor: string;
    itemId: string;
    itemName: string;
    itemAvailableLevel: number;
    itemRarity: string;
}
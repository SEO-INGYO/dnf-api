export interface apiResponseCharacterEquipmentTrait {
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
    equipmentTrait: EquipmentTraitObject
}

interface EquipmentTraitObject {
    total: TotalObject
    category: CategoryObject
    options: OptionsObject[]
}

interface TotalObject {
    point: number
}
interface CategoryObject {
    id: string,
    name: string,
    explain: string
}
interface OptionsObject {
    id: string,
    name: string,
    level: number,
    fame: number,
    buff: number,
    explain: string,
    explainDetail: string
}
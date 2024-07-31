export interface apiResponseCharacterBuffSkillCreature {
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
    skill: SkillObject
}

interface SkillObject {
    buff: BuffObject
}

interface BuffObject {
    skillInfo: SkillInfoObject
    creature: CreatureObject[]
}
interface SkillInfoObject {
    skillId: string,
    name: string,
    option: OptionObject
}
interface OptionObject {
    level: number,
    desc: string,
    values: string[]
}
interface CreatureObject {
    itemId: string,
    itemName: string,
    itemRarity: string,
    enchant?: string
}
export interface apiResponseCharacterSkillStyle {
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
    hash: string,
    style: StyleObject
}

interface  StyleObject {
    active: ActiveObject[]
    passive: PassiveObject[]
}

interface  ActiveObject {
    skillId: string,
    name: string,
    level: number,
    requiredLevel: number,
    costType: string
}

interface  PassiveObject {
    skillId: string,
    name: string,
    level: number,
    requiredLevel: number,
    costType: string
}
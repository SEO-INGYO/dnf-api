export interface apiResponseCharacterBuffSkillAvatar {
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
    avatar?: AvatarObject
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

interface AvatarObject {
    slotId: string,
    slotName: string,
    itemId: string,
    itemName: string,
    itemRarity: string,
    clone: CloneObject,
    optionAbility: string,
    emblems: EmblemsObject[]
}

interface CloneObject {
    itemId?: null,
    itemName?: null
}

interface EmblemsObject {
    slotNo: number,
    slotColor: string,
    itemId: string,
    itemName: string,
    itemRarity: string
}
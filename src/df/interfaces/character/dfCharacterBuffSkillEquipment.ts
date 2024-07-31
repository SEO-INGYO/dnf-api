export interface apiResponseCharacterBuffSkillEquipment {
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
    skillInfo: SkillInfoObject,
    equipment: EquipmentObject[]
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

interface EquipmentObject {
    slotId: string,
    slotName: string,
    itemId: string,
    itemName: string,
    itemTypeId: string,
    itemType: string,
    itemTypeDetailId: string,
    itemTypeDetail: string,
    itemAvailableLevel: number,
    itemRarity: string,
    setItemId?: null,
    setItemName?: null,
    reinforce: number,
    amplificationName?: null,
    refine: number,
    enchant?: EnchantObject
}

interface EnchantObject {
    reinforceSkill: ReinforceSkillObject[]
}

interface ReinforceSkillObject {
    jobId: string
    jobName: string
    skills: SkillsObject[]
}

interface SkillsObject {
    skillId: string,
    name: string,
    value: number
}
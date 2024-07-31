export interface apiResponseCharacterEquipment {
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
    equipment: EquipmentObject[],
    setItemInfo: SetItemInfoObject[]
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
    itemGradeName: string,
    enchant: EnchantObject,
    amplificationName?: null,
    refine: number,
    fusionOption: FusionOptionObject,
    upgradeInfo: UpgradeInfoObject,
    fixedOption: FixedOptionObject
}

interface EnchantObject {
    status: StatusObject[],
}

interface StatusObject {
    "name": string,
    "value": number
}

interface FusionOptionObject {
    options: OptionsObject[]
}

interface OptionsObject {
    buff?: number;
    damage?: number;
    explain?: string;
    explainDetail?: string;
}

interface UpgradeInfoObject {
    itemId?: string;
    itemName?: string;
}

interface FixedOptionObject {
    damage: number,
    buff: number,
    level: number,
    expRate: number,
    explain: string,
    explainDetail: string
}

interface SetItemInfoObject {
    setItemId: string,
    setItemName: string,
    slotInfo: SlotInfoObject,
    activeSetNo: number
}

interface SlotInfoObject {
    slotId: string,
    slotName: string,
    itemRarity: string,
}
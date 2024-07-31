import {sendRequestGET} from "../../utils/apiUtils";

const dfApiKey = process.env.DF_API_KEY as string;
const dfApiTargetUrl = process.env.DF_API_TARGETURL as string;

/**
 * 서버 목록 조회
 */
export const getDfServers = async (): Promise<any> => {
    try {

        const queryParams = new URLSearchParams({
            apikey:  dfApiKey
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }

};

/**
 * 캐릭터 검색
 * @param serverId 서버 ID (필수 - string)
 * @param characterName 캐릭터 이름 (필수 - string)
 * @param jobId 직업 ID (선택 - string)
 * @param jobGrowId 직업 성장 ID (선택 - string)
 * @param isAllJobGrow 직업 성장 여부 (선택 - boolean)
 * @param wordType wordType (선택 - string)
 * @param limit 제한 (선택 number)
 */
export const getDfCharacterSearch = async (serverId: string, characterName: string, jobId?: string, jobGrowId?: string, isAllJobGrow?: boolean, wordType?: string, limit?: number): Promise<any> => {
    try {

        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            characterName,
            ...(jobId && { jobId }),
            ...(jobGrowId && { jobGrowId }),
            ...(isAllJobGrow !== undefined && { isAllJobGrow: String(isAllJobGrow) }),
            ...(wordType && { wordType }),
            ...(limit && { limit: String(limit) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters`, queryParams.toString())
    } catch (error) {
        console.log(error);
    }

};

/**
 * 캐릭터 `기본 정보` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 * @param zoom 확대 (선택 - number)
 */
export const getDfCharacterBasicInfo = async (serverId: string, characterId: string, zoom?: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(zoom && { zoom: String(zoom) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}`, queryParams.toString())
    } catch (error) {
        console.log(error);
    }

};

/**
 * 캐릭터 `타임라인 정보` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 * @param startDate 시작 일자 (선택 - string)
 * @param endDate 종료 일자 (선택 - string)
 * @param limit 제한 (선택 - number)
 * @param code 코드 (선택 - string)
 * @param next 다음 (선택 - string)
 */
export const getDfCharacterTimeline = async (serverId: string, characterId: string, startDate?: string, endDate?: string, limit?: number, code?: string, next?: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(startDate && { startDate }), // startDate null, undefined, 빈 문자열이 아닐 때 startData 객체 포함
            ...(endDate && { endDate }),
            ...(limit && { limit: String(limit) }),
            ...(code && { code }),
            ...(next && { next })
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/timeline`, queryParams.toString())
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `능력치 정보` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterStatus = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/status`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장착 장비` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */

export const getDfCharacterEquipment = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/equipment`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장착 아바타` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */

export const getDfCharacterAvatar = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/avatar`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장착 크리쳐` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterCreature = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/creature`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장착 휘장` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterFlag = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/flag`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장착 탈리스만` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterTalisman = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/talisman`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `장비 특성` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterEquipmentTrait = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/equip/equipment-trait`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `스킬 스타일` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterSkillStyle = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/skill/style`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `버프 스킬 강화 장착 장비` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterBuffSkillEquipment = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/skill/buff/equip/equipment`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `버프 스킬 강화 장착 아바타` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterBuffSkillAvatar = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/skill/buff/equip/avatar`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 `버프 스킬 강화 장착 크리처` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
export const getDfCharacterBuffSkillCreature = async (serverId: string, characterId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}/skill/buff/equip/creature`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 명성 검색
 * @param serverId 서버 ID (필수 - string)
 * @param minFame 최소 명성 (선택 - number)
 * @param maxFame 최대 명성 (선택 - number)
 * @param jobId 직업 ID (선택 - string)
 * @param jobGrowId 직업 성장 ID (선택 - string)
 * @param isAllJobGrow 직업 성장 여부 (선택 - boolean)
 * @param isBuff 버퍼 포함 여부 (선택 - boolean)
 * @param limit 제한 (선택 - number)
 */
export const getDfCharacterFameSearch = async (serverId: string, minFame?: number, maxFame?: number, jobId?: string, jobGrowId?: string, isAllJobGrow?: boolean, isBuff?: boolean, limit?: number,): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(minFame && { minFame: String(minFame) }),
            ...(maxFame && { maxFame: String(maxFame) }),
            ...(jobId && { jobId }),
            ...(jobGrowId && { jobGrowId }),
            ...(isAllJobGrow !== undefined && { isAllJobGrow: String(isAllJobGrow) }),
            ...(isBuff !== undefined && { isBuff: String(isBuff) }),
            ...(limit && { limit: String(limit) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters-fame`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 경매장 등록 아이템 검색
 * @param itemId 아이템 ID (필수 - string)
 * @param itemName 아이템 이름 (필수 - string)
 * @param limit 제한 (선택 - number)
 * @param unitPrice (선택 - 'asc' | 'desc')
 * @param reinforce (선택 - 'asc' | 'desc')
 * @param auctionNo 경매장 번호 (선택 - 'asc' | 'desc')
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param wordShort (선택 - boolean)
 * @param minLevel 최소 레벨 (선택 - number)
 * @param maxLevel 최대 레벨 (선택 - number)
 * @param rarity 희귀도 (선택 - string)
 * @param reinforceTypeId (선택 - string)
 * @param minReinforce (선택 - number)
 * @param maxReinforce (선택 - number)
 * @param minRefine (선택 - number)
 * @param maxRefine (선택 - number)
 * @param minFame 최소 명성 (선택 - number)
 * @param maxFame 최대 명성 (선택 - number)
 */
export const getDfAuctionItemSearch = async (itemId: string, itemName: string, limit?: number, unitPrice?: 'asc' | 'desc', reinforce?: 'asc' | 'desc', auctionNo?: 'asc' | 'desc', wordType?: 'match' | 'front' | 'full', wordShort?: boolean, minLevel?: number, maxLevel?: number, rarity?: string,
                                             reinforceTypeId?: string, minReinforce?: number, maxReinforce?: number, minRefine?: number, maxRefine?: number, minFame?: number, maxFame?: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            itemId, // 필수값
            itemName, // 필수값
            ...(limit && { limit: String(limit) }),
            ...(unitPrice && { unitPrice }),
            ...(reinforce && { reinforce }),
            ...(auctionNo && { auctionNo }),
            ...(wordType && { wordType }),
            ...(wordShort !== undefined && { wordShort: String(wordShort) }),
            ...(minLevel && { minLevel: String(minLevel) }),
            ...(maxLevel && { maxLevel: String(maxLevel) }),
            ...(rarity && { rarity }),
            ...(reinforceTypeId && { reinforceTypeId }),
            ...(minReinforce && { minReinforce: String(minReinforce) }),
            ...(maxReinforce && { maxReinforce: String(maxReinforce) }),
            ...(minRefine && { minRefine: String(minRefine) }),
            ...(maxRefine && { maxRefine: String(maxRefine) }),
            ...(minFame && { minFame: String(minFame) }),
            ...(maxFame && { maxFame: String(maxFame) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/items`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 경매장 등록 아이템 조회
 * @param auctionNo 경매장 번호 (필수 - number)
 */
export const getDfAuctionItem = async (auctionNo: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/auction/${auctionNo}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 경매장 시세 검색
 * @param limit (선택 - number)
 * @param itemId (선택 - string)
 * @param itemName (선택 - string)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param wordShort (선택 - boolean)
 */
export const getDfAuctionSoldSearch = async (limit?: number, itemId?: string, itemName?: string, wordType?: 'match' | 'front' | 'full', wordShort?: boolean): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(limit && { limit: String(limit) }),
            ...(itemId && { itemId }),
            ...(itemName && { itemName }),
            ...(wordType && { wordType }),
            ...(wordShort !== undefined && { wordShort: String(wordShort) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/auction-sold`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아바타 마켓 상품 검색
 * @param limit (선택 - number)
 * @param price (선택 - 'asc' | 'desc')
 * @param goodsNo (선택 - 'asc' | 'desc')
 * @param hashtag (선택 - string)
 * @param title (선택 - string)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param jobId (선택 - string)
 * @param emblemCode (선택 - number)
 * @param avatarSet (선택 - boolean)
 * @param avatarRarity (선택 - string)
 * @param minPrice (선택 - number)
 * @param maxPrice (선택 - number)
 * @param minAvatarCount (선택 - number)
 * @param maxAvatarCount (선택 - number)
 */
export const getDfAvatarMarketSearch = async (limit?: number, price?: 'asc' | 'desc', goodsNo?: 'asc' | 'desc', hashtag?: string, title?: string, wordType?: 'match' | 'front' | 'full',
                                              jobId?: string, emblemCode?: number, avatarSet?: boolean, avatarRarity?: string, minPrice?: number, maxPrice?: number, minAvatarCount?: number, maxAvatarCount?: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(limit && { limit: String(limit) }),
            ...(price && { price }),
            ...(goodsNo && { goodsNo }),
            ...(hashtag && { hashtag }),
            ...(title && { title }),
            ...(wordType && { wordType }),
            ...(jobId && { jobId }),
            ...(emblemCode && { emblemCode: String(emblemCode) }),
            ...(avatarSet !== undefined && { avatarSet: String(avatarSet) }),
            ...(avatarRarity && { avatarRarity }),
            ...(minPrice && { minPrice: String(minPrice) }),
            ...(maxPrice && { maxPrice: String(maxPrice) }),
            ...(minAvatarCount && { minAvatarCount: String(minAvatarCount) }),
            ...(maxAvatarCount && { maxAvatarCount: String(maxAvatarCount) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/avatar-market/sale`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아바타 마켓 상품 조회
 * @param goodsNo (필수 - number)
 */
export const getDfAvatarMarket = async (goodsNo: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/avatar-market/sale/${goodsNo}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아바타 마켓 상품 시세 검색
 * @param limit (선택 - number)
 * @param price (선택 - 'asc' | 'desc')
 * @param goodsNo (선택 - 'asc' | 'desc')
 * @param hashtag (선택 - string)
 * @param title (선택 - string)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param jobId (선택 - string)
 * @param emblemCode (선택 - number)
 * @param avatarSet (선택 - boolean)
 * @param avatarRarity (선택 - string)
 * @param minPrice (선택 - number)
 * @param maxPrice (선택 - number)
 * @param minAvatarCount (선택 - number)
 *  @param maxAvatarCount (선택 - number)
 */
export const getDfAvatarMarketSoldSearch = async (limit?: number, price?: 'asc' | 'desc', goodsNo?: 'asc' | 'desc', hashtag?: string, title?: string, wordType?: 'match' | 'front' | 'full', jobId?: string, emblemCode?: number,
                                                  avatarSet?: boolean, avatarRarity?: string, minPrice?: number, maxPrice?: number, minAvatarCount?: number, maxAvatarCount?: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(limit && { limit: String(limit) }),
            ...(price && { price }),
            ...(goodsNo && { goodsNo }),
            ...(hashtag && { hashtag }),
            ...(title && { title }),
            ...(wordType && { wordType }),
            ...(jobId && { jobId }),
            ...(emblemCode && { emblemCode: String(emblemCode) }),
            ...(avatarSet !== undefined && { avatarSet: String(avatarSet) }),
            ...(avatarRarity && { avatarRarity }),
            ...(minPrice && { minPrice: String(minPrice) }),
            ...(maxPrice && { maxPrice: String(maxPrice) }),
            ...(minAvatarCount && { minAvatarCount: String(minAvatarCount) }),
            ...(maxAvatarCount && { maxAvatarCount: String(maxAvatarCount) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/avatar-market/sold`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아바타 마켓 상품 시세 조회
 * @param goodsNo (필수 - number)
 */
export const getDfAvatarMarketSold = async (goodsNo: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/avatar-market/sold/${goodsNo}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아바타 마켓 해시태그 조회
 * @param hashtagType (선택 - 'category' | 'mood')
 */
export const getDfAvatarMarketHashtag = async (hashtagType?: 'category' | 'mood'): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(hashtagType && { hashtagType }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/avatar-market/hashtag`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아이템 검색
 * @param limit (선택 - number)
 * @param itemName (선택 - string)
 * @param hashtag (선택 - string)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param minLevel (선택 - number)
 * @param maxLevel (선택 - number)
 * @param rarity (선택 - string)
 */
export const getDfItemSearch = async (limit?: number, itemName?: string, hashtag?: string, wordType?: 'match' | 'front' | 'full', minLevel?: number, maxLevel?: number, rarity?: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(limit && { limit: String(limit) }),
            ...(itemName && { itemName }),
            ...(hashtag && { hashtag }),
            ...(wordType && { wordType }),
            ...(minLevel && { minLevel: String(minLevel) }),
            ...(maxLevel && { maxLevel: String(maxLevel) }),
            ...(rarity && { rarity }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/items`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아이템 상세 정보 조회
 * @param itemId 아이템 ID (필수 - string)
 */
export const getDfItemDetail= async (itemId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/items/${itemId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아이템 상점 판매 정보 조회
 * @param itemId 아이템 ID (필수 - string)
 */
export const getDfItemShopInfo= async (itemId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/items/${itemId}/shop`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 다중 아이템 상세 정보 조회
 * @param itemIds 쉼표로 구분된 아이템 ID 문자열 (필수 - string)
 */
export const getDfMultiItemShopInfo= async (itemIds: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            itemIds,
        });

        return await sendRequestGET(dfApiTargetUrl,`/multi/items`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아이템 해시태그
 */
export const getDfItemHashtag= async (): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/item-hashtag`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}


/**
 * 세트 아이템 검색
 * @param setItemName (필수 - string)
 * @param limit (선택 - number)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 */
export const getDfSetItemSearch= async (setItemName: string, limit?: number, wordType?: 'match' | 'front' | 'full'): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            setItemName,
            ...(limit && { limit: String(limit) }),
            ...(wordType && { wordType }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/setitems`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 세트 아이템 상세 정보 조회
 * @param setItemId 세트 아이템 ID (필수 - string)
 */
export const getDfSetItemDetail= async (setItemId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/setitems/${setItemId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 다중 세트 아이템 상세 정보 조회
 * @param setItemIds 쉼표로 구분된 세트 아이템 ID 문자열 (필수 - string)
 */
export const getDfMultiSetItemDetail= async (setItemIds: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            setItemIds
        });

        return await sendRequestGET(dfApiTargetUrl,`/multi/setitems`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 장비 조합 세트 아이템 활성화 정보 조회
 * @param itemIds 아이템 ID (필수 - string)
 */
export const getDfSetItemsActivation= async (itemIds: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            itemIds
        });

        return await sendRequestGET(dfApiTargetUrl,`/custom/equipment/setitems`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 직업 정보
 */
export const getDfJobInfo= async (): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/jobs`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 직업별 스킬 리스트
 * @param jobId 직업 ID (필수 - string)
 * @param jobGrowId 직업 성장 ID (필수 - string)
 */
export const getDfJobSkill= async (jobId: string, jobGrowId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            jobGrowId
        });

        return await sendRequestGET(dfApiTargetUrl,`/skills/${jobId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 직업별 스킬 상세 정보 조회
 * @param jobId 직업 ID (필수 - string)
 * @param skillId 스킬 ID (필수 - string)
 */
export const getDfJobSkillDetail= async (jobId: string, skillId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            skillId
        });

        return await sendRequestGET(dfApiTargetUrl,`/skills/${jobId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 캐릭터 이미지
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 * @param zoom 확대 (선택 - number)
 */
export const getDfCharacterImage= async (serverId: string, characterId: string, zoom?: number): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            ...(zoom && { zoom: String(zoom) }),
        });

        return await sendRequestGET(dfApiTargetUrl,`/servers/${serverId}/characters/${characterId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}

/**
 * 아이템 이미지
 * @param itemId 아이템 ID (필수 - string)
 */
export const getDfItemImage= async (itemId: string): Promise<any> => {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });

        return await sendRequestGET(dfApiTargetUrl,`/items/${itemId}`, queryParams.toString());
    } catch (error) {
        console.log(error);
    }
}
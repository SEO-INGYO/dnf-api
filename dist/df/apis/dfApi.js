"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDfItemImage = exports.getDfCharacterImage = exports.getDfJobSkillDetail = exports.getDfJobSkill = exports.getDfJobInfo = exports.getDfSetItemsActivation = exports.getDfMultiSetItemDetail = exports.getDfSetItemDetail = exports.getDfSetItemSearch = exports.getDfItemHashtag = exports.getDfMultiItemShopInfo = exports.getDfItemShopInfo = exports.getDfItemDetail = exports.getDfItemSearch = exports.getDfAvatarMarketHashtag = exports.getDfAvatarMarketSold = exports.getDfAvatarMarketSoldSearch = exports.getDfAvatarMarket = exports.getDfAvatarMarketSearch = exports.getDfAuctionSoldSearch = exports.getDfAuctionItem = exports.getDfAuctionItemSearch = exports.getDfCharacterFameSearch = exports.getDfCharacterBuffSkillCreature = exports.getDfCharacterBuffSkillAvatar = exports.getDfCharacterBuffSkillEquipment = exports.getDfCharacterSkillStyle = exports.getDfCharacterEquipmentTrait = exports.getDfCharacterTalisman = exports.getDfCharacterFlag = exports.getDfCharacterCreature = exports.getDfCharacterAvatar = exports.getDfCharacterEquipment = exports.getDfCharacterStatus = exports.getDfCharacterTimeline = exports.getDfCharacterBasicInfo = exports.getDfCharacterSearch = exports.getDfServers = void 0;
const apiUtils_1 = require("../../utils/apiUtils");
const dfApiKey = process.env.DF_API_KEY;
const dfApiTargetUrl = process.env.DF_API_TARGETURL;
/**
 * 서버 목록 조회
 */
const getDfServers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfServers = getDfServers;
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
const getDfCharacterSearch = (serverId, characterName, jobId, jobGrowId, isAllJobGrow, wordType, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey, characterName }, (jobId && { jobId })), (jobGrowId && { jobGrowId })), (isAllJobGrow !== undefined && { isAllJobGrow: String(isAllJobGrow) })), (wordType && { wordType })), (limit && { limit: String(limit) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterSearch = getDfCharacterSearch;
/**
 * 캐릭터 `기본 정보` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 * @param zoom 확대 (선택 - number)
 */
const getDfCharacterBasicInfo = (serverId, characterId, zoom) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign({ apikey: dfApiKey }, (zoom && { zoom: String(zoom) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterBasicInfo = getDfCharacterBasicInfo;
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
const getDfCharacterTimeline = (serverId, characterId, startDate, endDate, limit, code, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (startDate && { startDate })), (endDate && { endDate })), (limit && { limit: String(limit) })), (code && { code })), (next && { next })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/timeline`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterTimeline = getDfCharacterTimeline;
/**
 * 캐릭터 `능력치 정보` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterStatus = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/status`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterStatus = getDfCharacterStatus;
/**
 * 캐릭터 `장착 장비` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterEquipment = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/equipment`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterEquipment = getDfCharacterEquipment;
/**
 * 캐릭터 `장착 아바타` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterAvatar = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/avatar`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterAvatar = getDfCharacterAvatar;
/**
 * 캐릭터 `장착 크리쳐` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterCreature = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/creature`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterCreature = getDfCharacterCreature;
/**
 * 캐릭터 `장착 휘장` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterFlag = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/flag`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterFlag = getDfCharacterFlag;
/**
 * 캐릭터 `장착 탈리스만` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterTalisman = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/talisman`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterTalisman = getDfCharacterTalisman;
/**
 * 캐릭터 `장비 특성` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterEquipmentTrait = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/equip/equipment-trait`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterEquipmentTrait = getDfCharacterEquipmentTrait;
/**
 * 캐릭터 `스킬 스타일` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterSkillStyle = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/skill/style`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterSkillStyle = getDfCharacterSkillStyle;
/**
 * 캐릭터 `버프 스킬 강화 장착 장비` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterBuffSkillEquipment = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/skill/buff/equip/equipment`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterBuffSkillEquipment = getDfCharacterBuffSkillEquipment;
/**
 * 캐릭터 `버프 스킬 강화 장착 아바타` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterBuffSkillAvatar = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/skill/buff/equip/avatar`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterBuffSkillAvatar = getDfCharacterBuffSkillAvatar;
/**
 * 캐릭터 `버프 스킬 강화 장착 크리처` 조회
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 */
const getDfCharacterBuffSkillCreature = (serverId, characterId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}/skill/buff/equip/creature`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterBuffSkillCreature = getDfCharacterBuffSkillCreature;
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
const getDfCharacterFameSearch = (serverId, minFame, maxFame, jobId, jobGrowId, isAllJobGrow, isBuff, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (minFame && { minFame: String(minFame) })), (maxFame && { maxFame: String(maxFame) })), (jobId && { jobId })), (jobGrowId && { jobGrowId })), (isAllJobGrow !== undefined && { isAllJobGrow: String(isAllJobGrow) })), (isBuff !== undefined && { isBuff: String(isBuff) })), (limit && { limit: String(limit) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters-fame`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterFameSearch = getDfCharacterFameSearch;
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
const getDfAuctionItemSearch = (itemId, itemName, limit, unitPrice, reinforce, auctionNo, wordType, wordShort, minLevel, maxLevel, rarity, reinforceTypeId, minReinforce, maxReinforce, minRefine, maxRefine, minFame, maxFame) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey, itemId, // 필수값
            itemName }, (limit && { limit: String(limit) })), (unitPrice && { unitPrice })), (reinforce && { reinforce })), (auctionNo && { auctionNo })), (wordType && { wordType })), (wordShort !== undefined && { wordShort: String(wordShort) })), (minLevel && { minLevel: String(minLevel) })), (maxLevel && { maxLevel: String(maxLevel) })), (rarity && { rarity })), (reinforceTypeId && { reinforceTypeId })), (minReinforce && { minReinforce: String(minReinforce) })), (maxReinforce && { maxReinforce: String(maxReinforce) })), (minRefine && { minRefine: String(minRefine) })), (maxRefine && { maxRefine: String(maxRefine) })), (minFame && { minFame: String(minFame) })), (maxFame && { maxFame: String(maxFame) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/items`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAuctionItemSearch = getDfAuctionItemSearch;
/**
 * 경매장 등록 아이템 조회
 * @param auctionNo 경매장 번호 (필수 - number)
 */
const getDfAuctionItem = (auctionNo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/auction/${auctionNo}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAuctionItem = getDfAuctionItem;
/**
 * 경매장 시세 검색
 * @param limit (선택 - number)
 * @param itemId (선택 - string)
 * @param itemName (선택 - string)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 * @param wordShort (선택 - boolean)
 */
const getDfAuctionSoldSearch = (limit, itemId, itemName, wordType, wordShort) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (limit && { limit: String(limit) })), (itemId && { itemId })), (itemName && { itemName })), (wordType && { wordType })), (wordShort !== undefined && { wordShort: String(wordShort) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/auction-sold`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAuctionSoldSearch = getDfAuctionSoldSearch;
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
const getDfAvatarMarketSearch = (limit, price, goodsNo, hashtag, title, wordType, jobId, emblemCode, avatarSet, avatarRarity, minPrice, maxPrice, minAvatarCount, maxAvatarCount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (limit && { limit: String(limit) })), (price && { price })), (goodsNo && { goodsNo })), (hashtag && { hashtag })), (title && { title })), (wordType && { wordType })), (jobId && { jobId })), (emblemCode && { emblemCode: String(emblemCode) })), (avatarSet !== undefined && { avatarSet: String(avatarSet) })), (avatarRarity && { avatarRarity })), (minPrice && { minPrice: String(minPrice) })), (maxPrice && { maxPrice: String(maxPrice) })), (minAvatarCount && { minAvatarCount: String(minAvatarCount) })), (maxAvatarCount && { maxAvatarCount: String(maxAvatarCount) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/avatar-market/sale`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAvatarMarketSearch = getDfAvatarMarketSearch;
/**
 * 아바타 마켓 상품 조회
 * @param goodsNo (필수 - number)
 */
const getDfAvatarMarket = (goodsNo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/avatar-market/sale/${goodsNo}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAvatarMarket = getDfAvatarMarket;
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
const getDfAvatarMarketSoldSearch = (limit, price, goodsNo, hashtag, title, wordType, jobId, emblemCode, avatarSet, avatarRarity, minPrice, maxPrice, minAvatarCount, maxAvatarCount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (limit && { limit: String(limit) })), (price && { price })), (goodsNo && { goodsNo })), (hashtag && { hashtag })), (title && { title })), (wordType && { wordType })), (jobId && { jobId })), (emblemCode && { emblemCode: String(emblemCode) })), (avatarSet !== undefined && { avatarSet: String(avatarSet) })), (avatarRarity && { avatarRarity })), (minPrice && { minPrice: String(minPrice) })), (maxPrice && { maxPrice: String(maxPrice) })), (minAvatarCount && { minAvatarCount: String(minAvatarCount) })), (maxAvatarCount && { maxAvatarCount: String(maxAvatarCount) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/avatar-market/sold`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAvatarMarketSoldSearch = getDfAvatarMarketSoldSearch;
/**
 * 아바타 마켓 상품 시세 조회
 * @param goodsNo (필수 - number)
 */
const getDfAvatarMarketSold = (goodsNo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/avatar-market/sold/${goodsNo}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAvatarMarketSold = getDfAvatarMarketSold;
/**
 * 아바타 마켓 해시태그 조회
 * @param hashtagType (선택 - 'category' | 'mood')
 */
const getDfAvatarMarketHashtag = (hashtagType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign({ apikey: dfApiKey }, (hashtagType && { hashtagType })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/avatar-market/hashtag`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfAvatarMarketHashtag = getDfAvatarMarketHashtag;
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
const getDfItemSearch = (limit, itemName, hashtag, wordType, minLevel, maxLevel, rarity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ apikey: dfApiKey }, (limit && { limit: String(limit) })), (itemName && { itemName })), (hashtag && { hashtag })), (wordType && { wordType })), (minLevel && { minLevel: String(minLevel) })), (maxLevel && { maxLevel: String(maxLevel) })), (rarity && { rarity })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/items`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfItemSearch = getDfItemSearch;
/**
 * 아이템 상세 정보 조회
 * @param itemId 아이템 ID (필수 - string)
 */
const getDfItemDetail = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/items/${itemId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfItemDetail = getDfItemDetail;
/**
 * 아이템 상점 판매 정보 조회
 * @param itemId 아이템 ID (필수 - string)
 */
const getDfItemShopInfo = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/items/${itemId}/shop`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfItemShopInfo = getDfItemShopInfo;
/**
 * 다중 아이템 상세 정보 조회
 * @param itemIds 쉼표로 구분된 아이템 ID 문자열 (필수 - string)
 */
const getDfMultiItemShopInfo = (itemIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            itemIds,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/multi/items`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfMultiItemShopInfo = getDfMultiItemShopInfo;
/**
 * 아이템 해시태그
 */
const getDfItemHashtag = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/item-hashtag`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfItemHashtag = getDfItemHashtag;
/**
 * 세트 아이템 검색
 * @param setItemName (필수 - string)
 * @param limit (선택 - number)
 * @param wordType (선택 - 'match' | 'front' | 'full')
 */
const getDfSetItemSearch = (setItemName, limit, wordType) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign(Object.assign({ apikey: dfApiKey, setItemName }, (limit && { limit: String(limit) })), (wordType && { wordType })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/setitems`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfSetItemSearch = getDfSetItemSearch;
/**
 * 세트 아이템 상세 정보 조회
 * @param setItemId 세트 아이템 ID (필수 - string)
 */
const getDfSetItemDetail = (setItemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/setitems/${setItemId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfSetItemDetail = getDfSetItemDetail;
/**
 * 다중 세트 아이템 상세 정보 조회
 * @param setItemIds 쉼표로 구분된 세트 아이템 ID 문자열 (필수 - string)
 */
const getDfMultiSetItemDetail = (setItemIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            setItemIds
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/multi/setitems`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfMultiSetItemDetail = getDfMultiSetItemDetail;
/**
 * 장비 조합 세트 아이템 활성화 정보 조회
 * @param itemIds 아이템 ID (필수 - string)
 */
const getDfSetItemsActivation = (itemIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            itemIds
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/custom/equipment/setitems`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfSetItemsActivation = getDfSetItemsActivation;
/**
 * 직업 정보
 */
const getDfJobInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/jobs`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfJobInfo = getDfJobInfo;
/**
 * 직업별 스킬 리스트
 * @param jobId 직업 ID (필수 - string)
 * @param jobGrowId 직업 성장 ID (필수 - string)
 */
const getDfJobSkill = (jobId, jobGrowId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            jobGrowId
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/skills/${jobId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfJobSkill = getDfJobSkill;
/**
 * 직업별 스킬 상세 정보 조회
 * @param jobId 직업 ID (필수 - string)
 * @param skillId 스킬 ID (필수 - string)
 */
const getDfJobSkillDetail = (jobId, skillId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
            skillId
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/skills/${jobId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfJobSkillDetail = getDfJobSkillDetail;
/**
 * 캐릭터 이미지
 * @param serverId 서버 ID (필수 - string)
 * @param characterId 캐릭터 ID (필수 - string)
 * @param zoom 확대 (선택 - number)
 */
const getDfCharacterImage = (serverId, characterId, zoom) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams(Object.assign({ apikey: dfApiKey }, (zoom && { zoom: String(zoom) })));
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/servers/${serverId}/characters/${characterId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfCharacterImage = getDfCharacterImage;
/**
 * 아이템 이미지
 * @param itemId 아이템 ID (필수 - string)
 */
const getDfItemImage = (itemId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryParams = new URLSearchParams({
            apikey: dfApiKey,
        });
        return yield (0, apiUtils_1.sendRequestGET)(dfApiTargetUrl, `/items/${itemId}`, queryParams.toString());
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDfItemImage = getDfItemImage;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DfController = __importStar(require("../controllers/dfController"));
const router = express_1.default.Router();
/**
 * @swagger
 * /dnf/info:
 *   get:
 *     summary: 던파 조회
 *     tags: [df]
 *     description: 던파 정보를 조회
 *     responses:
 *       200:
 *         description:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverName:
 *                                  type: string
 *                                  description: 서버 이름
 *                                  example: 프레이
 *                              characterName:
 *                                  type: string
 *                                  description: 캐릭터 이름
 *                                  example: 귀검사
 */
router.get('/dnf/info', DfController.getDfInfo);
/**
 * @swagger
 * /dnf/character:
 *   get:
 *     summary: 던파 캐릭터 조회
 *     tags: [df]
 *     description: 던파 캐릭터 정보를 조회합니다.
 *     parameters:
 *       - in: query
 *         name: serverName
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 이름
 *       - in: query
 *         name: characterName
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 이름
 *     responses:
 *       200:
 *         description: 성공적으로 던파 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverName:
 *                                  type: string
 *                                  description: 서버 이름
 *                                  example: 프레이
 *                              characterName:
 *                                  type: string
 *                                  description: 캐릭터 이름
 *                                  example: 귀검사
 */
router.get('/dnf/character', DfController.getDfCharacterInfo);
/**
 * @swagger
 * /dnf/test:
 *   get:
 *     summary: Test
 *     tags: [df]
 *     description: Test
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 던파 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverName:
 *                                  type: string
 *                                  description: 서버 이름
 *                                  example: 프레이
 *                              characterName:
 *                                  type: string
 *                                  description: 캐릭터 이름
 *                                  example: 귀검사
 */
router.get('/dnf/test', DfController.getDfTest);
exports.default = router;
/*
import express, {Router} from 'express';
import * as DfApis from '../apis/dfApi';
import * as DfController from '../controllers/dfController';

const router: Router = express.Router();

/!**
 * @swagger
 * /dnf/test:
 *   get:
 *     summary: 서버 목록을 반환합니다.
 *     tags: [df]
 *     description: 모든 서버의 목록을 가져옵니다.
 *     responses:
 *       200:
 *         description: 성공적으로 서버 목록을 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              serverName:
 *                                  type: string
 *                                  description: 서버의 이름
 *                                  example: 카인
 *!/
router.get('/dnf/test', DfApis.getDfServers);

/!**
 * @swagger
 * /dnf/servers:
 *   get:
 *     summary: 서버 목록을 반환합니다.
 *     tags: [df]
 *     description: 모든 서버의 목록을 가져옵니다.
 *     responses:
 *       200:
 *         description: 성공적으로 서버 목록을 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              serverName:
 *                                  type: string
 *                                  description: 서버의 이름
 *                                  example: 카인
 *!/
router.get('/dnf/servers', DfApis.getDfServers);

/!**
 * @swagger
 * /dnf/characters:
 *   get:
 *     summary: 캐릭터 정보를 반환합니다.
 *     tags: [df]
 *     description: 캐릭터 정보를 검색합니다.
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterName
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 이름
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: false
 *         description: 직업 ID
 *       - in: query
 *         name: jobGrowId
 *         schema:
 *           type: string
 *         required: false
 *         description: 직업 성장 ID
 *       - in: query
 *         name: isAllJobGrow
 *         schema:
 *           type: boolean
 *         required: false
 *         description: 모든 직업 성장 포함 여부
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: 검색어 유형
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: 결과 제한 수
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 사용자 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 사용자 이름
 *                     example: "John Doe"
 *             examples:
 *               response:
 *                 - id: 1
 *                   name: "John Doe"
 *       500:
 *         description: 서버 오류로 캐릭터 정보를 불러오지 못했습니다.
 *!/
router.get('/dnf/characters', DfApis.getDfCharacterSearch);

/!**
 * @swagger
 * /dnf/characters/info:
 *   get:
 *     summary: 캐릭터 기본 정보를 반환합니다.
 *     tags: [df]
 *     description: 캐릭터 기본 정보를 검색합니다.
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *       - in: query
 *         name: zoom
 *         schema:
 *           type: number
 *         required: false
 *         description: 줌
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 사용자 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 사용자 이름
 *                     example: "John Doe"
 *             examples:
 *               response:
 *                 - id: 1
 *                   name: "John Doe"
 *       500:
 *         description: 서버 오류로 캐릭터 정보를 불러오지 못했습니다.
 *!/
router.get('/dnf/characters/info', DfApis.getDfCharacterBasicInfo);

/!**
 * @swagger
 * /dnf/characters/timeline:
 *   get:
 *     summary: 캐릭터 타임라인을 반환합니다.
 *     tags: [df]
 *     description: 캐릭터 타임라인을 검색합니다.
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *         required: false
 *         description: 시작 날짜
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *         required: false
 *         description: 종료 날짜
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *         required: false
 *         description: 제한
 *       - in: query
 *         name: code
 *         schema:
 *           type: string
 *         required: false
 *         description: 콤마로 구분된 문자열 코드
 *       - in: query
 *         name: next
 *         schema:
 *           type: string
 *         required: false
 *         description: 다음
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 타임라인을 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 사용자 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 사용자 이름
 *                     example: "John Doe"
 *             examples:
 *               response:
 *                 - id: 1
 *                   name: "John Doe"
 *       500:
 *         description: 서버 오류로 캐릭터 정보를 불러오지 못했습니다.
 *!/
router.get('/dnf/characters/timeline', DfApis.getDfCharacterTimeline);

/!**
 * @swagger
 * /dnf/characters/status:
 *   get:
 *     summary: 캐릭터 능력치를 반환합니다.
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/status', DfApis.getDfCharacterStatus);

/!**
 * @swagger
 * /dnf/characters/equipment:
 *   get:
 *     summary: 장비 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/equipment', DfApis.getDfCharacterEquipment);

/!**
 * @swagger
 * /dnf/characters/avatar:
 *   get:
 *     summary: 아바타 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/avatar', DfApis.getDfCharacterAvatar);

/!**
 * @swagger
 * /dnf/characters/creature:
 *   get:
 *     summary: 크리쳐 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/creature', DfApis.getDfCharacterCreature);

/!**
 * @swagger
 * /dnf/characters/flag:
 *   get:
 *     summary: 휘장 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/flag', DfApis.getDfCharacterFlag);

/!**
 * @swagger
 * /dnf/characters/talisman:
 *   get:
 *     summary: 탈리스만 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/talisman', DfApis.getDfCharacterTalisman);

/!**
 * @swagger
 * /dnf/characters/equipment-trait:
 *   get:
 *     summary: 장비 특성 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/equipment-trait', DfApis.getDfCharacterEquipmentTrait);

/!**
 * @swagger
 * /dnf/characters/skill-style:
 *   get:
 *     summary: 스킬 스타일 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/skill-style', DfApis.getDfCharacterSkillStyle);

/!**
 * @swagger
 * /dnf/characters/buff-equipment:
 *   get:
 *     summary: 버프 스킬 장비 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/buff-equipment', DfApis.getDfCharacterBuffSkillEquipment);

/!**
 * @swagger
 * /dnf/characters/buff-avatar:
 *   get:
 *     summary: 버프 스킬 아바타 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/buff-avatar', DfApis.getDfCharacterBuffSkillAvatar);

/!**
 * @swagger
 * /dnf/characters/buff-creature:
 *   get:
 *     summary: 버프 스킬 크리쳐 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/buff-creature', DfApis.getDfCharacterBuffSkillCreature);

/!**
 * @swagger
 * /dnf/characters/buff-creature:
 *   get:
 *     summary: 버프 스킬 크리쳐 정보 반환
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: 캐릭터 ID
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/characters/buff-creature', DfApis.getDfCharacterBuffSkillCreature);

/!**
 * @swagger
 * /dnf/characters/fame:
 *   get:
 *     summary: 캐릭터 명성 정보를 반환합니다.
 *     tags: [df]
 *     description: 캐릭터 정보를 검색합니다.
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: 서버 ID
 *       - in: query
 *         name: minFame
 *         schema:
 *           type: integer
 *         required: false
 *         description: 최소 명성
 *       - in: query
 *         name: maxFame
 *         schema:
 *           type: integer
 *         required: false
 *         description: 최대 명성
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: false
 *         description: 직업 ID
 *       - in: query
 *         name: jobGrowId
 *         schema:
 *           type: string
 *         required: false
 *         description: 직업 성장 ID
 *       - in: query
 *         name: isAllJobGrow
 *         schema:
 *           type: boolean
 *         required: false
 *         description: 모든 직업 성장 포함 여부
 *       - in: query
 *         name: isBuff
 *         schema:
 *           type: boolean
 *         required: false
 *         description: 버퍼 조회 여부
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: 결과 제한 수
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 사용자 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 사용자 이름
 *                     example: "John Doe"
 *             examples:
 *               response:
 *                 - id: 1
 *                   name: "John Doe"
 *       500:
 *         description: 서버 오류로 캐릭터 정보를 불러오지 못했습니다.
 *!/
router.get('/dnf/characters/fame', DfApis.getDfCharacterFameSearch);

/!**
 * @swagger
 * /dnf/items:
 *   get:
 *     summary: 경매장 등록 아이템 검색
 *     tags: [df]
 *     description: 캐릭터 정보를 검색합니다.
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: true
 *         description: 아이템 ID
 *       - in: query
 *         name: itemName
 *         schema:
 *           type: string
 *         required: true
 *         description: 아이템 이름
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: 제한
 *       - in: query
 *         name: unitPrice
 *         schema:
 *           type: string
 *         required: false
 *         description: unitPrice
 *       - in: query
 *         name: reinforce
 *         schema:
 *           type: string
 *         required: false
 *         description: reinforce
 *       - in: query
 *         name: auctionNo
 *         schema:
 *           type: string
 *         required: false
 *         description: auctionNo
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *       - in: query
 *         name: wordShort
 *         schema:
 *           type: boolean
 *         required: false
 *         description: wordShort
 *       - in: query
 *         name: minLevel
 *         schema:
 *           type: integer
 *         required: false
 *         description: minLevel
 *       - in: query
 *         name: maxLevel
 *         schema:
 *           type: integer
 *         required: false
 *         description: maxLevel
 *       - in: query
 *         name: rarity
 *         schema:
 *           type: string
 *         required: false
 *         description: rarity
 *       - in: query
 *         name: reinforceTypeId
 *         schema:
 *           type: string
 *         required: false
 *         description: reinforceTypeId
 *       - in: query
 *         name: minReinforce
 *         schema:
 *           type: integer
 *         required: false
 *         description: minReinforce
 *       - in: query
 *         name: maxReinforce
 *         schema:
 *           type: integer
 *         required: false
 *         description: maxReinforce
 *       - in: query
 *         name: minRefine
 *         schema:
 *           type: integer
 *         required: false
 *         description: minRefine
 *       - in: query
 *         name: maxRefine
 *         schema:
 *           type: integer
 *         required: false
 *         description: maxRefine
 *       - in: query
 *         name: minFame
 *         schema:
 *           type: integer
 *         required: false
 *         description: minFame
 *       - in: query
 *         name: maxFame
 *         schema:
 *           type: integer
 *         required: false
 *         description: maxFame
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 정보를 불러왔습니다.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: 사용자 ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: 사용자 이름
 *                     example: "John Doe"
 *             examples:
 *               response:
 *                 - id: 1
 *                   name: "John Doe"
 *       500:
 *         description: 서버 오류로 캐릭터 정보를 불러오지 못했습니다.
 *!/
router.get('/dnf/items', DfApis.getDfAuctionItemSearch);

/!**
 * @swagger
 * /dnf/items/auction:
 *   get:
 *     summary: 경매장 등록 아이템 조회
 *     tags: [df]
 *     description: 캐릭터 능력치를 조회
 *     parameters:
 *       - in: query
 *         name: auctionNo
 *         schema:
 *           type: string
 *         required: true
 *         description: 경매장 번호
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/items/auction', DfApis.getDfAuctionItem);

/!**
 * @swagger
 * /dnf/items/auction-sold:
 *   get:
 *     summary: 경매장 시세 검색
 *     tags: [df]
 *     description: 경매장 시세 검색
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: limit
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: false
 *         description: itemId
 *       - in: query
 *         name: itemName
 *         schema:
 *           type: string
 *         required: false
 *         description: itemName
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *       - in: query
 *         name: wordShort
 *         schema:
 *           type: boolean
 *         required: false
 *         description: wordShort
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/items/auction-sold', DfApis.getDfAuctionItem);

/!**
 * @swagger
 * /dnf/avatar-market:
 *   get:
 *     summary: 아바타 마켓 상품 검색
 *     tags: [df]
 *     description: 아바타 마켓 상품 검색
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: limit
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: price
 *       - in: query
 *         name: goodsNo
 *         schema:
 *           type: string
 *         required: false
 *         description: goodsNo
 *       - in: query
 *         name: hashtag
 *         schema:
 *           type: string
 *         required: false
 *         description: hashtag
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: title
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: false
 *         description: jobId
 *       - in: query
 *         name: emblemCode
 *         schema:
 *           type: integer
 *         required: false
 *         description: emblemCode
 *       - in: query
 *         name: avatarSet
 *         schema:
 *           type: boolean
 *         required: false
 *         description: avatarSet
 *       - in: query
 *         name: avatarRarity
 *         schema:
 *           type: string
 *         required: false
 *         description: avatarRarity
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: string
 *         required: false
 *         description: minPrice
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: string
 *         required: false
 *         description: maxPrice
 *       - in: query
 *         name: minAvatarCount
 *         schema:
 *           type: string
 *         required: false
 *         description: minAvatarCount
 *       - in: query
 *         name: maxAvatarCount
 *         schema:
 *           type: string
 *         required: false
 *         description: maxAvatarCount
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/avatar-market', DfApis.getDfAvatarMarketSearch);

/!**
 * @swagger
 * /dnf/avatar-market/sale:
 *   get:
 *     summary: 아바타 마켓 상품 조회
 *     tags: [df]
 *     description: 아바타 마켓 상품 조회
 *     parameters:
 *       - in: query
 *         name: goodsNo
 *         schema:
 *           type: integer
 *         required: true
 *         description: goodsNo
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/avatar-market/sale', DfApis.getDfAvatarMarket);

/!**
 * @swagger
 * /dnf/avatar-market/sold-search:
 *   get:
 *     summary: 아바타 마켓 상품 시세 검색
 *     tags: [df]
 *     description: 아바타 마켓 상품 시세 검색
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: limit
 *       - in: query
 *         name: price
 *         schema:
 *           type: string
 *         required: false
 *         description: price
 *       - in: query
 *         name: goodsNo
 *         schema:
 *           type: string
 *         required: false
 *         description: goodsNo
 *       - in: query
 *         name: hashtag
 *         schema:
 *           type: string
 *         required: false
 *         description: hashtag
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: title
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: false
 *         description: jobId
 *       - in: query
 *         name: emblemCode
 *         schema:
 *           type: integer
 *         required: false
 *         description: emblemCode
 *       - in: query
 *         name: avatarSet
 *         schema:
 *           type: boolean
 *         required: false
 *         description: avatarSet
 *       - in: query
 *         name: avatarRarity
 *         schema:
 *           type: string
 *         required: false
 *         description: avatarRarity
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: string
 *         required: false
 *         description: minPrice
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: string
 *         required: false
 *         description: maxPrice
 *       - in: query
 *         name: minAvatarCount
 *         schema:
 *           type: string
 *         required: false
 *         description: minAvatarCount
 *       - in: query
 *         name: maxAvatarCount
 *         schema:
 *           type: string
 *         required: false
 *         description: maxAvatarCount
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/avatar-market/sold-search', DfApis.getDfAvatarMarketSoldSearch);

/!**
 * @swagger
 * /dnf/avatar-market/sold:
 *   get:
 *     summary: 아바타 마켓 상품 조회
 *     tags: [df]
 *     description: 아바타 마켓 상품 조회
 *     parameters:
 *       - in: query
 *         name: goodsNo
 *         schema:
 *           type: integer
 *         required: true
 *         description: goodsNo
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/avatar-market/sold', DfApis.getDfAvatarMarketSold);

/!**
 * @swagger
 * /dnf/avatar-market/hashtag:
 *   get:
 *     summary: 아바타 마켓 상품 조회
 *     tags: [df]
 *     description: 아바타 마켓 상품 조회
 *     parameters:
 *       - in: query
 *         name: hashtagType
 *         schema:
 *           type: string
 *         required: true
 *         description: hashtagType
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/avatar-market/hashtag', DfApis.getDfAvatarMarketHashtag);

/!**
 * @swagger
 * /dnf/item-search:
 *   get:
 *     summary: 아이템 검색
 *     tags: [df]
 *     description: 아이템 검색
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: limit
 *       - in: query
 *         name: itemName
 *         schema:
 *           type: string
 *         required: false
 *         description: itemName
 *       - in: query
 *         name: hashtag
 *         schema:
 *           type: string
 *         required: false
 *         description: hashtag
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *       - in: query
 *         name: minLevel
 *         schema:
 *           type: integer
 *         required: false
 *         description: minLevel
 *       - in: query
 *         name: maxLevel
 *         schema:
 *           type: integer
 *         required: false
 *         description: maxLevel
 *       - in: query
 *         name: rarity
 *         schema:
 *           type: string
 *         required: false
 *         description: rarity
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/item-search', DfApis.getDfItemSearch);

/!**
 * @swagger
 * /dnf/item-detail:
 *   get:
 *     summary: 아이템 상세 정보 조회
 *     tags: [df]
 *     description: 아이템 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: true
 *         description: itemId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/item-detail', DfApis.getDfItemDetail);

/!**
 * @swagger
 * /dnf/item-shop:
 *   get:
 *     summary: 아이템 상세 정보 조회
 *     tags: [df]
 *     description: 아이템 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: true
 *         description: itemId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/item-shop', DfApis.getDfItemShopInfo);

/!**
 * @swagger
 * /dnf/item-details:
 *   get:
 *     summary: 다중 아이템 상세 정보 조회
 *     tags: [df]
 *     description: 다중 아이템 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: itemIds
 *         schema:
 *           type: string
 *         required: true
 *         description: itemIds
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/item-details', DfApis.getDfMultiItemShopInfo);

/!**
 * @swagger
 * /dnf/item-hashtag:
 *   get:
 *     summary: 아이템 해시태그
 *     tags: [df]
 *     description: 아이템 해시태그
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/item-hashtag', DfApis.getDfItemHashtag);

/!**
 * @swagger
 * /dnf/setitems:
 *   get:
 *     summary: 세트 아이템 검색
 *     tags: [df]
 *     description: 세트 아이템 검색
 *     parameters:
 *       - in: query
 *         name: setItemName
 *         schema:
 *           type: string
 *         required: true
 *         description: setItemName
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: limit
 *       - in: query
 *         name: wordType
 *         schema:
 *           type: string
 *         required: false
 *         description: wordType
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/setitems', DfApis.getDfSetItemSearch);

/!**
 * @swagger
 * /dnf/setitems-detail:
 *   get:
 *     summary: 세트 아이템 상세 정보 조회
 *     tags: [df]
 *     description: 세트 아이템 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: setItemId
 *         schema:
 *           type: string
 *         required: true
 *         description: setItemId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/setitems-detail', DfApis.getDfSetItemDetail);

/!**
 * @swagger
 * /dnf/setitems-details:
 *   get:
 *     summary: 다중 세트 아이템 상세 정보 조회
 *     tags: [df]
 *     description: 다중 세트 아이템 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: setItemIds
 *         schema:
 *           type: string
 *         required: true
 *         description: setItemIds
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/setitems-details', DfApis.getDfMultiSetItemDetail);

/!**
 * @swagger
 * /dnf/setitems-active:
 *   get:
 *     summary: 장비 조합 세트 아이템 활성화 정보 조회
 *     tags: [df]
 *     description: 장비 조합 세트 아이템 활성화 정보 조회
 *     parameters:
 *       - in: query
 *         name: itemIds
 *         schema:
 *           type: string
 *         required: true
 *         description: itemIds
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/setitems-active', DfApis.getDfSetItemsActivation);

/!**
 * @swagger
 * /dnf/jobs:
 *   get:
 *     summary: 직업 정보
 *     tags: [df]
 *     description: 직업 정보
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/jobs', DfApis.getDfJobInfo);

/!**
 * @swagger
 * /dnf/jobs/skill:
 *   get:
 *     summary: 직업별 스킬 리스트
 *     tags: [df]
 *     description: 직업별 스킬 리스트
 *     parameters:
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: jobId
 *       - in: query
 *         name: jobGrowId
 *         schema:
 *           type: string
 *         required: true
 *         description: jobGrowId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/jobs/skill', DfApis.getDfJobSkill);

/!**
 * @swagger
 * /dnf/jobs/skill:
 *   get:
 *     summary: 직업별 스킬 상세 정보 조회
 *     tags: [df]
 *     description: 직업별 스킬 상세 정보 조회
 *     parameters:
 *       - in: query
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: jobId
 *       - in: query
 *         name: skillId
 *         schema:
 *           type: string
 *         required: true
 *         description: skillId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/jobs/skill-detail', DfApis.getDfJobSkillDetail);

/!**
 * @swagger
 * /dnf/img/character:
 *   get:
 *     summary: 캐릭터 이미지
 *     tags: [df]
 *     description: 캐릭터 이미지
 *     parameters:
 *       - in: query
 *         name: serverId
 *         schema:
 *           type: string
 *         required: true
 *         description: serverId
 *       - in: query
 *         name: characterId
 *         schema:
 *           type: string
 *         required: true
 *         description: characterId
 *       - in: query
 *         name: zoom
 *         schema:
 *           type: integer
 *         required: false
 *         description: zoom
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/img/character', DfApis.getDfCharacterImage);

/!**
 * @swagger
 * /dnf/img/item:
 *   get:
 *     summary: 아이템 이미지
 *     tags: [df]
 *     description: 아이템 이미지
 *     parameters:
 *       - in: query
 *         name: itemId
 *         schema:
 *           type: string
 *         required: true
 *         description: itemId
 *     responses:
 *       200:
 *         description: 성공적으로 캐릭터 능력치 조회
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  row:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              serverId:
 *                                  type: string
 *                                  description: 서버의 고유 식별자
 *                                  example: cain
 *                              characterId:
 *                                  type: string
 *                                  description: 캐릭터 ID
 *                                  example: 카인
 *!/
router.get('/dnf/img/item', DfApis.getDfItemImage);

export default router;*/

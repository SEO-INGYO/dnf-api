import express, {Router} from 'express';
import * as OpenAIController from '../controllers/openaiController';

const router: Router = express.Router();

/**
 * @swagger
 * /openai/prompt:
 *   get:
 *     summary:
 *     tags: [openai]
 *     description:
 *     parameters:
 *       - in: query
 *         name: prompt
 *         schema:
 *           type: string
 *         required: true
 *         description: 프롬프트
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
router.get('/openai/prompt', OpenAIController.getCreateCompletion);

export default router;
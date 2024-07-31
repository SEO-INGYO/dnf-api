import express, { Router } from 'express';
import * as PostApis from '../apis/postApi';

const router: Router = express.Router();

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: 게시글 목록을 반환합니다.
 *     tags: [post]
 *     description: 모든 게시글 목록을 가져옵니다.
 *     responses:
 *       200:
 *         description: 성공적으로 게시글 목록을 불러왔습니다.
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
 *                                  example:
 */
router.get('/posts', PostApis.fetchAllPosts);

router.get('/posts/:id', PostApis.fetchPostById);

export default router;

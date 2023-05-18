/**
 * @swagger
 * tags:
 *   name: Shorten
 *   description: URL Shorten endpoints
 */
import express, { Request, Response } from 'express';
import { ShortenController } from '../controllers/ShortenController';

const router = express.Router();
const shortenController = new ShortenController();

/**
 * @swagger
 * /api/shorten:
 *   post:
 *     summary: Shorten a URL
 *     tags: [Shorten]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               long_url:
 *                 type: string
 *                 description: The long URL to be shortened.
 *                 example: https://example.com/long-url
 *     responses:
 *       200:
 *         description: Successfully shortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortUrl:
 *                   type: string
 *                   description: The shortened URL.
 *                   example: http://api.meetrandy.co.za/abc123
 */
router.post('/', (req: Request, res: Response) => {
  shortenController.shortenUrl(req, res);
});

router.get('/:redirectUrl', (req: Request, res: Response) => {
    shortenController.redirect(req, res);
})

export default router;
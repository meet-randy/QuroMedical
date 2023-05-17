/**
 * @swagger
 * tags:
 *   name: Unshorten
 *   description: URL Unshorten endpoints
 */
import express, { Request, Response } from 'express';
import { UnshortenController } from '../controllers/UnshortenController';

const router = express.Router();
const unshortenController = new UnshortenController();

/**
 * @swagger
 * /api/unshorten/{shortUrl}:
 *   get:
 *     summary: Unshorten a URL
 *     tags: [Unshorten]
 *     parameters:
 *       - name: shortUrl
 *         in: path
 *         description: The short URL to be unshortened.
 *         required: true
 *         schema:
 *           type: string
 *           format: uri
 *           example: http://your-domain.com/abc123
 *     responses:
 *       200:
 *         description: Successfully unshortened URL
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 longUrl:
 *                   type: string
 *                   description: The unshortened URL.
 *                   example: https://example.com/long-url
 */
router.get('/:shortUrl', (req: Request, res: Response) => {
  unshortenController.unshortenUrl(req, res);
});


export default router;

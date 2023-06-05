/**
 * @swagger
 * tags:
 *   name: Shorten
 *   description: URL Shorten endpoints
 */
import express, { Request, Response } from 'express';
import { ShortenController } from '../controllers/ShortenController';
import { ShortenRepository } from '../repositories/ShortenRepository';

const router = express.Router();
const shortenController = new ShortenController();
const shortenRepository = new ShortenRepository();

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

//For mobile app 
router.get('/:redirectUrl', (req: Request, res: Response) => {
    shortenController.redirect(req, res);
})

router.get('/recent', async (req: Request, res: Response) => {
  const limit = 10; // Set the limit as per your requirement

  try {
    shortenController.recent(req, res)
    const recentUrls = await shortenRepository.getRecentUrls(limit);
    res.json({ recentUrls });
  } catch (error) {
    console.error('Error retrieving recent URLs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
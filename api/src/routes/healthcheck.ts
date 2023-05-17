import express, { Request, Response } from 'express';


const router = express.Router();
/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Health Check
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: The API is healthy
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: healthy
 */
router.get('/', (req: Request, res: Response) => {
  res.send({
    message: "Healthy",
  });
});
export default router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * tags:
 *   name: Shorten
 *   description: URL Shorten endpoints
 */
const express_1 = __importDefault(require("express"));
const ShortenController_1 = require("../controllers/ShortenController");
const router = express_1.default.Router();
const shortenController = new ShortenController_1.ShortenController();
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
 *                   example: http://your-domain.com/abc123
 */
router.post('/', (req, res) => {
    shortenController.shortenUrl(req, res);
});
router.get('/:redirectUrl', (req, res) => {
    shortenController.redirect(req, res);
});
exports.default = router;
//# sourceMappingURL=shorten.js.map
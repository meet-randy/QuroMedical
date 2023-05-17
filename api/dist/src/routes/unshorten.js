"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @swagger
 * tags:
 *   name: Unshorten
 *   description: URL Unshorten endpoints
 */
const express_1 = __importDefault(require("express"));
const UnshortenController_1 = require("../controllers/UnshortenController");
const router = express_1.default.Router();
const unshortenController = new UnshortenController_1.UnshortenController();
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
router.get('/:shortUrl', (req, res) => {
    unshortenController.unshortenUrl(req, res);
});
exports.default = router;
//# sourceMappingURL=unshorten.js.map
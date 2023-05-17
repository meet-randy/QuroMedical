"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnshortenController = void 0;
const UnshortenService_1 = require("../services/UnshortenService");
class UnshortenController {
    constructor() {
        this.unshortenService = new UnshortenService_1.UnshortenService();
    }
    async unshortenUrl(req, res) {
        try {
            const { shortUrl } = req.params;
            const longUrl = await this.unshortenService.unshortenUrl(shortUrl);
            res.json({ longUrl });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
exports.UnshortenController = UnshortenController;
//# sourceMappingURL=UnshortenController.js.map
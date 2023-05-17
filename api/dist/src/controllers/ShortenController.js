"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenController = void 0;
const ShortenService_1 = require("../services/ShortenService");
const UnshortenService_1 = require("../services/UnshortenService");
class ShortenController {
    constructor() {
        this.shortenService = new ShortenService_1.ShortenService();
        this.unshortenService = new UnshortenService_1.UnshortenService();
    }
    async shortenUrl(req, res) {
        try {
            const { long_url } = req.body;
            if (this.validateURL(long_url)) {
                const shortUrl = await this.shortenService.shortenUrl(long_url);
                res.json({ shortUrl });
            }
            else {
                res.status(400).json({ error: 'Invalid URL' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async redirect(req, res) {
        try {
            const { redirectUrl } = req.params;
            const long_url = await this.unshortenService.unshortenUrl(redirectUrl);
            if (long_url) {
                res.redirect(long_url);
            }
            else {
                res.json("Cannot redirect please try again later.");
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    validateURL(input) {
        try {
            new URL(input);
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.ShortenController = ShortenController;
//# sourceMappingURL=ShortenController.js.map
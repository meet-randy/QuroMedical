"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenService = void 0;
const ShortenRepository_1 = require("../repositories/ShortenRepository");
class ShortenService {
    constructor() {
        this.shortenRepository = new ShortenRepository_1.ShortenRepository();
    }
    async shortenUrl(longUrl) {
        // Perform URL shortening logic using the shortenRepository
        // ...
        const shortUrl = await this.shortenRepository.createShortUrl(longUrl);
        return shortUrl;
    }
}
exports.ShortenService = ShortenService;
//# sourceMappingURL=ShortenService.js.map